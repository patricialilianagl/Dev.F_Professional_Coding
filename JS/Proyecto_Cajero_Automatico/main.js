const cuentas = [
  { nombre: "Mali", saldo: 200, contrasena: "1234"},
  { nombre: "Gera", saldo: 290, contrasena: "5678"},  
  { nombre: "Maui", saldo: 290, contrasena: "9123"},
];

let indice;
const saldo=document.getElementById("nav-saldo")
const abono=document.getElementById("nav-abono")
const retiro=document.getElementById("nav-retiro")
const btnCerrar=document.getElementById("btn-cerrar")
const btnIniciar = document.getElementById("btn-iniciar")
const btnAbonar=document.getElementById("btn-abonar")
const btnRetirar=document.getElementById("btn-retirar")

document.getElementById("view-index").style.display ="none";
document.getElementById("view-saldo").style.display ="none";
document.getElementById("view-abono").style.display ="none";
document.getElementById("view-retiro").style.display ="none";

btnCerrar.addEventListener("click",cerrar);
btnIniciar.addEventListener("click",iniciar);
retiro.addEventListener("click",retirar);
abono.addEventListener("click",abonar);
saldo.addEventListener("click",consultar);
btnAbonar.addEventListener("click",abonarCantidad);
btnRetirar.addEventListener("click",retirarCantidad);
let cantidadAbono;
let cantidadRetiro;
let miSaldo;

function saludar(){
  nombre=cuentas[indice].nombre;
  miSaldo=cuentas[indice].saldo;
  document.getElementById("cliente").outerHTML=`<h2>Hola ${nombre}</h2>`;
}
function abonarCantidad(){
 cantidadAbono= parseInt(document.getElementById("cantidad-abono").value);
 document.getElementById("view-new-saldo").style.display ="block";
 if(((cuentas[indice].saldo)+cantidadAbono<=990) && ((cuentas[indice].saldo)+cantidadAbono>=10)){
  newSaldo=cuentas[indice].saldo+cantidadAbono;
  document.getElementById("newSaldo").innerHTML=`Abonaste ${cantidadAbono}, tu saldo es ${newSaldo}!`;
  miSaldo=newSaldo;
  cuentas[indice].saldo=newSaldo;
 }else{
  document.getElementById("newSaldo").innerHTML=`No puedes tener mas de $990 !`;  
 }
}

function retirarCantidad(){
cantidadRetiro= parseInt(document.getElementById("cantidad-retiro").value);
document.getElementById("view-new-saldo").style.display ="block";
if((cuentas[indice].saldo)-cantidadRetiro<=990 && (cuentas[indice].saldo)-cantidadRetiro>=10){
  newSaldo=cuentas[indice].saldo-cantidadRetiro;
  document.getElementById("newSaldo").innerHTML=`Retiraste ${cantidadRetiro}, tu saldo es ${newSaldo}!`;
  miSaldo=newSaldo;
  cuentas[indice].saldo=newSaldo;
 }else{
  document.getElementById("newSaldo").innerHTML=`No puedes tener menos de $10 !`;
 }
}

function iniciar(){
  let user = document.getElementById("user").value;
  let contrasena = document.getElementById("contrasena").value;
    for (let i = 0; i < cuentas.length; i++) {
      if (user === cuentas[i].nombre ){
          if(contrasena === cuentas[i].contrasena){
              alert("Usuario correcto")
              indice=i;
              saludar();
              document.getElementById("view-login").style.display = "none";
              document.getElementById("view-index").style.display = "block";
              document.getElementById("view-abono").style.display ="none";
              document.getElementById("view-retiro").style.display ="none";
              break;
          }else{
              alert("Contraseña incorrecta") 
              break;
          }
      }
          if(cuentas.length==(i+1)){
              alert("No se encontro usuario") 
              break;
          }
    } 
}

function retirar(){
  document.getElementById("view-abono").style.display ="none";
  document.getElementById("view-saldo").style.display ="none";
 document.getElementById("view-retiro").style.display ="block";
 document.getElementById("view-new-saldo").style.display ="none";
}

function abonar(){
  document.getElementById("view-retiro").style.display ="none";
  document.getElementById("view-saldo").style.display ="none";
 document.getElementById("view-abono").style.display ="block";
 document.getElementById("view-new-saldo").style.display ="none";
}

function consultar(){ 
  document.getElementById("view-saldo").style.display ="block";
  document.getElementById("miSaldo").innerHTML=`Tu saldo es ${miSaldo}!`;
  document.getElementById("view-retiro").style.display ="none";
  document.getElementById("view-abono").style.display ="none";
  document.getElementById("view-new-saldo").style.display ="none";
}

function cerrar(){
  location.reload();  
}