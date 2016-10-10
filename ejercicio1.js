/*<h4>Ejercicio 1: <br>Haz el juego de piedra papel o tijera con 3 turnos</h4>*/

/*Pseudocodigo

INICIO

1- "Elige piedra, papel o tijera"
2- Lee valor1
3- "Elige piedra, papel o tijera"
4- Lee valor2
5- 	if (valor1 == "piedra" y valor2 == "tijera") o (valor1 == "tijera" y valor2 == "piedra")
		Mostrar "valor1  vs valor2 gana piedra"
	else if (valor1 == "piedra" y valor2 == "papel") o (valor1 == "papel" y valor2 == "piedra")
		Mostrar "valor1 vs valor2 gana papel"
	} else if (valor1 == "tijera" y valor2 == "papel") o (valor1 == "papel" y valor2 == "tijera")
		Mostar "valor1 vs valor2 gana tijera"
	} else{
		Mostrar"valor1 y valor2 son iguales";
	}
FIN

*/



for(var i = 1; i <= 3; i++){
var valor1 = prompt("Escribe piedra, papel o tijera");
var valor2 = prompt("Escribe piedra, papel o tijera");

	if ((valor1 == "piedra" && valor2 == "tijera") || (valor1 == "tijera" && valor2 == "piedra")){
		document.write(valor1 + " vs " + valor2 + " <strong>gana piedra</strong> <br>");
	} else if((valor1 == "piedra" && valor2 == "papel") || (valor1 == "papel" && valor2 == "piedra")){
		document.write(valor1 + " vs " + valor2 + " <strong>gana papel</strong> <br>");
	} else if ((valor1 == "tijera" && valor2 == "papel")|| (valor1 == "papel" && valor2 == "tijera")){
		document.write(valor1 + " vs " + valor2 + " <strong>gana tijera</strong> <br>");
	} else if ((valor1 == "tijera" && valor2 == "tijera")|| (valor1 == "papel" && valor2 == "papel") || (valor1 == "piedra" && valor2 == "piedra")){
		document.write(valor1 + " y " + valor2 + " son iguales, <strong>es empate</strong> <br>");
	} else{
		document.write("<br>No es una opción");
	}
}
