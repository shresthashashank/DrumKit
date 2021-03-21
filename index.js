var length = document.querySelectorAll(".drum").length;

//Sound by click
for( i= 0; i < length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(event){
        
        var buttonLetter = this.innerHTML; // Stores the innerHTML content of each button clicked.
        makeSound(buttonLetter); //Now , we pass the clicked button to our function which will play the sound according the button that was clicked. 
        buttonPressed(buttonLetter);
    });
} 

//This will make the entire document listen for a key press , and the key pressed can be passed in the function event and then passed into the makeSounf fucntion.
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonPressed(event.key);
})

function makeSound(key){
    switch (key) {
        case "l":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
                         
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "s":
            var tom5 = new Audio("sounds/tom-5.mp3");
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio("sounds/tom-6.mp3");
            tom6.play();
            break;
        case "w":
            var tom7 = new Audio("sounds/tom-7.mp3");
            tom7.play();
            break;
        
        default:
            console.log(buttonLetter);
            break;
    } 
    
}

//A function that creates an animation when it is pressed
function buttonPressed(pressed){
    var clickedOrPressedButton = document.querySelector("."+pressed);
    clickedOrPressedButton.classList.add("pressed");

    setTimeout(function(){
        clickedOrPressedButton.classList.remove("pressed");

    }, 100);

}