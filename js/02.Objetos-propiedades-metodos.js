//Objetos : Es una coleccion de propiedades y metodos

var object = {
	nombre:"Juan",
	edad:31,
	descripcion:function(){
		console.log("Su nombre es "+object.nombre + " y tiene "+ object.edad  );
	},
	saludar:function(saludo){
		console.log(saludo+" "+object.nombre);
	}
}

console.log(object.nombre);

object.descripcion();
object.saludar("hola");



///Objetos primitivos

var d = new Date();
console.log(d);
var y = d.getFullYear();
console.log(y);