/// Clases

// La clases son functiones constructoras y siempre las vamos a iniciar con mayusculas
// ejemplo:new String();

// Clases primitivas

//clase string

var string = new String("Esto es un String");
console.log("string",string);


//Clase numbre

var number= new Number(12);
console.log("number",number);

//clase boolean

var boolean = new Boolean(false);
console.log("boolean",boolean);


// Clases compuestas

//clase array

var array = new Array("rojo","amqrillo","verde");
console.log("array",array);

// clases de tipo object
var object = new Object({nombre:"Pedro",edad:34});
console.log("object",object);


// clases creadas por el programador

function Persona(){
	//propiedades publicas
	this.nombre;
	this.edad;	
}

var yo= new Persona();
yo.nombre= "Juan";
yo.edad = "21 años";

console.log(yo);

//CLASES CON PARAMETROS

function Animales(nombre,raza){

	this.nombre = nombre;
	this.raza = raza;

}

var mascota = new Animales("perro", "pitbul");
console.log("animales",mascota);