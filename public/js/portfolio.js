
$(document).ready(function(){
	$("#scrollDownButton").click(function(){
		$("#aboutPage").ScrollTo({
			duration: 1000
		});
	});
	$("#projectButton").click(function(){
		$("#projectsPage").ScrollTo({
			duration: 1000
		});
	});
	$("#navHomeBtn").click(function(){
		$("#homePage").ScrollTo({
			duration: 1000
		});
	});
	$("#navAboutBtn").click(function(){
		$("#aboutPage").ScrollTo({
			duration: 1000
		});
	});
	$("#navResumeBtn").click(function(){
		$("#skillsPage").ScrollTo({
			duration: 1000
		});
	});

	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

$(window).scroll(function(){
	var scroll = $(window).scrollTop();

	if (scroll >= 500){
		$(".navbar").addClass("navBg");
	}
	else if (scroll < 500){
		$(".navbar").removeClass("navBg");
	}
});


