# Dough-socialpick
================

Dough UI Socialpick plug-in

25일에 공개하겠습니다


*Version:* 0.1.0

*License:* ["Same as Dough (creativecommons 3.0)](http://creativecommons.org/licenses/by/3.0/deed.ko)

*Author:* "Han Seung ho":http://facebook.com/pengun


## Browser Support

IE6+, WebKit Browsers (Safari, Chrome), Firefox 2+

## Socialpick API

[get key & document](http://dna.daum.net/apis/socialpick)


## Use

Usage example:

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
