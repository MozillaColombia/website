$(function(){"use strict";$("#contribute-nav-menu li a").on("click",function(e){var label=$(this).data("label");var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Nav Interactions ","nav click",label])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Nav Interactions ","nav click",label],callback)}});if($("body").prop("id")==="landing"){$("#landing .section").waypoint(function(direction){if(direction==="down"){var sectionclass=$(this).prop("class");gaTrack(["_trackEvent","Contribute Landing Interactions","scroll",sectionclass])}},{offset:"100%"});$("#landing .cta a").on("click",function(e){var position=$(this).data("position");var label=$(this).data("label");var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Landing Interactions",position,label])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Landing Interactions",position,label],callback)}})}$("a.video-play").on("click",function(){var linktype=$(this).data("linktype");gaTrack(["_trackEvent","Contribute Landing Interactions","Video Interactions",linktype])});$(".landing-stories .person .url").on("click",function(e){var person=$(this).parents(".person").find(".fn").text();var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Landing Interactions","How Mozillians Help Every Day",person])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Landing Interactions","How Mozillians Help Every Day",person],callback)}});$(".stories-other .person .url").on("click",function(e){var person=$(this).parents(".person").find(".fn").text();var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Mozillian Stories Interactions","Meet a few more Mozillians",person])}else{e.preventDefault();gaTrack(["_trackEvent","Mozillian Stories Interactions","Meet a few more Mozillians",person],callback)}});$(".stories-other .section-tagline a").on("click",function(e){var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Mozillian Stories Interactions","twitter search link","#IAmAMozillian"])}else{e.preventDefault();gaTrack(["_trackEvent","Mozillian Stories Interactions","twitter search link","#IAmAMozillian"],callback)}});$(".story-links a").on("click",function(e){var person=$(".story-title .name").text();var link=$(this).prop("class");var href=this.href;var callback=function(){window.open(href)};e.preventDefault();gaTrack(["_trackEvent","Mozillian Stories Interactions","social button click",person+" - "+link],callback)});$(".landing-notready .other-actions a").on("click",function(e){var label=$(this).data("label");var href=this.href;var callback=function(){window.open(href)};e.preventDefault();gaTrack(["_trackEvent","Contribute Landing Interactions","Not Ready to Dive in Just Yet",label],callback)});$("#thankyou .other-actions a").on("click",function(e){var label=$(this).data("label");var href=this.href;var callback=function(){window.open(href)};e.preventDefault();gaTrack(["_trackEvent","Contribute Confirmation Interactions","Other Ways to Support Mozilla",label],callback)});$(".cta-mozillians a").on("click",function(e){var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Confirmation Interactions","Mozillians CTA click","Yes, Create My Mozillians Account"])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Confirmation Interactions","Mozillians CTA click","Yes, Create My Mozillians Account"],callback)}});$(".events-table .event-name a").on("click",function(e){var eventname=$(this).text();var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Events Interactions","event link click",eventname])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Events Interactions","event link click",eventname],callback)}});$(".contrib-extra .event-link").on("click",function(e){var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Interactions","Contribute Extra Links at Bottom",href])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Interactions","Contribute Extra Links at Bottom",href],callback)}});$(".contrib-extra .events-all a").on("click",function(e){var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Interactions","Contribute Extra Links at Bottom","See All Events"])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Interactions","Contribute Extra Links at Bottom","See All Events"],callback)}});$(".extra-links a").on("click",function(e){var newTab=this.target==="_blank"||e.metaKey||e.ctrlKey;var href=this.href;var callback=function(){window.location=href};if(newTab){gaTrack(["_trackEvent","Contribute Interactions","Contribute Extra Links at Bottom",href])}else{e.preventDefault();gaTrack(["_trackEvent","Contribute Interactions","Contribute Extra Links at Bottom",href],callback)}});$(".option input").on("change",function(){gaTrack(["_trackEvent","Contribute Signup Interactions","Category - "+this.value,"SELECTED"])});$(".area select").on("change",function(){gaTrack(["_trackEvent","Contribute Signup Interactions","Area - "+this.value])});$("#inquiry-form").on("submit",function(e){e.preventDefault();var form=$(this);var newsletterstate;if($("#id_newsletter").is(":checked")){newsletterstate="True"}else{newsletterstate="False"}form.off("submit");gaTrack(["_setCustomVar",13,"Contribute Signup Form - Main Area of Contribution",form.find('input[name="category"]').val(),3]);gaTrack(["_setCustomVar",14,"Contribute Signup Form Form - Contribution Drop-Down Value",form.find(".area:visible select").val(),3]);gaTrack(["_setCustomVar",15,"Contribute Signup Form Form - Sign Up for Newsletter",newsletterstate,3]);gaTrack(["_trackEvent","Contribute Signup Form Interactions","successful submit","Start Contributing"],function(){form.submit()})})});(function($){"use strict";var $window=$(window);var $document=$(document);var $body=$("body");var $navList=$("#contribute-nav-menu");var wideMode=false;var hasMediaQueries=typeof matchMedia!=="undefined";if(hasMediaQueries){checkWidth();$window.on("resize",function(){clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(checkWidth,200)})}else{wideMode=true;$body.removeClass("thin").addClass("wide")}function checkWidth(){if(window.matchMedia("screen and (min-width: 761px)").matches){wideMode=true;$body.removeClass("thin").addClass("wide");$navList.removeAttr("aria-hidden").show()}else{wideMode=false;$body.removeClass("wide").addClass("thin");$navList.attr("aria-hidden","true").hide()}}$document.on("click","body.thin .contribute-nav .toggle",expandPageNav);$document.on("click","body.thin .contribute-nav .toggle.open",collapsePageNav);$document.on("mouseleave","body.thin .contribute-nav",collapsePageNav);function expandPageNav(){$navList.slideDown("fast").removeAttr("aria-hidden").attr("aria-expanded","true");$(".contribute-nav .toggle").addClass("open")}function collapsePageNav(){$navList.slideUp("fast").attr("aria-hidden","true").removeAttr("aria-expanded");$(".contribute-nav .toggle").removeClass("open")}if($(".story-more").length>0){var person=$(".story-title .name").text();var $more=$(".story-more");var $more_toggle=$('<div class="more-toggle"><button type="button">'+window.trans("more")+"</button></div>");$more_toggle.insertAfter($more);var $toggle_button=$(".more-toggle button");$more.hide().attr("aria-hidden","true");$toggle_button.on("click",function(){$more.slideToggle("fast",function(){if($more.is(":visible")){$toggle_button.addClass("open").text(window.trans("less"));$(this).removeAttr("aria-hidden");gaTrack(["_trackEvent","Mozillian Stories Interactions",person+" - more"])}else{$toggle_button.removeClass("open").text(window.trans("more"));$(this).attr("aria-hidden","true");gaTrack(["_trackEvent","Mozillian Stories Interactions",person+" - less"])}})})}$("a.video-play").attr("role","button").on("click",function(e){e.preventDefault();var $this=$(this);var videoelem=$("#"+$this.attr("data-element-id"));Mozilla.Modal.createModal(this,videoelem,{title:"",onCreate:function(){play_video()}})});var play_video=function(){var $video=$("#modal video:first");if($video.length>0){setTimeout(function(){$video[0].play()},400);$video.on("ended",function(){gaTrack(["_trackEvent","/contribute Interactions","Video Interactions","Video ended"])})}};$(".cta-other button").on("click",function(){$(".cta-other").fadeOut("fast",function(){$("#other").slideDown()})});var select_category=function(category){$("#inquiry-form .option label").removeClass("selected");category.parents("label").addClass("selected");var areas=$("#inquiry-form .area").map(function(index){return this.id});var categoryarea="area-"+category.attr("value");var $areascontainer=$(".areas");if($.inArray(categoryarea,areas)!==-1){if($areascontainer.is(":hidden")){$areascontainer.slideDown("fast",function(){show_area(categoryarea)})}else{show_area(categoryarea)}}else{$areascontainer.slideUp("fast",function(){$(".area:visible").hide().find("select").prop("selectedIndex",0)})}};$('#inquiry-form input[name="category"]').on("change",function(){var $this=$(this);select_category($this)}).on("invalid",function(){$("#inquiry-form .option-list").get(0).scrollIntoView()});var $category_checked=$('#inquiry-form input[name="category"]:checked');if($category_checked.length>0){select_category($category_checked)}$("#inquiry-form .option input").on("focus",function(){$("#inquiry-form .option label").removeClass("hover");$(this).parents("label").addClass("hover")});var show_area=function(categoryarea){var oldarea_id=$(".area:visible").attr("id");var $oldarea=$("#"+oldarea_id);var $newarea=$("#"+categoryarea);var viewport=$("html, body");if($oldarea.length>0){$oldarea.fadeOut("fast",function(){$newarea.fadeIn("fast",function(){$("html, body").animate({scrollTop:$(this).offset().top-60},300);$(this).find("select").focus().attr("required",true)});$oldarea.find("select").prop("selectedIndex",0).attr("required",false)})}else{$newarea.fadeIn("fast",function(){viewport.animate({scrollTop:$(this).offset().top-60},300);$(this).find("select").focus().attr("required",true)})}};var $select=$(".select > select");$select.on("focus",function(){$(this).parent(".select").addClass("focus")});$select.on("blur",function(){$(this).parent(".select").removeClass("focus")});var $tooltips=$(".inquiry-form .info");$tooltips.on("mouseenter focus click",function(e){e.preventDefault();var $this=$(this);var target=$(this).attr("href").replace(/.*?(#.*)/g,"$1");$('<div class="tooltip arrow-top">'+$(target+" p").text()+"</div>").insertAfter($this).fadeIn("fast");gaTrack(["_trackEvent","Contribute Signup Tooltip Interactions",$(target).prop("id"),"Info tooltip"])});$tooltips.on("mouseleave blur",function(){var $this=$(this);var tooltip=$this.parents(".option").find(".tooltip");tooltip.delay(100).fadeOut("fast",function(){tooltip.remove()})})})(window.jQuery);