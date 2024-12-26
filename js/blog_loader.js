(function (global) {


    this.showLoading("div.illustrated-grid");

    $ajaxUtils.sendGetRequest('./snippets/blog.html', 
        function (blog_html_base) {
            
            $ajaxUtils.sendGetRequest('./json/blog_list.json', 
                function (blog_list) {
                 
                    html = "";
                    for (var i = blog_list.length - 1; i >= 0; i --){
                        curr_html = blog_html_base;
                        curr_html = this.insertProperty(curr_html, "{{title}}", blog_list[i].name);
                        curr_html = this.insertProperty(curr_html, "{{data}}", blog_list[i].date);
                        curr_html = this.insertProperty(curr_html, "{{text}}", this.insertProperty(blog_list[i].text, "\n", "<br>"));
                        curr_html = this.insertProperty(curr_html, "{{image}}", blog_list[i].img_source);
                        // console.log(curr_html);
                        html += curr_html;
                    }
                    insertHtml("div.illustrated-grid", html);
                
                },
                true);

        },
        false);

})();