Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

cam = document.getElementById("cam")

Webcam.attach("cam")

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src=" ' +data_uri+ '"/> ';
    });
    
    console.log('ml5 version:' , ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pgwSg9UeF/model.json' , modelLoaded);
    
}

function modelLoaded() 
{
    console.log('Model Loaded!!');
}