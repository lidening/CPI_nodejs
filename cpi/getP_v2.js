var Sum=require('./getSum');
var Avg=require('./getAvg');
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
    } ,
    {
        "ggp":"面粉4",
        //"avg": 4.80,
        "avg": [4.6,4.8,5],
        "middle": "粮油",
        "base": "面粉5K",
        "big": "食品",
        "small": "面粉",
        "level": "低",
        "prices": [4.6,4.6,4.6,4.6,4.6,4.6,4.8,4.8,4.8,4.8,4.8,4.8,5,5,5,5,5,5]
    } ,
    {
        "ggp":"面粉4",
        //"avg": 4.80,
        "avg": [4.6,4.8,5],
        "middle": "粮油",
        "base": "面粉5K",
        "big": "食品",
        "small": "面粉",
        "level": "低",
        "prices": [4.6,4.6,4.6,4.6,4.6,4.6,4.8,4.8,4.8,4.8,4.8,4.8,5,5,5,5,5,5]
    }
    ,
    {
        "ggp":"女裤1",
        //"avg": 4.80,
        "avg": [4.6,4.8,5],
        "middle": "女式",
        "base": "裤子",
        "big": "服装",
        "small": "裤子",
        "level": "低",
        "prices": [499,599.9,399,599.9]
    }
];
function getP(arr){
    var base_now;
    var json={
        "middle": "",
        "base": "",
        "big": "",
        "small": "",
        "level": "",
        "prices": 0
    };
    var new_arr=[];
    var class_base=[];
    var pri_base=[];
    var pri_middle=[];
    var pri_big=[];
    var pri_g=0;
    var sum=0;
    var pri_small=0;

    arr.forEach(function(item,index){//规格品加和，出基本类数组
        if(item.base==base_now || index!=null && index==0){//判断当前循环到哪个基本类
            pri_g+=Avg.getAvg(item.prices);
            sum+=Sum.getSum(item.prices);
            json.middle=item.middle;
            json.base=item.base;
            json.big=item.big;
            json.small=item.small;
            json.level=item.level;
            json.prices=sum;
        }else{
            new_arr.push(json);
            json={
                "middle": "",
                "base": "",
                "big": "",
                "small": "",
                "level": "",
                "prices": 0
            };
            sum=0;
            sum+=Sum.getSum(item.prices);
            json.middle=item.middle;
            json.base=item.base;
            json.big=item.big;
            json.small=item.small;
            json.level=item.level;
            json.prices=sum;
        }
        base_now=item.base;
        new_arr.push(json);
        json={
            "middle": "",
            "base": "",
            "big": "",
            "small": "",
            "level": "",
            "prices": 0
        };
        sum=0;
        sum+=Sum.getSum(item.prices);
        json.middle=item.middle;
        json.base=item.base;
        json.big=item.big;
        json.small=item.small;
        json.level=item.level;
        json.prices=sum;
    });


    //class_base.forEach(function(item){
    //    sum+=Sum.getSum(item);
    //});
    //pri_base.forEach(function(item,index){
    //
    //});
    console.log(new_arr);
    //if(new_arr.length>1){//递归，依次计算出基本类，小类，中类，大类。当length==1时 为总类
    //    getP(new_arr);
    //}

}
getP(arr);