function xiangdui(item){
    var json;
    var high_ggp=[];//高级规格品相对数
    var middle_ggp=[];//中级放规格品相对数
    var low_ggp=[];//低级规格品相对数
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
    return json;
}
