
var public = function(){};
public.prototype.getCheckCode = function(sVIN) {
    var Arr = new Array();
    var Brr = new Array();
    Arr['A'] = 1;
    Arr['B'] = 2;
    Arr['C'] = 3;
    Arr['D'] = 4;
    Arr['E'] = 5;
    Arr['F'] = 6;
    Arr['G'] = 7;
    Arr['H'] = 8;
    Arr['J'] = 1;
    Arr['K'] = 2;
    Arr['L'] = 3;
    Arr['M'] = 4;
    Arr['N'] = 5;
    Arr['P'] = 7;
    Arr['R'] = 9;
    Arr['S'] = 2;
    Arr['T'] = 3;
    Arr['U'] = 4;
    Arr['V'] = 5;
    Arr['W'] = 6;
    Arr['X'] = 7;
    Arr['Y'] = 8;
    Arr['Z'] = 9;
    Arr['1'] = 1;
    Arr['2'] = 2;
    Arr['3'] = 3;
    Arr['4'] = 4;
    Arr['5'] = 5;
    Arr['6'] = 6;
    Arr['7'] = 7;
    Arr['8'] = 8;
    Arr['9'] = 9;
    Arr['0'] = 0;
    Brr[1]=8;
    Brr[2]=7;
    Brr[3]=6;
    Brr[4]=5;
    Brr[5]=4;
    Brr[6]=3;
    Brr[7]=2;
    Brr[8]=10;
    Brr[9]=0;
    Brr[10]=9;
    Brr[11]=8;
    Brr[12]=7;
    Brr[13]=6;
    Brr[14]=5;
    Brr[15]=4;
    Brr[16]=3;
    Brr[17]=2;
    var sKYZF="ABCDEFGHJKLMNPRSTUVWXYZ1234567890";
    var sJYW ='';
    var bl = false;
    var blKYZF = false;
    if (sVIN.length == 17)
    {
        var iJQS=0,intTemp=0;
        ht = Arr;
        htZM = Brr;
        try
        {
            for (var i = 0; i <sVIN.length; i++)
            {
                if (sKYZF.indexOf(sVIN.substr(i, 1)) != -1)
                {
                    blKYZF = true;
                    iJQS = iJQS + parseInt(ht[sVIN.substr(i, 1)]) * parseInt(htZM[(i + 1)]);
                }
                else
                {
                    blKYZF = false;
                    break;
                }
            }
            if (blKYZF)
            {
                intTemp = iJQS%11;
                if (intTemp == 10)
                {
                    sJYW = "X";
                }
                else
                {
                    sJYW = intTemp.toString();
                }
                if (sJYW == sVIN.substr(8, 1)) bl = true;
            }
            else
            {
                bl = false;
            }
        }
        catch(err)
        {
            bl = false;
        }
    }
    return bl;
}//车架号正则检验
public.prototype.isPhone = function (phone) {
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
        alert("手机号码有误，请重填");
        return false;
    }
}//手机号判断对错
public.prototype.cidInfo = function (sId) {
    var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
    var iSum=0;
    var info="";
    if(!/^\d{17}(\d|x)$/i.test(sId))return false;
    sId=sId.replace(/x$/i,"a");
    if(aCity[parseInt(sId.substr(0,2))]==null)return "Error:非法地区";
    sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
    var d=new Date(sBirthday.replace(/-/g,"/"))
    if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "Error:非法生日";
    for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11)
    if(iSum%11!=1)return "Error:非法证号";
    return aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女")
}//根据省份证查询信息
public.prototype.validateIdCard = function (idCard) {
    //15位和18位身份证号码的正则表达式
    var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if(regIdCard.test(idCard)){
        if(idCard.length==18){
            var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
            var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
            for(var i=0;i<17;i++){
                idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
            }

            var idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
            var idCardLast=idCard.substring(17);//得到最后一位身份证号码

            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if(idCardMod==2){
                if(idCardLast=="X"||idCardLast=="x"){
                    alert("恭喜通过验证啦！");
                }else{
                    alert("身份证号码错误！");
                }
            }else{
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if(idCardLast==idCardY[idCardMod]){
                    return true
                }else{
                    return false
                }
            }
        }
    }else{
        return false
    }
}//身份证号码判断对错
public.prototype.isLicenseNo=function(str) {
    return /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(str);
}//判断车牌号正确与否



module.exports = public();