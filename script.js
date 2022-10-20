/*menu burger*/


/*slider*/
let imageOfSlider = document.getElementsByClassName("img-slider");

let moveImage = 0;

let numberOfImage = imageOfSlider.length;

let precedent = document.querySelector('.precedent');

let suivant = document.querySelector ('.suivant');

function enleverImageActive(){
    for (let i = 0; i < imageOfSlider.length; i++) {
        imageOfSlider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    moveImage++;
    if (moveImage >= imageOfSlider.length) {
        moveImage = 0
    }
        enleverImageActive();
    imageOfSlider[moveImage].classList.add('active');
    }
)


/* reprendre à 13:12 de la vidéo Ben*/





/*----Message retour de contact pour votre message. Je reviendrai vers vous sous 48h. Namaste*/


const firstName = document.querySelector("#firstName");

function answerMessage(event) {
    alert(`Merci pour votre message ${firstName.value}. Je reviendrai vers vous sous 48h. Namaste 🙏!`);
    event.preventDefault();
};

/*preventDefault nécessaire ?*/