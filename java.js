function checkPassword(){

  const password = document.getElementById("password").value;

  if(password === "lokito123bagtanosiosi"){

    document.getElementById("loginScreen").style.display = "none";

    document.getElementById("mainContent").classList.remove("hidden");

    const love = document.getElementById("loveScreen");

    love.classList.remove("hidden");

    setTimeout(() => {

      love.style.display = "none";

    },2500);

  }else{

    document.getElementById("error").innerHTML =
    "Contraseña incorrecta :c";

  }

}

function abrirCarta(){

  document
  .getElementById("letter")
  .classList.toggle("hidden");

}
// MENSAJES QUE CAMBIAN

const mensajes = [

  "te quieroo ♡",
  "guapo",
  "muaaaak",
  "amo estar contigo",
  "me encanta estar contigo",
  "tu i yo",
  "mi vida",
  "mi niño hermosooo ♡"

];

let indiceMensaje = 0;

setInterval(() => {

  indiceMensaje++;

  if(indiceMensaje >= mensajes.length){

    indiceMensaje = 0;

  }

  document.getElementById("loveMessage").innerHTML =
  mensajes[indiceMensaje];

},3000);

const razones = [

  "Porque me haces feliz ♡",
  "Porque siempre pienso en ti ♡",
  "Porque contigo todo es mejor ♡",
  "Porque me gusta como me hablas cuando estas emocionado ♡",
  "Porque me siento comoda contigo ♡",
  "Porque no me haces dudar ♡",
  "Porque amo pasar tiempo contigo ♡",
  "Porque haces mis días más bonitos ♡",
  "Porque me haces reir ♡",
  "Porque me gusta tu forma de ser ♡",
  "Porque eres pro ♡",
  "Porque eres otaku ♡",
  "Porque contigo puedo ser yo ♡",
  "Porque eres sensible ♡",
  "Porque aveces tartamudeas al hablar ♡",
  "Porque tienes iniciativa ♡",
  "Porque no me aburres ♡",
  "Porque sí ♡",
  "Porque eres trabajador ♡",
  "Porque me siento orgullosa de ti ♡",
  "Porque tienes unos ojos hermosos ♡",

];

document.getElementById("reasonBtn")
.addEventListener("click",()=>{

  const random =
  Math.floor(Math.random()*razones.length);

  document.getElementById("reasonText").innerHTML =
  razones[random];

});
const corazon = document.getElementById("heartGame");
const mensaje = document.getElementById("mensajeCorazon");

corazon.addEventListener("click", () => {

  corazon.src = "corazonSano.png";

  document.getElementById("heartLetters")
  .style.display = "block";

});