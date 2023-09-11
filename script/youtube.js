
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'n6WaTObHRJM', 
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'n6WaTObHRJM'
    },
    events: {
      onReady: function(event) {
        event.target.mute() 
      }
    }
  });
}