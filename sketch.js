function setup(){
    noCanvas();
    let lang = navigator.language || 'en-US';
    let speechRec = new p5.SpeechRec(lang, gotSpeech);
    let voice = new p5.Speech();
    //let continuous = true; //makes speech recog run continuously, otherwise it stops after listening once

    speechRec.start();
    function gotSpeech(){
        if(speechRec.value){
            let words = speechRec.resultString;
            document.getElementById('speech').innerHTML = words;
            if(words.toLowerCase().equals("hello")){
                voice.speak("Hey there");
            }
        }
    }
}
