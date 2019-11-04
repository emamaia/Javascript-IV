
let frutas = ["banana", "morango", "bacurí", "laranja"];
const formulario = document.getElementById('formulario')
const input = document.getElementById('input');
const button = document.getElementById('btn')
const div = document.getElementById('div')

formulario.addEventListener('submit', function(ev){
    ev.preventDefault()
    const inputUsuario = input.value
    
    let buscaFruta = frutas.find(findFruta => findFruta === inputUsuario)
    
       if(buscaFruta){
        const mostraFruta = document.createElement('p')
        div.appendChild(mostraFruta)
        mostraFruta.textContent=buscaFruta
         
    } else{
        const mostraFruta = document.createElement('p')
        div.appendChild(mostraFruta)
        mostraFruta.textContent=`${inputUsuario} não faz parte do rolê`
    }

    formulario.reset()
                     
})