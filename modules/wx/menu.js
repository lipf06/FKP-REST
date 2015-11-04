var libs = require('../../libs/libs')
var config = require('../../config');
var api = require('../../apis/javaapi')

var json = {
     "button":[
        {
            "name": "服务",
            "type": "view",
            "url": "http://ch.dabai360.com"

        {
           "name": "河马",
           "type": "view",
           "url": "http://ch.dabai360.com/about.html"
        },
        {
           "name":"我",
           "sub_button":[
            {
               "type":"view",
               "name":"我的订单",
               "url": "http://ch.dabai360.com"
            },
            {
               "type":"view",
               "name":"我的车辆",
               "url": "http://ch.dabai360.com"
            },
        	{
               "type":"view",
               "name":"我的地址",
               "url": "http://ch.dabai360.com"
            }]
        }
    ]
}


function *query(){
    var nowmenu = yield api.pullWxData.call(this,'querymenu',{});
    return nowmenu[0].body
}

function *create(){
    var now_m = yield query.call(this)
    now_m = JSON.parse(now_m)
    console.log('-------- create menu ----------');
    console.log(now_m);
    if(now_m.errcode>0){
        var nowmenu = yield api.pullWxData.call(this,'createmenu',json, 'post' );
        console.log(nowmenu[0].body);
    }
}

module.exports = create
