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
}