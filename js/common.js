$(document).ready(function() {

	$(".toggle-btn").click(function() {
		$(".top-nav ul").slideToggle();
	});
	var btn1 = 0,btn2 = btn3 = 1;
	$(".btn-1").click(function() {
		if (btn2 == 0) {
			$(".btn-text-2").slideToggle();
			$(".arrow-down2").removeClass("hidden");
			$(".arrow-up2").addClass("hidden");
			btn2 = 1;
		}
		if (btn3 == 0) {
			$(".btn-text-3").slideToggle();
			$(".arrow-down3").removeClass("hidden");
			$(".arrow-up3").addClass("hidden");
			btn3 = 1;
		}
		$(".btn-text-1").slideToggle();
		if (btn1 == 1) {
			$(".arrow-down1").addClass("hidden");
			$(".arrow-up1").removeClass("hidden");
			btn1 = 0;
		} else {
			$(".arrow-down1").removeClass("hidden");
			$(".arrow-up1").addClass("hidden");
			btn1 = 1;
		}
	});
	$(".btn-2").click(function() {
		if (btn1 == 0) {
			$(".btn-text-1").slideToggle();
			$(".arrow-down1").removeClass("hidden");
			$(".arrow-up1").addClass("hidden");
			btn1 = 1;
		}
		if (btn3 == 0) {
			$(".btn-text-3").slideToggle();
			$(".arrow-down3").removeClass("hidden");
			$(".arrow-up3").addClass("hidden");
			btn3 = 1;
		}
		$(".btn-text-2").slideToggle();
		if (btn2 == 1) {
			$(".arrow-down2").addClass("hidden");
			$(".arrow-up2").removeClass("hidden");
			btn2 = 0;
		} else {
			$(".arrow-down2").removeClass("hidden");
			$(".arrow-up2").addClass("hidden");
			btn2 = 1;
		}
	});
	$(".btn-3").click(function() {
		if (btn1 == 0) {
			$(".btn-text-1").slideToggle();
			$(".arrow-down1").removeClass("hidden");
			$(".arrow-up1").addClass("hidden");
			btn1 = 1;
		}
		if (btn2 == 0) {
			$(".btn-text-2").slideToggle();
			$(".arrow-down2").removeClass("hidden");
			$(".arrow-up2").addClass("hidden");
			btn2 = 1;
		}
		$(".btn-text-3").slideToggle();
		if (btn3 == 1) {
			$(".arrow-down3").addClass("hidden");
			$(".arrow-up3").removeClass("hidden");
			btn3 = 0;
		} else {
			$(".arrow-down3").removeClass("hidden");
			$(".arrow-up3").addClass("hidden");
			btn3 = 1;
		}
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});