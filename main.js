var speechrecoginition = window.webkitSpeechRecognition;
var anyname = new speechrecoginition();
function start()
{
  anyname.start();
}
anyname.onresult = function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text").innerHTML=content;
    if(content == "take my selfie"){
      speak();
      
    }
}

function speak(){
  var synth = window.speechSynthesis;
  data = "taking your selfiel;";
  var utterthis = new SpeechSynthesisUtterance(data);
  synth.speak(utterthis);
  Webcam.attach(document.getElementById("camera"));
  setTimeout( 
    function(){
    takephoto()
    save()
    },5000
  )
}
Webcam.set({
  width:249,
  height:250,
  image_format:"jpeg",
  jpeg_quality:90,
})
function takephoto(){
  console.log("takephoto")
  Webcam.snap(
    function(data_uri){
      document.getElementById("result").innerHTML = ' <img src='+data_uri+' id="image" >';
    }
  )
}

function save(){
  console.log("save")
  document.getElementById("img").href=document.getElementById("image").src;
  document.getElementById("img").click()
}
