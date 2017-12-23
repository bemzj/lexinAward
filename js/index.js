$(function(){
	//提示
	var hTime = 600;
	$('.hand').animate({'top':'50%','opacity':0},hTime,function(){
		$(this).css({'top':'60%','opacity':1});
	});
	var handTween = setInterval(function(){
		$('.hand').animate({'top':'50%','opacity':0},hTime,function(){
			$(this).css({'top':'60%','opacity':1});
		});
	},hTime);
	//摇奖
	var hasAward = false;
	var n =  Math.floor(Math.random()*8); //中奖格子
	$('.close').on('click',function(){
		$('.popWindow').fadeOut(500);
	});
	$('.btn').on('click',function(){
		if(hasAward == false)
		{
			hasAward = true;
			var rTime = 100;
			var tCount = 0;
			var rCount = 0;
			var order = [0, 1, 2, 4, 7, 6, 5, 3]
			var rTween = setInterval(function() {
				clearInterval(hTime);
				$('.hand').hide();
				$('.round').eq(order[rCount]).siblings('.round').find('.mc').hide();
				$('.round').eq(order[rCount]).find('.mc').show();
				rCount++;
				tCount++;
				if(rCount == 8) {
					rCount = 0;
				}
				if(tCount>20)
				{
					rTime = 200;
					clearInterval(rTween);
					rTween = setInterval(function() {
						clearInterval(hTime);
						$('.hand').hide();
						$('.round').eq(order[rCount]).siblings('.round').find('.mc').hide();
						$('.round').eq(order[rCount]).find('.mc').show();
						rCount++;
						tCount++;
						if(rCount == 8) {
							rCount = 0;
						}
						if(tCount>30)
						{
							rTime = 400;
							tCount = 0;
							clearInterval(rTween);
							rTween = setInterval(function() {
								clearInterval(hTime);
								
								$('.hand').hide();
								$('.round').eq(order[rCount]).siblings('.round').find('.mc').hide();
								$('.round').eq(order[rCount]).find('.mc').show();
								if(tCount > 4)
								{
									if(order[rCount]==n)
									{
										clearInterval(rTween);
										//是否得奖
										var hasOrNo = 1;
										if(hasOrNo == 1)
										{
											$('.popWindow').fadeIn(500);
											$('.popWindow img').attr('src','img/hasaward.png');
										}else{
											$('.popWindow').fadeIn(500);
											$('.popWindow img').attr('src','img/noAward.png');
										}
									}
								}
								rCount++;	
								tCount++;
								if(rCount == 8) {
									rCount = 0;
								}
								
								
							}, rTime);
						}
					}, rTime);
				}
			}, rTime);
		}else{
			
		}
	});
});