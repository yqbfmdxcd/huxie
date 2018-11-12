function proCenter(obj){
    this.obj=obj
    //鼠标进入事件
    this.start()
    //鼠标进入放大镜显示
    this.obj[0].onmousemove=this.Move.bind(this)
    this.obj[0].onmouseenter=this.Enter.bind(this)
    this.obj[0].onmouseleave=this.Leave.bind(this)
   //this.obj.onmouseenter=this.enter.bind(this)
}
//鼠标进入放大镜显示
proCenter.prototype.Move=function(e){
  
 var e=e||window.event;
var x=e.pageX-this.obj.offset().left;
var y=e.pageY-this.obj.offset().top;
x= x-this.glass.width()/2;
y=y-this.glass.height()/2;
if(x<0)x=0;
if(y<0)y=0;
var cw=this.obj.width()-this.glass.width();
if(x>cw)x=cw;
var ch=this.obj.height()-this.glass.height();
if(y>ch)y=ch;
console.log(cw,ch)
this.glass.css({
    'left':x,
    'top':y
})
this.img1.css({
    'left':-x*2,
    'top':-y*2
})
}


 proCenter.prototype.start=function(){
 	//创建放大镜
 var glass=$(`<div></div>`)
 glass.css({
     "background":"black",
     "opacity":".5",
     "width":"200px",
     "height":"200px",
     "position":"absolute",
     "top":"0px",
     "left":"0px",
     "display":'none'
 })
 this.obj.append(glass)
 this.glass=glass
 //创建放大镜中的照片
 var img1=$('<img/>')
 img1.css({
     "width":"800px",
     "height":"800px",
     "position":"absolute"

 })
 img1.attr({
     'src':"../images/center/fd1.jpg"
 })
 this.img1=img1
 $(this.obj).find("div").eq(0).append(img1)
 }

 proCenter.prototype.Enter=function(){
    $(this.obj).find("div").css({
        "display":"block"
    })
 }
 proCenter.prototype.Leave=function(){
    $(this.obj).find("div").css({
        "display":"none"
    })
 }









new proCenter($(".zoFocusfd"))