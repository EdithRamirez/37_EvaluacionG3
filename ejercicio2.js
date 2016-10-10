/*<h4>Ejercicio 2: <br>Declara un arreglo vacío denominado nombres. Pide al usuario tres nombres y 
almacena esos nombres como elementos arreglo. A continuación muestra el contenido en un mensaje.</h4>*/


/*pseudocodigo*/
/*
INICIO
1 - Declarar variable nombres de tipo arreglo
2 - para i= 0 hasta i < 3 hacer
2 - Escribir "Ingresa el nombre del usuario"
3 - Leer nombres
4 - fin para
5 - Mostrar mensaje con los nombres ingresados
FIN

*/

var nombres = [];
for (var i = 0 ; i < 3 ; i++) {
	nombres.push(prompt("Ingresa nombre de usuario")); 
}
document.write("Los nombres ingresados fueron " + nombres);