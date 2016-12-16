/**
 * Created by  常连海 on 2016/12/16.
 */

/**
 * toChangeObj: 将制定的URL参数转为对象
 * @returns {*}
 */
String.prototype.toChangeObj = function () {
    if (arguments[0] === true) {     //如果传入的是第一个参数是true,格式化URL地址
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

    if (typeof  arguments[0] === 'undefined') {  //如果没有传入参数，默认返回？后面的字符串
        return this.slice(this.indexOf('?') + 1);
    }

};


/**
 * reverse:字符串反转，原来字符串不变
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
 * mostCharacter: 找出字符串中出现次数最多的字符，并且统计出现的次数，返回次数和该字符
 * @returns {{count: number, maxChar: string}}
 */
String.prototype.mostChar = function () {
    var obj = new Object;
    var maxChar = '', count = 0;
    for (var i = 0, len = this.length; i < len; i++) {
        var cur = this.charAt(i);
        if (obj[cur]) {
            obj[cur]++;
        } else {
            obj[cur] = 1;
        }
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