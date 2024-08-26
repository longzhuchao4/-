tongtianta:{
				name:'封神台',
				mode:'identity',
				submode:'封神台',
				showcase:function(init){
					var node=this;
					var player1;
					if(init){
						player1=ui.create.player(null,true).init('shenglilinghua');
						player1.node.marks.remove();
						player1.node.hp.remove();
						player1.style.left='20px';
						player1.style.top='20px';
						player1.style.width='160px';
						player1.style.height='210px';
						player1.style.transform='scale(0.9)';
						player1.node.count.remove();
						this.appendChild(player1);
						this.player1=player1;
					}
					else{
						player1=this.player1;
					}
					var rect1=player1.getBoundingClientRect();
					var func=function(){
						var player2=ui.create.player(null,true).init('yxs_xiangyu');
						player2.node.marks.remove();
						player2.node.hp.remove();
						player2.style.left='auto';
						player2.style.top='20px';
						player2.style.width='160px';
						player2.style.height='210px';
						player2.node.count.remove();
						player2.style.transform='scale(0.7)';
						player2.style.opacity=0;
						node.appendChild(player2);
						ui.refresh(player2);
						player2.style.opacity=1;
						player2.style.transform='scale(0.9)';
						var rect2=player2.getBoundingClientRect();
						var left1=rect1.left+rect1.width/2-ui.arena.offsetLeft;
						var left2=rect2.left+rect2.width/2-ui.arena.offsetLeft;
						var top1=rect1.top+rect1.height/2-ui.arena.offsetTop;
						var top2=rect2.top+rect2.height/2-ui.arena.offsetTop;
						setTimeout(function(){
 						if(!player2) return;
 						game.linexy([left1,top1,left2,top2]);
 						var popup=ui.create.div('.damage');
 						popup.innerHTML='-1';
 						popup.dataset.nature='soil';
 						player2.appendChild(popup);
 						ui.refresh(popup);
 						popup.classList.add('damageadded');
 						popup.listenTransition(function(){
 							setTimeout(function(){
 								popup.delete();
 							},200);
 						});
						},600);
						setTimeout(function(){
							if(!player2) return;
							player2.style.transition='all 0.5s';
							player2.style.transform='scale(1.2)';
							player2.delete();
						},1100);
					};
					node.showcaseinterval=setInterval(func,2600);
					func();
				},
				intro:[
					'睥睨天下，谁是真英雄？',
					'独家打造封神台玩法，各位少侠可爬塔挑战封神台英雄，夺至尊称号，成千古英名！',
					'封神台总计有18层，每上升一层，挑战难度相对会增加。福利层挑战成功，会有隐藏奖励给予',
					'封神台玩法让各位少侠在实战中磨砺实力，进一步提升实力，形成良性循环，以绝强实力称雄武林！',
					'禁将【武则天】',
					(lib.config.tongtianta_level?('你的最高纪录是连续通过'+lib.config.tongtianta_level+'关，是否能够突破这一记录呢？'):'你能否通关封神台，封位至尊呢？'),
				],
				init:function(){
			
					if(!_status.tongtianta) _status.tongtianta={
						completeNumber:0,
						used:[],
						
addFellow:function(name){
							game.fellow=game.addFellow(1,name);
							
				game.fellow.identity='zhong';
				game.fellow.setIdentity();   			  game.fellow.identityShown=true;
					
   				game.fellow.node.identity.classList.remove('guessing');
							_status.event.getParent('phaseLoop').player=game.fellow;
						}, 
	/*				
addFellow:function(name){
    game.fellow = game.addFellow(1, name);    
    game.fellow.identity = 'zhong';
    game.fellow.setIdentity();   
    game.fellow.identityShown = true;
    
    // 创建一个新的图片节点
    var imgNode = document.createElement('img');
    imgNode.src = 'storage/emulated/0/Android/data/com.mohuanbaojusha/extension/十周年/image/icon_youfang.png'; // 设置图片路径
    imgNode.style.position = 'absolute';
    imgNode.style.top = '0';
    imgNode.style.left = '0';
    // 根据需要设置其他样式，例如宽度、高度等

    // 将图片节点添加到身份节点下
    game.fellow.node.identity.appendChild(imgNode);

    // 更新节点样式
    game.fellow.node.identity.classList.remove('guessing');
    _status.event.getParent('phaseLoop').player = game.fellow;
},
*/
					
addEnemy:function(name){

game.fan.dataset.position=3;
ui.arena.setNumber(4);
//game.arrangePlayers();
game.enemy=game.addFellow(2,name);
game.enemy.gain(get.cards(4),"draw");
game.enemy.identity='fan';
game.enemy.setIdentity();
game.enemy.identityShown=true;
game.enemy.node.identity.classList.remove('guessing');
_status.event.getParent('phaseLoop').player=game.fellow;
}, 

	
						completeRewardyou:[
						
						
						
							['前路荆棘密布，召唤队友一同前行',function(){
								var name=_status.characterlist.randomGets(1)[0];
								_status.tongtianta.addFellow(name);
							}],
							
							],
						completeRewardfuwu:[
						

							['<font color=orange>副武将获得技能：【玉步】>	<img src="'+lib.assetURL+'image/baoju/ta/yyubu.jpg" width="40" height="40"></font><br>'+lib.translate.yyubu_info,function(){
								game.fellow.addSkill("yyubu");
								setTimeout(function() {
        game.fellow.removeSkill("yyubu");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yyubu=true;
							}],
								['<font color=orange>副武将获得技能：【回春】>	<img src="'+lib.assetURL+'image/baoju/ta/yhuichun.jpg" width="40" height="40"></font><br>'+lib.translate.yhuichun_info,function(){
								game.fellow.addSkill("yhuichun");
								setTimeout(function() {
        game.fellow.removeSkill("yhuichun");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yhuichun=true;
							}],
								['<font color=orange>副武将获得技能：【治愈】>	<img src="'+lib.assetURL+'image/baoju/ta/yzhiyu.jpg" width="40" height="40"></font><br>'+lib.translate.yzhiyu_info,function(){
								game.fellow.addSkill("yzhiyu");
								setTimeout(function() {
        game.fellow.removeSkill("yzhiyu");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yzhiyu=true;
							}],
						
						
							['<font color=orange>副武将获得技能：【傲剑】><img src="'+lib.assetURL+'image/baoju/ta/yaojian.jpg" width="40" height="40"></font><br>'+lib.translate.yaojian_info,function(){
								game.fellow.addSkill("yaojian");
							}],
						['<font color=orange>副武将获得技能：【豹头】><img src="'+lib.assetURL+'image/baoju/ta/ybaotou.jpg" width="40" height="40"></font><br>'+lib.translate.ybaotou_info,function(){
								game.fellow.addSkill("ybaotou");
								setTimeout(function() {
        game.fellow.removeSkill("ybaotou");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.ybaotou=true;

							}],
						['<font color=orange>副武将获得技能：【妙计】><img src="'+lib.assetURL+'image/baoju/ta/ymiaoji.jpg" width="40" height="40"></font><br>'+lib.translate.ymiaoji_info,function(){
								game.fellow.addSkill("ymiaoji");
							}],
								['<font color=orange>副武将获得技能：【神探】><img src="'+lib.assetURL+'image/baoju/ta/yshentan.jpg" width="40" height="40"></font><br>'+lib.translate.yshentan_info,function(){
								game.fellow.addSkill("yshentan");
							}],
								['<font color=orange>副武将获得技能：【天狼】> <img src="'+lib.assetURL+'image/baoju/ta/ytianlang.jpg" width="40" height="40"></font><br>'+lib.translate.ytianlang_info,function(){
								game.fellow.addSkill("ytianlang");
							}],
							['<font color=orange>副武将获得技能：【烽火】><img src="'+lib.assetURL+'image/baoju/ta/yfenghuo.jpg" width="40" height="40"></font><br>'+lib.translate.yfenghuo_info,function(){
								game.fellow.addSkill("yfenghuo");
							}],
								['<font color=orange>副武将获得技能：【复仇】><img src="'+lib.assetURL+'image/baoju/ta/yfuchou.jpg" width="40" height="40"></font><br>'+lib.translate.yfuchou_info,function(){
								game.fellow.addSkill("yfuchou");
								setTimeout(function() {
        game.fellow.removeSkill("yfuchou");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yfuchou=true;
							}],
							['<font color=orange>副武将获得技能：【迷离】><img src="'+lib.assetURL+'image/baoju/ta/ymili.jpg" width="40" height="40"></font><br>'+lib.translate.ymili_info,function(){
								game.fellow.addSkill("ymili");
								setTimeout(function() {
        game.fellow.removeSkill("ymili");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.ymili=true;
							}],
							['<font color=orange>副武将获得技能：【舍身】><img src="'+lib.assetURL+'image/baoju/ta/ysheshen.jpg" width="40" height="40"></font><br>'+lib.translate.ysheshen_info,function(){
								game.fellow.addSkill("ysheshen");
							}],
							['<font color=orange>副武将获得技能：【驭人】><img src="'+lib.assetURL+'image/baoju/ta/yyuren.jpg" width="40" height="40"></font><br>'+lib.translate.yyuren_info,function(){
								game.fellow.addSkill("yyuren");
							}],
							['<font color=orange>副武将获得技能：【亲征】><img src="'+lib.assetURL+'image/baoju/ta/yqinzheng.jpg" width="40" height="40"></font><br>'+lib.translate.yqinzheng_info,function(){
								game.fellow.addSkill("yqinzheng");
							}],
							['<font color=orange>副武将获得技能：【神力】><img src="'+lib.assetURL+'image/baoju/ta/yshenli.jpg" width="40" height="40"></font><br>'+lib.translate.yshenli_info,function(){
								game.fellow.addSkill("yshenli");
							}],
						
							['<font color=orange>副武将获得技能：【控局】><img src="'+lib.assetURL+'image/baoju/ta/ykongju.jpg" width="40" height="40"></font><br>'+lib.translate.ykongju_info,function(){
								game.fellow.addSkill("ykongju");
							}],
							//],
						//	completeRewardsi:[
				//四星			
				
							['<font color=orange>副武将获得技能：【蝶魂】><img src="'+lib.assetURL+'image/baoju/ta/ydiehun.jpg" width="40" height="40"></font><br>'+lib.translate.ydiehun_info,function(){
								game.fellow.addSkill("ydiehun");
							}],
						
							['<font color=orange>副武将获得技能：【起义】><img src="'+lib.assetURL+'image/baoju/ta/yqiyi.jpg" width="40" height="40"></font><br>'+lib.translate.yqiyi_info,function(){
								game.fellow.addSkill("yqiyi");
								setTimeout(function() {
        game.fellow.removeSkill("yqiyi");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yqiyi=true;
							}],
						
							['<font color=orange>副武将获得技能：【法家】><img src="'+lib.assetURL+'image/baoju/ta/yfajia.jpg" width="40" height="40"></font><br>'+lib.translate.yfajia_info,function(){
								game.fellow.addSkill("yfajia");
							}],
						
							['<font color=orange>副武将获得技能：【攻心】><img src="'+lib.assetURL+'image/baoju/ta/ygongxin.jpg" width="40" height="40"></font><br>'+lib.translate.ygongxin_info,function(){
								game.fellow.addSkill("ygongxin");
								setTimeout(function() {
        game.fellow.removeSkill("ygongxin");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yqiyi=true;
							}],
							['<font color=orange>副武将获得技能：【霸王】><img src="'+lib.assetURL+'image/baoju/ta/ybawang.jpg" width="40" height="40"></font><br>'+lib.translate.ybawang_info,function(){
								game.fellow.addSkill("ybawang");
								setTimeout(function() {
        game.fellow.removeSkill("ybawang");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.ybawang=true;
							}],
							['<font color=orange>副武将获得技能：【侠胆】><img src="'+lib.assetURL+'image/baoju/ta/yxiadan.jpg" width="40" height="40"></font><br>'+lib.translate.yxiadan_info,function(){
								game.fellow.addSkill("yxiadan");
							}],
						['<font color=orange>副武将获得技能：【奸雄】><img src="'+lib.assetURL+'image/baoju/ta/yjianxiong.jpg" width="40" height="40"></font><br>'+lib.translate.yjianxiong_info,function(){
								game.fellow.addSkill("yjianxiong");
								setTimeout(function() {
        game.fellow.removeSkill("yjianxiong");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yjianxiong=true;
							}],	
							['<font color=orange>副武将获得技能：【智圣】><img src="'+lib.assetURL+'image/baoju/ta/yzhisheng.jpg" width="40" height="40"></font><br>'+lib.translate.yzhisheng_info,function(){
								game.fellow.addSkill("yzhisheng");
								setTimeout(function() {
        game.fellow.removeSkill("yzhisheng");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yzhisheng=true;
							}],
							['<font color=orange>副武将获得技能：【身强】><img src="'+lib.assetURL+'image/baoju/ta/yshenqiang.jpg" width="40" height="40"></font><br>'+lib.translate.yshenqiang_info,function(){
								game.fellow.addSkill("yshenqiang");
							}],
							['<font color=orange>副武将获得技能：【相马】><img src="'+lib.assetURL+'image/baoju/ta/yxiangma.jpg" width="40" height="40"></font><br>'+lib.translate.yxiangma_info,function(){
								game.fellow.addSkill("yxiangma");
								setTimeout(function() {
        game.fellow.removeSkill("yxiangma");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yxiangma=true;
							}],
							['<font color=orange>副武将获得技能：【英烈】><img src="'+lib.assetURL+'image/baoju/ta/yyinglie.jpg" width="40" height="40"></font><br>'+lib.translate.yyinglie_info,function(){
								game.fellow.addSkill("yyinglie");
								setTimeout(function() {
        game.fellow.removeSkill("yyinglie");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yyinglie=true;
							}],
					
							['<font color=orange>副武将获得技能：【集权】><img src="'+lib.assetURL+'image/baoju/ta/yjiquan.jpg" width="40" height="40"></font><br>'+lib.translate.yjiquan_info,function(){
								game.fellow.addSkill("yjiquan");
								setTimeout(function() {
        game.fellow.removeSkill("yjiquan");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yjiquan=true;
							}],
							['<font color=orange>副武将获得技能：【醉酒】><img src="'+lib.assetURL+'image/baoju/ta/yzuijiu.jpg" width="40" height="40"></font><br>'+lib.translate.yzuijiu_info,function(){
								game.fellow.addSkill("yzuijiu");
								setTimeout(function() {
        game.fellow.removeSkill("yzuijiu");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yzuijiu=true;
							}],
							['<font color=orange>副武将获得技能：【羞花】><img src="'+lib.assetURL+'image/baoju/ta/yxiuhua.jpg" width="40" height="40"></font><br>'+lib.translate.yxiuhua_info,function(){
								game.fellow.addSkill("yxiuhua");
							}],
							['<font color=orange>副武将获得技能：【纵横】><img src="'+lib.assetURL+'image/baoju/ta/yzongheng.jpg" width="40" height="40"></font><br>'+lib.translate.yzongheng_info,function(){
								game.fellow.addSkill("yzongheng");
							}],	
							//这里
								['回复1点体力并摸一张牌',function(){
								game.zhu.recover();
								game.zhu.draw();
							}],
							['摸三张牌',function(){
								game.zhu.draw(3);
							}],
							['将一张防具牌置入装备区并摸一张牌',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip2'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								game.zhu.draw();
							}],
							['将一张武器牌置入装备区并摸一张牌',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								game.zhu.draw();
							}],
							['回复2点体力并弃置一张牌',function(){
								game.zhu.recover(2);
								game.zhu.chooseToDiscard('he',true);
							}],
							['摸五张牌，然后弃置三张牌',function(){
								game.zhu.draw(5);
								game.zhu.chooseToDiscard(3,'he',true);
							}],
							['摸五张牌，然后对手摸两张牌',function(){
								game.zhu.draw(5);
								game.fan.draw(2);
							}],
							['将一张武器牌和一张防具牌置入装备区',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip2'&&!get.cardtag(card,'gifts');
								});
								if(card2) game.zhu.equip(card2);
							}],
							['将一张武器牌和一张防御坐骑牌置入装备区',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip3'&&!get.cardtag(card,'gifts');
								});
								if(card2) game.zhu.equip(card2);
							}],
							['弃置所有手牌并于下一关获得【涅槃】(标)',function(){
								var hs=game.zhu.getCards('h');
								if(hs.length) game.zhu.discard(hs);
								game.zhu.addSkill('oldniepan');
								game.zhu.restoreSkill('oldniepan');
								game.zhu._oldniepan=true;
							}],
							['获得两张锦囊牌',function(){
								var list=[];
								while(list.length<2){
									var card=get.cardPile(function(card){
										return !list.contains(card)&&get.type(card,'trick')=='trick';
									});
									if(!card) break;
									list.push(card);
								}
								if(list.length) game.zhu.gain(list,'gain2','log');
							}],
							['将体力回复至体力上限，然后弃置一张牌',function(){
								var num=game.zhu.maxHp-game.zhu.hp;
								if(num) game.zhu.recover(num);
								game.zhu.chooseToDiscard('he',true);
							}],
							['弃置两张牌，在下一关的第一个回合后进行一个额外的回合',function(){
								game.zhu.chooseToDiscard(2,true,'he');
								game.zhu.addSkill('qianlidanji_phase');
							}],
							['摸一张牌，然后将对手翻面',function(){
								game.zhu.draw();
								game.fan.turnOver(true);
							}],
							['摸一张牌，然后令对手受到1点伤害',function(){
								game.zhu.draw();
								game.fan.damage(game.zhu);
							}],
							['获得五张基本牌',function(){
								var list=[];
								while(list.length<5){
									var card=get.cardPile(function(card){
										return !list.contains(card)&&get.type(card)=='basic';
									});
									if(!card) break;
									list.push(card);
								}
								if(list.length) game.zhu.gain(list,'gain2','log');
							}],
							['失去1点体力，然后摸五张牌',function(){
								game.zhu.loseHp();
								game.zhu.draw(5);
							}],
							['失去体力至1点，然后摸七张牌',function(){
								var num=game.zhu.hp-1;
								if(num) game.zhu.loseHp(num);
								game.zhu.draw(7)
							}],
							['弃置一张牌，然后令对手受到2点伤害',function(){
								game.zhu.chooseToDiscard('he',true);
								game.fan.damage(game.zhu,2);
							}],
						
							['将一张宝物牌置入装备区并摸一张牌',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip5'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								game.zhu.draw();
							}],
							['摸五张牌，然后将自己翻面',function(){
								game.zhu.draw(5);
								game.zhu.turnOver(true);
							}],
							['获得一张【酒】和一张【杀】',function(){
								var list=[];
								var card=get.cardPile(function(card){
										return card.name=='sha';
									});
								if(card) list.push(card);
								var card=get.cardPile(function(card){
										return card.name=='jiu';
									});
								if(card) list.push(card);
								if(list.length) game.zhu.gain(list,'gain2','log');
							}],					
								
							],
							
							
							
							
								//五星//
						completeRewardwu:[
													

							['<font color=orange>获得技能：【玉步】>	<img src="'+lib.assetURL+'image/baoju/ta/yyubu.jpg" width="40" height="40"></font><br>'+lib.translate.yyubu_info,function(){
								game.zhu.addSkill("yyubu");
								setTimeout(function() {
        game.zhu.removeSkill("yyubu");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yyubu=true;
							}],
								['<font color=orange>获得技能：【回春】>	<img src="'+lib.assetURL+'image/baoju/ta/yhuichun.jpg" width="40" height="40"></font><br>'+lib.translate.yhuichun_info,function(){
								game.zhu.addSkill("yhuichun");
								setTimeout(function() {
        game.zhu.removeSkill("yhuichun");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yhuichun=true;
							}],
								['<font color=orange>获得技能：【治愈】>	<img src="'+lib.assetURL+'image/baoju/ta/yzhiyu.jpg" width="40" height="40"></font><br>'+lib.translate.yzhiyu_info,function(){
								game.zhu.addSkill("yzhiyu");
								setTimeout(function() {
        game.zhu.removeSkill("yzhiyu");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yzhiyu=true;
							}],
						
						
							['<font color=orange>获得技能：【傲剑】><img src="'+lib.assetURL+'image/baoju/ta/yaojian.jpg" width="40" height="40"></font><br>'+lib.translate.yaojian_info,function(){
								game.zhu.addSkill("yaojian");
							}],
						['<font color=orange>获得技能：【豹头】><img src="'+lib.assetURL+'image/baoju/ta/ybaotou.jpg" width="40" height="40"></font><br>'+lib.translate.ybaotou_info,function(){
								game.zhu.addSkill("ybaotou");
								setTimeout(function() {
        game.zhu.removeSkill("ybaotou");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.ybaotou=true;

							}],
						['<font color=orange>获得技能：【妙计】><img src="'+lib.assetURL+'image/baoju/ta/ymiaoji.jpg" width="40" height="40"></font><br>'+lib.translate.ymiaoji_info,function(){
								game.zhu.addSkill("ymiaoji");
							}],
								['<font color=orange>获得技能：【神探】><img src="'+lib.assetURL+'image/baoju/ta/yshentan.jpg" width="40" height="40"></font><br>'+lib.translate.yshentan_info,function(){
								game.zhu.addSkill("yshentan");
							}],
								['<font color=orange>获得技能：【天狼】> <img src="'+lib.assetURL+'image/baoju/ta/ytianlang.jpg" width="40" height="40"></font><br>'+lib.translate.ytianlang_info,function(){
								game.zhu.addSkill("ytianlang");
							}],
							['<font color=orange>获得技能：【烽火】><img src="'+lib.assetURL+'image/baoju/ta/yfenghuo.jpg" width="40" height="40"></font><br>'+lib.translate.yfenghuo_info,function(){
								game.zhu.addSkill("yfenghuo");
							}],
								['<font color=orange>获得技能：【复仇】><img src="'+lib.assetURL+'image/baoju/ta/yfuchou.jpg" width="40" height="40"></font><br>'+lib.translate.yfuchou_info,function(){
								game.zhu.addSkill("yfuchou");
								setTimeout(function() {
        game.zhu.removeSkill("yfuchou");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yfuchou=true;
							}],
							['<font color=orange>获得技能：【迷离】><img src="'+lib.assetURL+'image/baoju/ta/ymili.jpg" width="40" height="40"></font><br>'+lib.translate.ymili_info,function(){
								game.zhu.addSkill("ymili");
								setTimeout(function() {
        game.zhu.removeSkill("ymili");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.ymili=true;
							}],
							['<font color=orange>获得技能：【舍身】><img src="'+lib.assetURL+'image/baoju/ta/ysheshen.jpg" width="40" height="40"></font><br>'+lib.translate.ysheshen_info,function(){
								game.zhu.addSkill("ysheshen");
							}],
							['<font color=orange>获得技能：【驭人】><img src="'+lib.assetURL+'image/baoju/ta/yyuren.jpg" width="40" height="40"></font><br>'+lib.translate.yyuren_info,function(){
								game.zhu.addSkill("yyuren");
							}],
							['<font color=orange>获得技能：【亲征】><img src="'+lib.assetURL+'image/baoju/ta/yqinzheng.jpg" width="40" height="40"></font><br>'+lib.translate.yqinzheng_info,function(){
								game.zhu.addSkill("yqinzheng");
							}],
							['<font color=orange>获得技能：【神力】><img src="'+lib.assetURL+'image/baoju/ta/yshenli.jpg" width="40" height="40"></font><br>'+lib.translate.yshenli_info,function(){
								game.zhu.addSkill("yshenli");
							}],
						
							['<font color=orange>获得技能：【控局】><img src="'+lib.assetURL+'image/baoju/ta/ykongju.jpg" width="40" height="40"></font><br>'+lib.translate.ykongju_info,function(){
								game.zhu.addSkill("ykongju");
							}],
							//],
						//	completeRewardsi:[
				//四星			
				
							['<font color=orange>获得技能：【蝶魂】><img src="'+lib.assetURL+'image/baoju/ta/ydiehun.jpg" width="40" height="40"></font><br>'+lib.translate.ydiehun_info,function(){
								game.zhu.addSkill("ydiehun");
							}],
						
							['<font color=orange>获得技能：【起义】><img src="'+lib.assetURL+'image/baoju/ta/yqiyi.jpg" width="40" height="40"></font><br>'+lib.translate.yqiyi_info,function(){
								game.zhu.addSkill("yqiyi");
								setTimeout(function() {
        game.zhu.removeSkill("yqiyi");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yqiyi=true;
							}],
						
							['<font color=orange>获得技能：【法家】><img src="'+lib.assetURL+'image/baoju/ta/yfajia.jpg" width="40" height="40"></font><br>'+lib.translate.yfajia_info,function(){
								game.zhu.addSkill("yfajia");
							}],
						
							['<font color=orange>获得技能：【攻心】><img src="'+lib.assetURL+'image/baoju/ta/ygongxin.jpg" width="40" height="40"></font><br>'+lib.translate.ygongxin_info,function(){
								game.zhu.addSkill("ygongxin");
								setTimeout(function() {
        game.zhu.removeSkill("ygongxin");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yqiyi=true;
							}],
							['<font color=orange>获得技能：【霸王】><img src="'+lib.assetURL+'image/baoju/ta/ybawang.jpg" width="40" height="40"></font><br>'+lib.translate.ybawang_info,function(){
								game.zhu.addSkill("ybawang");
								setTimeout(function() {
        game.zhu.removeSkill("ybawang");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.ybawang=true;
							}],
							['<font color=orange>获得技能：【侠胆】><img src="'+lib.assetURL+'image/baoju/ta/yxiadan.jpg" width="40" height="40"></font><br>'+lib.translate.yxiadan_info,function(){
								game.zhu.addSkill("yxiadan");
							}],
						['<font color=orange>获得技能：【奸雄】><img src="'+lib.assetURL+'image/baoju/ta/yjianxiong.jpg" width="40" height="40"></font><br>'+lib.translate.yjianxiong_info,function(){
								game.zhu.addSkill("yjianxiong");
								setTimeout(function() {
        game.zhu.removeSkill("yjianxiong");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yjianxiong=true;
							}],	
							['<font color=orange>获得技能：【智圣】><img src="'+lib.assetURL+'image/baoju/ta/yzhisheng.jpg" width="40" height="40"></font><br>'+lib.translate.yzhisheng_info,function(){
								game.zhu.addSkill("yzhisheng");
								setTimeout(function() {
        game.zhu.removeSkill("yzhisheng");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yzhisheng=true;
							}],
							['<font color=orange>获得技能：【身强】><img src="'+lib.assetURL+'image/baoju/ta/yshenqiang.jpg" width="40" height="40"></font><br>'+lib.translate.yshenqiang_info,function(){
								game.zhu.addSkill("yshenqiang");
							}],
							['<font color=orange>获得技能：【相马】><img src="'+lib.assetURL+'image/baoju/ta/yxiangma.jpg" width="40" height="40"></font><br>'+lib.translate.yxiangma_info,function(){
								game.zhu.addSkill("yxiangma");
								setTimeout(function() {
        game.zhu.removeSkill("yxiangma");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yxiangma=true;
							}],
							['<font color=orange>获得技能：【英烈】><img src="'+lib.assetURL+'image/baoju/ta/yyinglie.jpg" width="40" height="40"></font><br>'+lib.translate.yyinglie_info,function(){
								game.zhu.addSkill("yyinglie");
								setTimeout(function() {
        game.zhu.removeSkill("yyinglie");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yyinglie=true;
							}],
					
							['<font color=orange>获得技能：【集权】><img src="'+lib.assetURL+'image/baoju/ta/yjiquan.jpg" width="40" height="40"></font><br>'+lib.translate.yjiquan_info,function(){
								game.zhu.addSkill("yjiquan");
								setTimeout(function() {
        game.zhu.removeSkill("yjiquan");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yjiquan=true;
							}],
							['<font color=orange>获得技能：【醉酒】><img src="'+lib.assetURL+'image/baoju/ta/yzuijiu.jpg" width="40" height="40"></font><br>'+lib.translate.yzuijiu_info,function(){
								game.zhu.addSkill("yzuijiu");
								setTimeout(function() {
        game.zhu.removeSkill("yzuijiu");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yzuijiu=true;
							}],
							['<font color=orange>获得技能：【羞花】><img src="'+lib.assetURL+'image/baoju/ta/yxiuhua.jpg" width="40" height="40"></font><br>'+lib.translate.yxiuhua_info,function(){
								game.zhu.addSkill("yxiuhua");
							}],
							['<font color=orange>获得技能：【纵横】><img src="'+lib.assetURL+'image/baoju/ta/yzongheng.jpg" width="40" height="40"></font><br>'+lib.translate.yzongheng_info,function(){
								game.zhu.addSkill("yzongheng");
							}],
							//这里
								['回复1点体力并摸一张牌',function(){
								game.zhu.recover();
								game.zhu.draw();
							}],
							['摸三张牌',function(){
								game.zhu.draw(3);
							}],
							['将一张防具牌置入装备区并摸一张牌',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip2'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								game.zhu.draw();
							}],
							['将一张武器牌置入装备区并摸一张牌',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								game.zhu.draw();
							}],
							['回复2点体力并弃置一张牌',function(){
								game.zhu.recover(2);
								game.zhu.chooseToDiscard('he',true);
							}],
							['摸五张牌，然后弃置三张牌',function(){
								game.zhu.draw(5);
								game.zhu.chooseToDiscard(3,'he',true);
							}],
							['摸五张牌，然后对手摸两张牌',function(){
								game.zhu.draw(5);
								game.fan.draw(2);
							}],
							['将一张武器牌和一张防具牌置入装备区',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip2'&&!get.cardtag(card,'gifts');
								});
								if(card2) game.zhu.equip(card2);
							}],
							['将一张武器牌和一张防御坐骑牌置入装备区',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip1'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								var card2=get.cardPile(function(card){
									return get.subtype(card)=='equip3'&&!get.cardtag(card,'gifts');
								});
								if(card2) game.zhu.equip(card2);
							}],
							['弃置所有手牌并于下一关获得【涅槃】(标)',function(){
								var hs=game.zhu.getCards('h');
								if(hs.length) game.zhu.discard(hs);
								game.zhu.addSkill('oldniepan');
								game.zhu.restoreSkill('oldniepan');
								game.zhu._oldniepan=true;
							}],
							['获得两张锦囊牌',function(){
								var list=[];
								while(list.length<2){
									var card=get.cardPile(function(card){
										return !list.contains(card)&&get.type(card,'trick')=='trick';
									});
									if(!card) break;
									list.push(card);
								}
								if(list.length) game.zhu.gain(list,'gain2','log');
							}],
							['将体力回复至体力上限，然后弃置一张牌',function(){
								var num=game.zhu.maxHp-game.zhu.hp;
								if(num) game.zhu.recover(num);
								game.zhu.chooseToDiscard('he',true);
							}],
							['弃置两张牌，在下一关的第一个回合后进行一个额外的回合',function(){
								game.zhu.chooseToDiscard(2,true,'he');
								game.zhu.addSkill('qianlidanji_phase');
							}],
							['摸一张牌，然后将对手翻面',function(){
								game.zhu.draw();
								game.fan.turnOver(true);
							}],
							['摸一张牌，然后令对手受到1点伤害',function(){
								game.zhu.draw();
								game.fan.damage(game.zhu);
							}],
							['获得五张基本牌',function(){
								var list=[];
								while(list.length<5){
									var card=get.cardPile(function(card){
										return !list.contains(card)&&get.type(card)=='basic';
									});
									if(!card) break;
									list.push(card);
								}
								if(list.length) game.zhu.gain(list,'gain2','log');
							}],
							['失去1点体力，然后摸五张牌',function(){
								game.zhu.loseHp();
								game.zhu.draw(5);
							}],
							['失去体力至1点，然后摸七张牌',function(){
								var num=game.zhu.hp-1;
								if(num) game.zhu.loseHp(num);
								game.zhu.draw(7)
							}],
							['弃置一张牌，然后令对手受到2点伤害',function(){
								game.zhu.chooseToDiscard('he',true);
								game.fan.damage(game.zhu,2);
							}],
						
							['将一张宝物牌置入装备区并摸一张牌',function(){
								var card=get.cardPile(function(card){
									return get.subtype(card)=='equip5'&&!get.cardtag(card,'gifts');
								});
								if(card) game.zhu.equip(card);
								game.zhu.draw();
							}],
							['摸五张牌，然后将自己翻面',function(){
								game.zhu.draw(5);
								game.zhu.turnOver(true);
							}],
							['获得一张【酒】和一张【杀】',function(){
								var list=[];
								var card=get.cardPile(function(card){
										return card.name=='sha';
									});
								if(card) list.push(card);
								var card=get.cardPile(function(card){
										return card.name=='jiu';
									});
								if(card) list.push(card);
								if(list.length) game.zhu.gain(list,'gain2','log');
							}],						
								
							],
							
							//辅印技能
								completeRewardfufuyin:[
							
						
							
							['<font color=orange>副武将获得技能：【狼烟】><img src="'+lib.assetURL+'image/baoju/ta/ylangyan.jpg" width="40" height="40"></font><br>'+lib.translate.ylangyan_info,function(){
								game.fellow.addSkill("langyanf");
								setTimeout(function() {
        game.fellow.removeSkill("langyanf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.langyanf=true;
							}],
							['<font color=orange>副武将获得技能：【强化】><img src="'+lib.assetURL+'image/baoju/ta/yqianghua.jpg" width="40" height="40"></font><br>'+lib.translate.yqianghua_info,function(){
								game.fellow.addSkill("qianghuaf");
								setTimeout(function() {
        game.fellow.removeSkill("qianghuaf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.qianghuaf=true;
							}],
							['<font color=orange>副武将获得技能：【精准】><img src="'+lib.assetURL+'image/baoju/ta/yjingzhun.jpg" width="40" height="40"></font><br>'+lib.translate.yjingzhun_info,function(){
								game.fellow.addSkill("jingfellownf");
								setTimeout(function() {
        game.fellow.removeSkill("jingzhunf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.jingzhunf=true;
							}],
							['<font color=orange>副武将获得技能：【吸血】><img src="'+lib.assetURL+'image/baoju/ta/yxixue.jpg" width="40" height="40"></font><br>'+lib.translate.yxixue_info,function(){
								game.fellow.addSkill("xixuef");
								setTimeout(function() {
        game.fellow.removeSkill("xixuef");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.xixuef=true;
							}],
							['<font color=orange>副武将获得技能：【杀之贪】><img src="'+lib.assetURL+'image/baoju/ta/yshazhitan.jpg" width="40" height="40"></font><br>'+lib.translate.yshazhitan_info,function(){
								game.fellow.addSkill("shazhitanf");
								setTimeout(function() {
        game.fellow.removeSkill("shazhitanf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.shazhitanf=true;
							}],
							['<font color=orange>副武将获得技能：【贪之手】><img src="'+lib.assetURL+'image/baoju/ta/ytanzhishou.jpg" width="40" height="40"></font><br>'+lib.translate.ytanzhishou_info,function(){
								game.fellow.addSkill("tanzhishouf");
								setTimeout(function() {
        game.fellow.removeSkill("tanzhishouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.tanzhishouf=true;
							}],
							['<font color=orange>副武将获得技能：【红御守】><img src="'+lib.assetURL+'image/baoju/ta/yhongyushou.jpg" width="40" height="40"></font><br>'+lib.translate.yhongyushou_info,function(){
								game.fellow.addSkill("hongyushouf");
								setTimeout(function() {
        game.fellow.removeSkill("hongyushouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.hongyushouf=true;
							}],
							['<font color=orange>副武将获得技能：【黑御守】><img src="'+lib.assetURL+'image/baoju/ta/yheiyushou.jpg" width="40" height="40"></font><br>'+lib.translate.yheiyushou_info,function(){
								game.fellow.addSkill("heiyushouf");
								setTimeout(function() {
        game.fellow.removeSkill("heiyushouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.heiyushouf=true;
							}],
								['<font color=orange>副武将获得技能：【红杀盾】><img src="'+lib.assetURL+'image/baoju/ta/yhongshadun.jpg" width="40" height="40"></font><br>'+lib.translate.yhongshadun_info,function(){
								game.fellow.addSkill("hongshadunf");
								setTimeout(function() {
        game.fellow.removeSkill("hongshadunf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.hongshadunf=true;
							}],
								['<font color=orange>副武将获得技能：【黑杀盾】><img src="'+lib.assetURL+'image/baoju/ta/yheishadun.jpg" width="40" height="40"></font><br>'+lib.translate.heishadunf_info,function(){
								game.fellow.addSkill("heishadunf");
								setTimeout(function() {
        game.fellow.removeSkill("heishadunf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.heishadunf=true;
							}],
								['<font color=orange>副武将获得技能：【石化】><img src="'+lib.assetURL+'image/baoju/ta/yshihua.jpg" width="40" height="40"></font><br>'+lib.translate.yshihua_info,function(){
								game.fellow.addSkill("shihuaf");
								setTimeout(function() {
        game.fellow.removeSkill("shihuaf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.shihuaf=true;
							}],
								['<font color=orange>副武将获得技能：【卸甲】><img src="'+lib.assetURL+'image/baoju/ta/yxiejia.jpg" width="40" height="40"></font><br>'+lib.translate.yxiejia_info,function(){
								game.fellow.addSkill("xiejiaf");
								setTimeout(function() {
        game.fellow.removeSkill("xiejiaf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.xiejiaf=true;
							}],
								['<font color=orange>副武将获得技能：【伤之贪】><img src="'+lib.assetURL+'image/baoju/ta/yshangzhitan.jpg" width="40" height="40"></font><br>'+lib.translate.yshangzhitan_info,function(){
								game.fellow.addSkill("shangzhitanf");
								setTimeout(function() {
        game.fellow.removeSkill("shangzhitanf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.shangzhitanf=true;
							}],
								['<font color=orange>副武将获得技能：【伤之仇】><img src="'+lib.assetURL+'image/baoju/ta/yshangzhichou.jpg" width="40" height="40"></font><br>'+lib.translate.yshangzhichou_info,function(){
								game.fellow.addSkill("shangzhichouf");
								setTimeout(function() {
        game.fellow.removeSkill("shangzhichouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.shangzhichouf=true;
							}],
								['<font color=orange>副武将获得技能：【重甲】><img src="'+lib.assetURL+'image/baoju/ta/yzhongjia.jpg" width="40" height="40"></font><br>'+lib.translate.yzhongjia_info,function(){
								game.fellow.addSkill("yzhongjia");
								setTimeout(function() {
        game.fellow.removeSkill("yzhongjia");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.yzhongjia=true;
							}],
								['<font color=orange>副武将获得技能：【万剑】><img src="'+lib.assetURL+'image/baoju/ta/ywanjian.jpg" width="40" height="40"></font><br>'+lib.translate.ywanjian_info,function(){
								game.fellow.addSkill("wanjian");
								setTimeout(function() {
        game.fellow.removeSkill("wanjianf");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.wanjianf=true;
							}],
								['<font color=orange>副武将获得技能：【伤之削】><img src="'+lib.assetURL+'image/baoju/ta/yshangzhixiao.jpg" width="40" height="40"></font><br>'+lib.translate.yshangzhixiao_info,function(){
								game.fellow.addSkill("shangzhixiaof");
								setTimeout(function() {
        game.fellow.removeSkill("shangzhixiaof");
    }, 200000); // 设置1秒1000移除技能
    
    game.fellow.shangzhixiaof=true;
							}],
							
						],
						                                          completeRewardfuyin:[
														
							['<font color=orange>获得技能：【狼烟】><img src="'+lib.assetURL+'image/baoju/ta/ylangyan.jpg" width="40" height="40"></font><br>'+lib.translate.ylangyan_info,function(){
								game.zhu.addSkill("langyanf");
								setTimeout(function() {
        game.zhu.removeSkill("langyanf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.langyanf=true;
							}],
							['<font color=orange>获得技能：【强化】><img src="'+lib.assetURL+'image/baoju/ta/yqianghua.jpg" width="40" height="40"></font><br>'+lib.translate.yqianghua_info,function(){
								game.zhu.addSkill("qianghuaf");
								setTimeout(function() {
        game.zhu.removeSkill("qianghuaf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.qianghuaf=true;
							}],
							['<font color=orange>获得技能：【精准】><img src="'+lib.assetURL+'image/baoju/ta/yjingzhun.jpg" width="40" height="40"></font><br>'+lib.translate.yjingzhun_info,function(){
								game.zhu.addSkill("jingzhunf");
								setTimeout(function() {
        game.zhu.removeSkill("jingzhunf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.jingzhunf=true;
							}],
							['<font color=orange>获得技能：【吸血】><img src="'+lib.assetURL+'image/baoju/ta/yxixue.jpg" width="40" height="40"></font><br>'+lib.translate.yxixue_info,function(){
								game.zhu.addSkill("xixuef");
								setTimeout(function() {
        game.zhu.removeSkill("xixuef");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.xixuef=true;
							}],
							['<font color=orange>获得技能：【杀之贪】><img src="'+lib.assetURL+'image/baoju/ta/yshazhitan.jpg" width="40" height="40"></font><br>'+lib.translate.yshazhitan_info,function(){
								game.zhu.addSkill("shazhitanf");
								setTimeout(function() {
        game.zhu.removeSkill("shazhitanf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.shazhitanf=true;
							}],
							['<font color=orange>获得技能：【贪之手】><img src="'+lib.assetURL+'image/baoju/ta/ytanzhishou.jpg" width="40" height="40"></font><br>'+lib.translate.ytanzhishou_info,function(){
								game.zhu.addSkill("tanzhishouf");
								setTimeout(function() {
        game.zhu.removeSkill("tanzhishouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.tanzhishouf=true;
							}],
							['<font color=orange>获得技能：【红御守】><img src="'+lib.assetURL+'image/baoju/ta/yhongyushou.jpg" width="40" height="40"></font><br>'+lib.translate.yhongyushou_info,function(){
								game.zhu.addSkill("hongyushouf");
								setTimeout(function() {
        game.zhu.removeSkill("hongyushouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.hongyushouf=true;
							}],
							['<font color=orange>获得技能：【黑御守】><img src="'+lib.assetURL+'image/baoju/ta/yheiyushou.jpg" width="40" height="40"></font><br>'+lib.translate.yheiyushou_info,function(){
								game.zhu.addSkill("heiyushouf");
								setTimeout(function() {
        game.zhu.removeSkill("heiyushouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.heiyushouf=true;
							}],
								['<font color=orange>获得技能：【红杀盾】><img src="'+lib.assetURL+'image/baoju/ta/yhongshadun.jpg" width="40" height="40"></font><br>'+lib.translate.yhongshadun_info,function(){
								game.zhu.addSkill("hongshadunf");
								setTimeout(function() {
        game.zhu.removeSkill("hongshadunf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.hongshadunf=true;
							}],
								['<font color=orange>获得技能：【黑杀盾】><img src="'+lib.assetURL+'image/baoju/ta/yheishadun.jpg" width="40" height="40"></font><br>'+lib.translate.heishadunf_info,function(){
								game.zhu.addSkill("heishadunf");
								setTimeout(function() {
        game.zhu.removeSkill("heishadunf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.heishadunf=true;
							}],
								['<font color=orange>获得技能：【石化】><img src="'+lib.assetURL+'image/baoju/ta/yshihua.jpg" width="40" height="40"></font><br>'+lib.translate.yshihua_info,function(){
								game.zhu.addSkill("shihuaf");
								setTimeout(function() {
        game.zhu.removeSkill("shihuaf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.shihuaf=true;
							}],
								['<font color=orange>获得技能：【卸甲】><img src="'+lib.assetURL+'image/baoju/ta/yxiejia.jpg" width="40" height="40"></font><br>'+lib.translate.yxiejia_info,function(){
								game.zhu.addSkill("xiejiaf");
								setTimeout(function() {
        game.zhu.removeSkill("xiejiaf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.xiejiaf=true;
							}],
								['<font color=orange>获得技能：【伤之贪】><img src="'+lib.assetURL+'image/baoju/ta/yshangzhitan.jpg" width="40" height="40"></font><br>'+lib.translate.yshangzhitan_info,function(){
								game.zhu.addSkill("shangzhitanf");
								setTimeout(function() {
        game.zhu.removeSkill("shangzhitanf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.shangzhitanf=true;
							}],
								['<font color=orange>获得技能：【伤之仇】><img src="'+lib.assetURL+'image/baoju/ta/yshangzhichou.jpg" width="40" height="40"></font><br>'+lib.translate.yshangzhichou_info,function(){
								game.zhu.addSkill("shangzhichouf");
								setTimeout(function() {
        game.zhu.removeSkill("shangzhichouf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.shangzhichouf=true;
							}],
								['<font color=orange>获得技能：【重甲】><img src="'+lib.assetURL+'image/baoju/ta/yzhongjia.jpg" width="40" height="40"></font><br>'+lib.translate.yzhongjia_info,function(){
								game.zhu.addSkill("yzhongjia");
								setTimeout(function() {
        game.zhu.removeSkill("yzhongjia");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.yzhongjia=true;
							}],
								['<font color=orange>获得技能：【万剑】><img src="'+lib.assetURL+'image/baoju/ta/ywanjian.jpg" width="40" height="40"></font><br>'+lib.translate.ywanjian_info,function(){
								game.zhu.addSkill("wanjian");
								setTimeout(function() {
        game.zhu.removeSkill("wanjianf");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.wanjianf=true;
							}],
								['<font color=orange>获得技能：【伤之削】><img src="'+lib.assetURL+'image/baoju/ta/yshangzhixiao.jpg" width="40" height="40"></font><br>'+lib.translate.yshangzhixiao_info,function(){
								game.zhu.addSkill("shangzhixiaof");
								setTimeout(function() {
        game.zhu.removeSkill("shangzhixiaof");
    }, 200000); // 设置1秒1000移除技能
    
    game.zhu.shangzhixiaof=true;
							}],
							
						],
						replace_character:function(){
							'step 0'
								
							_status.tongtianta.completeNumber++;
							if(!lib.config.tongtianta_level||lib.config.tongtianta_level<_status.tongtianta.completeNumber){
								lib.config.tongtianta_level=_status.tongtianta.completeNumber;
								game.saveConfig('tongtianta_level',lib.config.tongtianta_level);
							}
						
							'step 1'
							if(_status.tongtianta.completeNumber==2){
						var list=_status.characterlist.randomGets(5);
           game.zhu.chooseButton(ui.create.dialog('前路困难重重，我来助你一臂之力：',[list,'character']),true,function(button){
           if(Math.random()>0.5) return Math.random();
           return false;
      }); 
						}
							'step 2'
        if(result.bool){
      var character = result.buttons[0].link;
    _status.tongtianta.addFellow(character);
     }

								if(game.enemy&&!game.enemy.isAlive()){
								var cards=game.enemy.getCards('hej');		
								while(cards.length){
									ui.discardPile.appendChild(cards.shift());
								}
								game.dead.remove(game.enemy);
								game.enemy.remove();
							
							}
						


							
							if(game.fellow&&!game.fellow.isAlive()){
							game.fellow.revive(1);
							
							}
								if(game.fellow&&game.fellow.isAlive()){
								var cards=game.fellow.getCards('hej');		
								while(cards.length){
									ui.discardPile.appendChild(cards.shift());
								}
							//game.fellow.lose(game.fellow.getCards('hej'),ui.special);
							game.fellow.gain(get.cards(5),"draw");
							
							}
							
							//随机位置
							if(_status.tongtianta.completeNumber==1){
							
 							var list=_status.tongtianta.completeRewardwu.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 								
 							}
 							
 							
 							
 							
 							
  	if(_status.tongtianta.completeNumber==100){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							
							
								if(_status.tongtianta.completeNumber==3){
 							var list=_status.tongtianta.completeRewardfuwu.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 							}
 							if(_status.tongtianta.completeNumber>=30){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							
							if(_status.tongtianta.completeNumber==5){
 							var list=_status.tongtianta.completeRewardfuyin.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 							}
 							if(_status.tongtianta.completeNumber>=30){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							
							if(_status.tongtianta.completeNumber==7&&game.fellow.isAlive()){
 							var list=_status.tongtianta.completeRewardfufuyin.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 							}
 							if(_status.tongtianta.completeNumber>=30){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							
							
							if(_status.tongtianta.completeNumber==9&&game.fellow.isAlive()){
 							var list=_status.tongtianta.completeRewardfuyin.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 							}
 							if(_status.tongtianta.completeNumber>=30){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							
								if(_status.tongtianta.completeNumber==11){
 							var list=_status.tongtianta.completeRewardfufuyin.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 							}
 							if(_status.tongtianta.completeNumber>=30){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							
							
								if(_status.tongtianta.completeNumber==13&&game.fellow.isAlive()){
 							var list=_status.tongtianta.completeRewardwu.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 							}
 							if(_status.tongtianta.completeNumber>=30){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							
							if(_status.tongtianta.completeNumber==15){
 							var list=_status.tongtianta.completeRewardfuwu.randomGets(4);
 							var list2=[];
 							for(var i=0;i<list.length;i++){
 								list2.push(list[i][1]);
 								list[i]=list[i][0];
 							}
 							if(_status.tongtianta.completeNumber>=30){
 								list.push('我不想再打了，直接在这里结束吧！');
 								list2.push(function(){
 									game.over(true);
 								});
 							}
 							event.list=list2;
 							game.zhu.chooseControl().set('choiceList',list).set('prompt','请选择一项奖励（当前已通过'+_status.tongtianta.completeNumber+'关）');
							}
							if(_status.tongtianta.completeNumber==18){
 									game.over(true);
 							}
 	_status.characterlist.removeArray(_status.tongtianta.used);
							'step 3'
							if(_status.tongtianta.completeNumber!=20){
   	game.zhu.discard(game.zhu.getCards('hej'));
			game.zhu.draw(5);
 							};
    
    
							if(_status.tongtianta.completeNumber>3){

							
					/*	game.zhu.chooseButton(['选择下一关出战的对手',[_status.characterlist.randomGets(5),'character']],true); */
						}
								event.reward=event.list[result.index];
							_status.characterlist.removeArray(_status.tongtianta.used);

							'step 4'
			
			'step 5'
					var guankakshu = document.getElementById('guankakshu');
if (guankakshu) {
  guankakshu.parentNode.removeChild(guankakshu);
}		
var guankakshu = document.createElement('div');
var cengshu=_status.tongtianta.completeNumber+1;guankakshu.id = 'guankakshu';
guankakshu.innerHTML ="封神台 "+cengshu+"层";
guankakshu.classList.add('guankakshu'); 
document.body.appendChild(guankakshu);
							
							
							
							
			var zhuyin=["yliaoshang","yyubu","ybaotou","ytianlang","yyuren","yshixin","ydiehun","yfenghuo","ykongju","yshenli","yguiyin","yxiadan","ysheshen","yqinzheng","ymiaoji","yshentou","yfajia"];
		    var fuyin=["ywumu","ytuqiang","yshiquan","yqingying","yshixin","ydiehun","yfenghuo","ymeihuo","ytouji","ysanbanfu","yhongyan","ydongcha","yhouzhu","yheqin","yfanji","yxumou","ychongru","yshouli","ywangshen","yzhiyu","yqianglve","ygongxin","yhuoshen","yhongzhuang","ybawang","yzuijiu","yyongchuang","yaojian","ybiaoqi","yfeijiang","ycike","yjianxiong","yqingling","yrende","ychenyu","yshenduan","yshangli","yzhanbu","yqiyi","ylumang","ybingxian","yjujian","ychuchu","ycifu","yjingzhun","yxixue","yshihua","yshenqiang","yshangzhichou","yshangzhitan","yshazhitan","ytanzhishou","yyixin","yzhongjia","yxiejia","yshangzhixiao"];
				var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
							
							
							_status.event.getParent('phaseLoop').player=game.zhu;
							var sj=_status.characterlist.randomGets(1)[0];
 						_status.characterlist.remove(sj);
 						_status.tongtianta.used.push(sj);
 						game.addVideo('reinit',source,[sj]);
 						
								
							//关卡
								if(_status.tongtianta.completeNumber==1){
									if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							var name="yxs_gongbing";

 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(name);

 							/*for(var i=0;i<fu1.length;i++){
 							source.addSkill(fu1[i]);
 							}
 						*/
 						game.addVideo('reinit',source,[name]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
								if(_status.tongtianta.completeNumber==2){
						_status.tongtianta.addEnemy("yxs_xiangyu");	 	
									 							if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							var name="yxs_gongbing";
 						source.revive(null,false);
 					
 						source.uninit();
 						source.init(name);
 						/*for(var i=0;i<fu1.length;i++){
 							game.enemy.addSkill(fu1[i]);
 							}*/
 						game.addVideo('reinit',source,[name]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 							if(_status.tongtianta.completeNumber==3){
						_status.tongtianta.addEnemy("yxs_xiangyu");	 	
						for(var i=0;i<fu1.length;i++){
 							game.enemy.addSkill(fu1[i]);
 							}
							 							if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
						var nam=sj;
 						source.revive(null,false);
 						source.uninit();
 						source.init(nam);
 						/*var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu1.length;i++){
 							source.addSkill(zhu1[i]);
 							}
 				*/
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 							//第四关
 						if(_status.tongtianta.completeNumber==4){
						_status.tongtianta.addEnemy("yxs_jingke");	 	
								for(var i=0;i<fu1.length;i++){
 							game.enemy.addSkill(fu1[i]);
 							} 	
											if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<fu1.length;i++){
 							source.addSkill(fu1[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 						if(_status.tongtianta.completeNumber==5){
						_status.tongtianta.addEnemy("yxs_lishimin");	 	
								for(var i=0;i<fu1.length;i++){
 							game.enemy.addSkill(fu1[i]);
 							} 	
										if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu; 
}
							var source=game.fan; 
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu1.length;i++){
 							source.addSkill(zhu1[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 							if(_status.tongtianta.completeNumber==6){
						_status.tongtianta.addEnemy("yxs_yangyuhuan");	 	
								for(var i=0;i<fu1.length;i++){
 							game.enemy.addSkill(fu1[i]);
 							} 	
											if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhufu.length;i++){
 							source.addSkill(zhufu[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 							if(_status.tongtianta.completeNumber==7){
						_status.tongtianta.addEnemy("yxs_zhaofeiyan");	 	
								for(var i=0;i<fu2.length;i++){
 							game.enemy.addSkill(fu2[i]);
 							}		 	
											if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<fu2.length;i++){
 							source.addSkill(fu2[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 							if(_status.tongtianta.completeNumber==8){
						_status.tongtianta.addEnemy("yxs_direnjie");
							 	for(var i=0;i<zhufu.length;i++){
 							game.enemy.addSkill(zhu1fu2[i]);
 							}
											if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhufu.length;i++){
 							source.addSkill(zhufu[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 							if(_status.tongtianta.completeNumber==9){
						_status.tongtianta.addEnemy("yxs_zhangsanfeng");	 	
							for(var i=0;i<zhu1fu2.length;i++){
 							game.enemy.addSkill(zhu1fu2[i]);
 							}		 	
											if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu1fu2.length;i++){
 							source.addSkill(zhu1fu2[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						if(_status.tongtianta.completeNumber==10){
						_status.tongtianta.addEnemy("yxs_renhuanzhi");	 	
						
								for(var i=0;i<fu1.length;i++){
 							game.enemy.addSkill(fu1[i]);
 							}	 	
											if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu1fu2.length;i++){
 							source.addSkill(zhu1fu2[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						if(_status.tongtianta.completeNumber==11){
						_status.tongtianta.addEnemy("yxs_shiqian");	 	
								for(var i=0;i<fu2.length;i++){
 							game.enemy.addSkill(fu2[i]);
 							}
											if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhufu.length;i++){
 							source.addSkill(zhufu[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 							if(_status.tongtianta.completeNumber==12){
						_status.tongtianta.addEnemy("yxs_linchong");	 	
							for(var i=0;i<zhufu.length;i++){
 							game.enemy.addSkill(zhufu[i]);
 							}	 	
										if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhufu.length;i++){
 							source.addSkill(zhufu[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 						if(_status.tongtianta.completeNumber==13){
						_status.tongtianta.addEnemy("yxs_zhuyuanzhang");	 	
								for(var i=0;i<fu1.length;i++){
 							game.enemy.addSkill(fu1[i]);
 							} 		
								if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu1.length;i++){
 							source.addSkill(zhu1[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 						if(_status.tongtianta.completeNumber==14){
						_status.tongtianta.addEnemy("yxs_shangyang");	 	
							for(var i=0;i<fu2.length;i++){
 							game.enemy.addSkill(fu2[i]);
 							}	
										if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhufu.length;i++){
 							source.addSkill(zhufu[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 						if(_status.tongtianta.completeNumber==15){
						_status.tongtianta.addEnemy("yxs_liubang");	 	
							for(var i=0;i<zhu1fu2.length;i++){
 							game.enemy.addSkill(zhu1fu2[i]);
 							}	 					
				if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu1fu2.length;i++){
 							source.addSkill(zhu1fu2[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 							if(_status.tongtianta.completeNumber==16){
						_status.tongtianta.addEnemy("yxs_goujian");	 	
							for(var i=0;i<zhu1fu2.length;i++){
 							game.enemy.addSkill(zhu1fu2[i]);
 							}	 				
 							game.enemy.draw(4);		
								if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu2fu2.length;i++){
 							source.addSkill(zhu2fu2[i]);
 							}
 							
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 						if(_status.tongtianta.completeNumber==17){
						_status.tongtianta.addEnemy("yxs_zhangfei");	 	
							for(var i=0;i<zhu2fu2.length;i++){
 							game.enemy.addSkill(zhu2fu2[i]);
 							}	 	
 							game.enemy.draw(4);	
										if (Math.random() < 0.5) {
_status.event.getParent('phaseLoop').player=game.fan;
}else{
_status.event.getParent('phaseLoop').player=game.zhu;
}
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu1fu2.length;i++){
 							source.addSkill(zhu1fu2[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						if(_status.tongtianta.completeNumber==18){
						_status.tongtianta.addEnemy("yxs_xiaoqiao");	 	
							for(var i=0;i<zhu2fu2.length;i++){
 							game.enemy.addSkill(zhu2fu2[i]);
 							}	 	
 							game.enemy.draw(4);	
									_status.event.getParent('phaseLoop').player=game.zhu;
							var source=game.fan;
							/*var nam=result.links[0];*/var nam=sj;
 						source.revive(null,false);
 						
 						source.uninit();
 						source.init(nam);
 						var zhu1=zhuyin.randomGets(1);
				var zhu2=zhuyin.randomGets(2);
				var fu1=fuyin.randomGets(1);
				var fu2=fuyin.randomGets(2);
			var zhufu = zhu1.concat(zhu1,fu1);
			var zhu1fu2 = zhu1.concat(zhu1,fu2);
			var zhu2fu2 = zhu2.concat(zhu2,fu2);
 						for(var i=0;i<zhu2fu2.length;i++){
 							source.addSkill(zhu2fu2[i]);
 							}
 						game.addVideo('reinit',source,[nam]);
 						source.lose(source.getCards('hej'))._triggered=null;
 						}
 						
 						
 						







 						
 						
 						
 						
 						
 						var gain=4;
 						var add=0;
 						switch(_status.tongtianta.completeNumber){
 							case 5:break;
 							case 1:gain=5;break;
 							case 2:gain=5;add=1;break;
 							case 3:gain=6;add=1;break;
 							default:gain=6;add=2;break;
 						};
 									
 								
if(Math.random()<0.5){
 							source.say(['好小子！看我等下怎么还给你！',"我已经发现了你的弱点!","止步吧！你没有机会的～","你还是太年轻了！","你以为我只有这两下？","撑不住了吧？!","你会败在我手里，小子!","洗干净脖子，等待我收割吧!",'该死我的援军怎么还不来！！'].randomGet());
 								};
		
 						source.update();
 						source.draw(4);
 						game.triggerEnter(source);
 						if(event.reward) event.reward();
 				'step 6'
 							game.zhu.chooseBool('少侠是否更换手牌，试试手气？');
 						'step 7'
 							if(result.bool){
				var hs=game.zhu.getCards('h');
				for(var i=0;i<hs.length;i++){
					hs[i].discard(ui.special);
				}
				game.zhu.directgain(get.cards(hs.length));
				game.zhu.addMark("cishu");
				if(game.zhu.storage.cishu<3)
				event.goto(6);
			}
			
				'step 8'
 						
 						game.zhu.removeMark('cishu',20,false);
						game.getMusicName(2)
						game.changeBackgroundMusic()
						ui.clear2();
 						var cards=Array.from(ui.ordering.childNodes);
							while(cards.length){
								cards.shift().discard();
							}
							var evt=_status.event.getParent('phase');
							if(evt){
								game.resetSkills();
 							_status.event=evt;
								_status.event.finish();
								_status.event.untrigger(true);
							}
						},
					};
					_status.tongtianta.player_number=get.config('player_number');
					game.saveConfig('player_number','2','identity');
				},
				content:{
					submode:'normal',
					chooseCharacterBefore:function(){
   			game.identityVideoName='封神台';
   			game.saveConfig('player_number',_status.tongtianta.player_number,'identity');
   		
   			game.chooseCharacter=function(){
   			
      	var next=game.createEvent('chooseCharacter',false);
   				next.showConfig=true;
   				next.setContent(function(){
   					"step 0"
   					ui.arena.classList.add('choose-character');
   					game.me.identity='zhu';
   					game.zhu=game.me;
   					game.fan=game.me.next;
   					game.fan.identity='fan';
   					game.zhu.setIdentity();
   					game.zhu.identityShown=true;
   					game.zhu.node.identity.classList.remove('guessing');
   					game.fan.setIdentity();
   					game.fan.identityShown=true;
   					game.fan.node.identity.classList.remove('guessing');
   					
   					event.list=[];
   					for(var i in lib.character){
    if(lib.filter.characterDisabled(i) || i == 'yxs_wuzetian') continue;
    event.list.push(i);
}
   				/*	for(var i in lib.character){
   						if(lib.filter.characterDisabled(i)) continue;
   						event.list.push(i);
   					} */
   					get.counterIdentity = function(identity) {
                                    if (identity == "fan") return "fan";
                                    return "fan";
                              
                                }
                                get.counteraIdentity = function(identity) {
                                if (identity == "zhong") return "zhong";
                                    return "zhong";
                                    }
                                lib.translate[game.me.identity] = '友';
                                lib.translate[get.counterIdentity(game.me.identity)] = '敌';
                                lib.translate[get.counteraIdentity(game.me.identity)] = '友';
                                
   					event.list.randomSort();
   					_status.characterlist=event.list.slice(0);
   					var list=event.list.slice(0,5);
   					delete event.swapnochoose;
   					var dialog;
   					if(event.swapnodialog){
   						dialog=ui.dialog;
   						event.swapnodialog(dialog,list);
   						delete event.swapnodialog;
   					}
   					else{
   						var str='选择角色';
   						dialog=ui.create.dialog(str,'hidden',[list,'character']);
   					}
   					dialog.setCaption('选择角色');
   					game.me.chooseButton(dialog,true).set('onfree',true);
   					
   					ui.create.cheat=function(){
   						_status.createControl=ui.cheat2;
   						ui.cheat=ui.create.control('更换',function(){
   							if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
   								return;
   							}
   							if(game.changeCoin){
   								game.changeCoin(-3);
   							}
   							
   							event.list.randomSort();
   							list=event.list.slice(0,5);
   							
   							var buttons=ui.create.div('.buttons');
   							var node=_status.event.dialog.buttons[0].parentNode;
   							_status.event.dialog.buttons=ui.create.buttons(list,'character',buttons);
   							_status.event.dialog.content.insertBefore(buttons,node);
   							buttons.animate('start');
   							node.remove();
   							game.uncheck();
   							game.check();
   						});
   						delete _status.createControl;
   					};
   					if(lib.onfree){
   						lib.onfree.push(function(){
   							event.dialogxx=ui.create.characterDialog('heightset');
   							if(ui.cheat2){
   								ui.cheat2.animate('controlpressdownx',500);
   								ui.cheat2.classList.remove('disabled');
   							}
   						});
   					}
   					else{
   						event.dialogxx=ui.create.characterDialog('heightset');
   					}
   
   					ui.create.cheat2=function(){
   						ui.cheat2=ui.create.control('自由选将',function(){
   							if(this.dialog==_status.event.dialog){
   								if(game.changeCoin){
   									game.changeCoin(50);
   								}
   							

   								this.dialog.close();
   								_status.event.dialog=this.backup;
   								this.backup.open();
   								delete this.backup;
   								game.uncheck();
   								game.check();
   								if(ui.cheat){
   									ui.cheat.animate('controlpressdownx',500);
   									ui.cheat.classList.remove('disabled');
   								}
   							}
   							else{
   								if(game.changeCoin){
   									game.changeCoin(-10);
   								}
   								this.backup=_status.event.dialog;
   								_status.event.dialog.close();
   								_status.event.dialog=_status.event.parent.dialogxx;
   								this.dialog=_status.event.dialog;
   								this.dialog.open();
   								game.uncheck();
   								game.check();
   								if(ui.cheat){
   									ui.cheat.classList.add('disabled');
   								}
   							}
   						});
   						if(lib.onfree){
   							ui.cheat2.classList.add('disabled');
   						}
   					}
   					if(!_status.brawl||!_status.brawl.chooseCharacterFixed){
   						if(!ui.cheat&&get.config('change_choice'))
   						ui.create.cheat();
   						if(!ui.cheat2&&get.config('free_choose'))
   						ui.create.cheat2();
   					}
   					"step 1"
   					if(ui.cheat){
   						ui.cheat.close();
   						delete ui.cheat;
   					}
   					if(ui.cheat2){
   						ui.cheat2.close();
   						delete ui.cheat2;
   					}
   					game.addRecentCharacter(result.buttons[0].link);
   					game.zhu.init(result.buttons[0].link);
   					_status.characterlist.remove(result.buttons[0].link);
   					_status.tongtianta.used.add(result.buttons[0].link);
   					"step 2"
   				
        
 var guankakshu = document.createElement('div');
var cengshu=_status.tongtianta.completeNumber+1;guankakshu.id = 'guankakshu';
guankakshu.innerHTML ="封神台 "+cengshu+"层";
guankakshu.classList.add('guankakshu'); 
document.body.appendChild(guankakshu);
	
   					game.fan.init("yxs_gongbing");
   					game.zhu.addSkill("fuhuo");
   					game.zhu.addSkill("tttmopai");
   		//修改		
var hp=Math.floor(result.index/2);
   					event.draw=Math.floor((result.index+1)/2);
   					if(hp){
   						game.fan.hp+=hp;
   						game.fan.maxHp+=hp;
   						game.fan.update();
   					}  //结束
   	/*				game.fan.hp=4;
   					game.fan.loseMaxHp(4);
   					game.fan.update();  */
   					if(event.draw){
   						game.zhu.draw(5);
   					} 
   					setTimeout(function(){
   						ui.arena.classList.remove('choose-character');
   					},500);
   					
   					var pack={
   						character:{},
   						translate:{},
   						skill:{
   						
   						},
   					};
   					for(var i in pack){
   						for(var j in pack[i]){
   							lib[i][j]=pack[i][j];
   						}
   					}
   					delete pack.skill;

  						game.addVideo('arrangeLib',null,pack);
  						game.addOverDialog=function(dialog){
  							dialog.addText('共计通过'+_status.tongtianta.completeNumber+'关');
  						};
  						lib.element.player.dieAfter=function(){
  							if(this==game.fellow) return;
  							_status.characterlist.removeArray(_status.tongtianta.used);
  							
  							
  							
  							if(game.zhu==this||!_status.characterlist.length){
  								if(_status.tongtianta.completeNumber<18) game.over(game.zhu.isAlive());
  							}
  							else{
  																	if(!game.enemy||(!game.enemy.isAlive()&&!game.fan.isAlive())){
  								var next=game.createEvent('tongtianta_replace',false);
  								next.setContent(_status.tongtianta.replace_character);
  							
  							}
  							}
  						};
  						lib.element.player.dieAfter2=function(){
  							_status.characterlist.removeArray(_status.tongtianta.used);
  						};
  						game.zhu.dieAfter=lib.element.player.dieAfter;
  						game.fan.dieAfter=lib.element.player.dieAfter;
  						game.zhu.dieAfter2=lib.element.player.dieAfter2;
  						game.fan.dieAfter2=lib.element.player.dieAfter2;
   				});
   			};
					}
				}
			},