let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];


class Cartao {
    constructor(card) {
        this.card = card
    }

    renderCreator() {
        const cartao = `
        <div class='card'>
            <img class="imagem" src="${this.card.imagem}" alt="Cards de comida">
            <h3 class="${this.titulo}">${this.card.titulo}</h3>
            <p class="ingredientes">${this.card.ingredientes}</p>
        </div>`

        document.getElementById('cards').insertAdjacentHTML('beforeend', cartao)
    }
}

resultados.map((user) => {
    new Cartao(user).renderCreator()
})

const input = document.getElementById('input')
const btn = document.getElementById('botao')
const section = document.getElementById('cards')

btn.addEventListener('click', function (ev) {

    const filtro = resultados.filter(receita => {
        return receita.titulo.toUpperCase().includes(input.value) || receita.ingredientes.includes(input.value)
    })
    console.log(filtro);

    if (filtro.length>0) {
        section.innerHTML=''
        filtro.map((encontrado) => {
            new Cartao(encontrado).renderCreator()
        })
    } else {
        section.innerHTML='Não encontrado'
    }

})


