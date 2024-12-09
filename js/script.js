(function (global) {

	var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        insertHtml(selector, "<div class='text-center'>Loading...</div>");
    };

    var insertProperty = function (string, propName, propValue) {
        string = string.replace(new RegExp(propName, "g"), propValue);
        return string;
    };

    this.insertHtml = insertHtml;
    this.showLoading = showLoading;
    this.insertProperty = insertProperty;

    showLoading("footer#footer");
    showLoading("header#header");
    
    $ajaxUtils.sendGetRequest('./snippets/footer.html', 
    	function (html) {
            insertHtml("footer#footer", html);
        },
    	false);

    $ajaxUtils.sendGetRequest('./snippets/header.html', 
        function (html) {
            insertHtml("header#header", html);
        },
        false);

})();