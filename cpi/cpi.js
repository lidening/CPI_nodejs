var math=require('./myMath');
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
    var price_ggp=[];//存放规格品相对数
    var K_base=1;//基本类环比指数
    arr.forEach(function(item){
        var xds=0;//相对数
        var sum=0;
        item.prices.forEach(function(p){
            sum+=p;
        });
        item.avg.forEach(function(a){
            xds+=a;
        });
        var lastag=(xds/item.avg.length).toFixed(8);
        var price=(sum/item.prices.length/lastag).toFixed(8);
        price_ggp.push(price);
    });
    price_ggp.forEach(function(g){
        K_base*=g;
    });
    K_base=Math.pow(K_base,1/price_ggp.length).toFixed(8);
    console.log(K_base);
}
cpi(arr);
