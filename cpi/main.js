var avg_time=require('./avg_time');
var relative=require('./relative');
var Geom=require('./getGeomean');
//arr json数组
var arr=[
    {
        "id":1,//规格品id
        "name": "面粉1",
        //"avg": 3.83,
        "avg": 3.8325,//实际数据
        //"avg": [4.9,3.51,3.16,3.76],
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "中",
        "detaile":[{"code":"4074","price":[4.9,4.9,4.9,4.9,4.9,4.9]},{"code":"4153","price":[3.96,3.96,3.96,3.96,3.96,3.96]},{"code":"4302","price":[2.93,2.93,2.93,2.93,2.93,2.93]},{"code":"4452","price":[3.76,3.76,3.76,3.76,3.76,3.76]}]
    },
    {
        "id":2,
        "name":"面粉2",
        //"avg": 9.92,
        "avg": 9.9225,
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "高",
        "detaile":[{"code":"4452","price":[11.56,11.56,11.56,11.56,12.64,12.64]},{"code":"4607","price":[11.24,11.24,11.24,11.24,11.24,11.24]},{"code":"4672","price":[9.98,9.98,8.48,8.48,9.5,9.5]},{"code":"4752","price":[7.32,7.32,7.32,7.32,7.32,7.32]}]
    },
    {
        "id":3,
        "name":"面粉3",
        "avg": 4.80,
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "中",
        "detaile":[{"code":"1001","price":[4.6,4.6,4.6,4.6,4.6,4.6]},{"code":"1002","price":[4.8,4.8,4.8,4.8,4.8,4.8]},{"code":"1014","price":[5,5,5,5,5,5]}]
    }
    ,
    {
        "id":4,
        "name":"面粉4",
        "avg": 4.80,
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "低",
        "detaile":[{"code":"1001","price":[4.6,4.6,4.6,4.6,4.6,4.6]},{"code":"1002","price":[4.8,4.8,4.8,4.8,4.8,4.8]},{"code":"1014","price":[5,5,5,5,5,5]}]
    } ,
    {
        "id":5,
        "name":"面粉5",
        "avg": 4.80,
        "middle": "粮油",
        "base": "面粉10K",
        "big": "食品",
        "small": "面粉",
        "level": "低",
        "detaile": [{"code":"1001","price":[4.6,4.6,4.6,4.6,4.6,4.6]},{"code":"1002","price":[4.8,4.8,4.8,4.8,4.8,4.8]},{"code":"1014","price":[5,5,5,5,5,5]}]
    },
    {
        "id":6,
        "name":"女裤1",
        "avg": 918.32666667,
        "middle": "女式",
        "base": "裤子",
        "big": "服装",
        "small": "裤子",
        "level": "中",
        "detaile":[{"code":"5404","price":[997.98,997.98]},{"code":"5501","price":[859,859.03]},{"code":"5611","price":[898,898]}]
    },
    {
        "id":7,
        "name":"女裤2",
        "avg": 10405.815,
        "middle": "女式",
        "base": "裤子",
        "big": "服装",
        "small": "裤子",
        "level": "高",
        "detaile": [{"code":"4028","price":[8990,8990]},{"code":"4155","price":[11821.63,11821.63]}]
    },
    {
        "id":8,
        "name":"女裤3",
        "avg": 1236.50,
        "middle": "女式",
        "base": "裤子",
        "big": "服装",
        "small": "裤子",
        "level": "高",
        "detaile": [{"code":"4907","price":[1290,1290]},{"code":"5059","price":[1183,1183]}]
    },
    {
        "id":9,
        "name":"女裤4",
        "avg": 524.25,
        "middle": "女式",
        "base": "裤子",
        "big": "服装",
        "small": "裤子",
        "level": "低",
        "detaile": [{"code":"4909","price":[499,399]},{"code":"5112","price":[599.5,599.5]}]
    }
];
function cpi(arr){
    var relaNum=relative.getRelative(arr);
    var base_now;
    var arr_geom=[];
    var K=[];
    relaNum.forEach(function (item,index) {
        if(base_now==item.base || index==0){
            arr_geom.push(item.detaile[0].relative);
        }else {
            K.push(Geom.getGeom(arr_geom));
            arr_geom=[];
            arr_geom.push(item.detaile[0].relative);
        }
        base_now=item.base;
    });
    K.push(Geom.getGeom(arr_geom));
    console.log(K)

}
cpi(arr);


