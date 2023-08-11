
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true}); 
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4501O38cs/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("Got Result")
  