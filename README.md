h1. Dough-socialpick
================

Dough UI Socialpick plug-in

25일에 공개하겠습니다


*Version:* 0.1.0

*License:* "Same as Dough (creativecommons 3.0)":http://creativecommons.org/licenses/by/3.0/deed.ko

*Author:* "Han Seung ho":http://facebook.com/pengun


h2. Browser Support

IE6+, WebKit Browsers (Safari, Chrome), Firefox 2+

h2. Socialpick API

get key & document :http://dna.daum.net/apis/socialpick

h2. Use

Usage example:

head

<pre>

	<script src="js/dough-socialpick.js"></script>
	<script>
		$(document).ready(function(){
			$(".socialpick").socialpik({
				apikey: "SOCIALPICK_APIKEY",
				content: ".socialpick_content"
			});
		})
	</script>

</pre>


<pre>

<ul class="socialpick tab_bar">
	<li class="on"><a href="#">전체</a></li>
	<li><a href="#c">시사</a></li>
	<li><a href="#s">스포츠</a></li>
	<li><a href="#e">연예</a></li>
	<li class="f_r">
		<label class="socialpick_sort">
			<input type="checkbox" class="d_form" checked="checked"/> 키워드 정렬
		</label>
		<select class="socialpick_num d_form">
			<option value="5">5개</option>					    		
			<option value="10" selected="selected">10개</option>
			<option value="15">15개</option>
			<option value="20">20개</option>							    
		</select>
	</li>
</ul>
<ul class="socialpick_content d_list type_article .type_border">
</ul>

</pre>