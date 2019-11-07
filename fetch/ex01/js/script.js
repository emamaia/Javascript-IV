
const cardSection = document.getElementById('cards-section')
const btn = document.getElementById('botao')
const error = document.getElementById('error')
const placeholderCard = {
    nome: 'Carta não carregada',
    tipo: 'Arcano Maior',
    descricao: 'Sem descrição',
    imagem: 'http://via.placeholder.com/250X500',
    link: 'https://www.astrolink.com.br'
}


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

    try{
        const response = await fetch ('tarot.json')
        const json = await response.json()
        renderizaCard(selecionaCartaAleatoria(json))  
    }catch(e){
        renderizaCard(placeholderCard)
        error.innerHTML= `A requisição falhou ${e}`
    }
}


novaCarta=() =>{
    carregaCarta()

}