$(function() {

	var timer = ''; //定时器
	var i = 0;

	// 图片hover公共效果
	$('a.pic').hover(function() {
		$(this).addClass('apic_hover');
		},function() {
		$(this).removeClass('apic_hover');
	})

	// 左边公共tab切换样式
	$('.tab_box a').mouseover(function() {
		$(this).addClass('hot_style').siblings('a').removeClass('hot_style');
		var cur = $(this).index();
		$(this).parents('.hot_l_title').siblings('ul').eq(cur).show().siblings('ul').hide();
	})

	// input表单获得焦点
	$('.search_text').focus(function() {
		$(this).attr('value','');
		$(this).removeClass('search_text').addClass('blue');
	})

	// input表单失去焦点
	$('.search_text').blur(function() {
		$(this).attr('value','请输入你要搜索的内容');
		$(this).removeClass('blue').addClass('search_text');
	})

	// 头部右侧隐藏盒子效果
	$('.user_r').hover(function() {
		$('.hidden_r').show();
	},function() {
		$('.hidden_r').hide();
	})

	// 头部中间隐藏盒子移入效果
	$('.user_m').hover(function() {
		$('.hidden_m').show();
	},function() {
		$('.hidden_m').hide();
	})

	// 头部中间盒子tab切换效果
	$('.hidden_m_top span').mouseover(function() {
		$('.hidden_m_top span').removeClass('span_style');
		$(this).addClass('span_style');
	})

	$('span.history').mouseover(function() {
		$('.history_box').show();
	})

	$('span.update').mouseover(function() {
		$('.history_box').hide();	
	})

	// 轮换版
	$('.smal_pic li').mouseover(function() {
		clearInterval(timer);
		var backImg = $(this).find('img').attr('backImg');
		var backColor = $(this).find('img').attr('backColor');
		var background = 'url(' + backImg + ') no-repeat center' + backColor;
		$('#focus_background').css({background:background});
		$(this).addClass('hover').siblings().removeClass('hover');
		i = $(this).index();
		$('.focus_title a').eq(i).show().siblings('a').hide();
	})



	// 移出小图片开启定时器
	$('.smal_pic li').mouseout(function() {
		timer = setInterval(move,2000);
	})

	timer = setInterval(move,2000);

	function move() {
		if(i>11) {
			i = 0;
		}
		var backImg = $('.smal_pic li').eq(i).find('img').attr('backImg');
		var backColor = $('.smal_pic li').eq(i).find('img').attr('backColor');
		// var background = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		var background = 'url(' + backImg + ') no-repeat center ' + backColor;
		$('#focus_background').css({background:background});
		$('.smal_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
		$('.focus_title a').eq(i).show().siblings('a').hide();
		i++;
	}

	// 轮换版右侧全部鼠标样式
	$('#focus_box .focusrank p.title a').mouseover(function() {
		$(this).addClass('rank_hover').siblings('a').removeClass('rank_hover');
	})

	// 轮换版区域tab切换样式
	$('#focus_box .focusrank p.title a').mouseover(function() {
		var cur = $(this).index();
		$('#focus_box .focusrank .content ul').eq(cur).show().siblings('ul').hide();
	})

	

	// 今日热播左边标题tab切换(开始写的简单的)
/*	$('.hot_l_title .tab_box a').mouseover(function() {
		$(this).addClass('hot_style').siblings('a').removeClass('hot_style');
		var cur = $(this).index();
		$('ul.public').eq(cur).show().siblings('ul').hide();
	})*/



	// 今日热播右边效果
	$('.hot_box .hot_right ul li a.pic img').hover(function() {
		$(this).addClass('apic_hover');
	},function() {
		$(this).removeClass('apic_hover');
	})

	$('.hot_box .hot_right .hot_r_title .tab_right a.tab').mouseover(function() {
		$(this).addClass('hot_style').siblings('a').removeClass('hot_style');
		var cur = $(this).index();
		$('.hot_box .hot_right ul').eq(cur).show().siblings('ul').hide();
	})

	// 电视剧区域右边tab切换效果
	$('.tv_right ul.tab_box li').mouseover(function() {
		$(this).addClass('tv_r_tab').siblings('li').removeClass('tv_r_tab');
		var cur = $(this).index();
		$('.tv_right div.list').eq(cur).show().siblings('div.list').hide();
		$('.tv_right .tag ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();
	})

	// 猜你喜欢点击效果
	var index = 0;
	$('.like .like_left .title_left a.more2').click(function() {
		index--;
		/*if(index == -3) {
			index = 0;
		}*/
		index = (index == -3)?0:index;
		var move = 954*index;
		$('.like .like_left .main_l ul.img_list').stop().animate({'left':move + 'px'},300);
	})

	// 电影区域右边tab切换效果
	$('.movie .movie_right .mov_tab li').mouseover(function() {
		var cur = $(this).index();
		$('.movie .movie_right  div.list').eq(cur).show().siblings('div.list').hide();
		$('.movie .movie_right .tag ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();		
	})

	// vip右边切换效果
	$('.vip .vip_right ul.tab_box li').mouseover(function() {
		var cur = $(this).index();
		$('.vip .vip_right div.list').eq(cur).show().siblings('div.list').hide();
	})

	// 综艺区右侧切换效果
	$('.zy .zy_tab li').mouseover(function(){
		var cur = $(this).index();
		$('.zy .zy_right div.list').eq(cur).show().siblings('div.list').hide();
		$('.zy .zy_right ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();
	})

	// 动漫区域右侧切换效果
	$('.anime .anime_right ul.tab_box li').mouseover(function() {
		var cur = $(this).index();
		$('.anime .anime_right ul.simglist').eq(cur).show().siblings('ul.simglist').hide();
		$('.anime .anime_right ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();
		$('.anime .anime_right div.list').eq(cur).show().siblings('div.list').hide();
	})

	// 百度广告盒子
	$('.baidu_box a').hover(function() {
		$(this).css('opacity',0.5);
	},function() {
 		$(this).css('opacity',1)
	})



})