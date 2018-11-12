function zolPro(el,url){
	console.log(url)
	$.get(url,function(data,textstaus){
		this.data=data;
		var n=28;
		var a=0;
		
	//$(".proPage").find("div")
	
	
	//创建多少个页
	var page= parseInt(this.data.length/n)
	$(".proPage").find("div").css({
		
		'height':'40px',
		'float':"left",
		'textAlign':"center"
	})

	//创建中间页面按钮
	var ul1=$(`<ul></ul>`)
	ul1.css({
		
		'height':'40px',
		'float':'left',
		'overflow':"hidden"
	})
	$(".proPage").find("div").append(ul1)
	ul1.addClass('ul1')
	for(var i=1;i<page+2;i++){
		var li2=$(`<li>${i}</li>`)
		li2.css({
			'width':'38px',
			'height':'38px',
			"border":"1px solid #ccc",
			'float':'left',
			'lineHeight':"38px",
			'textAlign':'center'
		});
		$(".ul1").append(li2)
	}
	
	
	//最后一个页面的图片
	var lastPimg=this.data.length%n
	console.log(page,this.data.length,lastPimg)
	$(".proPage").css({
		"width":"1200px",
		"height":"40px",
		
	})
	$(".proPage").find("input").css({
		'width':'40px',
		'height':'40px',
		"border":"1px solid #ccc",
		'float':'left',
		
		'textAlign':'left',
		'fontSize':'12px',
		'padding':'0'
	})
	$(".proPage").find("input").eq(0).css({
		'marginLeft':"500px"
	})
	
	
		
		var that=this
	//绑定当前按钮
	
	$(".proPage").find("li").eq(0).addClass("Pagenum")
	
	
	var PageNum=$('.Pagenum').val()
	
		$(".proPage").find("li").each(function(z,x){
			$(x).click(function(){
				$(x).addClass('Pagenum').siblings('li').removeClass('Pagenum')
			
			
			})
		})
	
	
	//创建循环列表
		var arr=this.data.slice(PageNum,(PageNum+1)*n)
		console.log(arr,(PageNum+1)*n)
		$.each(arr, function(i,it) {
			var li1=$(`<li></li>`)
			li1.css({
				"position": "relative",
			    "zoom": '1',
			    "float": "left",
			    'margin': "20px 0 0",
			    'padding': "20px 20px 10px",
			    "width": "200px",
			    "height": "348px",
			    "zIndex": "2",
			   
			})
			$(el).append(li1)
//			创建图片
			var a1=$(`<a></a>`)
			a1.css({
				"width": "200 px",
				"height": "200 px",
				"textAlign": 'center',
				"display": "table - cell",
				"verticalAlign": "middle",
			})
			$(li1).append(a1)
			var img1=$(`<img src='${it.imgUrl}'>`)
			img1.css({
				    'verticalAlign': 'middle',
				    'width':'200px',
				    'height':'200px'
			})
			$(a1).append(img1)
			var div1=$(`<div></div>`)
			div1.css({
				    "padding": "16px 0 0",
				    "height": "40px",
				    "overflow": "hidden",
				    "font": '12px/20px "Microsoft YaHei","\5FAE\8F6F\96C5\9ED1"',
				    "textAlign":"center",
				    "overflow":'hidden'
			})
			div1.html(`<a href="#">${it.title}</a>`)
			$(li1).append(div1)
			var div2=$(`<div></div>`)
			$(li1).append(div2)
//创建价格
			var span1=$(`<span></span>`)
			span1.css({
				    "float": "left",
				    "font": "18px/32px Verdana",
				    "color": "#f33"
			})
			$(div2).append(span1)
			span1.html(it.price)
			
			var div3=$(`<div></div>`)
			$(li1).append(div3)

			var span2=$(`<span></span>`)
			div3.css({
				    'font': '12px/22px "Microsoft YaHei","\5FAE\8F6F\96C5\9ED1"',
    				'color': '#999',
    				'height':'22px'

			})
			div2.addClass("clearfix")
			div3.addClass("clearfix")
			$(div3).append(span2)
			span2.css({
				'float':'left'
			})
			span2.html(`销量数${it.sale}`)
			var span3=$(`<span></span>`)
			span3.css({
				'float':"right"
			})
			$(div3).append(span3)
			span3.html(`评价数${it.comment}`)
		//创建
		var div4=$(`<div></div>`)
			$(li1).append(div4)
			div4.css({
				    'font': '12px/22px "Microsoft YaHei","\5FAE\8F6F\96C5\9ED1"',
    				'color': '#999',
    				'height':'22px',
    				'marginBottom':'22px'

			})
			var span4=$(`<span></span>`)
			$(div4).append(span4)
			span4.html(`数码专营店`)
			
			//创建点击隐藏的页面
			var div5=$(`<div></div>`)
			$(li1).append(div5)
			div5.css({
				    'font': '12px/22px "Microsoft YaHei","\5FAE\8F6F\96C5\9ED1"',
    				'color': '#999',
    				'height':'23px',
    				"position":"absolute",
    				"top":"355px",
    				"left":"20px",
    				"display":"none",

			})
			var span5=$(`<span></span>`)
			span5.css({
				'float':"right"
			})
			$(div5).append(span5)
			span5.html(`数码专营店共成交10000笔`)
		
		
		$(li1).mouseenter(function(){
			$(li1).css({
				'boxShadow':'0 0 10px #ccc'
			})
			$(div5).css({
				"display":"block",
			})
		}).mouseleave(function(){
			$(div5).css({
				"display":"none",
			})
			$(li1).css({
				'boxShadow':'0 0 0 #ccc'
			})
		})
		
		
		
		
		
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})
	
	



		



















}









var f=new zolPro('.proList','../json/prolist2.json')

