/**
 * Created by ������ on 2016/12/26.
 */
/**
 * typeInstanceof�������ͼ�� �ҵ�Object�����ϣ�������ʹ��
 * @returns {string} ����Ҫ�ж϶�����������͵��ַ���
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

