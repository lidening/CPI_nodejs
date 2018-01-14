//arr 为求平均数组
function getSum(arr){
    var a=0;
    arr.forEach(function(item){
        a+=item;
    });
    return a;
}

exports.getSum=getSum;