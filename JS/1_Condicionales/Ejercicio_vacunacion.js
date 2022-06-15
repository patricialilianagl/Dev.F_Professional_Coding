//Ejercicio ¿Puedo vacunarme?
// Pertenezco alguno de los siguientes grupos y quiero vacunarme
// - Mayores de 18 años que residen en un municipio fronterizo del Norte del país
// - Embarazadas mayores de 18 años con más de 9 semanas de gestación
// - Personas que cumplen 30 años o más en este año

var edad = 25;
var fronterizo = false;
var embarazada = true;
var semanasDeEmbarazo = 9;


if (edad >= 18 && fronterizo == true){
    console.log("Si puedes vacunarte, por ser mayor de 18 años y vivir en un municipio fronterizo ")
} else if(embarazada == true && edad >= 18 && semanasDeEmbarazo >= 9){
    console.log("Si te puedes vacunar por estar embarazada y con más de 9 semanas de gestación")
} else if (edad >= 30){
    console.log("Si te puedes vacunarte, por ser mayor de 30 años")
} else {
    console.log("No puedes vacunarte")
}