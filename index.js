// window.onload = () => {}

let mots = [
  "ARC",
  "BAC",
  "COQ",
  "FIX",
  "LOT",
  "VIN",
  "ZOO",
  "PAS",
  "NEO",
  "SEC",
  "QUE",
  "HALO",
  "GANT",
  "FEUX",
  "LOTO",
  "MENU",
  "OVNI",
  "JEUX",
  "HOLA",
  "REVE",
  "SOLO",
  "ZOMBIE",
  "BOOMER",
  "CALMOS"
];

let t = true;

// const btn =  document.getElementById("btn")
// btn.addEventListener("click", jeu)
let start = document.getElementById("start");
let score = 0;
let compteur = 0; //Permet de faire passer les de un en un

function display() {
  document.querySelector(".text").innerHTML = mots[compteur]; //fonction qui aide à afficher le mot de l'index
}
display();

function jeu() {
  let reponse = document.getElementById("txt").value;
  let majuscule = reponse.toUpperCase()
  start.hidden = true;

  if (compteur < mots.length ) {
    // document.getElementById("txt").innerHTML = compteur++ // A chaque changement dans l'input le compteur prendra +1 (1 charactère dans l'input = 1 index)
    removeEventListener("input", jeu, true);
    if (majuscule == mots[compteur]) {
      console.log(mots[compteur++] + "=" + majuscule);
      document.getElementById("txt").value = "";
      score++;
      document.getElementById("score").innerHTML = score;
    }
  
    display();
  }
  
}
// display()

let timer = document.getElementById("t");

let secondes = 15;
timer.innerHTML = secondes + "sec"
// let m = 0.15; //0.15 =10sec; 0.50 = 30sec; 1 = 60sec
// let temps = m * 60; //conversion en secondes


// function decompte() {
//   if (temps <= 0) {
//     clearInterval(interval);
//   }
//   let minutes = Math.floor(temps / 60);
//   let secondes = temps % 60;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   secondes = secondes < 10 ? "0" + secondes : secondes;
//   t.innerHTML = minutes + ":" + secondes;
//   temps--;
// }
// decompte();

// start.onclick = function (){
// interval = setInterval(decompte, 1000);

// }

function decompte(){
  secondes--
  timer.innerHTML = secondes +"sec"
  
  
  if (secondes<10){
    // secondes--;
    timer.innerHTML = "0" + secondes +"sec";
   }
   
   
  
   if (secondes < 1){
    clearInterval(delais)
    console.log("Le temps est écoulé")
    document.getElementById("txt").disabled=true;
    start.removeEventListener("click",temps, true)
    start.removeEventListener("click",temps, false)
    document.querySelector(".text").innerHTML = `Vous avez validé ${score} mots`
    if (score< 10){
      document.querySelector("#message").innerHTML = "NUL"
    }
    else if (score >10 || score< 15){
      document.querySelector("#message").innerHTML = "COOL! essaye de faire 1 de +?"
    }
    else{
      document.querySelector("#message").innerHTML = "Flash c'est toi?"
    }
  }
}
start.addEventListener("click", temps)
function temps(){
  delais = setInterval(decompte,1000)
}