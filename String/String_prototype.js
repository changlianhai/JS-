/**
 * Created by  ������ on 2016/12/16.
 */

/**
 * toChangeObj: ���ƶ���URL����תΪ����
 * @returns {*}
 */
String.prototype.toChangeObj = function () {
    if (arguments[0] === true) {     //���������ǵ�һ��������true,��ʽ��URL��ַ
        var obj = new Object;
        var str = this.slice(this.indexOf('?') + 1);
        var ary = str.split('&');
        for (var i = 0, len = ary.length; i < len; i++) {
            var cur = ary[i];
            var ary1 = cur.split('=');
            obj[ary1[0]] = ary1[1];

        }
        return obj;
    }

    if (typeof  arguments[0] === 'undefined') {  //���û�д��������Ĭ�Ϸ��أ�������ַ���
        return this.slice(this.indexOf('?') + 1);
    }

};


/**
 * reverse:�ַ�����ת��ԭ���ַ�������
 *
 * @returns {string}
 */
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };
}

if (typeof String.prototype.ltrim !== 'function') {
    String.prototype.ltrim = function () {
        return this.replace(/(^\s*)/g, "");
    };
}

if (typeof String.prototype.rtirm !== 'function') {
    String.prototype.rtirm = function () {
        return this.replace(/(\s*$)/g, "");
    };
}
