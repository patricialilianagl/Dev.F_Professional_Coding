/*
Ejerció Array
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)		
Imprime la clasificación actual
*/
var clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
console.log(clasificaciones);

/*
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:		
1- Celia adelanta a Raúl		
*/
clasificaciones[2] = 'Celia';
clasificaciones[3] = 'Raúl';
console.log(clasificaciones);
/*
2- Antonio es descalificado y se elimina del concurso
*/
clasificaciones.pop();
console.log(clasificaciones);
/*
3- Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
*/
clasificaciones.splice(1,0, 'Roberto');
console.log(clasificaciones);

clasificaciones.splice(2,0,'Amaya')
console.log(clasificaciones);
/*
4- Hay una nueva participante que pasa a encabezar la clasificación: Marta	
*/
clasificaciones.unshift('Marta');
console.log(clasificaciones);
/*
5- Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
*/