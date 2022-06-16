/*1.- A partir del siguiente arreglo de animalitos:
    const animalitos = [
    { nombre: “carlitos”  , especie: “conejo” },    // 0
    { nombre: “esteban”   , especie: “perro” },     // 1
    { nombre: “fabiruchis”, especie: “tortuga” },   // 2
    { nombre: “anita”     , especie: “gato” },      // 3
    { nombre: “miranda”   , especie: “conejo” },    // 4
    { nombre: “lucas”     , especie: “conejo” },    // 5
    { nombre: “Horacia”   , especie: “tortuga” }    // 6
    ];
    Genera un nuevo arreglo en el que solo se encuentren
    los conejos del arreglo original.


    const animalitos = [
        {nombre: 'carlitos' , 
        especie: 'conejo' },
        {nombre: 'esteban' , 
        especie: 'perro' },
        {nombre: 'fabiruchis' ,
        especie: 'tortuga' },
        {nombre: 'anita' ,
        especie: 'gato' },  
        {nombre: 'miranda' , 
        especie: 'conejo' },   
        {nombre: 'lucas' , 
        especie: 'conejo' },  
        {nombre: 'Horacia' , 
        especie: 'tortuga' }
        ];

const filtrarConejos = conejo => conejo.especie == 'conejo';

let conejosoriginal = animalitos.filter(filtrarConejos)

console.log(animalitos);
console.log(conejosoriginal);
*/

/*2.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: “Bimbo”,    especie: “Hamster”, comidasFavoritas: [“Semillas”, “Nueces”] },
        { nombre: “Ludovico”, especie: “Perro”,   comidasFavoritas: [“Huesos”, “Jamon”] },
        { nombre: “Pavlov”,   especie: “Perro”,   comidasFavoritas: [“Croquetas”, “Pollo”] },
        { nombre: “Chancla”,  especie: “Gato”,    comidasFavoritas: [“Atun”, “Pescado”] },
        { nombre: “Don Pepe”, especie: “Perico”,  comidasFavoritas: [“Semillas”] }
    ];
    Genera un nuevo arreglo que contenga los nombres de todas
    las mascotas.
*/

const mascotas = [
    {nombre: 'Bimbo',    
    especie: 'Hamster', 
    comidasFavoritas: ['Semillas', 'Nueces'] 
    },
    {nombre: 'Ludovico', 
    especie: 'Perro',   
    comidasFavoritas: ['Huesos', 'Jamon'] 
    },
    {nombre: 'Pavlov',
    especie: 'Perro',   
    comidasFavoritas: ['Croquetas', 'Pollo'] 
    },
    {nombre: 'Chancla', 
    especie: 'Gato',    
    comidasFavoritas: ['Atun', 'Pescado'] 
    },
    {nombre: 'Don Pepe', 
    especie: 'Perico',  
    comidasFavoritas: ['Semillas'] 
    }
];

const nombresMascotas = nombreMascota => nombreMascota.nombre;

let namesMascotas = mascotas.map(nombresMascotas)

console.log(mascotas);
console.log(namesMascotas);

