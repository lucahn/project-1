var queryURL1 = "https://orion.apiseeds.com/api/music/lyric/cardi%20b/bodak%20yellow?apikey=I6FRfqAouaWWqBqEb1CCTzwGRcSo86ISnzt4CSJQRZAxnLhju0xcAo8sakVxTENh";

        $.ajax({
        url: queryURL1,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });

var queryURL2 = "http://api.urbandictionary.com/v0/define?term=bloody%20shoes";

        $.ajax({
        url: queryURL2,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        });