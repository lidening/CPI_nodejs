//除法
function accDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{
        t1=arg1.toString().split(".")[1].length}catch(e){
    }try{
        t2=arg2.toString().split(".")[1].length}catch(e){}
    with(Math){
        r1=Number(arg1.toString().replace(".",""))
        r2=Number(arg2.toString().replace(".",""))
        return (r1/r2)*pow(10,t2-t1);
    }
}
//给Number类型增加一个div方法，调用起来更加方便。仅当前js好用
Number.prototype.div = function (arg){
    return accDiv(this, arg);
}
//乘法
function accMul(arg1,arg2){
    var m=0,s1=arg1.toString(),
        s2=arg2.toString();
    try{
        m+=s1.split(".")[1].length}catch(e){}
    try{
        m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m
        )}
//给Number类型增加一个mul方法，调用起来更加方便。仅当前js好用
Number.prototype.mul = function (arg){
    return accMul(arg, this);
}
//加法
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{
        r1=arg1.toString().split(".")[1].length
    }catch(e){
        r1=0} try{
        r2=arg2.toString().split(".")[1].length}catch(e){r2=0} m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}
//给Number类型增加一个add方法，调用起来更加方便。仅当前js好用
Number.prototype.add = function (arg){
    return accAdd(arg,this);
}
exports.accDiv=accDiv;
exports.accMul=accMul;
exports.accAdd=accAdd;

