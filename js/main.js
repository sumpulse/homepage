var renderTrack = _.template(document.getElementById("track-template").innerHTML);
var renderTracklist = _.template(document.getElementById("tracklist-template").innerHTML);

document.getElementById("asd").innerHTML = renderTracklist(tracks);

