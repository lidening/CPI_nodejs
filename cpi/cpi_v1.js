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
function cpi(arr){
    var cpi_list=[];//cpi所有指标
    var high_ggp=[];//高级规格品相对数
    var middle_ggp=[];//中级放规格品相对数
    var low_ggp=[];//低级规格品相对数
    var price_geom=[];//存放规格品相对数
    var geom_arr=[];
    var base_ggp;//判断基本类
    var json_arr=[];
    var json={"base_value":[]};
    arr.forEach(function(item,index){
        //基本类相同，计算一个相对数，不同，计算另一个相对数
        if(base_ggp==item.base || index!=null && index==0){
            //基本类相同或第一组数据时，不做处理
            base_ggp=item.base;
            var lastag=Avg.getAvg(item.avg);
            var price=(Avg.getAvg(item.prices)/lastag).toFixed(8);
            price_geom.push(price);
            geom_arr.push(price_geom);
            //price_geom=[];
            if(item.level!=null && item.level=="高"){
                high_ggp.push(price);
            }else if(item.level!=null && item.level=="中"){
                middle_ggp.push(price);
            }else {
                low_ggp.push(price);
            }
        }else {
            //基本类不同将相对数数组放入json中，高、中、低顺序，并清空数组
            json={"base_value":[]};
            json.base_value.push(high_ggp);
            json.base_value.push(middle_ggp);
            json.base_value.push(low_ggp);
            json_arr.push(json);
            high_ggp=[];
            middle_ggp=[];
            low_ggp=[];
            geom_arr.push(price_geom);
            price_geom=[];

            base_ggp=item.base;
            var lastag=Avg.getAvg(item.avg);
            var price=(Avg.getAvg(item.prices)/lastag).toFixed(8);
            price_geom.push(price);
            if(item.level!=null && item.level=="高"){
                high_ggp.push(price);
            }else if(item.level!=null && item.level=="中"){
                middle_ggp.push(price);
            }else {
                low_ggp.push(price);
            }
        }
    });
    json={"base_value":[]};
    json.base_value.push(high_ggp);
    json.base_value.push(middle_ggp);
    json.base_value.push(low_ggp);
    json_arr.push(json);

    console.log(json_arr);
    console.log(geom_arr);
    //console.log(high_ggp);
    //console.log(middle_ggp);
    //console.log(low_ggp);

    /**以下部分待改，不同基本类时数组处理**/
    var K_base;//基本类环比指数
    K_base=Geom.getGeom(price_geom).toFixed(8);
    //console.log(K_base);
    //基本类加权环比指数
    var K_W_base=((Geom.getGeom(high_ggp)*0.1)+(Geom.getGeom(middle_ggp)*0.8)+(Geom.getGeom(low_ggp)*0.1)).toFixed(8);
}
cpi(arr);
