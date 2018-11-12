
window.onload=function(){
    createcode()
}

function createcode(){
    let chkcode=''
    let arr=new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
    for(var i=0;i<4;i++){
        var chkindex=Math.floor(Math.random()*61)
        chkcode+=arr[chkindex]
    }
    $('[name=zolChk]').siblings('p').html(chkcode)

}







function zollogin(){
console.log($('[name=zolChk]').siblings('input'))
//刷新验证码
$('[name=zolChk]').siblings('input').click(this.Reset.bind(this))

//验证验证码是否合法
$('[name=zolChk]').focusout(this.Fousoutchk.bind(this))
$('[name=zolChk]').focusin(this.Fousoutchkin.bind(this))
//验证手机号是否合法
$('[name=zolPhone]').focusout(this.Fousout.bind(this))
$('[name=zolPhone]').focusin(this.Fousin.bind(this))
//验证密码是否安全
$('[name=zolPass]').focusout(this.Fousoutpass.bind(this))
//再次确认密码是否一致
$('[name=zolPass1]').focusout(this.Fousoutpass1.bind(this))
//提交按钮时
$('[type=button]').click(this.Loginsubmit.bind(this))
}


zollogin.prototype.Fousout=function(){
    var phonenum=$('[name=zolPhone]')[0].value;
    var reg=new RegExp("")
    if(phonenum==''){
        console.log($('[name=zolPhone]').find("i").eq(1))
        $('[name=zolPhone]').siblings('i')
        .eq(1).css({
            'display':'block',
            'color':"red"
        }).html(`请输入手机号`)
    }else if(/^13\d{9}$/.test(phonenum)){
        $('[name=zolPhone]').siblings('i')
        .eq(0).css({
            'display':'block',
            'color':"green"
        }).html(`输入合法`)
    }else{
        $('[name=zolPhone]').siblings('i')
        .eq(1).css({
            'display':'block',
            'color':"red"
        }).html(`错误`)
    }
}
zollogin.prototype.Fousin=function(){
    $('[name=zolPhone]').siblings('i').css({
        "display":"none"
    })
}
//刷新验证码
zollogin.prototype.Reset=function(){
$('[name=zolChk]').val(``)
$('#delete').empty();
createcode()
console.log($('[name=zolChk]').siblings('p').html()) 
    

}
//验证码验证
zollogin.prototype.Fousoutchk=function(){
    let zolchk=$('[name=zolChk]').siblings('p').html()
    let zolchkuser=$('[name=zolChk]').val()
    if(zolchkuser.toLowerCase()==zolchk.toLowerCase()){
        $('[name=zolChk]').siblings('i').eq(0).css({
            "display":"block"
        }).html(`✔`)
    }else if(zolchkuser.toLowerCase()!==zolchk.toLowerCase()){
        $('[name=zolChk]').siblings('i').eq(0).css({
            "display":"block"
        }).html(`✖`)
    }
    
}
zollogin.prototype.Fousoutchkin=function(){
    let zolchk=$('[name=zolChk]').siblings('p').html()
    let zolchkuser=$('[name=zolChk]').val()
    console.log(zolchkuser)
    if(zolchkuser.toLowerCase()!==zolchk.toLowerCase()){
        $('[name=zolChk]').siblings('i').eq(0).css({
            "display":"none"
        }).html(``)
        
        $('[name=zolChk]').val(``)

    }
}
zollogin.prototype.Fousoutpass=function(){
    let pass=$('[name=zolPass]').val()
    if(/^[A-Za-z0-9]{6,10}$/.test(pass)){
        $('[name=zolPass]').siblings("i").eq(0).css({
            "display":"block",
        }).html(`内容合法`)
    }
}
//再次确认密码是否一致
zollogin.prototype.Fousoutpass1=function(){
    let pass=$('[name=zolPass]').val()
    let pass1=$('[name=zolPass1]').val()
    if(pass==pass1){
        $('[name=zolPass1]').siblings("i").eq(0).css({
            "display":"block",
        }).html(`密码一致`)
    }else{
        $('[name=zolPass1]').siblings("i").eq(0).css({
            "display":"block",
        }).html(`密码不一致`)
    }
}
//按钮提交
zollogin.prototype.Loginsubmit=function(){
    var str=$('form').serialize();
    var arr=$('form').serializeArray();
    $.post("zol.php?"+str,function(result){
        console.log(result)
    })
}






new zollogin()