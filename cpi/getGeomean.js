//arr 为求几何平均数组

function getGeom(arr){
    if(arr.length==0){
        return 0;
    }else {
        var a=1;
        var geomean=1;
        arr.forEach(function(item){
            a*=item;
        });
        geomean=Math.pow(a,1/arr.length);
        return geomean;
    }

}


exports.getGeom=getGeom;