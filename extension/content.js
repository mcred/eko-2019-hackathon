setTimeout(function () {

	var request = [];
	var i = 0;

	$(".candidate-name-link").each(function(){
	    var entry = {}
	    console.log($(this).text() + ": " + $(this).attr("href"));

	    entry[i] = $(this).text();
	    request.push(entry);
	    i++;

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

	$.ajax({type: "POST", url: "http://localhost:8080", data: JSON.stringify({ request }), dataType: 'json', success: function (data) {
                var i = 0;
		$(".candidate-name-link").each(function(){
                    $(this).text(data.request[i][i]);
                    i++;
                });
            }
        });

	$(".org-name").each(function(){
	    $(this).text("Some Employer");
	});

}, 1000);
