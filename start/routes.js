'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const app_id = 'wx12bae3d0d8c0bd1d';
const secret_key = 'b43f61f0affae5a8af4d38214e3e28d4';


Route.on('/').render('welcome')

const SMSHelper = require('../app/SMSHelper')
Route.get('/send', () => {
    SMSHelper.SendCertCode("18611104621", "489023");
    return 'Route';
  }
)

Route.get('/get_wechat_id/:code', async ({ params }) => {
    var request = require('request');
    const ret = request(`https://api.weixin.qq.com/sns/jscode2session?appid=${app_id}&secret=${secret_key}&js_code=${params.code}&grant_type=authorization_code`,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body);
          return body;
        }
      })
    return ret;
  }
)

