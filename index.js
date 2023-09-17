// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", BUTTON);
//     // document.querySelectorAll(".drum")[i].addEventListener("keydown", BUTTON);
// document.addEventListener("keydown",BUTTON);
// }



// function BUTTON() {
// var press =  event.key;

// var button = this.innerHTML;


// switch (button||press) {
//     case "w":
//         var tom1 = new Audio("./sounds/tom-1.mp3");
//         tom1.play();
//         break;
//     case "a":
//         var tom1 = new Audio("./sounds/tom-2.mp3");
//         tom1.play();
//         break;
//     case "s":
//         var tom1 = new Audio("./sounds/tom-3.mp3");
//         tom1.play();
//         break;
//     case "d":
//         var tom1 = new Audio("./sounds/tom-4.mp3");
//         tom1.play();
//         break;
//     case "j":
//         var tom1 = new Audio("./sounds/snare.mp3");
//         tom1.play();
//         break;
//     case "k":
//         var tom1 = new Audio("./sounds/crash.mp3");
//         tom1.play();
//         break;
//     case "l":
//         var tom1 = new Audio("./sounds/kick-bass.mp3");
//         tom1.play();
//         break;
   
        
// }}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        makesound(button);
        addingAnimation(button);
    });
    
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    addingAnimation(event.key);
})

function makesound(sound){
    switch (sound) {
    case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom1 = new Audio("./sounds/tom-2.mp3");
        tom1.play();
        break;
    case "s":
        var tom1 = new Audio("./sounds/tom-3.mp3");
        tom1.play();
        break;
    case "d":
        var tom1 = new Audio("./sounds/tom-4.mp3");
        tom1.play();
        break;
    case "j":
        var tom1 = new Audio("./sounds/snare.mp3");
        tom1.play();
        break;
    case "k":
        var tom1 = new Audio("./sounds/crash.mp3");
        tom1.play();
        break;
    case "l":
        var tom1 = new Audio("./sounds/kick-bass.mp3");
        tom1.play();
        break;
   
        
}
}

function addingAnimation(keyword) {
    document.querySelector("."+keyword).classList.add("pressed");
    setTimeout(() => {
       document.querySelector("."+keyword).classList.remove("pressed")
    }, 10);
}

