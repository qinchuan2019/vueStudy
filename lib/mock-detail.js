/**
 * 查询列表接口
 */
Mock.mock('http:fake_url_getList.com','',{
    "code": 0,
    "message": "请求成功",
    "data|20": [{
        "name": "@cname",//cname 中文，name 英文
        "userId": "@id",
        "lastDate": "@datetime",
        "other":"公众号：honeyBadger8,宝剑锋从磨砺出，梅花香自苦寒来，做有温度的攻城狮!"
    }]
})