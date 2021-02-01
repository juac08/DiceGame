var randomNumber1 = Math.random();
var randomNumber1= (Math.floor(randomNumber1*6)+1);
var randomsource= "./dice" + randomNumber1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute ("./src" , randomsource);



var randomNumber2 = Math.random();
var randomNumber2= (Math.floor(randomNumber2*6)+1);
var randomsource2= "./dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute ("./src" , randomsource2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomNumber2 > randomNumber1){

document.querySelector("h1").innerHTML=" Player 2 Won";
}
else {
  document.querySelector("h1").innerHTML=" 🏁Match Draw";
}
