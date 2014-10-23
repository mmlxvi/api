$(document).ready(function() {

var player;

//the question is: what do i put in this function? everything i need to load a
//random video is set out below the document.ready function. how can i plug in
//the "onPlayerReady()" function when the #channelChanger button is clicked?

$('#channelChanger').click(function() {


})

});

// This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// array of videos for playback:

  var videoLibrary = ['Nw1nRv0jSkY','p24QsMMS0xs', 'xxzPk_qSjrE','o-Uv5ZNk0RE',
  '4-Kqt5YIXTs', 'a7usMy6EYZI','WTR_rEnW9yA', '5eGqFd7L5F0','WIKqgE4BwAY',
  'XyTmXLWCazw', 'cMqLPDDHtkc'];

  var randomVid = videoLibrary[Math.floor((Math.random() * 11))];


  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: randomVid,
      playerVars: {'autoplay':1, 'controls':0},
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange

      }

    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
    player.getDuration
  }




//  5. The API calls this function when the player's state changes.
  // The function indicates that when playing a video (state=1),
  // the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 10000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
