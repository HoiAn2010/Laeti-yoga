/*----- Menu burger -----*/
let toggle = document.querySelector(".toggle");
let body = document.querySelector("body"); //*? voir si on ne peut pas faire avec nav*//

toggle.addEventListener("click", function () {
  body.classList.toggle("open");
});



/*----- Slider -----*/

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

precedent.addEventListener("click", function () {
  moveImage--;
  if (moveImage <0) {
    moveImage = imageOfSlider.length - 1;
  }
  enleverImageActive();
  imageOfSlider[moveImage].classList.add("active");
});

/*----- Message retour de contact -----*/

const firstName = document.querySelector("#firstName");

function answerMessage(event) {
    alert(`Merci pour votre message ${firstName.value}. Je reviendrai vers vous sous 48h. Namaste 🙏!`);
    event.preventDefault();
};

/*preventDefault nécessaire ?*/