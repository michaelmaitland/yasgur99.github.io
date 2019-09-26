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
	var aboutBtn = document.getElementById("about-button");
	var aboutCls = document.getElementById("about-close");
	var about = document.getElementById("about");
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
	
	// about
	$(about).mCustomScrollbar({
		scrollInertia: 200
	});

	$(aboutBtn).on("click", function() {
		$(overlay).addClass("on");
		$(about).addClass("open");
	});

	$(aboutCls).on("click", function() {
		$(about).removeClass("open");
		$(overlay).removeClass("on");
	});
	
	$(overlay).on("click", function() {
		if($(about).hasClass("open")) {
			$(about).removeClass("open");
			$(overlay).removeClass("on");
		}
	})
	
	$(about).mCustomScrollbar({
		scrollInertia: 200
	});
	
	$(toolkit).mCustomScrollbar({
		scrollInertia: 200
	});
	
	//Subscribe Form
	$("#mc-form").on("submit"), function(){
		$(".response").addClass("active");
		$.ajax({
		type: "POST",
		url: "https://api.mer.gg/comingSoon",
		data: {'email' : $('input[name=email]').val()},
		success: function(){},
		dataType: "json",
		contentType : "application/json"
		});
	  };

	
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
		// $.post('contact_me.php', post_data, function(response){

		// 	var output = response.text;

		// 	$("#name").val('');
		// 	$("#email").val('');
		// 	$("#msg").val('');

		// 	$("#contact-form #contact-result").addClass("submited");
		// 	$("#contact-form #contact-result").html(output);
		// }, 'json');
	});

	// Particles
	var particlesBox = $(".hero");
	if(particles) {
		$(particlesBox).addClass("active");
	}

});