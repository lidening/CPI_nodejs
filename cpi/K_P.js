var relative=require('./relative');
var Geom=require('./getGeomean');
function getK_P(arr){
    var relaNum=relative.getRelative(arr);
    var base_now;
    var arr_geom=[];
    var lev_h=[];
    var lev_m=[];
    var lev_l=[];
    var K;
    var K_P=[];
    var lev_now;
    relaNum.forEach(function (item,index) {
        if(base_now==item.base || index==0){
            if(item.level=="高"){
                lev_h.push(item.detaile[0].relative);
            }else if (item.level=="中"){
                lev_m.push(item.detaile[0].relative);
            }else {
                lev_l.push(item.detaile[0].relative);
            }
        }else {
            var K_h=Geom.getGeom(lev_h);
            var K_m=Geom.getGeom(lev_m);
            var K_l=Geom.getGeom(lev_l);
            K=K_h*0.1+K_m*0.8+K_l*0.1;
            K_P.push(K);
            lev_h=[];
            lev_m=[];
            lev_l=[];
            if(item.level=="高"){
                lev_h.push(item.detaile[0].relative);
            }else if (item.level=="中"){
                lev_m.push(item.detaile[0].relative);
            }else {
                lev_l.push(item.detaile[0].relative);//
            }
        }
        base_now=item.base;
    });
    var K_h=Geom.getGeom(lev_h);
    var K_m=Geom.getGeom(lev_m);
    var K_l=Geom.getGeom(lev_l);
    K=K_h*0.1+K_m*0.8+K_l*0.1;
    K_P.push(K);
    return K_P;
}
exports.getK_P=getK_P;