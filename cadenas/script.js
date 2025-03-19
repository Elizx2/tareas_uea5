let cadena = "las cadenas";
let txt = "aqui va una frase que me permitira explorar los metodos de cadenas de caracteres de javascript";
let txt2= txt.toUpperCase();
let txt3= txt2.replace("CADENAS", "STRINGS");

document.getElementById ('cadena').innerHTML="vamos a usar "+ cadena;
document.getElementById ('cadena2').innerHTML= txt2;
document.getElementById ('cadena3').innerHTML= txt3;


//console.log(txt.lenght);
console.log(txt.at(2));
console.log(txt.toUpperCase());