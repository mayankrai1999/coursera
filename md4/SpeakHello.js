(function (window) {
  var speakWord = 'Good Bye';
  var helloSpeaker = {
  speak : function (name) {
    console.log(speakWord + " " + name);
  }}
  window.helloSpeaker=helloSpeaker;



})(window);
