/*
 * @Description: node服务
 * @Version: 4.0.0
 * @Date: 2021-07-06 11:39:38
 * @LastEditors: Yangyawen
 * @LastEditTime: 2021-07-08 14:37:06
 */
const koa = require('koa');
const axios = require('axios');
 // 引入 koa-static
const staticFiles = require('koa-static')

const Router = require('koa-router')

const crypto = require('crypto');
const app = new koa();
const router = new Router()
app.use(staticFiles('./'))

const keyMap = {
    '7e111794121d87ca0959954f89580e1a': '5dcbe6cb44549d3be1a48cbf18dd7bde',
    '26e13e2fddb82988f10eee81be1a6342': '1a561f45b461b0382ac3c3f145031600',
    '2e3cdd87ca5b729409e38bc17173702c': '91d63df6815d2c06ed6d49aec3bba357',
    '83ee748676c09d077c5c83e3b8a08e32': '0e01c8fd731b8400b1c889bdcca3acdb'
};

app.use(async(ctx, next)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200; 
    } else {
     await next();
    }
})

router.get('/demo/login', async(ctx, next) => {
    const params = ctx.query;
    const prikey = keyMap[params.captcha_id];

    if(!prikey){
        ctx.response.status = 200;
        ctx.response.body = {'result': 'fail', 'reason': 'id is not in id pools '};;
    }

    const sign_token = crypto.createHmac('sha256', prikey).update(params.lot_number).digest('hex');
    const query = Object.assign(params,{
        sign_token
    });
    const result = await axios({
        method: 'get',
        params: query,
        url: 'http://gcaptcha4.geetest.com/validate'
    }).then((res)=>{
        return res.data
    }).catch(()=>{
        return {'result': 'success', 'reason': 'request geetest api fail'};
    })
    ctx.response.status = 200;
    ctx.response.body = result;
})

app.use(router.routes())
    .listen(8080, ()=>{
        console.log('server is running in 8080');
    });