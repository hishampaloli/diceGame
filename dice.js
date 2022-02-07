
var random1 = Math.floor(Math.random() * 6) + 1;
var randomsrc = "images/dice" + random1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", randomsrc);

var random2 = Math.floor(Math.random() * 6) + 1;
var randomsrc2 = "images/dice" + random2 +".png";
var imgRandom = document.querySelector(".img2");
imgRandom.setAttribute("src", randomsrc2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "player 1 won 🥳 ";
}else if(random2 > random1) {
    document.querySelector("h1").innerHTML = "player 2 won 🥳";
}else{
    document.querySelector("h1").innerHTML = "draw🙄"
}