const container=document.getElementById("container")
let numero=60
const inputEl=document.getElementById("input-field")
const generarcodigo=()=>{
    return "CODE = " + Math.floor(100 + Math.random() * 90) + "-" + Math.floor(100 + Math.random() * 90);
};
inputEl.value=generarcodigo()
const cambiar=() => {
    if(numero>=0){
        numero--;
         document.getElementById("tiempo").innerText = numero;     
    }  
  else  if(numero===0){
        inputEl.value=innerText=generarcodigo()
        numero=60
    } 
};
setInterval(cambiar, 1000);
