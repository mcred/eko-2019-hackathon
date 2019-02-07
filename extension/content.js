setTimeout(function () {

	$(".candidate-name-link").each(function(){
	    console.log($(this).attr("href"));

	    $(this).click(function(){
		 $.get($(this).attr("href"), function(data) {
                     var tmp = $(data).find('.content-options').first().find('a').attr("href");
                     console.log(tmp);
                     var resumeurl = 'https://cdn.lever.co/hire/docviewer/viewer-8256b37e2035e5a1d9a93da401bcb3bd/viewer.html?assetUrl=https://hire.lever.co/docviewer-assets/';
	             var newurl = tmp.replace(/.*(profiles.*$)/, resumeurl + '$1' + '/');
	             location.href = newurl;
                 }, "html");
	
	    });

	});

}, 2000);
