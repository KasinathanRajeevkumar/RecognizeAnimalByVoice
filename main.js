function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0Y8pO1pSs/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    
    img = document.getElementById('barking');
    img1 = document.getElementById('meowing');
    img2 = document.getElementById('roaring');
    img3 = document.getElementById('mooing');

    if (results[0].label == "barking") {
        img.src = 'dogs-01.gif';
        img1.src = 'dogs-02.png';
        img2.src = 'dogs-03.png';
        img3.src = 'dogs-04.png';
    } else if (results[0].label == "meowing") {
        img.src = 'cats.jpg';
        img1.src = 'cats-02.gif';
        img2.src = 'cats-03.png';
        img3.src = 'cats-04.png';
    } else if (results[0].label == "roaring") {
        img.src = 'lions-01.png';
        img1.src = 'lions-02.png';
        img2.src = 'lions-03.gif';
        img3.src = 'lions-04.png';
    } else if (results[0].label == "mooing") {
        img.src = 'cows-01.png';
        img1.src = 'cows-02.png';
        img2.src = 'cows-03.png';
        img3.src = 'cows-04.gif';
    }else{
        img.src = 'dogs-01.png';
        img1.src = 'cats-02.png';
        img2.src = 'lions-03.png';
        img3.src = 'cows-04.png';    

}
}
}
 