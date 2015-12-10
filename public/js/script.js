

$(document).ready(function(){


var ablumInfo = $.ajax({
  url: 'https://lit-fortress-6467.herokuapp.com/object',
  method: "GET",
  dataType:'json'
});

ablumInfo.done(function(results){
//console.log('success');
// var testAlbum = '<img src=' +results.results[0].cover_art+ '>';
var albums = [];
// $("#rightImg1").attr("src", 'images/ghost_in_the_machine.jpg');
for(i=0; i<results.results.length; i++){
var albumCover = results.results[i].cover_art;
 albums.push(albumCover);
}
//console.log(albums);
// function randomAlbumCover(rand){
// var rand = albums[Math.floor(Math.random() * albums.length)];
// return rand
// }
//got random picker to work now need to append to page;
$("#rightImg1").attr("src", "images/" + albums[Math.floor(Math.random() * albums.length)]);
$("#rightImg2").attr("src", "images/" + albums[Math.floor(Math.random() * albums.length)]);
$("#rightImg3").attr("src", "images/" + albums[Math.floor(Math.random() * albums.length)]);



$('#albumThumbNail1').attr("src", 'images/' + results.results[0].cover_art);
$('#albumThumbNail2').attr("src", 'images/' + results.results[1].cover_art);
$('#albumThumbNail3').attr("src", 'images/' + results.results[2].cover_art);
$('#albumThumbNail4').attr("src", 'images/' + results.results[3].cover_art);
$('#albumThumbNail5').attr("src", 'images/' + results.results[4].cover_art);

// var albumCover = results.results[i].cover_art;



})

var albumPostInfo = $.ajax({
  url: 'https://lit-fortress-6467.herokuapp.com/post',
  method: 'POST'
})

albumPostInfo.done(function(results){
  console.log(results);
})






})
