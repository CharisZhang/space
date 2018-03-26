const crypto = require('crypto');  //加载crypto库
console.log(crypto.getHashes()); //打印支持的hash算法
const Config = {
    passKey: 'password',
    expiredays: 2
}

const setCookie = function(c_name,value) {
    console.log('加密前--'+c_name+':'+value)
    console.log('加密后--'+c_name+':'+aesEncrypt(value))
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+Config.expiredays)
    document.cookie=c_name+ "=" +escape(aesEncrypt(value))+
        ((Config.expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
const getCookie = function(c_name) {
    if (document.cookie.length>0) {
        let c_start=document.cookie.indexOf(c_name + "=");
        console.log(c_start)
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
const checkCookie = function () {
    return '';
}
function aesEncrypt(data) {
    const cipher = crypto.createCipher('aes192', Config.passKey);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted) {
    const decipher = crypto.createDecipher('aes192', Config.passKey);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);



export {
    setCookie,
    getCookie,
    checkCookie
}