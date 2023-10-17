// set up text to print, each item in array is new line
var aText = new Array(
    "En Sukraxia, generamos leads para empresas de software y TI, con el objetivo de convertirlos en clientes leales. Con un equipo de appointment setters y una estrategia de gestión en redes sociales, impulsamos un incremento en las reuniones de ventas, brindando a su vez posicionamiento de marca para nuestros clientes."
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

const animado = document.getElementById('animado');
const animado1 = document.getElementById('animado1');
const animado2 = document.getElementById('animado2');
const animado3 = document.getElementById('animado3');
const animado4 = document.getElementById('animado4');
const animado5 = document.getElementById('animado5');
const animado6 = document.getElementById('animado6');
const animado7 = document.getElementById('animado7');
const animado8 = document.getElementById('animado8');
const animado9 = document.getElementById('animado9');
const animado10 = document.getElementById('animado10');
const animado11 = document.getElementById('animado11');
const animado12 = document.getElementById('animado12');
const animado13 = document.getElementById('animado13');
const animado14 = document.getElementById('animado14');
const animado15 = document.getElementById('animado15');
const animado16 = document.getElementById('animado16');
const animado17 = document.getElementById('animado17');

const cargarImagen = (entrada, observador) => {

    entrada.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(animado);
observador.observe(animado1);
observador.observe(animado2);
observador.observe(animado3);
observador.observe(animado4);
observador.observe(animado5);
observador.observe(animado6);
observador.observe(animado7);
observador.observe(animado8);
observador.observe(animado9);
observador.observe(animado10);
observador.observe(animado11);
observador.observe(animado12);
observador.observe(animado13);
observador.observe(animado14);
observador.observe(animado15);
observador.observe(animado16);
observador.observe(animado17);