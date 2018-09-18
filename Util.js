//常用方法
var Util = (function () {
    var that;

    var obj = function () {
        that = this;
    };

    obj.prototype = {
        // 获取地址栏参数
        getQueryString : function (param) {
            if(!param){
                return window.location;
                return;
            }
            var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r != null)return unescape(r[2]);return null;
        },
        /**
         * cookie相关操作
         */

        // 查找cookie
        getCookie: function (param) {
            var reg = new RegExp("(^| )" + param + "=([^;]*)(;|$)");
            var arr = document.cookie.match(reg);
            if(arr)return unescape(arr[2]);return null;
        },

        // 添加cookie
        addCookie: function (name,val,day) {
            /**
             * name cookie的名称
             * val cookie值
             * day cookie的过期时间
             */
            if(day !== 0){
                var expires = day * 24 * 60 * 60 * 1000;
                var date = new Date( + new Date() + expires);
                document.cookie = name = "=" + escape(val) + ";expires=" + date.toUTCString();
            }else{
                document.cookie = name + "+" +escape(val);
            }
        },

        // 删除cookie
        delCookie: function (name) {
            setCookie(name,"",-1);
        },

        // 修改cookie
        modCookie: function (name,val) {
            setCookie(name,val,-1);
        }
        /**
         * ajax
         */
        //

    };
    return new obj();
})();