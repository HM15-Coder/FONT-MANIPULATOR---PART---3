difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(500,500);
    canvas.position(500,150);
    canvas.center();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#add8e6');
    document.getElementById("font_side").innerHTML = "Font size of the text will be ="+difference+"px";
    fill("#000000");
    text('Harshil',90,500);
        
}
function modelLoaded() {
    console.log('PoseNet is initialized!');
}
function gotPoses(results){
    if(results.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX=" + leftWristX + "rightWristX" + rightWristX +"difference" + difference);
        textSize(difference);
    }
}