function zol_3L(){
	
	this.zol_3Lf=function(){
			$(".zol_3Lbtn:eq(0)").css({
					"background":"#ce1a1b"
				})
				$("#xuanxiang").children().eq(0).css({
					"display":"block"
				})
				let i=0;
		$.each($(".zol_3Lbtn"),function(i,item){
			$(item).mouseover(function(){	
				$(item).css({
					"background":"#ce1a1b"
				}).siblings("li").css({
					"background":"#f7f7f7"
				});	
				$("#xuanxiang").children().eq(i).css({
					"display":"block"
				}).siblings("div").css({
					"display":"none"
				})
			})
			
		})
		$(".fuceng").each(function(i,el){
			$(el).mouseenter(function(){
				$(el).find('div').stop().animate({
					"top":"0px"
				})
			})
			$(el).mouseleave(function(){
				$(el).find('div').stop().animate({
					"top":"158px"
				})
			})
		})
		$(".zolfd").each(function(i,el){
			$(el).mouseenter(function(){
				//img 做定位可以，
				$(el).find("img").animate({
					"width":"235px",
					"height":"259px",
					"position":"absolute",
					"top":"-12px",
					"left":"-11px"
				},1000)
			})
			$(el).mouseleave(function(){
				//img 做定位可以，
				$(el).find("img").animate({
					"width":"214px",
					"height":"235px",
					"position":"absolute",
					"top":"0px",
					"left":"0px"
				},1000)
			})
		})



		$(".zol_4Lfd").each(function(i,el){
			$(".zol_4Lbody>div:last-child>div").eq(i).mouseenter(function(){
				$(el).find('img').stop().animate({
					"width":"240px",
					"height":"240px",
					"top":"-20px",
					"left":"-20px"
				},1000)
			})
			$(".zol_4Lbody>div:last-child>div").eq(i).mouseleave(function(){
				$(el).find('img').stop().animate({
					"width":"200px",
					"height":"200px",
					"top":"0px",
					"left":"0px"
				},1000)
			})
		})
			$("h2>li:eq(0)").addClass('zol_5LLchk')
			$(".zol_5Llun").eq(0).css({"display":"block"})
			$("h2>li").each(function(i,el){
				$(el).click(function(){
					$(el).addClass('zol_5LLchk').siblings('li').removeClass('zol_5LLchk')
					$(".zol_5Llun").eq(i).css({
						"display":"block"
					}).siblings('div').css({
						"display":"none"
					})
				})
			})
			let d=0
			
			function zol_5LLlunbo(){
			if(d==3){
				$(".zol_5Llun").animate({
					left:d*-594+ "px"
				},1000,function(){
					$(".zol_5Llun").css({
						"left":"0px",
					})
				})
				d=0
			}else{
				$(".zol_5Llun").animate({
					left:d*-594+ "px"
				},1000)
			}
			}
			function zol_5Lstart(){
				zol_5LLlunbo()
				d++
			}
			var timer=setInterval(zol_5Lstart,5000)
	
	
			let e=0
			function zol_6LLlunbo(){
				if(e==2){
					$(".zol_6Llun").animate({
						left:e*-594+ "px"
					},1000,function(){
						$(".zol_6Llun").css({
							"left":"0px",
						})
					})
					e=0
				}else{
					$(".zol_6Llun").animate({
						left:e*-594+ "px"
					},1000)
				}
				}
				function zol_6Lstart(){
					zol_6LLlunbo()
					e++
				}
				var timer=setInterval(zol_6Lstart,5000)
	
	
	
	
	
	}
	this.zol_6Lf=function(url,obj){
		$.get(url,function(data,str){
			this.data=window.eval(data)
			$(this.data).each(function(i,el){
				var div1=$("<div></div>");
				div1.css({
					"width":"160px",
					"height":"257px",
					"float":"left",
					"padding":"0 19px"
				})
				$(obj).append(div1);
				var a=$("<a href='#'></a>")
				$(div1).append(a)
				a.css({
					"width":"160px",
					"height":"160px",
					"padding":"10px 0",
					"display":"block"
				})
				var img1=$("<img/>")
				img1.attr({
					"src":el.imgsrc
				})
				$(a).append(img1)
				img1.css({
					"width":"160px",
					"height":"160px"
				})
				var p1=$("<p></p>");
				p1.html(el.intro);
				p1.css({
					"width":"160px",
					"height":"22px",
					"overflow": "hidden",
					"whiteSpace": "nowrap",
					"textOverflow": "ellipsis",
					"margin-top":"10px"
				})
				$(div1).append(p1)
				var p2=$("<p></p>");
				$(p1).after(p2);
				p2.html(`<i style='color:red'>￥</i>${el.price}`)
				p2.css({
					"width":"160px",
					"height":"34px",
					"textAlign":"center",
					"lineHeight":"34px"
				})
			})
		})

	}
	
	this.zol_8Lf=function(url,obj){
				var ul1=$(`<ul></ul>`)
				$(obj).append(ul1)
				ul1.css({
					"width":"1212px",
					"height":"664px",
					'marginLeft':"-12px"
				})
		$.get(url,function(data,staus){
			this.data=window.eval(data)
			
			$(this.data).each(function(i,el){
				
				var li1=$(`<li></li>`);
				$(ul1).append(li1);
				li1.css({
					"float": 'left',
					"width": '200px',
					"height": "300px",
					"padding": "10px 15px",
					"margin":" 0 0 12px 12px",
					"background":"white"
				})
				var div1=$(`<div></div>`);
				$(li1).append(div1);
				div1.css({
					"width":"200px",
					"height":"200px",
					"padding":"18px 0px"
				})
				var a1=$(`<a href='#'></a>`)
				$(div1).append(a1);
				a1.css({
					'display':"block"
				})
				var img1=$(`<img></img>`)
				$(a1).append(img1);
				img1.css({
					"width":"200px",
					"height":"200px",
				})
				img1.attr({
					"src":el.imgsrc
				})
				var p1=$(`<p></p>`)
				$(li1).append(p1);
				p1.css({
					"width":"200px",
					"height":"22px",
					"overflow":"hidden",
					"whiteSpace":"nowrap",
					"textOverflow":"ellipsis"
				})
				$(p1).html(el.intro);
				var p2=$(`<p></p>`)
				$(li1).append(p2);
				p2.css({
					"width":"200px",
					"height":"34px",
					"overflow":"hidden",
					"whiteSpace":"nowrap",
					"textOverflow":"ellipsis",
					"textAlign":"center",
					"lineHeight":"34px"
				})
				$(p2).html(`<i style="color:red">￥${el.price}</i>`)
			
			
			
			
			
			
			
			
			
			
			
			})
		})
	}
	

//.zol_LT el对应楼层 ， lc对应楼层对应侧边电梯
	this.zol_LT=function(el,lc){
	var that=this;
		//top点击事件
		console.log($(lc).find("ol>li"))
		$(lc).find("ol>li").bind('click',function(){
			
			$("body,html").animate({
				"scrollTop":0
			},1000)
		})
		this.obj=$(el).map(function(){
			return $(this).offset().top
		})
		var str=this.obj.get()
		console.log(str)
		//楼层点击事件$("body,html").animate({"scrollTop":this.obj[elem.index()]},1000);

		$(lc).find("ul>li").bind("click",function(){
			console.log($(this).index())
				$("body,html").animate({
					"scrollTop":that.obj[$(this).index()]
			})
		})
		$(window).bind('scroll',function(){
			var wh=$(window).height()/2;
			var d1=$("#zol_1L").offset().top;
			var d2=$("#zol_9L").offset().top;
			var dt=$(document).scrollTop();
			var wt=$(window).scrollTop();
			
			if(wt+wh>d1&&wt<d2-wh){
				$(lc).fadeIn();
			}else{
				$(lc).fadeOut();
			}
		})
		$(window).bind('scroll',function(){
			var wt=$(window).scrollTop();
			var wh=$(window).height()/2;
			var d1=$("#zol_1L").offset().top;
			$(str).each(function(i,el){
				console.log(i,el)
				if(wt+wh>el){
					
					$(lc).find("ul>li").eq(i).css({
						"background":"red"
					}).siblings("li").css({
						"background":"none"
					})
				}
			})
			
			
		})
		
	
	
	
	
	
	
	}
		
	
		
	
	
	
		
	
	
	
}
