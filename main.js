img=""
noseX= 0;
noseY= 0;
mario=325;
mario=325;

function preload()
{
    img=loadImage("paddle05.svg")
}

function setup()
{
    createCanvas(650, 400);
    video=createCapture(VIDEO);
    video.size(600,300);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    video = createCapture(VIDEO);
    video.size(800,400);
    video.parent('game_console');
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#D3D3D3");
    if(noseX < 300)
    {
        paddleX=paddleX - 1;
    }
    if(noseY < 150)
    {
        paddleY=paddleY - 1;
    }
    image(img,marioX,marioY, 40,70)
}

function modelLoaded() {
    console.log('Model Loaded!')
}


