/*menu burger*/


/*slider*/
let imageOfSlider = document.getElementsByClassName("img-slider");

let moveImage = 0;

let numberOfImage = imageOfSlider.length;

let precedent = document.querySelector('.precedent');

let suivant = document.querySelector ('.suivant');

function enleverImageActive(){
    for (let i = 0; i < imageOfSlider.length; i++){
    imageOfSlider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    moveImage++;
    enleverImageActive();
    imageOfSlider[moveImage].classList.add('active');
    }
)
/* reprendre à 13:12 de la vidéo Ben*/


/*bouton qui change couleur au click */

/*Merci pour votre message. Je reviendrai vers vous sous 48h. Namaste*/