(function (window) {
  var speakWord = 'Hello';
  var byeSpeaker = {
  speak : function(name){
    console.log(speakWord + " " + name);
  }}
  window.byeSpeaker=byeSpeaker;

})(window);
