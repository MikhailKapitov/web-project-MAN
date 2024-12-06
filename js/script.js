(function (global) {

	var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    $ajaxUtils.sendGetRequest('./snippets/footer.html', 
    	function (html) {
            insertHtml("footer#footer", html);
        },
    	false);

})();