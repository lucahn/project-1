$(document).ready(function(){

$("#searchLyrics").on("click", function(event) {

    event.preventDefault();

    var song = $("#term-input1");
    var artist = $("#term-input2");
    var featInput = $("#term-input3");
    var featBtn = $("#featBtn");
    var lyric = $("#lyrics");
    var video = $("#video");

    // console.log(song.val());
    // console.log(artist.val());

    // var queryURLLyrics = "https://orion.apiseeds.com/api/music/lyric/" + artist.val() + "/" + song.val() + featBtn.val() + featInput.val() + "?apikey=I6FRfqAouaWWqBqEb1CCTzwGRcSo86ISnzt4CSJQRZAxnLhju0xcAo8sakVxTENh";

    var queryURLLyrics = "https://lyric-api.herokuapp.com/api/find/" + artist.val() + "/" + song.val();

    $.ajax({
        url: queryURLLyrics,
        method: "GET"
    }).then(function(response) {
        // console.log(response);
        var words = response.result.track.text;
        var temp = words.replace(/\n/ig, "<br />");
        // console.log(temp)
        lyric.html(temp);
    });

    var queryURLVideo = "https://www.googleapis.com/youtube/v3/search?q=" + artist.val() + song.val() + "&order=relevance&part=snippet&type=video&maxResults=5&key=AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE";

    $.ajax ({
        url: queryURLVideo,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var songId = response.items[0].id.videoId;
        var videoPlayer = $("<iframe>");
        var videoLink = "https://www.youtube.com/embed/" + songId;

        // console.log(songId);

        videoPlayer.attr("src", videoLink);
        videoPlayer.attr("frameborder='0'");
        videoPlayer.attr("height", "360");
        videoPlayer.attr("width", "640");

        video.html(videoPlayer);
    });
});

$("#searchDef").on("click", function(event) {

    event.preventDefault();
    
    var def = $("#definition");
    var defBox = $("#def-box");
    // console.log(def.val());

    defBox.empty();

    var queryURLDef = "http://api.urbandictionary.com/v0/define?term=" + def.val();

    $.ajax({
        url: queryURLDef,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var defDiv = $("<div class='definitions'>");
        var defInfo = response.list;

        for (var i = 0; i < defInfo.length; i++) {
            
            var DefNum = (defInfo[i].word);
            var displayNum = $("<h3>").text('Definition of "' + DefNum + '" :');
            displayNum.addClass("defTitle");

            var defMean = (defInfo[i].definition);
            var displayDef = $("<p>").text('"' + defMean + '"');
            displayDef.addClass("defBody");

            defDiv.append(displayNum, displayDef);
            defBox.append(defDiv);
        }

    });

});

$("#clearSearch").on("click", function(event) {

    event.preventDefault();

    var song = $("#term-input1");
    var artist = $("#term-input2");
    var featInput = $("#term-input3");

    song.val("");
    artist.val("");
    featInput.val("");

});

$("#clearDef").on("click", function(event) {

    event.preventDefault();

    var def = $("#definition");
    var defBox = $("#def-box");

    def.val("");
    defBox.empty();

});

});