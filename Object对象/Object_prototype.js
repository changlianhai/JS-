/**
 * Created by 常连海 on 2016/12/26.
 */
/**
 * typeInstanceof数据类型坚持 挂到Object基类上，都可以使用
 * @returns {string} 返回要判断对象的数据类型的字符串
 */
Object.prototype.typeInstanceof = function () {
    var str = Object.prototype.toString.call(this);
    switch (str) {
        case '[object Array]':
            return 'array';
            break;
        case '[object String]':
            return 'string';
            break;
        case '[object Number]':
            return 'number';
            break;
        case '[object Boolean]':
            return 'boolean';
            break;
        case '[object undefined]':
            return 'undefined';
            break;
        case '[object RegExp]':
            return 'regExp';
            break;
        case '[object Function]':
            return 'function';
            break;
        case '[object Null]':
            return 'null';
            break;
    }

};

