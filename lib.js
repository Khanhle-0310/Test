let images = [

    "assets/anh1.jpg",

    "assets/anh2.jpg",

    "assets/anh3.jpg",

    "assets/anh4.jpg"

];

let index = 0;

function showSlide(){

    document.getElementById("slide").src = images[index];

}

function nextSlide(){

    index++;

    if(index >= images.length){

        index = 0;

    }

    showSlide();

}

function prevSlide(){

    index--;

    if(index < 0){

        index = images.length - 1;

    }

    showSlide();

}