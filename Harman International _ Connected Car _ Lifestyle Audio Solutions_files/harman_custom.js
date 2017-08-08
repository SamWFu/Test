/**
 * @file
 * Implements sticky header
 */
Drupal.behaviors.harman_menu = {
    attach: function (context, settings) {
        jQuery(window).on('beforeunload', function () {
            jQuery(window).scrollTop(0);
        });
        /****************************************************************/
        var class_length = jQuery(".harman_title_heading").length;
        jQuery('#top_to_down').append("1 of " + class_length);
        jQuery(window).scroll(function () {
            var header = jQuery(".scroll_wrapper");
            var scroll = jQuery(window).scrollTop();
            if (scroll >= 500) {
                header.removeClass('clearHeader').addClass("darkHeader");
            } else {
                header.removeClass("darkHeader").addClass('clearHeader');
            }
            jQuery(".harman_title_heading").each(function () {
                var el = jQuery(this);
                var str = jQuery(el).text();
                var scr = new Array();

                if (el.offset().top <= scroll) {
                    jQuery('.scroll_pos').html(str);
                    var title_id = this.id;
                    var res = title_id.split("floating-link");
                    var change_data = res[1] + " OF " + jQuery('.harman_title_heading').length;
                    jQuery("#top_to_down").html(change_data);
                    jQuery(".scroll_down").attr("value", res[1]);
                    jQuery(".scroll_up").attr("value", res[1]);

                }
            });
        });

        /****************************************************************/
        //ON CLICK SHOW ALL LINKS
        var t = jQuery(".harman_title_heading").text();
        //alert(tt);
        jQuery("#top_to_down").on("click", function (e) {
            var myArray = jQuery(".harman_title_heading").map(function () {
                return jQuery(this).text();
            }).get();
            var i = 0;

            var aaa = "";
            for (i = 0; i < myArray.length; i++) {
                var s = i + 1;
                var aaa = aaa + '<li><a href="#floating-link' + s + '"class="harman_title" name="' + s + '"id="news_views' + s + '">' + myArray[i] + '</a></li>';
            }
            jQuery(".scroll_dropdown").html("<ul class='dropdown-menu menu' aria-labelledby='top_to_down'>" + aaa + "</ul>");
            jQuery(".scroll_dropdown ul").on("click", "li a", function (event) {
                var test = this.id;
                var t = jQuery("#" + this.id).text();
                jQuery(".scroll_pos").html(t);
                var change_data = jQuery("#" + this.id).attr("name") + " OF " + jQuery('.harman_title_heading').length;

                jQuery("#top_to_down").html(change_data);
                /* Add Smooth scrolling To Anchor links on same page*/
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();
                    // Store hash
                    var hash = this.hash;
                    //alert(hash);
                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    jQuery('html, body').animate({
                        scrollTop: jQuery(hash).offset().top
                    }, 2000, function () {
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        //window.location.hash = hash;
                    });
                } // End if
            });
            if (jQuery(".scroll_dropdown").html().length > 0) {
            }
        });
        //END
        /*FOR SCROLL DOWN*/
        jQuery(".scroll_down").click(function () {
            var pos_down = jQuery(".scroll_down").attr("value");
            //alert(pos_down);
            if (pos_down != jQuery('.harman_title_heading').length) {
                var target = parseInt(pos_down) + 1;
                jQuery(".scroll_down").attr("value", target);
                var target_scroll_id = "#floating-link" + target;

                var divID = target_scroll_id;
                var myArray = jQuery(".harman_title_heading").map(function () {
                    return jQuery(this).text();
                }).get();
                var i = 0;
                var aaa = "";
                for (i = 0; i < myArray.length; i++) {
                    var s = i + 1;
                    var aaa = aaa + '<li><a href="#floating-link' + s + '"class="harman_title" name="' + s + '"id="news_views' + s + '">' + myArray[i] + '</a></li>';
                }
                var change_data = jQuery(".scroll_down").attr("value") + " OF " + jQuery('.harman_title_heading').length;
                jQuery("#top_to_down").html(change_data);

                jQuery('html, body').animate({
                    scrollTop: jQuery(divID).offset().top
                }, 1000);
                var uptarget = parseInt(pos_down) + 1;
                jQuery(".scroll_up").attr("value", uptarget);
            }
        });
        //END

        /*FOR SCROLL UP*/
        jQuery(".scroll_up").click(function () {
            var pos = jQuery(".scroll_up").attr("value");
            if (pos != 1) {
                var target = parseInt(pos) - 1;
                jQuery(".scroll_up").attr("value", target);
                var target_scroll_id = "#floating-link" + target;
                var divID = target_scroll_id;
                jQuery('html, body').animate({
                    scrollTop: jQuery(divID).offset().top
                }, 1000);
                var pos_down = jQuery(".scroll_down").attr("value");
                var target_down = parseInt(pos_down) - 1;
                jQuery(".scroll_down").attr("value", target_down);

                var change_data = jQuery(".scroll_down").attr("value") + " OF " + jQuery('.harman_title_heading').length;
                jQuery("#top_to_down").html(change_data);
            }
        });
        //END
        //For leadership selection
        jQuery('body').on("click","#nav-col-header li", function(e) {
            jQuery(this).closest("#nav-col-header").removeClass("in");
            e.stopPropagation();
        });
       jQuery("body.logged-in.node-type-awe-pages").attr("style" , "");
	  
       jQuery(".block-views").addClass("clearfix"); 
    }
};




