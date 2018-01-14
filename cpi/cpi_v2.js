var math=require('./myMath');
var Avg=require('./getAvg');
var Geom=require('./getGeomean');
var Sum=require('./getSum');
//arr json数组
var arr=[
    {
        "ggp": "面粉1",
        //"avg": 3.83,
        "avg": [4.9,3.51,3.16,3.76],
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "中",
        "prices": [4.9,4.9,4.9,4.9,4.9,4.9,3.96,3.96,3.96,3.96,3.96,3.96,2.93,2.93,2.93,2.93,2.93,2.93,3.76,3.76,3.76,3.76,3.76,3.76]
    },
    {
        "ggp":"面粉2",
        //"avg": 9.92,
        "avg": [11.56,11.27,9.74,7.12],
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "高",
        "prices": [11.56,11.56,11.56,11.56,12.64,12.64,11.24,11.24,11.24,11.24,11.24,11.24,9.98,9.98,8.48,8.48,9.5,9.5,7.32,7.32,7.32,7.32,7.32,7.32]
    },
    {
        "ggp":"面粉3",
        //"avg": 4.80,
        "avg": [4.6,4.8,5],
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "中",
        "prices": [4.6,4.6,4.6,4.6,4.6,4.6,4.8,4.8,4.8,4.8,4.8,4.8,5,5,5,5,5,5]
    }
    ,
    {
        "ggp":"面粉4",
        //"avg": 4.80,
        "avg": [4.6,4.8,5],
        "middle": "粮油",
        "base": "面粉5KG",
        "big": "食品",
        "small": "面粉",
        "level": "低",
        "prices": [4.6,4.6,4.6,4.6,4.6,4.6,4.8,4.8,4.8,4.8,4.8,4.8,5,5,5,5,5,5]
    }
];
function cpi(arr){
    var price_geom=[];//存放规格品相对数
    var price_ggp=[];//存放规格品相对数
    arr.forEach(function(item){
        var lastag=Avg.getAvg(item.avg);
        var price=(Avg.getAvg(item.prices)/lastag).toFixed(8);
        price_geom.push(price);
        var pstr=(price+"/"+item.level);
        price_ggp.push(pstr);
    });
    console.log(price_ggp);
    var K_base;//基本类环比指数
    K_base=Geom.getGeom(price_geom).toFixed(8);
    console.log(K_base);
    var K_W_base;//基本类加权环比指数
    price_ggp.forEach(function (k) {
        if (k.split("/")[1]=="高"){
            k.split("/")[0]*0.1;
        }else if (k.split("/")[1]=="中"){
            k.split("/")[0]*0.8;
        }else{
            k.split("/")[0]*0.1;
        }
    });
使用v1
}
cpi(arr);
