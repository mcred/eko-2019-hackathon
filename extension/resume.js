$(function() {
    $("body").find('script').remove();
    setTimeout(function(){
        var request = [];
        var i = 0;
        $(".textLayer").find("*").each(function(){
            var entry = {}
            entry[i] = $(this).text();
            request.push(entry);
            i++;
        });

        $.ajax({type: "POST", url: "http://localhost:8080", data: JSON.stringify({ request }), dataType: 'json', success: function (data) {
                var i = 0;
                $(".textLayer").find("*").each(function(){
                    $(this).text(data.request[i][i]);
                    i++;
                });
            }
        });

        $("body").css("visibility","visible");
    }, 3000);
});
