$(function(){
	var w=$(window).width();
	if(w<=736){
		$('.header-innerSmall').css({'display':'block'});
		$('.header-inner').css({'display':'none'});
		$('.footer .footer_small').css({'display':'block'});
		$('.footer .container').css({'display':'none'});
	}
	if(w>736){
		$('.header-innerSmall').css({'display':'none'});
		$('.header-inner').css({'display':'block'});
		$('.footer .footer_small').css({'display':'none'});
		$('.footer .container').css({'display':'block'});
	}
	window.onresize=widthChange;
	function widthChange(){
		var width=$(window).width();
		if(width<=736){
			$('.header-innerSmall').css({'display':'block'});
			$('.header-inner').css({'display':'none'});
			$('.footer .footer_small').css({'display':'block'});
			$('.footer .container').css({'display':'none'});
		}
		if(width>736){
			$('.header-innerSmall').css({'display':'none'});
			$('.header-inner').css({'display':'block'});
			$('.footer .footer_small').css({'display':'none'});
			$('.footer .container').css({'display':'block'});
		}
	}

	var height=$(window).height();
	$('.list').on('click',function(){
		if($('.list').hasClass('change')){
			$('.list').removeClass('change');
			$('.list_tab').animate({'height':'0','opacity':'0'}).delay(500);
			$('.shop').animate({'background-position':'0'});
		}else{
			$('.list').addClass('change');
			$('.list_tab').animate({'height':height,'opacity':'1'}).delay(500);
			$('.shop').animate({'background-position':'40'});
		}
		
	})

	$('.add').on('click',function(){
		if($(this).hasClass('change')){
			$(this).removeClass('change');
			$(this).parent().find($('.footer_list')).css({'display':'none'});
		}else{
			$(this).addClass('change');
			$(this).parent().find($('.footer_list')).animate({'height':'100%'},1000).css({'display':'block'});
			
		}
	})
	$('.footer_small h3').on('click',function(){
		if($(this).parent().find($('.add')).hasClass('change')){
			$(this).parent().find($('.add')).removeClass('change');
			$(this).parent().find($('.footer_list')).css({'display':'none'});
		}else{
			$(this).parent().find($('.add')).addClass('change');
			$(this).parent().find($('.footer_list')).animate({'height':'100%'},1000).css({'display':'block'});
		}
	})

	
	//轮播图
	var num=0;
	var next=0;
	$('.inner').css({'left':'100%'}).eq(0).css({'left':'0'});
	$('.pointList li')
	.css({"background":"#999999","border":"none"})
	.eq(0)
	.css({"background":"#fff","border":"1px solid #1893D0"});


	var flag2=true;
	$('.btnLeft').on('click',function(){
		if(flag2){
			flag2=false;
			moveRight();
		}
	})
	$('.btnRight').on('click',function(){
		if(flag2){
			flag2=false;
			moveLeft();
		}
	})

	var flag1=true;
	$('.pointList li').on('click',function(){
		if(flag1){
			flag1=false;
			var index=$(this).index('.pointList li');
			$('.pointList li')
			.css({"background":"#999999","border":"none"})
			.eq(index)
			.css({"background":"#fff","border":"1px solid #1893D0"});

			if(next==index){
				flag1=true;
				return;
			}
			if(next<index){
				$('.inner').eq(index).css({"left":"100%"});
				$('.inner').eq(next).animate({"left":"-100%"},1000);
				$('.inner').eq(index).animate({"left":"0"},1000,function(){
					flag1=true;
				});
			}else{
				$('.inner').eq(index).css({"left":"-100%"});
				$('.inner').eq(next).animate({"left":"100%"},1000);
				$('.inner').eq(index).animate({"left":"0"},1000,function(){
					flag1=true;
				});
			}
				
			next=index;
			num=next;
		}
	})
	function moveLeft(){
		next++;
		if(next>=$('.inner').length){
			next=0;
		}
		$('.inner').eq(next).css({'left':'100%'});
		$('.inner').eq(num).animate({'left':'-100%'},1000);
		$('.inner').eq(next).animate({'left':'0'},1000,function(){
			flag2=true;
		});
		$('.pointList li')
		.css({"background":"#999999","border":"none"})
		.eq(next)
		.css({"background":"#fff","border":"1px solid #1893D0"});
		num=next;
	}
	var t=setInterval(moveLeft,2000);

	function moveRight(){
		next--;
		if(next<=-1){
			next=$('.inner').length-1;
		}
		$('.inner').eq(next).css({'left':'-100%'});
		$('.inner').eq(num).animate({'left':'100%'},1000);
		$('.inner').eq(next).animate({'left':'0'},1000,function(){
			flag2=true;
		});
		$('.pointList li')
		.css({"background":"#999999","border":"none"})
		.eq(next)
		.css({"background":"#fff","border":"1px solid #1893D0"});

		num=next;
	}
	$('.banner').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveLeft,2000);
	})
})