const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
var User = mongoose.model('User')

// router.post('/api/saveArticle', (req, res) => {
//     const id = req.body._id
//     const article = {
//         title: req.body.title,
//         date: req.body.date,
//         content: req.body.content
//     }
//     if (id) {
//         db.Article.findByIdAndUpdate(id, article, fn)
//     } else {
//         new db.Article(article).save()
//     }
//     res.status(200).end()
// })
router.post('/api/register', function(req, res, next) {
    console.log('H5---------------用户注册')

    var user = new User({
        userName: req.body.userName,
        password: req.body.password
    })
    console.log(user)
    user.save(function(err) {
        if (err) {
            console.log('失败：' + err)
            res.status(400).json(err)
            return
        }
        console.log("save success")
    })

})
router.post('/api/login', function(req, res, next) {
    console.log('H5---------------用户登录')
    var args = req.body;

    User.findOne({
        userName: 'zc',
        password: '123456'
    }, function(err, docs) {
        if (err) {
            console.log('失败：' + err)
            res.status(400).json(err)
            return
        }
        if (!docs) {
            res.json({
                code: 400,
                error: '用户名或密码错误'
            });
            return;
        }
        res.json({
            code: 200,
            result: '登录成功'
        })

    })
})
module.exports = router;