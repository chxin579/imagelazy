errorimg="https://wkphoto.cdn.bcebos.com/d52a2834349b033bdd1b76bf05ce36d3d439bdc0.jpg";
(function ($) {
    $.fn.extend({
        ImgLoading: function () {
            var defaults = {
                Node: $(this).find("img"),
                DivNode: $(this).find(".imgdiv"),
                timeout: 1000
            };
            var options = $.extend(defaults);
            var Browser = new Object();
            var plus = {
                BrowserVerify:function(){
                    Browser.userAgent = window.navigator.userAgent.toLowerCase();
                    Browser.ie = /msie/.test(Browser.userAgent);
                    Browser.Moz = /gecko/.test(Browser.userAgent);
                },
                EachImg: function () {
                    defaults.DivNode.each(function (i) {
                        var img = defaults.DivNode.eq(i);
                        plus.LoadEnd(Browser, img.attr("data"), i, plus.LoadImg);
                    })
                    defaults.Node.each(function (i) {
                        var img = defaults.Node.eq(i);
                        plus.LoadEnd(Browser, img.attr("data"), i, plus.LoadImg);
                    })

                },
                LoadEnd: function (Browser, url, imgindex, callback) {
                    var val = url;
                    var img = new Image();
                    if (Browser.ie) {
                        img.onreadystatechange = function () {
                            if (img.readyState == "complete" || img.readyState == "loaded") {
                                callback(img, imgindex);
                            }
                        }
                    } else if (Browser.Moz) {
                        img.onload = function () {
                            if (img.complete == true) {
                                callback(img, imgindex);
                            }
                        }
                    }
                    img.onerror = function () { img.src = errorimg }
                    img.src = val;
                },
                LoadImg: function (obj, imgindex) {
                    setTimeout(function () {
                        defaults.Node.eq(imgindex).attr("src", obj.src);
                        defaults.DivNode.eq(imgindex).css("background-image","url('"+obj.src+"')");
                    }, defaults.timeout);
                }
            }
            plus.BrowserVerify();
            plus.EachImg();
        }
    });
})(jQuery);