/* Ejercicios:
1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
*/

/*
var pregunta = prompt('¿Eres bellísimo/a?');

if(pregunta == "Si" || pregunta == "si" || pregunta == "SI" || pregunta == "sI" || pregunta == "Sí" || pregunta == "SÍ"){
    alert('Ciertamente');
} else if(pregunta == "no" || pregunta == "No" || pregunta == "NO" || pregunta == "nO"){
    alert("No te creo")
} else {
    alert("No te entiendo")
}
*/


/*
2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

var numeroUsuario = prompt('Ingrese un número');

if(numeroUsuario % 2 == 0){
    alert(numeroUsuario + ' es un número divisible entre 2');
} else{
    alert( numeroUsuario + ' no es un número divisible entre 2');
}
*/


/*
3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var numero = prompt('Ingrese un número');

if(numero % 2 == 0){
    alert(numero + ' es un número par')
} else{
    alert(numero + ' no es un número par')
}
*/


/*

4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

var numeroCliente = prompt('Ingrese un número de cliente')

if(numeroCliente == "1000"){
    alert(numeroCliente + ' Ganaste un premio')
} else{
    alert(numeroCliente + ' Lo sentimos, sigue participando')
}
*/


/*
5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

var numero1 = prompt('Ingrese el primer número')
var numero2 = prompt('Ingrese el segundo número')

if (numero1 > numero2){
    alert("El " + numero2 + " es menor")
} else{
    alert("El " + numero1 + " es menor")
}
*/


/*6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

var numero1 = prompt('Ingrese el primer número');
var numero2 = prompt('Ingrese el segundo número');
var numero3 = prompt('Ingrese el tercer número');
var mayor;

if(numero1 > numero2 && numero1 > numero3){
    mayor = numero1;
    alert("El número mayor es " + mayor);
} else if (numero2 > numero1 && numero2 > numero3) {
    mayor = numero2;
    alert("El número mayor es " + mayor);
} else if(numero1 == numero2){
    alert("Los numeros " + numero1 + " y " + numero2 + " son iguales")
} else if(numero1 == numero3){
    alert("Los numeros " + numero1 + " y " + numero3 + " son iguales")
} else if(numero2 == numero1) {
    alert("Los numeros " + numero2 + " y " + numero1 + " son iguales")
} else if(numero2 == numero3) {
    alert("Los numeros " + numero2 + " y " + numero3 + " son iguales")
} else if(numero3 == numero1) {
    alert("Los numeros " + numero3 + " y " + numero1 + " son iguales")
} else if(numero3 == numero2) {
    alert("Los numeros " + numero3 + " y " + numero2 + " son iguales")
} else{
    mayor = numero3
    alert("El número mayor es " + mayor);
}
*/


/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

var diaSemana = prompt("Ingrese un día de la semana");

if(diaSemana == "lunes" || diaSemana == "Lunes" || diaSemana == "LUNES"){
    alert("Es Lunes");
} else if(diaSemana == "martes" || diaSemana == "Martes" || diaSemana == "MARTES"){
    alert("Es Martes");
} else if(diaSemana == "miercoles" || diaSemana == "Miércoles" || diaSemana == "MIÉRCOLES" || diaSemana == "miercoles" || diaSemana == "Miercoles" || diaSemana == "MIERCOLES"){
    alert("Es Miércoles");
} else if(diaSemana == "jueves" || diaSemana == "Jueves" || diaSemana == "JUEVES"){
    alert("Es Jueves");
} else if(diaSemana == "viernes" || diaSemana == "Viernes" || diaSemana == "VIERNES"){
    alert("Es Viernes");
} else if(diaSemana == "sabado" || diaSemana == "Sabado" || diaSemana == "SABADO" || diaSemana == "sábado" || diaSemana == "Sábado" || diaSemana == "SÁBADO"){
    alert("Es Sábado");
} else if(diaSemana == "domingo" || diaSemana == "Domingo" || diaSemana == "DOMINGO"){
    alert("Es Domingo");
} else{
    alert("No te entiendo");
}
*/

/* 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
1 signo = -> asiganación
2 signos = -> comparación

var calificación = prompt("Ingrese tu calificación entre 1 y 10");

if(calificación > 10){
    alert("¡Error!, Calificación fuera del rango")
} else if(calificación == 10){
    alert("Excelente")
} else if(calificación == 9){
    alert("Bien")
} else if(calificación >= 6 && calificación <= 8){
    alert("Regular")
} else{
    alert("Reprobado")
}
*/


/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

var opcion = prompt("¿Como quiere su helado? \n '1' El helado sin topping cuesta 50 MXN. \n '2' El topping de oreo cuesta 10 MXN. \n '3' El topping de KitKat cuesta 15 MXN. \n '4' El topping de brownie cuesta 20 MXN.")
var helado = 50;
var oreo = 10;
var kitKat = 15;
var brownie = 20;

if(opcion == 1 ){
  alert("El precio del helado es de " + helado )
} else if( opcion == 2 ){
  alert("El precio del helado es de: ", helado + oreo )
} else if( opcion == 3 ){
  alert("El precio del helado es de: ",  helado + kitKat )
} else if( opcion == 4 ){
  alert("El precio del helado es de: ",  helado + brownie )
} else{
  alert('No tenemos este topping, lo sentimos.')
}
*/

/*
10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
*/ 

var elección = prompt("Escribe el programa que te interese \n Course \n Carrera \n Master").toLowerCase()
// Transformar strings a Mayusculas
// var elección = prompt("Escribe el programa que te interese \n Course \n Carrera \n Master").toUpperCase()


if (elección == 'course'){
  document.write(" El costo es de $4999 MXN mensuales")
}else if( elección == 'carrera'){
  document.write(" El costo es de $3999 MXN mensuales")
}else if( elección == 'master'){
  document.write(" El costo es de $2999 MXN mensuales")
} else {
  alert(" Programa incorrecto")
}
