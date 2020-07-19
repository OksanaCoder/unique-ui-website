		function safariGradient() {
			var history = document.getElementById('history');
			var process = document.getElementById('process');
			history.classList.add('svg--grad');
			process.classList.add('svg--grad');
		}
		if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
			safariGradient();
		};



		var header = document.getElementById('header');
		var welcome = document.getElementById('welcome');
		window.onscroll = function headerFix() {
			if (document.getElementById('header').classList.contains('header--fix') && window.pageYOffset < 61
//					|| window.pageYOffset > 8800
				 ) {
				header.classList.remove('header--fix');
				welcome.classList.remove('welcome__header--fix');
			} else if (window.pageYOffset > 61) {
				header.classList.add('header--fix');
				welcome.classList.add('welcome__header--fix');
			}
		};