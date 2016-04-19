
$(document).ready(function(){
	$("#scrollDownButton").click(function(){
		$("#aboutPage").ScrollTo({
			duration: 1000
		});
		return false;
	});
	$("#scrollUpButton").click(function(){
		$("#homePage").ScrollTo({
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
	$("#navContactBtn").click(function(){
		$("#contactPage").ScrollTo({
			duration: 1000
		});
		return false;
	});
	$("#navProjectsBtn").click(function(){
		$("#projectsPage").ScrollTo({
			duration: 1000
		});
		return false;
	});
	$("#navFindingsBtn").click(function(){
		$("#findingsPage").ScrollTo({
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
		
		if (scroll > 500){
			$("#scrollUpButton").css("display","block");
		}
		else{
			$("#scrollUpButton").css("display","none");
		}
	});



});


