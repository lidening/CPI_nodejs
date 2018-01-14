var Avg=require('./getAvg');
function avg_time(arr){//循环使用yeid 会快一些，待改进
    var avg_arr_time=[];
    var base_now;
    var id_now=-1;
    var avg_time=0;
    var json_arr=[];
    arr.forEach(function(item,index){
        var arr_detaile=[];
        if(base_now==item.base && id_now==item.id || index!=null && index==0) {
            item.detaile.forEach(function (p) {
                avg_time = Avg.getAvg(p.price);//次平均
                avg_arr_time.push(avg_time);
            });
            var json_pri={};
            json_pri.code=item.id;
            json_pri.price=avg_arr_time;
            arr_detaile.push(json_pri);

        }else{
            avg_arr_time=[];
            item.detaile.forEach(function (p) {
                avg_time = Avg.getAvg(p.price);//次平均
                avg_arr_time.push(avg_time);
            });
            var json_pri={};
            json_pri.code=item.id;
            json_pri.price=avg_arr_time;
            arr_detaile.push(json_pri);

        }
        var json={};
        json.id=item.id;
        json.base=item.base;
        json.avg=item.avg;
        json.middle=item.middle;
        json.small=item.small;
        json.level=item.level;
        json.detaile=arr_detaile;
        json_arr.push(json);

        base_now= item.base;
        id_now=item.id
    });
    return json_arr;
}
exports.avg_time=avg_time;