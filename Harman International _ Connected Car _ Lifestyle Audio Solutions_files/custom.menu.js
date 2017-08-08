/**
 * @file
 * js for menus sections
 */
(function ($) {
    Drupal.behaviors.customMenu = {
        attach: function (context, settings) {

            var selector = $('.submenu-links li', context);
            $.each(selector, function (index, element) {
                var desdef = $(this).parents('li').find('.submenu-desc-col').html();
                $(this).addClass('active');
                var imgSrc = $(this).attr('data-img'),
                        desc = $(this).attr('data-content'),
                        menu_link = $(this).attr('edit_link_menu'),
                        link = $(this).attr('href'),
                        linkCont1 = $(this).parents('li').find('.editlink-img-col'),
                        imgCont = $(this).parents('li').find('.submenu-img-col >img'),
                        desCont = $(this).parents('li').find('.submenu-desc-col');
                linkCont = $(this).parents('li').find('.explore');
                imgCont.attr({
                    src: imgSrc
                })
                        .fadeIn(1000);
                desCont.html(desc)
                        .fadeIn(1000);
                linkCont.attr({
                    href: link
                })
                if ($('body').hasClass('logged-in')) {
                    linkCont1.html(menu_link)
                            .fadeIn(1000);
                }
                $(this).mouseenter(function () {
                    $(this).addClass('active');
                    var imgSrc = $(this).attr('data-img'),
                            desc = $(this).attr('data-content'),
                            menu_link = $(this).attr('edit_link_menu'),
                            link = $(this).attr('href'),
                            linkCont1 = $(this).parents('li').find('.editlink-img-col'),
                            imgCont = $(this).parents('li').find('.submenu-img-col >img'),
                            desCont = $(this).parents('li').find('.submenu-desc-col');
                    linkCont = $(this).parents('li').find('.explore');
                    imgCont.attr({
                        src: imgSrc
                    })
                            .fadeIn(1000);
                    desCont.html(desc)
                            .fadeIn(1000);
                    linkCont.attr({
                        href: link
                    })

                    if ($('body').hasClass('logged-in')) {

                        linkCont1.html(menu_link)
                                .fadeIn(1000);
                    }
                })
                        .mouseleave(function () {
                            $(this).removeClass('active');
                            /*var imgdef = $(this).parents('li').find('.submenu-img-col >img'),
                             imgSrc = $(imgdef).attr('data-original'),
                             desCont = $(this).parents('li').find('.submenu-desc-col');
                             imgdef.attr({
                             src: imgSrc
                             })
                             .fadeIn(1000);
                             desCont.html(desdef)
                             .fadeIn(1000);*/
                        });
            });
            $('li.full-width')
                    .mouseenter(function () {
                        $(this).addClass('open');
                        $(this).find('ul.dropdown-menu').show();
                    })
                    .mouseleave(function () {
                        $(this).removeClass('open');
                        $(this).find('ul.dropdown-menu').hide();
                    })
            $(".megamenu-close").click(function () {
                $('ul.dropdown-menu').hide();
            });



            $("select#edit-field-banner-type-und").change(function () {
                $(this).find("option:selected").each(function () {
                    if ($(this).attr("value") == "Banner image") {
                        $("fieldset.group-banner-caption").show();
                    }
                    else if ($(this).attr("value") == "Banner Video") {
                        $("fieldset.group-banner-caption").hide();
                    }
                    else {
                        $("fieldset.group-banner-caption").hide();
                    }
                });
            }).change();

            /*   $('.view-milestones .views-field-title span.field-content a').click(function () {
             $('.view-milestones .views-field-title span.field-content a.active').removeClass('active');
             $(this).addClass('active');
             });
             $('.view-milestones .views-field-title span.field-content a:first').addClass('active');
             
             $(window).scroll(function() {
             var windscroll = $(window).scrollTop();
             if (windscroll >= 100) {
             $('.view-milestones .views-field-title').addClass('fixed');
             $('.view-milestones .timeline-page .milestone-container .views-row').each(function(i) {
             
             if ($(this).position().top <= windscroll - 20) {
             $('.view-milestones .views-field-title span.field-content a.active').removeClass('active');
             $('.view-milestones .views-field-title span.field-content a').eq(i).addClass('active');
             }
             });
             
             } else {
             $('.view-milestones .views-field-title').removeClass('fixed');
             $('.view-milestones .views-field-title span.field-content a.active').removeClass('active');
             $('.view-milestones .views-field-title span.field-content a:first').addClass('active');
             }
             }).scroll(); */

//            $(window).scroll(function () {
//                if ($(window).scrollTop() + $(window).height() == $(document).height() + 100) {
//                    $('.view-milestones .views-field-title span.field-content a.active').removeClass('active');
//                    $('.view-milestones .views-field-title span.field-content a:last').addClass('active');
//                }
//            });
        jQuery(".ms-collapse .views-row-last").click(function (event) {
             jQuery(this).addClass('active');
          });

        }
    };
})(jQuery);
