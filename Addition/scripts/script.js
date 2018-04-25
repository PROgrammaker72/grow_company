(function($){
    var views = {
        section1: {
            tpl: '\
                <div class="section-title">Левая часть Низ</div><div class="section-content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>\
        ',
        view: $('#content-house')
        },
        section2: {
            tpl: '\
               <div class="section-title">Левая часть верх</div><div class="section-content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>\
            ',
            view: $('#content-house')
        },
        section3: {
            tpl: '\
                <div class="section-title">Правая часть</div><div class="section-content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>\
            ',
            view: $('#content-house')
        },
        section4: {
            tpl: '\
                <div class="section-title">Крыша</div><div class="section-content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.nt, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>\
            ',
            view: $('#content-house')
        }
    };
    var sections_render=[
        {
            "section_name": "1",
            "section_id": "section1",
        },
        {
            "section_name": "2",
            "section_id": "section2",
        },
        {
            "section_name": "3",
            "section_id": "section3",
        },
        {
            "section_name": "4",
            "section_id": "section4",
        },
    ];
    var render = function(){
        var query = parseQuery();
        if (query.section==1) {
            views.section1.view.html(_.template(views.section1.tpl)({
                sectionId: query.section
            }));
             $('svg > g').each(function(){
                if ($(this).data('house')==query.section) {
                    console.log($(this).data('house')==query.section);
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                }
            });
              $('.house > .dot').each(function(){
                if ($(this).data('sectionId')==query.section) {
                    $(this).siblings('.dot').removeClass('active');
                    $(this).addClass('active');
                }
            });
              $('.house > .desc').each(function(){
                if ($(this).data('desc')==query.section) {
                    $(this).siblings('.desc').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }
        if (query.section==2) {
            views.section2.view.html(_.template(views.section2.tpl)({
                sectionId: query.section
            }));
           $('svg > g').each(function(){
                if ($(this).data('house')==query.section) {
                    console.log($(this).data('house')==query.section);
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                }
            });
           $('.house > .dot').each(function(){
                if ($(this).data('sectionId')==query.section) {
                    $(this).siblings('.dot').removeClass('active');
                    $(this).addClass('active');
                }
            });
              $('.house > .desc').each(function(){
                if ($(this).data('desc')==query.section) {
                    $(this).siblings('.desc').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }
        if (query.section==3) {
            views.section3.view.html(_.template(views.section3.tpl)({
                sectionId: query.section
            }));
           $('svg > g').each(function(){
                if ($(this).data('house')==query.section) {
                    console.log($(this).data('house')==query.section);
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                }
            });
           $('.house > .dot').each(function(){
                if ($(this).data('sectionId')==query.section) {
                    $(this).siblings('.dot').removeClass('active');
                    $(this).addClass('active');
                }
            });
              $('.house > .desc').each(function(){
                if ($(this).data('desc')==query.section) {
                    $(this).siblings('.desc').removeClass('active');
                    $(this).addClass('active');
                }
            });
        } 
        if (query.section==4) {
            views.section4.view.html(_.template(views.section4.tpl)({
                sectionId: query.section
            }));
           $('svg > g').each(function(){
                if ($(this).data('house')==query.section) {
                    console.log($(this).data('house')==query.section);
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                }
            });
          $('.house > .dot').each(function(){
                if ($(this).data('sectionId')==query.section) {
                    $(this).siblings('.dot').removeClass('active');
                    $(this).addClass('active');
                }
            });
              $('.house > .desc').each(function(){
                if ($(this).data('desc')==query.section) {
                    $(this).siblings('.desc').removeClass('active');
                    $(this).addClass('active');
                }
            });
        } 
    };
    var parseQuery = function(){
        var str = window.location.hash;
        str = str.trim().replace(/^(\?|#)/, '');

        var query = {};
        str.split('&').forEach(function(item){
            sub = item.split('=');
            query[sub[0]] = sub[1];
        });
        return query;
    };
    $(window).on('hashchange', function(event){
        render();
    });
    $(window).trigger('hashchange');
    $(document).ready(function() {
        $('.dot').on('click', function(event) {
            event.preventDefault();
            console.log($(this).data('sectionId'));
            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            window.location.hash = 'section=' + $(this).data('sectionId');
        });
         for(i = 0; i < sections_render.length; i++) {
            $('#'+ sections_render[i].section_id)
                    .data('section', sections_render[i]);
        }
    });
})(jQuery)