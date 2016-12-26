/**
 * Created by 常连海 on 2016/12/26.
 */

//获取四位不重复0-9之间整数的验证码 --->>4521
function GetCode(performer, showEle) {
    GetCode.prototype.tiggerClik(performer, showEle);
}
GetCode.prototype.tiggerClik = function (performer, showEle) {
    performer.onclick = function () {
        var n = 10;
        var timer = window.setInterval(function () {
            if (n === 0) {
                window.clearInterval(timer);
                performer.disabled = false;
                performer.innerHTML = '请重新获取验证码~~';
                new GetCode(performer, showEle);


            } else {
                performer.onclick = null;
                performer.innerHTML = n--;
                performer.disabled = true;
            }

            showEle.innerHTML = yzm;
        }, 1000);
        var yzm = GetCode.prototype.getRandom();
    }
};
GetCode.prototype.getRandom = function () {
    var str = '';
    for (var i = 0; i <= 3; i++) {
        var val = Math.round(Math.random() * 9).toString();
        str.indexOf(val) === -1 ? str += val : i--;
    }
    return str;
};
new GetCode(document.getElementById('getRandom'), document.getElementById('box'));
//  new GetCode('点击谁','在哪个元素上显示');




//格式化当前时间--->> 2016年12月26日 星期一 15时22分05秒
function FormatTime(ele) {
    ele.innerHTML =  FormatTime.prototype.time();
}
FormatTime.prototype.time = function () {
    var time = new Date;
    var year = time.getFullYear();  //年  四位数去
    var month = time.getMonth()+1;   //---->> 获取月份 0-11  代表1-12月份
    var day = time.getDate();    // ---->> 日期
    var week = time.getDay();   //---->>  星期几   0-6 代表周一到周二
    var str = '日一二三四五六', w = str.charAt(week);  //--->>定义一个字符串正好和星期对应上
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var lsSeconds = time.getMilliseconds();  //毫秒数
    return year + '年' + this.zero(month) + '月' + this.zero(day) + '日' + ' 星期' + w + ' ' + this.zero(hours) + '时' + this.zero(minutes) + '分' + this.zero(seconds) + '秒';

};
FormatTime.prototype.zero = function (val) {
    return val >= 10 ? val : '0' + val;
};


new FormatTime(document.getElementById('box'));
new FormatTime(document.getElementsByTagName('p').item(0));