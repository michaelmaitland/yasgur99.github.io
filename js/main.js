'use strict';
$(document).ready(function() {

	particlesJS.load('particles-js', 'js/particles.json');

	var mcUrl = subscribeUrl;

	// Subscribe & More
	
	var subBtn = document.getElementById("subscribe-button");
	var subCls = document.getElementById("subscribe-close");
	var subModal = document.getElementById("subscribe-modal");
	var moreBtn = document.getElementById("know-more-button");
	var moreCls = document.getElementById("more-close");
	var more = document.getElementById("more");
	var toolkit = document.getElementById("toolkit");

	$(subBtn).on("click", function() {
		$(subModal).addClass("open");
		$(overlay).addClass("on");
	});

	$(subCls).on("click", function() {
		$(subModal).removeClass("open");
		$(overlay).removeClass("on");
	});

	$(moreBtn).on("click", function() {
		$(overlay).addClass("on");
		$(more).addClass("open");
	});

	$(moreCls).on("click", function() {
		$(more).removeClass("open");
		$(overlay).removeClass("on");
	});
	
	$(overlay).on("click", function() {
		if($(more).hasClass("open")) {
			$(more).removeClass("open");
			$(overlay).removeClass("on");
		}
	})
	
	$(more).mCustomScrollbar({
		scrollInertia: 200
	});
	
	$(toolkit).mCustomScrollbar({
		scrollInertia: 200
	});
	
	//Subscribe Form

	$('#mc-form').on("submit", function(){
		$(".response").addClass("active");
	});

	$("#mc-form").ajaxChimp({
		url: mcUrl
	});

	//Countdown

	if(countdown) {
		$(".countdown").addClass("active");
	}

	$('#countdown').countdown({
		date: configDate,
		render: function(data) {
			$(this.el).html(
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.days + "</h2>" + " <h4 class=\"countdown-word\">days</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.hours + "</h2>" + " <h4 class=\"countdown-word\">hours</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.min, 2) + "</h2>" + " <h4 class=\"countdown-word\">minutes</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.sec, 2) + "</h2>" + " <h4 class=\"countdown-word\">seconds</h4></div>");
			}
		});
	
	// Contact Form
	var $contactForm = $('#contact-form');

	$contactForm.on("submit", function(e) {
		e.preventDefault();
		var $submit = $('input:submit', $contactForm);
		var proceed = true;

		var post_data = {
			'email': email,
			'user_name'     : $('input[name=name]').val(), 
			'user_email'    : $('input[name=email]').val(), 
			'msg'           : $('textarea[name=message]').val()
		};
		$.post('contact_me.php', post_data, function(response){

			var output = response.text;

			$("#name").val('');
			$("#email").val('');
			$("#msg").val('');

			$("#contact-form #contact-result").addClass("submited");
			$("#contact-form #contact-result").html(output);
		}, 'json');
	});

	// Particles
	var particlesBox = $(".hero");
	if(particles) {
		$(particlesBox).addClass("active");
	}

});