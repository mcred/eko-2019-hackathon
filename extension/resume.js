$(function() {
    $("body").find('script').remove();
    setTimeout(function(){
        var request = [];
        var i = 0;
        $(".textLayer").find("*").each(function(){
            if(i == 0) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            if(i == 2) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            if(i == 3) {
                var entry = {}
                entry[i] = $(this).text().replace('J L ', '').trim();
                request.push(entry);
            }
            if(i == 4) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            if(i == 5) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            if(i == 6) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            if(i == 8) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            if(i == 9) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }

            if(i == 15) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            if(i == 16) {
                var entry = {}
                entry[i] = $(this).text();
                request.push(entry);
            }
            i++;
        });

        $.ajax({type: "POST", url: "http://localhost:8080/resume", data: JSON.stringify({ request }), dataType: 'json', success: function (data) {
                var i = 0;
                $(".textLayer").find("*").each(function(){
                    if(i == 0) {
                        $(this).text(data.request[i][i]);
                    }
                    if(i == 2) {
                        $(this).text(data.request[1][2]);
                    }
                    if(i == 3) {
                        $(this).text(data.request[2][3]);
                    }
                    if(i == 4) {
                        $(this).text(data.request[3][4]);
                    }
                    if(i == 5) {
                        $(this).text(data.request[4][5]);
                    }
                    if(i == 6) {
                        $(this).text(data.request[5][6]);
                    }
                    if(i == 8) {
                        $(this).text(data.request[6][8]);
                    }
                    if(i == 9) {
                        $(this).text(data.request[7][9]);
                    }
                    if(i == 15) {
                        $(this).text(data.request[8][15]);
                    }
                    if(i == 16) {
                        $(this).text(data.request[9][16]);
                    }
                    i++;
                });
            }
        });

        $("body").css("visibility","visible");
    }, 3000);
});
