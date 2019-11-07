
const cardSection = document.getElementById('cards-section')
const btn = document.getElementById('botao')


renderizaCard= carta =>{
    const novaCarta= new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

selecionaCartaAleatoria = cartas =>{
    const numeroAleatorio=Math.floor(Math.random()*cartas.length)
    return cartas[numeroAleatorio]   
}

// fetch('tarot.json').then(response=>{
//     return response.json()
// }).then(json =>{
//         console.log(json)
//         renderizaCard(selecionaCartaAleatoria(json))
// })
      
async function carregaCarta(){
    const response = await fetch ('tarot.json')
    const json = await response.json()
    // console.log(response);
    // console.log(json);   
    renderizaCard(selecionaCartaAleatoria(json))   
}


novaCarta=() =>{
    carregaCarta()

}