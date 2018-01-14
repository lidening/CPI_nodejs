var relative=require('./relative');
var Geom=require('./getGeomean');
function getBaseK(arr){
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
    return K;
}
exports.getBaseK=getBaseK;