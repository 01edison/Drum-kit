var buttons = document.querySelectorAll('.drum');
// Adding an event listener to all the buttons on mouse-click
for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
}
// Call-back Function that is performed when the button is clicked on the screen
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
}
// Function that actually produces the sound for each particular letter
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        default:
            break;
    }
}
// Adding an event listener to the entire document on a keyboard key click.
document.addEventListener("keydown", (event)=>{
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
    
})
// Creating an animation when the button is clicked or key is pressed.
function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add('pressed')
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}




