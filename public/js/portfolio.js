
$(document).ready(function(){
	$("#scrollDownButton").click(function(){
		$("#aboutPage").ScrollTo({
			duration: 1000
		});
		return false;
	});
	$("#projectsButton").click(function(){
		$("#projectsPage").ScrollTo({
			duration: 1000
		});
		return false;
	});
	$("#navHomeBtn").click(function(){
		$("#homePage").ScrollTo({
			duration: 1000
		});
		return false;
	});
	$("#navAboutBtn").click(function(){
		$("#aboutPage").ScrollTo({
			duration: 1000
		});
		return false;
	});
	$("#navResumeBtn").click(function(){
		$("#skillsPage").ScrollTo({
			duration: 1000
		});
		return false;
	});

	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('#navList').toggleClass('show');
	});

	$(window).scroll(function(event){
		var scroll = $(window).scrollTop();
		if (scroll >= 500){
			$(".navbar").addClass("navBg");
		}
		else if (scroll < 500){
			$(".navbar").removeClass("navBg");
		}
	});


});


