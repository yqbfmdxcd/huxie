function zol_1L() {

	//创建div
	this.zol_Cre = function(url, obj) {
		$.get(url, function(data, textstaus) {

			this.data = window.eval(data);
			//循环创建div
			var div_L = $('<div></div>');
			var div_C = $('<div></div>');
			var div_R = $('<div></div>');
			$(obj).append(div_L);
			$(obj).append(div_C);
			$(obj).append(div_R);
			$.each(this.data, function(i, item) {

				var div2 = $('<div></div>');
				//$(obj).append(div2);
				//图片
				var img2 = $('<img/>')
				img2.attr({
					'src': item.imgurl,
				})
				img2.css({
					'width': '120px',
					'height': '120px'
				});
				$(div2).append(img2);
				//创建名称
				var div3 = $('<div></div>');
				$(img2).before(div3);
				var h2 = $("<h2></h2>")
				$(div3).append(h2)
				$(h2).html(item.name)
				//创建详细介绍
				var h3 = $("<h3></h3>");
				$(h2).after(h3);
				$(h3).html(item.introduce);
				//创建价格
				var a = (item.price == null) ? '--' : item.price
				var h4 = $("<h4></h4>");
				$(h3).after(h4);
				$(h4).html('￥' + '<i>' + a + '</i>')
				if(i < 3) {
					$(div_L).append(div2)
				} else if(i < 6) {
					$(div_C).append(div2)
				} else if(i < 8) {

					$(div_R).append(div2)

				} else if(i = 8) {
					$(div_R).append(div2)
					$(div_L).clone().insertAfter($(div_R))
				}
			}); //each

		})
		var str = $(".zol_1Lbot")
		var arr = Array.from(document.querySelectorAll(".zol_1Lfot>div"))
		console.log(arr)
		let now = 0;
		let timer=null;
		//添加按钮
		$.each(arr, function(i, item) {
			$(item).click(function() {
				now = i
				tab()
			})
		})

		function tab() {
			if(now == arr.length) {
				str.animate({
					left: now * -1200 + 'px'
				}, 1000, function() {
					str.css({
						"left": "0px"
					})
				})
			now = 0;
			} else {
				str.animate({
					left: now * -1200 + 'px'
				}, 1000)
			}
			//清空下部样式
			$.each(arr, function() {
				$(arr).removeClass("checked")
			})
			//添加样式
			arr[now].className = 'checked'
		}
		function next() {
			now++
			tab()
		}
		 timer = setInterval(next, 3000)
		//鼠标进去静止事件
		$("#zol_1L").mouseenter(function() {
			clearInterval(timer)
		});
		$("#zol_1L").mouseleave(function() {
		clearInterval(timer)
		timer = setInterval(next, 3000)
		});

	}

}