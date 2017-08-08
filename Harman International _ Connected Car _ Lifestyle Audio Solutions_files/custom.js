Drupal.behaviors.tab_hover = {
    attach: function (context, settings) {
        jQuery('.view-milestones .views-field-title span.field-content a:first').addClass('active');
                jQuery(document).on("scroll", onScroll);
        jQuery(".ms-collapse .views-row .views-field-title span a, .view-connected-car .view-display-id-block_4 .view-content span a").click(function (event) {
            if (this.hash !== "") {
// Prevent default anchor click behavior
                event.preventDefault();
                jQuery(document).off("scroll");
                jQuery('.ms-collapse .views-row .views-field-title span a').each(function () {
                    jQuery(this).removeClass('active');
                })
                jQuery(this).addClass('active');
                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                jQuery('html, body').animate({
                    scrollTop: jQuery(hash).offset().top - 150
                }, 2000, function () {
// Add hash (#) to URL when done scrolling (default click behavior)
//window.location.hash = hash;
                    jQuery(document).on("scroll", onScroll);
                });
            } // End if 

        });

        jQuery(".navbar-header-milestones").click(function () {
            if ((jQuery(".view.view-milestones .ms-collapse").hasClass("in"))) {
                jQuery(".view.view-milestones .ms-collapse").removeClass("in", {duration: 500});
            }
            else {
                jQuery(".view.view-milestones .ms-collapse").addClass("in", {duration: 500});
            }
        });
        var x, y, i;
        i = jQuery("#block-views-news-block-3 .view-content .views-row").length;
        for (x = 0; x < i; ) {
            y = x + 1;
            jQuery("#block-views-news-block-3 .view-content .views-row").eq(x).addClass("odd");
            jQuery("#block-views-news-block-3 .view-content .views-row").eq(y).addClass("odd");
            x += 2;
            y += 2;
            jQuery("#block-views-news-block-3 .view-content .views-row").eq(x).addClass("even");
            jQuery("#block-views-news-block-3 .view-content .views-row").eq(y).addClass("even");
            x += 2;
            y += 2;
        }
        //added for web form
		jQuery(".container .row .tabs").addClass("eidt-page-tab");
        jQuery(".webform-component--description").addClass("col-xs-12");
        jQuery(".webform-client-form captcha").addClass("col-xs-12 col-md-6 col-md-offset-3").delay(2000);
        jQuery("fieldset.captcha.form-wrapper").addClass("col-xs-12 col-md-6 col-md-offset-3").delay(2000);
        jQuery(".solution-blocks-content .cards img").addClass("img-responsive hidden-xs circular");
        jQuery("body.connected-car .connected-car-views img").addClass("img-100-percent");
        jQuery("body.connected-car .view-header img").addClass("img-100-percent");
        jQuery("body.lifestyle-audio .connected-car-views-image img").addClass("img-100-percent");
        jQuery(".img-bg.cap.position-over .awe-image-caption").addClass("col-xs-12 col-md-offset-2 col-md-8 img-bg-content");
        jQuery(".recognition-2-block img").addClass("img-100-percent");
        jQuery(".recognition-3-block img").addClass("img-100-percent");
        jQuery("body.career_page .cta-place").append('<span class="white-arrow"></span>');
        jQuery("body.career_page .career-click").append('<span class="white-arrow"></span>');
		jQuery(".webform-client-form-4776").addClass("col-xs-12 col-sm-8 col-md-8 col-md-offset-2");
		jQuery(".webform-client-form-4786").addClass("col-xs-12 col-sm-8 col-md-8 col-md-offset-2");
		jQuery(".webform-client-form-6156").addClass("col-xs-12 col-sm-8 col-md-8 col-md-offset-2");
		jQuery(".webform-client-form-4776 fieldset.captcha.form-wrapper").removeClass("col-xs-12 col-md-6 col-md-offset-3").delay(2000);
		jQuery(".webform-client-form-4776 fieldset.captcha.form-wrapper").addClass("col-xs-12").delay(2000);
		jQuery(".webform-client-form-4786 fieldset.captcha.form-wrapper").removeClass("col-xs-12 col-md-6 col-md-offset-3").delay(2000);
		jQuery(".webform-client-form-4786 fieldset.captcha.form-wrapper").addClass("col-xs-12").delay(2000);
		jQuery(".webform-client-form-6156 fieldset.captcha.form-wrapper").removeClass("col-xs-12 col-md-6 col-md-offset-3").delay(2000);
		jQuery(".webform-client-form-6156 fieldset.captcha.form-wrapper").addClass("col-xs-12").delay(2000);
        var current = 1;
        jQuery(".connected-car-views-title").find('h2').each(function () {
            jQuery(this).attr('id', 'floating-link' + current);
            current++;
        });
        jQuery(".connected-car-views-title").find('h2').attr('class', 'harman_title_heading');
        jQuery('ul.leadership-tab li:first').addClass("active");
        var leadership_id = jQuery('ul.leadership-tab li:first').attr('class');
        if (jQuery.type(leadership_id) === "undefined") {

        }
        else {
            var res2 = leadership_id.toString();
            var res = res2.split("leaders-link-");
            var res1 = res[1].split(" active");
            jQuery('.tab-content-' + res1[0]).show();
            jQuery('.tab-content-' + res1[0]).addClass("selected_tab");
            jQuery("li#leadership-tab-link").on("click", function () {

                var leadership_class = jQuery(this).attr('class');
                jQuery('ul.leadership-tab li').removeClass("active");
                var get_class = jQuery('.selected_tab').attr('class');
                var res_tesrt = get_class.split("selected_tab");
                jQuery('.' + res_tesrt[0]).removeClass("selected_tab");
                jQuery('.' + res_tesrt[0]).addClass("notselected_tab");
                jQuery('.' + res_tesrt[0]).hide();
                jQuery(this).addClass("active");
                var res = leadership_class.split("leaders-link-");
                var res1 = res[1].split(" active");
                jQuery('.tab-content-' + res1[0]).show();
                jQuery('.tab-content-' + res1[0]).removeClass("notselected_tab");
                jQuery('.tab-content-' + res1[0]).addClass("selected_tab");
            });
        }
// Select and loop the container element of the elements you want to equalise
        jQuery('.view-overview-responsibility .view-content').each(function () {
// Cache the highest
            var highestBox = 0;
            // Select and loop the elements you want to equalise
            jQuery('.overview_supplychain', this).each(function () {
// If this box is higher than the cached highest then store it
                if (jQuery(this).height() > highestBox) {
                    highestBox = jQuery(this).height();
                }
            });
            // Set the height of all those children to whichever was highest 
            jQuery('.overview_supplychain', this).height(highestBox);
        });
        //revolution slider SOC

        /*  jQuery('.block-revslider ul').each(function () {
         jQuery(this).find('li').each(function () {
         jQuery(this).find('.rev-capurl').hide();
         jQuery(this).find('.rev-captext').hide();
         jQuery(this).find('.rev-cap-sub-text').hide();
         jQuery(this).find('.rev-cap-title').hide();
         var text_url = jQuery(this).find('.rev-capurl').text();
         var text_rev = jQuery(this).find('.rev-captext').text();
         var rev_cap_sub_text = jQuery(this).find('.rev-cap-sub-text').text();
         var rev_cap_title = jQuery(this).find('.rev-cap-title').text();
         var container = '<div class="carousel-contents"><p class="title">' + rev_cap_sub_text + '</p><p>' + rev_cap_title + '</p><p><a href="' + text_url + '" target="_blank">' + text_rev + '</a>';
         jQuery(this).find('.rev-cap-title').html(container);
         jQuery(this).find('.rev-cap-title').show();
         });
         
         });
         */

        //revolution slider EOC


        //bootstrap Carousel SOC
        jQuery('#views-bootstrap-carousel-1').each(function () {
            jQuery('a.carousel-control.left').addClass('hidden-xs');
            jQuery('a.carousel-control.left span.icon-prev').addClass('glyphicon glyphicon-chevron-left');
            jQuery('a.carousel-control.left span').removeClass('icon-prev');
            jQuery('a.carousel-control.right').addClass('hidden-xs');
            jQuery('a.carousel-control.right span.icon-next').addClass('glyphicon glyphicon-chevron-right');
            jQuery('a.carousel-control.right span').removeClass('icon-next');
        });
        //bootstrap Carousel SOC

    }
};


function onScroll(event) {
    var scrollPos = jQuery(document).scrollTop() + 150;
    jQuery('.view-milestones .views-field-title span.field-content a').each(function () {
        var currLink = jQuery(this);
        var refElement = jQuery(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            jQuery('.view-milestones .views-field-title span.field-content a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}