//se declaran las constantes y variables.
const container=document.getElementById("container")
let numero=60
const inputEl=document.getElementById("input-field")
const generatebtn=document.getElementById("generate");
const symbols="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//esta funcion genera codigos random para el authenticator
const generarcodigo=()=>{
    return "CODE = " + Math.floor(100 + Math.random() * 90) + "-" + Math.floor(100 + Math.random() * 90);
};
//se le asigna proyeccion al input
inputEl.value=generarcodigo()
//se declara la variable de cambio con el tiempo
const cambiar=() => {
    if(numero>=0){
        numero--;
         document.getElementById("tiempo").innerText = numero;     
    }  
    if(numero===0){
        inputEl.value=innerText=generarcodigo()
        numero=60
    } 
};
//se setea un intervalo a 1000 para un conteo regulado
setInterval(cambiar, 1000);
//se crea el mix de arrays
function mixear() {
    let password = "";
    let length=document.getElementById("lenght").value
    for (let i = 0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        password += symbols[randomIndex];
    }
    document.getElementById("passwordptn").innerText = password;
}



