noseX=0;

noseY=0;

diffreence=0;

rightwristX=0;

leftwristX=0;

function setup() 

{
     video = createCapture(VIDEO);

      video.size(550, 500);

       canvas = createCanvas(550, 550);


        canvas.position(560,150); 
        
        poseNet = ml5.poseNet(video, modelLoaded);

         poseNet.on('pose', gotPoses);

         }




function modelLoaded()

{
    console.log('PoseNet Is Initialized');
}
function draw() 
{
     background('#969A97');

    textSize(difference);

    fill(blue);

    text('shivam',50,400)


}

function gotPoses(results)

{

if(results.length>0)

{
    console.log(results);

    noseX=results[0].pose.nose.x;

    noseY=results[0].pose.nose.y;

    console.log("noseX="+noseX+"noseY="+noseY);

    leftwristX=results[0].pose.leftWrist.x;

    rightwristX=results[0].pose.rightWrist.x;

    difference=floor(leftWristX-rightwristX);

    console.log("leftwristX="+leftWristX+"rightwristX="+rightwristX+"difference="+difference);
}

}