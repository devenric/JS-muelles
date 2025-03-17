let resultados = document.getElementById('resultados')
for (let i=1; i<10; i++){
    setTimeout(function(){
const resultado = document.createElement('p');
    if (i===1){
    resultado.textContent = `cojo ${i} muelle, lo tiro por el retrete, ya es ${i} muelle que el retrete se ha tragado`;
}
            else { resultado.textContent = `cojo ${i} muelles, los tiro por el retrete, ya son ${i} muelles que el retrete se ha tragado`;
    }
document.appendChild(resultado);
},i * 2000);

}
