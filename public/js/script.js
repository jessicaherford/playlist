

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

var albumsId = results["results"];
  for (var i = 0; i < albumsId.length; i++) {
    var my_id = albumsId[i]["id"];
    console.log(my_id);
    $(".albums").append('<img src="images/'+albumsId[i]["cover_art"]+'" id="'+my_id+'"/>');
    var my_div = $("#"+my_id);
  }

console.log(albumsId);

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

$('#albumThumbNail1').click(function(){
  $('#tracklist').append("<li>" +results.results[0].artist+ "&#58" + results.results[0].title+ "</li>");
});
$('#albumThumbNail2').click(function(){
  $('#tracklist').append("<li>" +results.results[1].artist+ "&#58" + results.results[1].title+ "</li>");
});
$('#albumThumbNail3').click(function(){
  $('#tracklist').append("<li>" +results.results[2].artist+ "&#58" + results.results[2].title+ "</li>");
});
$('#albumThumbNail4').click(function(){
  $('#tracklist').append("<li>" +results.results[3].artist+ "&#58" + results.results[3].title+ "</li>");
});
$('#albumThumbNail5').click(function(){
  $('#tracklist').append("<li>" +results.results[4].artist+ ":" + results.results[4].title+ "</li>");
});

$('#clearTracks').click(function(){
  $('#tracklist').empty();
})






// var albumCover = results.results[i].cover_art;

// As a developer, when I iterate through the album results,
// I wrap each image in a div with a unique id that matches the
//  id of each image object, and I append that div to the
//  playlist div, OR I do something else that acheives the
//  same result.


})

$("#submitBin").click(function(){
    var sender = $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/post",
      method: "POST"
    });
    sender.done(function(response){
      console.log(response);
      alert(response);
    })
    $('#tracklist').empty();
})


// var albumPostInfo = $.ajax({
//   url: 'https://lit-fortress-6467.herokuapp.com/post',
//   method: 'POST'
// })
//
// albumPostInfo.done(function(results){
//   console.log(results);
// })

});




// })
