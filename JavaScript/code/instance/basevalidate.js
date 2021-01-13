/*
 * Validate JavaScript data type.
 *
 * github: https://github.com/stone0090/base-validate
 * author: stone, http://shijiajie.com
 */

(function(window) {

    var getFuncName = function(func) {
        var funcName = String(func);
        if (funcName.indexOf('function') > -1)
            return funcName.replace(/^\s*function\s+(.+)\((\s|\S)+$/, '$1');
        return func;
    };

    var validate = {

        // 检测「字符串」
        isString: function(value) {
            return typeof value === 'string' || value instanceof String;
        },

        // 检测「数字」
        isNumber: function(value) {
            return typeof value === 'number';
        },

        // 检测「布尔值」
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },

        // 检测「undefined」
        isUndefined: function(value) {
            return typeof value === 'undefined';
        },

        // 检测「null」
        isNull: function(value) {
            return value === null;
        },

        // 检测「对象」
        isObject: function(value) {
            return typeof value === 'object' || value instanceof Object;
        },

        // 检测「实例和对象的关系」
        instanceOf: function(value, object) {
            return typeof value === 'object' && typeof object === 'function' && value instanceof object;
        },

        // 检测「函数」
        isFunction: function(value) {
            return typeof value === 'function';
        },

        // 检测「数组」
        isArray: function(value) {
            if (typeof Array.isArray === 'function')
                return Array.isArray(value);
            else
                return Object.prototype.toString.call(value) === '[object Array]';
        },

        // 检测「属性，包含原型链中的属性」
        isProperty: function(value, object) {
            return typeof object === 'object' && getFuncName(value) in object;
        },

        // 检测「实例属性，不包含原型链中的属性」
        isOwnProperty: function(value, object) {
            return typeof object === 'object' && 'hasOwnProperty' in object && object.hasOwnProperty(getFuncName(value));
        },

        // 检测「DOM 属性」
        isDomProperty: function(value) {
            return getFuncName(value) in window.document;
        },

        // 检测「BOM 属性」
        isBomProperty: function(value) {
            return getFuncName(value) in window;
        },

        // 检测「假值」
        isEmpty: function(value) {
            if (this.isFunction(value))
                return false;

            if (this.isUndefined(value))
                return true;

            if (this.isString(value) && value.replace(/(^\s*)|(\s*$)/g, '').length === 0)
                return true;

            if (this.isBoolean(value) && !value)
                return true;

            if (this.isNumber(value) && (value === 0 || isNaN(value)))
                return true;

            if (this.isObject(value)) {
                if (value === null || value.length === 0)
                    return true;

                for (var i in value) {
                    if (value.hasOwnProperty(i))
                        return false;
                }
                return true;
            }

            return false;
        },

        // 检测全部
        validateAll: function(value, object) {
            var result = {};
            if (this.isString(value, object)) result.isString = true;
            if (this.isNumber(value, object)) result.isNumber = true;
            if (this.isBoolean(value, object)) result.isBoolean = true;
            if (this.isUndefined(value, object)) result.isUndefined = true;
            if (this.isNull(value, object)) result.isNull = true;
            if (this.isObject(value, object)) result.isObject = true;
            if (this.instanceOf(value, object)) result.instanceOf = true;
            if (this.isFunction(value, object)) result.isFunction = true;
            if (this.isArray(value, object)) result.isArray = true;
            if (this.isProperty(value, object)) result.isProperty = true;
            if (this.isOwnProperty(value, object)) result.isOwnProperty = true;
            if (this.isDomProperty(value, object)) result.isDomProperty = true;
            if (this.isBomProperty(value, object)) result.isBomProperty = true;
            if (this.isEmpty(value, object)) result.isEmpty = true;
            return result;
        }
        
    };

    var baseValidate = function(value, object) {
        return validate.validateAll(value, object)
    };

    for (var v in validate) {
        if (validate.isOwnProperty(v, validate))
            baseValidate[v] = validate[v];
    }

    window.baseValidate = window.baseValidate || baseValidate;

}(window));