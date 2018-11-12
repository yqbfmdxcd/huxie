//轮播图
function zolIndex() {
	//背景图舞台$(".lunbo_stage") 
	//左侧按钮$(".Lunbo_L")
	//右侧$(".Lunbo_R")
	//ul $(".lunboBox")
	this.data = null;


	//ajax加载图片
	this.loadImg = function (url, obj, objSpan, objBigBox, btnL, btnR) {
		$.post(url, function load(data, textStatus) {
			if (textStatus == "success") {
				this.data = window.eval(data);

				//li_lunbo.html("<a href='#'><img src="++" /></a>")
				for (var i = 0, l = this.data.length; i <l; i++) {
		var img_lunbo = $('<img />')
		$(obj).append(img_lunbo)
		img_lunbo.attr({
			'src': this.data[i]["imgurl"]
		});
		img_lunbo.addClass("img1")
		$(img_lunbo).css({
			'width': '100%',
			'height': '100%',
			'position': 'absolute',
			'left':'-360px',
			"background":"red",
		})
	}
			}
		})
		
		
	}
	

		//左侧按钮点击事件



		var index = 0;
		$(".img1").eq(0).fadeIn().siblings("img").fadeOut();
		function zolLunbo() {
			var timer = setInterval(function () {
				index++
				$(".img1").eq(index).fadeIn().siblings("img").fadeOut();
				if (index == 2) {
					index = -1;
				}
			}, 3000);


		};
		zolLunbo()

	}
