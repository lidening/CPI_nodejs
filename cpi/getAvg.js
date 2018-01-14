//arr 为求平均数组

function getAvg(arr){
    var a=0;
    arr.forEach(function(item){
        a+=item;
    });
    a/=arr.length;
    return a;
}
exports.getAvg=getAvg;