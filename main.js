var speeachrecognition=window.webkitSpeechRecognition;
var recogonition=new speeachrecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recogonition.start();
}
recogonition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
