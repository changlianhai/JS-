/**
 * Created by ������ on 2016/12/26.
 */

//��ȡ��λ���ظ�0-9֮����������֤�� --->>4521
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
                performer.innerHTML = '�����»�ȡ��֤��~~';
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
//  new GetCode('���˭','���ĸ�Ԫ������ʾ');




//��ʽ����ǰʱ��--->> 2016��12��26�� ����һ 15ʱ22��05��
function FormatTime(ele) {
    ele.innerHTML =  FormatTime.prototype.time();
}
FormatTime.prototype.time = function () {
    var time = new Date;
    var year = time.getFullYear();  //��  ��λ��ȥ
    var month = time.getMonth()+1;   //---->> ��ȡ�·� 0-11  ����1-12�·�
    var day = time.getDate();    // ---->> ����
    var week = time.getDay();   //---->>  ���ڼ�   0-6 ������һ���ܶ�
    var str = '��һ����������', w = str.charAt(week);  //--->>����һ���ַ������ú����ڶ�Ӧ��
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var lsSeconds = time.getMilliseconds();  //������
    return year + '��' + this.zero(month) + '��' + this.zero(day) + '��' + ' ����' + w + ' ' + this.zero(hours) + 'ʱ' + this.zero(minutes) + '��' + this.zero(seconds) + '��';

};
FormatTime.prototype.zero = function (val) {
    return val >= 10 ? val : '0' + val;
};


new FormatTime(document.getElementById('box'));
new FormatTime(document.getElementsByTagName('p').item(0));