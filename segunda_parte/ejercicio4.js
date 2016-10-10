/*Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), 
que muestra por pantalla las propiedades de la persona.</li>
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.*/

/*Pseudocodigo
	Crear un objeto llamado persona con los propiedades nombre, edad y genero
	Crear un objeto llamado estudiante con los propiedades curso y grupo
	Crear un objeto llamado profesor con los propiedades asignatura y nivel

*/

function persona (nombre, edad, genero){
	this.nombre = nombre;
	this.edad = edad;
	this.genero = genero;
}

var edith = new persona("edith", 25, "fem");


function estudiante (curso, grupo){
	this.curso = curso;
	this.grupo = grupo;
}
var edith1 = new estudiante("edith", 25, "fem");

function profesor (asignatura, nivel){
	this.asignatura = asignatura;
	this.nivel = nivel;
}
var edith2 = new profesor("mate", 1);
