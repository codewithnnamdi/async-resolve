; (function (root, factory) {
    if (typeof root !== 'undefined') {
        root.asyncResolve = asyncResolve;
    } else if (typeof (module) !== 'undefined' && module.exports) {
        module.exports = asyncResolve;
    } else if ((typeof define === 'function') && define.amd) {
        define([], (root.asyncResolve = factory()));
    }

})(typeof this !== 'undefined' ? this : global, function (root) {

    /**
      * interoplate a obj with exports default
      * attach default in commonjs module system.
      * @subroutine
      * @param {*} obj 
      * @returns obj
    */
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? {
            default: obj
        } : obj;
    }
    /**
     * asynchronously resolve a module.
     * @param {*} obj 
     * @param {object} options 
     * @returns Promise
     */
    function asyncResolve(obj, {
        timeout = null,
        intrepolate = false
    }) {
        return new Promise((resolve, reject) => {
            obj = intrepolate ? _interopRequireDefault(obj) : obj;
            if (timeout) {
                setTimeout(() => {
                    resolve(obj);
                }, timeout);
            } else if (!timeout) {
                resolve(obj);
            }
            else {
                reject(new Error('asyncResolve: obj is not defined'));
            }
        })
    }
    
    return asyncResolve;
})