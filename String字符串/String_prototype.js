/**
 * Created by  ������ on 2016/12/16.
 */


/**
 *  forEach:�����ַ��� ,���һ��������Ĭ�ϱ�������ַ�����������������������ڶ���������'ASCII'����ô������Ӧ�����ַ���ASCII��
 * @param callback {{function}}
 */
String.prototype.forEach = function (callback) {
    if (typeof callback === 'function') {
        if (arguments.length === 1) {
            for (var i = 0, len = this.length; i < len; i++) {
                callback(this.charAt(i), i, this);
            }
        }

        if (arguments.length === 2 && arguments[1] === 'ASCII') {    //����ڶ���ֵ��'ASCII'
            for (var i = 0, len = this.length; i < len; i++) {
                callback(this.charCodeAt(i), i, this);
            }
        }
    }
};

/**
 * clone:��¡��ǰ�ַ���
 * @returns {string}
 */
String.prototype.clone = function () {
    return this.slice(0); //this.slice()
};
/**
 * toChangeObj: ���ƶ���URL����תΪ����
 * @returns {*}
 */
String.prototype.formatUrl = function () {
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

/**
 * mostCharacter: �ҳ��ַ����г��ִ��������ַ�������ͳ�Ƴ��ֵĴ��������ش����͸��ַ�
 * @returns {{count: number, maxChar: string}}
 */
String.prototype.mostChar = function () {
    var obj = new Object;
    var maxChar = '', count = 0;
    for (var i = 0, len = this.length; i < len; i++) {
        var cur = this.charAt(i);
        obj[cur] ? obj[cur]++ : obj[cur] = 1;
    }

    for (var key in obj) {
        if (obj[key] > count) {
            count = obj[key];
            maxChar = key;
        }
    }

    return {
        count: count,
        maxChar: maxChar
    };

};

/**
 * zero: ���ڲ�λ������ǰ�油0
 * @returns {string}
 */
String.prototype.zero = function () {
    return this.length >=2 ?  this: '0' + this;
};