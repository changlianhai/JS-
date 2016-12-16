/**
 * Created by 常连海 on 2016/12/10.
 */

/**
 *  克隆一份数组，返回一个新数组
 * @returns {Array.<T>}
 */
Array.prototype.clone = function () {
    return this.slice(); // this.slice(0); this.concat()
};


/**
 *
 * @returns {number} 返回数组中最小的元素
 */
Array.prototype.minValue = function () {
    return Math.min.apply(null, this);
};

/**
 *
 * @returns {number} 返回数组中最大的元素
 */
Array.prototype.maxValue = function () {
    return Math.max.apply(null, this);
};


/**
 *
 * @returns ary 返回俩个数组合并完毕的新数组
 */
Array.prototype.insetAry = function () {
    var ary = new Array;
    var len = this.length > arguments[0].length ? this.length : arguments[0].length;
    for (var i = 0; i < len; i++) {
        if (this[i]) return ary[ary.length] = this[i];
        if (arguments[0][i]) return ary[ary.length] = arguments[0][i];
    }
    return ary;

};

/**
 * 类数组转为数组
 * @returns {Array.<T>}
 */
Array.prototype.likeToAry = function () {
    return Array.prototype.slice.call(null, this);
};

//----->> ES5新增方法兼容性处理
/**
 *  indexOf(参数，第几次)
 */
if (typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function () {
        var index = -1;
        var n = 1;
        if (arguments.length === 0) return -1;
        if (arguments.length === 1) {
            for (var i = 0, len = this.length; i < len; i++) {
                if (arguments[0] === this[i]) {
                    index = i;
                    break;
                }
            }
        }

        if (arguments.length === 2) {
            for (var i = 0, len = this.length; i < len; i++) {
                if (arguments[0] === this[i]) {
                    if (n === arguments[1]) {
                        index = i;
                        break;
                    }
                    n++;
                    continue;
                }
            }
        }
        return index;
    }
}

if (typeof Array.prototype.lastIndexOf !== 'function') {
    Array.prototype.lastIndexOf = function () {
        var index = -1;
        if (arguments.length === 1) {
            for (var i = this.length - 1, len = this.length; i >= 0; i--) {
                this[i] === arguments[0] ? index = i : null;
            }
        }


        if (arguments.length === 2) {
            var n = 1;
            for (var i = this.length - 1; i >= 0; i--) {
                if (arguments[0] === this[i]) {
                    if (arguments[1] === n) {
                        index = n;
                        break;
                    }
                    n++;
                }
            }
        }
        return index;
    }
}


if (typeof Array.prototype.forEach !== 'function') {
    Array.prototype.forEach = function (callback, context) {
        if (typeof  callback === 'function') {
            for (var i = 0, len = this.length; i < len; i++) {
                callback.call(context, this[i], i, this);
            }
        }
    }
}


if (typeof Array.prototype.filter !== 'function') {
    Array.prototype.filter = function (callback, context) {
        var ary = new Array;
        if (typeof callback === 'function') {
            for (var i = 0, len = this.length; i < len; i++) {
                ( callback.call(context, this[i], i, this)) && (ary[ary.length] = this[i]);
            }
        }
        return ary;
    }
}


if (typeof Array.prototype.map !== 'function') {
    Array.prototype.map = function (callback, context) {
        var ary = new Array;
        if (typeof callback === 'function') {
            for (var i = 0, len = this.length; i < len; i++) {
                ary[ary.length] = callback.call(context, this[i], i, this);
            }
        }
        return ary;
    }
}


/**
 * 1)unique:数组去重，采用对象法
 * @param flag {boolean} 如果传入true,去重完的数组要进行反序返回，没有传入默认为false，不反序
 * @returns {Array} 返回去重完的数组
 */

Array.prototype.unique1 = function (flag) {
    var obj = new Object;
    for (var i = 0; i < this.length; i++) {  //--->>这里不能用len,因为数组的长度是不固定的
        var cur = this[i];
        if (obj[cur] === cur) {
            this[i] = this[this.length - 1];
            this.length--;
            i--;
            continue
        }
        obj[cur] = cur;
    }
    obj = null;
    if (flag === true) return this.reverse();
    return this;
};

/**
 *  首先进行排序，在进行循环当前元素和后面元素对比
 * @param flag {boolean} 如果传入true,去重完的数组要进行反序返回，没有传入默认为false，不反序
 * @returns {*}
 */
Array.prototype.unique2 = function (flag) {
    this.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < this.length; i++) {
        if (this[i] === this[i + 1]) {
            this.splice(i, 1);
            i--;
            continue;
        }
    }
    if (flag === true) return this.reverse();
    return this;
};

/**
 *  3) 采用indexOf方法判断填入元素
 * @returns {Array}
 */
Array.prototype.unique3 = function () {
    var ary = new Array;
    for (var i = 0, len = this.length; i < len; i++) {
        var cur = this[i];
        ary.indexOf(cur) === -1 ? ary[ary.length] = cur : null;
    }
    return ary;
};


/**
 * bubbleSort: 实习冒泡排序
 * @returns {Array}
 */
Array.prototype.bubbleSort = function () {
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                var temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;

                //--------->>两个数交换第二种方法，不使用中间遍历来交互
                //this[j] = this[j]+this[j+1];
                //this[j+1] = this[j]-this[j+1];
                //this[j]=this[j] - this[j+1];
            }
        }
    }
    return this;
};

/**
 * typeInstanceof数据类型坚持 挂到Object基类上，都可以使用
 * @returns {string} 返回要判断对象的数据类型的字符串
 */
Object.prototype.typeInstanceof = function () {
    var str = Object.prototype.toString.call(this);
    console.log(str);
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
    }

};
