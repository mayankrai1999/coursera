(function (){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(let i=0; i<names.length; i++){
    if(names[i].charAt(0)=='J'||names[i].charAt(0)=='j'){
helloSpeaker.speak(names[i]);
    }
    else{
byeSpeaker.speak(names[i]);
}
}
})();