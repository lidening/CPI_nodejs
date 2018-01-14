//arr 月平均数组
var avg_time=require('./avg_time');
function getRelative(arr){
    var new_arr=avg_time.avg_time(arr);//次平均
    var avg=avg_time.avg_time(new_arr);//平均
    var json_arr=[];
    avg.forEach(function(item){
        var num_relat=item.detaile[0].price/item.avg;
        item.detaile[0].relative=num_relat;
        json_arr.push(item);
    });
    return json_arr;
}
//arr 为原始数组
function getRelative1(arr){
    var new_arr=avg_time.avg_time(arr);//次平均
    var avg=avg_time.avg_time(new_arr);//平均
    var json_arr=[];
    avg.forEach(function(item){
        var num_relat=item.detaile[0].price/item.avg;
        item.detaile[0].relative=num_relat;
        json_arr.push(item);
    });
    return json_arr;
}
exports.getRelative=getRelative;