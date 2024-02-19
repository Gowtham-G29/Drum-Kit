
let numberOfButtons =document.querySelectorAll(".drum").length
for(let i=0;i<=numberOfButtons;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){
       
       var buttonInnerHTML = this.innerHTML;

       switch(buttonInnerHTML){
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play() // play the sound
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play() // play the sound
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play() // play the sound
           break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play() // play the sound
           break;  
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play() // play the sound
           break; 
        case "k":
            let kickBass= new Audio("sounds/kick-bass.mp3");
            kickBass.play() // play the sound
           break; 
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play() // play the sound
           break;

        default:console.log(buttonInnerHTML)
       }
       
        
        // console.log(this.style.color="white")   //change colour of the text     
    }) // addEventlistener used to do specific operations through functions
}

// let audio = new Audio("sounds/crash.mp3");
// audio.play() // play the sounds





