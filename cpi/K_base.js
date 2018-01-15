var relative=require('./relative');
var Geom=require('./getGeomean');
function getBaseK(arr){
    var relaNum=relative.getRelative(arr);
    var base_now;
    var id_now;
    var small_now;
    var middle_new;
    var big_now;
    var code_now;
    var arr_geom=[];
    var cost_now;
    //var K_now;
    var K=[];
    relaNum.forEach(function (item,index) {
        if(base_now==item.base || index==0){
            arr_geom.push(item.detaile[0].relative);
        }else {
            //K_now=Geom.getGeom(arr_geom);
            var json={};
            var det_arr=[];
            var js={};
            json.id=id_now;
            json.base=base_now;
            json.small=small_now;
            json.big=big_now;
            json.cost=cost_now;
            js.code=code_now;
            js.K=Geom.getGeom(arr_geom);
            det_arr.push(js);
            json.detail=det_arr;
            K.push(json);
            arr_geom=[];
            arr_geom.push(item.detaile[0].relative);
        }
        base_now=item.base;
        id_now=item.id;
        small_now=item.small;
        middle_new=item.middle;
        big_now=item.big;
        cost_now=item.cost;
        code_now=item.detaile[0].code;

    });
    var json={};
    var det_arr=[];
    var js={};
    json.id=id_now;
    json.base=base_now;
    json.small=small_now;
    json.big=big_now;
    json.cost=cost_now;
    js.code=code_now;
    js.K=Geom.getGeom(arr_geom);
    det_arr.push(js);
    json.detail=det_arr;
    K.push(json);
    //K.push(Geom.getGeom(arr_geom));
    return K;
}
exports.getBaseK=getBaseK;