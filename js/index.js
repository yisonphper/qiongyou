$(document).ready(function(){
	/*红色标签的文本定时切换 start*/
	var n = 1;
	function scroll(){
		switch(n){
			case 1:
			$(".flagtag").text("一日游");
			break;
			case 2:
			$(".flagtag").text("门票");
			break;
			case 3:
			$(".flagtag").text("吃喝玩乐");
			break;
			case 4:
			$(".flagtag").text("机票");
			break;
			case 5:
			$(".flagtag").text("超值折扣");
			break;
			case 6:
			$(".flagtag").text("租车自驾");
			break;
			case 7:
			$(".flagtag").text("买买买");
			break;
			case 8:
			$(".flagtag").text("电话卡");
			break;
			case 9:
			$(".flagtag").text("Wi-Fi");
			break;
		}
		n++;
		if(n>9){
			n=1;
		}
	}
	setInterval(function(){scroll();},1000);
	/*红色标签的文本定时切换 end*/

	/*导航栏悬浮显示白条 start*/
	$(".nav-list").hover(function(){
			$(this).addClass("nav-list1");
		},function(){
			$(this).removeClass("nav-list1");
		});
	/*导航栏悬浮显示白条 end*/

	/*手动向左向右翻页start*/
	$(".icon-zuo").click(function(){
		// 在图片没有完成动画前禁止点击
		if($(".header-bgimg>ul").is(":animated")){
			return false;
		}

		var n = parseInt($(".page").text());
		if(n==1){n=6};
		$(".page").text(n-1);	
		// 图片向右无缝轮播 start
  	    var imgwidth = $(".header-bgimg>ul>li>img").attr("width");
  		$(".header-bgimg>ul").css("marginLeft","-"+imgwidth+"px"); 
		$(".header-bgimg>ul>li").eq(4).prependTo($(".header-bgimg>ul"));
		$(".header-bgimg>ul").animate({"marginLeft":"0px"},1000);
		// 图片向右无缝轮播 end
	
	});
	$(".icon-xiangyou").click(function(){
		// 在图片没有完成动画前禁止点击
		if($(".header-bgimg>ul").is(":animated")){			
			return false;
		}
		turnPage();	
	});
	/*手动向左向右翻页end*/

	/*自动向右翻页start*/
	function turnPage(){
		var n = parseInt($(".page").text());
		if(n==5){n=0};
		$(".page").text(n+1);
		// 图片向左无缝轮播 start
		var imgwidth = $(".header-bgimg>ul>li>img").attr("width");
        $(".header-bgimg>ul").animate({"marginLeft":"-"+imgwidth+"px"},1000, function () {  
        	$(".header-bgimg>ul>li").eq(0).appendTo($(".header-bgimg>ul"));  
            $(".header-bgimg>ul").css("marginLeft","0px");
        });
        // 图片向左无缝轮播 end
	}

	var setIntv = setInterval(function(){turnPage()},4000);
	$(".turnrl").mouseover(function(){
		clearInterval(setIntv);
	});
	$(".turnrl").mouseout(function(){
		clearInterval(setIntv);
		setIntv = setInterval(function(){turnPage()},4000);
	});
	/*自动动向右翻页end*/


	/*搜索框切换start*/
	$(".search-wrapper-mdd").click(function(){
		$(".destination").css("backgroundPosition","0px 0px");
		$(".planing").css("backgroundPosition","0 -128px");
		$(".discount").css("backgroundPosition","0 -217px");
		$(".hotel").css("backgroundPosition","0 -303px");
		$(".panel-mdd").removeClass("hidden");
		$(".panel-zxc").addClass("hidden");
		$(".panel-mzk").addClass("hidden");
		$(".panel-zjd").addClass("hidden");
	});
	$(".search-wrapper-zxc").click(function(){
		$(".destination").css("backgroundPosition","0px -43px");
		$(".planing").css("backgroundPosition","0 -85px");
		$(".discount").css("backgroundPosition","0 -217px");
		$(".hotel").css("backgroundPosition","0 -303px");
		$(".panel-zxc").removeClass("hidden");
		$(".panel-mdd").addClass("hidden");
		$(".panel-mzk").addClass("hidden");
		$(".panel-zjd").addClass("hidden");
	});
	$(".search-wrapper-mzk").click(function(){
		$(".destination").css("backgroundPosition","0px -43px");
		$(".planing").css("backgroundPosition","0 -128px");
		$(".discount").css("backgroundPosition","0 -174px");
		$(".hotel").css("backgroundPosition","0 -303px");
		$(".panel-mzk").removeClass("hidden");
		$(".panel-zxc").addClass("hidden");
		$(".panel-mdd").addClass("hidden");
		$(".panel-zjd").addClass("hidden");
	});
	$(".search-wrapper-zjd").click(function(){
		$(".destination").css("backgroundPosition","0px -43px");
		$(".planing").css("backgroundPosition","0 -128px");
		$(".discount").css("backgroundPosition","0 -217px");
		$(".hotel").css("backgroundPosition","0 -260px");
		$(".panel-zjd").removeClass("hidden");
		$(".panel-zxc").addClass("hidden");
		$(".panel-mzk").addClass("hidden");
		$(".panel-mdd").addClass("hidden");
	});
	/*搜索框切换end*/

	/*鼠标悬浮字体颜色改变start*/
	$(".list-item1,.list-item2,.list-item3").hover(function(){
		$(this).css({"box-shadow":"0 0 10px #868585"});
	},function(){
		$(this).css({"box-shadow":"none"});
	});

	$(".subtitle > p").hover(function(){ 
		$(this).addClass("greencolor");
	},function(){
		$(this).removeClass("greencolor");
	});

	$(".auth-login > a").hover(function(){
		$(this).css({"color":"#1846C7"});
	},function(){
		$(this).css({"color":"#15BB22"});
	});

	$(".reglog > a").hover(function(){
		$(this).css({"background-color":"#069043"});
	},function(){
		$(this).css({"background-color":"#19B936"});
	});

	$(".reglog span a").hover(function(){
		$(this).css({"text-decoration":"underline"});
	},function(){
		$(this).css({"text-decoration":"none"});
	});

	$(".more-price a").hover(function(){
		$(this).css({"color":"#15BB22"});
	},function(){
		$(this).css({"color":"#5D5959"});
	});

	$(".description").hover(function(){ 
		$(this).css({"color":"#15BB22"});
	},function(){
		$(this).css({"color":"#323131"});
	});

	$(".bbs-title").hover(function(){ 
		$(this).css({"color":"#15BB22"});
	},function(){
		$(this).css({"color":"#4B4949"});
	});
	/*鼠标悬浮字体颜色改变end*/

	/*穷游商城切换页面start*/
	$(".market .slider-control-btn:first").addClass("whitebgcolor");
	$(".market .slider-control-btn").mouseover(function(){
		$(".market .slider-control-btn").removeClass("whitebgcolor");
		$(this).addClass("whitebgcolor");
		var mkbtnnum = $(this).text();
		$(".marketbox").addClass("hidden");
		$(".slider"+mkbtnnum).removeClass("hidden");
	});
	/*穷游商城切换页面end*/

	/*热门游记与话题切换页面start*/
	$(".bbs .slider-control-btn:first").css("background-color","#1B9A1B");
	$(".bbs .slider-control-btn").mouseover(function(){
		$(".bbs .slider-control-btn").css("background-color","#A4A1A1");
		$(this).css("background-color","#1B9A1B");
		var bbsbtnnum = $(this).text();
		$(".bbs-slider").addClass("hidden");
		$(".bbs-slider"+bbsbtnnum).removeClass("hidden");
	});
	$(".more-btn").hover(function(){
		$(this).css({"box-shadow":"0 0 5px #9E9D9D"})
	},function(){
		$(this).css({"box-shadow":"none"});
	});
	/*热门游记与话题切换页面end*/

	/* 近期参与头像轮播 start */
	function imgautoscroll(){
		$(".active-person>ul").animate({"marginLeft":"-55px"},1000,function(){
			$(".active-person>ul>li").eq(0).appendTo($(".active-person>ul"));
			$(".active-person>ul").css({"marginLeft":"0px"});
		});
	}
	setInterval(function(){imgautoscroll()},3000);
	/* 近期参与头像轮播 end */

	/*特别策划切换页面start*/
	$(".section-right-listtitle ul li:eq(0)").addClass("greencolor");

	$(".section-right-listtitle ul li").mouseover(function(){
		$(".section-right-listtitle ul li").removeClass("greencolor");
		$(this).addClass("greencolor");
		var srllitext = $(this).text();
		switch(srllitext){
			case "地球研习社":
			srllinum = 1;
			break;
			case "Q-story":
			srllinum = 2;
			break;
			case "去  也":
			srllinum = 3;
			break;
		}
		$(".section-right-pic").addClass("hidden");
		$(".srp-img"+srllinum).removeClass("hidden");
	});

	//自动切换页面
	var m = 1;
	function turnPage2(){
		if(m==3){m=0};
		$(".section-right-listtitle ul li").removeClass("greencolor");
		$(".section-right-listtitle ul li:eq("+m+")").addClass("greencolor");
		$(".section-right-pic").addClass("hidden");
		$(".srp-img"+(m+1)).removeClass("hidden");
		m++;
	}
	var setIntv2 = setInterval(function(){turnPage2()},2000);
	$(".section-right-listtitle ul li").mouseover(function(){
		clearInterval(setIntv2);
	});
	$(".section-right-listtitle ul li").mouseout(function(){
		clearInterval(setIntv2);
		setIntv2 = setInterval(function(){turnPage2()},2000);
	});
	/*特别策划切换页面end*/

	/*底部字体颜色变化start*/
	$(".footer-list-item a, .copyright p a").hover(function(){
		$(this).css({"color":"#ADABAB"});
	},function(){
		$(this).css({"color":"#7D7C7C"});
	});
	$(".websites a").hover(function(){
		$(this).css({"color":"#ADABAB"});
	},function(){
		$(this).css({"color":"#3B3B3B"});
	});
	/*底部字体颜色变化end*/

	/*右下角固定框start*/
	$(".rb-fixed ul li").hover(function(){
		$(this).css({"background-color":"#35B97D"});
	},function(){
		$(this).css({"background-color":"#fff"});
	});

	function hivifixed(){
		var scrolltop = $(document).scrollTop();
		if(scrolltop<300){
			$(".rb-fixed").addClass("hidden");
		}else{
			$(".rb-fixed").removeClass("hidden");
		}
	}
	$(window).load(function(){  //刷新页面的时候
		hivifixed();
	});
	$(window).scroll(function(){   //鼠标滚动的时候
		hivifixed();
	});
	
	/*右下角固定框start*/
});