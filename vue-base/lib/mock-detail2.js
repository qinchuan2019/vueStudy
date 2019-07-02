var arr = []
//获取列表
Mock.mock('getList',{
    "code": 0,
    "message": "请求成功",
    "data|3": [{
        "name": "@cname",//cname 中文，name 英文
        "id": "@id",
        "lastDate": "@datetime",
        "content":"公众号：honeyBadger8,宝剑锋从磨砺出，梅花香自苦寒来，做有温度的攻城狮!"
    }]
})

//根据ID删除数据
Mock.mock('delete', /get|post/i, function (options) {
    let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
    switch (rtype) {
        case 'get':
            break;
        case 'post':
            let id = parseInt(JSON.parse(options.body).id); // 获取请求的id，将options.body转换为JSON对象
            arr = arr.filter(function (val) {
                return val.id != id; // 过滤掉前台传过来的id对应的相应数据，并重新返回
            });
            break;
        default:
            break;
    }
    return {
        data: arr
    }
});

//添加数据
Mock.mock('add', /get|post/i, function (options) {
    let obj = JSON.parse(options.body);
    // console.log("数据获取"+ obj);
    arr = arr.concat(obj); // 将前台返回来的数据，拼接到数组中。
    return {
        data: arr
    }
});

// 数据的修改操作
Mock.mock('update', /get|post/i, function (options) {
    let obj = JSON.parse(options.body).params.obj;
    arr = arr.map(val => { // 将需要替换的数据替换掉
        return val.id == obj.id ? obj : val;
    });
    return {
        data: arr
    }
});