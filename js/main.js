$(document).ready(function() {
	var page_overlay = $(".fade-overlay");

	var appstore = document.getElementById("appstore");
	var desktop = document.getElementById("desktop");
	var playstore = document.getElementById("playstore");

	var ios_icon = $(".ios")
	var windows_mac_icon = $(".windows-mac")
	var android_icon = $(".android")

	var hover_inactive = false;

	$(appstore).hover(function() {
		moveAstroTo(appstore)
		increaseIconOpacity(ios_icon)
	});
	$(desktop).hover(function() {
		moveAstroTo(desktop)
		increaseIconOpacity(windows_mac_icon)
	});
	$(playstore).hover(function() {
		moveAstroTo(playstore)
		increaseIconOpacity(android_icon)
	});

	function increaseIconOpacity(element) {
		ios_icon.css({"opacity": 0.1})
		windows_mac_icon.css({"opacity": 0.1})
		android_icon.css({"opacity": 0.1})
		// Glow test
		// element.css({"opacity": 1, "-webkit-filter": "drop-shadow( 0px 0px 10px rgba(12, 211, 255, 1))"})
		element.css({"opacity": 1})
	}

	var w_win = window.innerWidth;
	var h_win = window.innerHeight;
	var astro_start_x = w_win/2 - ($('.astro').width()/2) + 10;
	var astro_start_y = $('.astro').position()["top"];

	var header_start_y = $('.logo-container').position()["top"] - $('.logo-container').height() / 4

	window.addEventListener("resize", updateWindowSize);
	// const xs = [0, 0.347, 0.608, 0.89, 1];
	const xs = [0, 0.225, 0.608, 0.9, 1];
	const ys = [0, 0.937, 0.905, 0.9, 0.90];

	const spline = new Spline(xs, ys);



	function updateWindowSize() {
		w_win = window.innerWidth;
		h_win = window.innerHeight;
		astro_start_x = window.innerWidth/2 - ($('.astro').width()/2) + 10;
		astro_start_y = $('.astro').position()["top"];
		setTimeout( function() {
			astro.reset();
		}, 300)
	}

	var astro_offset = -50
	var astro_start_offset = 50
	var target_x = astro_start_x;

	var reseting_astro = false;


	var astro = {
	  a:$('.astro'),
		fore:$('.astro-foreground'),
		back:$('.astro-background'),
	  x  : astro_start_x + astro_start_offset,
		xd1: astro_start_x + astro_start_offset*1.5,
		xd2: astro_start_x + astro_start_offset*2,
	 	y  : astro_start_y,
		yd1: astro_start_y,
		yd2: astro_start_y,
		reset: function(){
			if(reseting_astro) return;
			start_pos = astro.x;
			target_x = astro_start_x;
			elapsed = 0;
			reseting_astro = true;
		},
	  update:function(){
			this.a.css   ({'transform':'translate3d(' + (this.x-w_win/2)   + 'px,' + (this.y-astro_start_y)   + 'px, 0)'})
			this.fore.css({'transform':'translate3d(' + (this.xd1-w_win/2) + 'px,' + (this.yd1-astro_start_y) + 'px, 0)'})
			this.back.css({'transform':'translate3d(' + (this.xd2-w_win/2) + 'px,' + (this.yd2-astro_start_y) + 'px, 0)'})
	  }
	}

	var header = {
		h: $('.logo-container'),
	 	y: header_start_y,
	  update:function(){
			this.h.css   ({'transform':'translate3d(' + 0  + 'px,' + (this.y) + 'px, 0)'})
	  }
	}

	var frame_rate = 144;
	var duration = 1.25;
	var elapsed = 1;
	var t;

	var start_pos = astro_start_x;

	var updateInterval = setInterval(updateElements, 1000/frame_rate)

	function updateElements() {
		updateAstro();
		updateHeader();
		updateButtons();
	}

	function updateButtons() {
		if(!$(appstore).is(":hover") && (!$(desktop).is(":hover") && !$(playstore).is(":hover")) && !hover_inactive) {
			increaseIconOpacity($(".none"))
			hover_inactive = true;
		}
	}

	function updateHeader() {
		var cur_mili = window.performance.now()
		header.y = Math.sin(cur_mili / 700 + 350) * 5 + header_start_y;
		header.update()
	}

	function updateAstro() {
		if((astro.x.toFixed(2) == astro.xd2.toFixed(2)) && reseting_astro) {
			reseting_astro = false;
			increaseIconOpacity(windows_mac_icon)
			if(!(astro.x - 10 < astro_start_x && astro_start_x < astro.x + 10)) {
				elapsed = 0;
				start_pos = astro.x;
				target_x = astro_start_x;
			}
		}
		elapsed += 0.01 ;
		t = elapsed / (duration / frame_rate * frame_rate * duration);
		if(t > 1) t = 1;
		astro.x = overshoot(start_pos, target_x, t);

		// astro.x = lerp(astro.x, target_x, 0.1);
		astro.xd1 = lerp(astro.xd1, astro.x, 0.3);
		astro.xd2 = lerp(astro.xd2, astro.xd1, 0.2);
		var cur_mili = window.performance.now()
		astro.y = Math.sin(cur_mili / 700) * 10 + astro_start_y;
		astro.yd1 = Math.sin(cur_mili / 700 + 150) * 10 + astro_start_y;
		astro.yd2 = Math.sin(cur_mili / 700 + 350) * 10 + astro_start_y;
		astro.update()
	}

	function moveAstroTo(element) {
		hover_inactive = false;
		elapsed = 0;
		start_pos = astro.x;
		if(w_win >= 860) {
			target_x = $(element).position()["left"] + astro_offset;
		}
	}

	function lerp (start, end, amt){
	  return (1 - amt) * start +  amt * end
	}

	function overshoot (start, end, t){
		if(start < end)
			return start + spline.at(t) * (Math.abs(end - start) / 0.90)
		else
			return start - spline.at(t) * (Math.abs(end - start) / 0.90)
	}

	// INIT
	moveAstroTo(desktop)
	increaseIconOpacity(windows_mac_icon)
	$(this).scrollTop(0);
	page_overlay.fadeOut(500)

	var about_us_page = $(".about-us-page")
	var privacy_policy_page = $(".privacy-policy-page")
	var tos_page = $(".tos-page")
	var data_policy_page = $(".data-policy-page")
	var main_page = $(".main-page")

	$(".about-us-link").click(function(){
		page_overlay.fadeIn(200)
		about_us_page.delay(200).fadeIn(200);
		main_page.css({"overflow":"hidden!important"})
		setTimeout(function() {
			moveAstroTo(desktop)
		}, 200)
	})

	$(".privacy-policy-link").click(function(){
		page_overlay.fadeIn(200)
		privacy_policy_page.delay(200).fadeIn(200);
		main_page.css({"overflow":"hidden"})
		setTimeout(function() {
			moveAstroTo(desktop)
		}, 200)
	})

	$(".tos-link").click(function(){
		page_overlay.fadeIn(200)
		tos_page.delay(200).fadeIn(200);
		main_page.css({"overflow":"hidden"})
		setTimeout(function() {
			moveAstroTo(desktop)
		}, 200)
	})

	$(".data-policy-link").click(function(){
		page_overlay.fadeIn(200)
		data_policy_page.delay(200).fadeIn(200);
		main_page.css({"overflow":"hidden"})
		setTimeout(function() {
			moveAstroTo(desktop)
		}, 200)
	})

	$(".back-to-downloads").click(function(){
		about_us_page.fadeOut(200);
		privacy_policy_page.fadeOut(200);
		tos_page.fadeOut(200);
		data_policy_page.fadeOut(200);
		page_overlay.delay(200).fadeOut(200)
		moveAstroTo(desktop)
		increaseIconOpacity(windows_mac_icon)
		$(this).scrollTop(0);
	})

});
