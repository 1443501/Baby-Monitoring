song="";
status="";
objects=[];
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
   

}

    function preload(){
        song=loadSound("sound.wav");
}

function modelLoaded(){
console.log("Model is loaded");
status="true";
objectDetector.detect(video, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);

}
function draw(){
    image(video,0,0,380,380);
    if(objects[0].label=="person"){
        document.getElementById("status").innerHTML="Status: Baby Detected";
        console.log("baby detected");
        song.stop();
    }
    else{
        console.log("baby is not detected");
        document.getElementById("status").innerHTML="Status: Baby not detected";
        song.play();
    }
    if(objects.length==0){
        document.getElementById("status").innerHTML="Status: Baby not detected";
        song.play();
    }
}
 
 
 
