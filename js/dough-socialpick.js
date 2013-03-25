(function($){

	/*
	 * $.socialpik
	 * 
	 *  - dough Sockialpik 플러그인
	 *  - dough-tab에  Daum SocialPick API 기능을 추가했습니다.
	 */
	
	$.fn.socialpik = function(options){

		var _options = {
				trigger: (options && options.trigger) ? options.trigger : "click"
			},
			_socialpik = this;
			
		this.each(function(){
			var _tab = this;
			this._targetId = [];
			this._eventTrigger = ($(this).attr("data-tab-event")) ? $(this).attr("data-tab-event").toLowerCase() : _options.trigger;
			
			$(this).find("> li > a").each(function(){
				var thisId = $(this).attr("href");
				if(thisId.match(/^#/)){
					var eventHandler = function(e){
						e.preventDefault();
						$(_tab).find("li.on").removeClass("on");
						$(e.target).parents("li").addClass("on");
						_socialpik.init();
					};
					
					switch(_tab._eventTrigger){
						case "click": 
							$(this).click(function(e){
								eventHandler(e);
							});
							break;
						case "mouseover": 
							$(this).mouseover(function(e){
								eventHandler(e);
							});
							$(this).click(function(e){
								e.preventDefault();
							});
							break;
						default:
							break;
					}

					_tab._targetId.push(thisId);
				};
			});

			$(".socialpick_num").change(function() {
				_socialpik.init();
			}).trigger('change');

			$(".socialpick_sort").change(function() {
				chk = $(".socialpick_sort input").prop('checked');
				if(chk) {
					options.sort = true;
				}else{
					options.sort = false;
				}
				_socialpik.init();
			}).trigger('change');
		});

		this.pingSearch = function(req) 
		{
			var url = [
				"http://apis.daum.net/socialpick/search?output=json&callback=?&apikey=",
				options.apikey,
				"&category=", req.category,
				"&n=", req.num
			].join('\n');

			$.getJSON(url,function(data) {
				result = "";

				if(options.sort){
					data.socialpick.item.sort(function (right, left) {
						return right.keyword > left.keyword?1:-1;
					});
				}

				for (var i in data.socialpick.item)
				{  
					result += [
								"<li class='d_wrap panel'>",
							  	" <span class='info'> 검색수:CNT 트윗수:TCNT</span>",
							  	" <h5><span class='rank'> RANK위 </span> <a href='LINK' target='_blank'>KEY</a></h5>",
							  	" <p> CONTENT</p>",
							  	"</li>"
							  ].join('\n')
							  .replace('RANK', data.socialpick.item[i].rank)					
							  .replace('KEY', data.socialpick.item[i].keyword)
							  .replace('CNT', data.socialpick.item[i].count)
							  .replace('TCNT', data.socialpick.item[i].quotation_cnt)
							  .replace('CONTENT', data.socialpick.item[i].content)							  
							  .replace('LINK', data.socialpick.item[i].link);
				} 
			}).error(function(XMLHttpRequest, textStatus, errorThrown)
			{          
				result = textStatus;
			}).complete(function(){
				$(options.content).html(result);
			});
		};

		this.init = function() 
		{
			var req = [];
			req.category = $(this).find("li.on a").attr("href").replace(/#/,'');
			req.num=$(".socialpick_num option:selected").val();
			this.pingSearch(req);
		};

		this.init();
	};
	
	
})(jQuery);
