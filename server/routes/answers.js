var express = require('express');
var router = express.Router();
var handler = require('./dbhandler.js');
var crypto = require('crypto');
var ObjectId = require('mongodb').ObjectId;

// router.post('/subject',function (req,res,next) {
//     console.log(req.body);
//     handler(req,res,'subject',{num: req.body.num},function (data) {
//         if(data.length==0){
//             res.end('{"err":"抱歉，查询失败"}');
//         }else{
//             var str = JSON.stringify(data);
//             res.end(str);
//         }
//     })
// })

router.post('/subjects',function (req,res,next) {
    req.route.path = "/detail";
    // console.log(req.body);
    handler(req,res,'subject',{num:req.body.num},function (data) {
        if(data.length==0){
            res.end('{"err":"抱歉，查询失败"}');
        }else{
            var str = JSON.stringify(data);
            res.end(str);
        }
    })
})
router.post('/update',function(req,res,next){
    console.log(req.body);
    var selectors = [
        {"num":req.body.num},
        {"$set":{
            userAnswer:req.body.userAnswer,
            }
        }
    ];
    handler(req, res, "answer", selectors,function(data){
        console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，提交失败"}');
        }else{
            res.end('{"success":"提交成功"}');
        }

    });
});

router.post('/answers',function (req,res,next) {
    req.route.path = "/detail";
    handler(req,res,'answer',{"num" : req.body.num},function (data) {
        if(data.length==0){
            res.end('{"err":"抱歉，查询失败"}');
        }else{
            var str = JSON.stringify(data);
            res.end(str);
        }
    })
})
module.exports = router;