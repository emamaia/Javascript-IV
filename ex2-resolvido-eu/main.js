const nomesNoRole =['Adriana', 'Adrielly', 'Aline', 'Ana', 'Angelica', 'Ba', 'Babs', 'Carol','Carolina','Cecilia','Daiana','Emanuelle', 'Jackeline','Jennifer','Josiane','Lia','Marcela','Monique','Pricilla','Priscilla','Raissa','Raquel','Romênia','Rosana','Simara','Simone','Talita','Telma','Thaís','Deniza']

const formulario = document.getElementById('form-do-role')
const input = document.getElementById('nome')
const label = document.getElementById('label')
const button = document.getElementsByClassName('btn')
const div = document.getElementById('status')

formulario.addEventListener('submit', function(ev){
    ev.preventDefault()

    const inputUsuario = input.value
    let buscaRole = nomesNoRole.find(nome => nome === inputUsuario)
    div.innerHTML=""
    if(buscaRole){
        const mostraAluna = document.createElement('p')
        div.appendChild(mostraAluna)
        mostraAluna.textContent= `${buscaRole} estava no rolê`
        input.classList.remove('is-invalid')
        mostraAluna.classList.remove('text-danger')
    } else {
        const mostraAluna = document.createElement('p')
        div.appendChild(mostraAluna)
        input.classList.add('is-invalid')
        mostraAluna.classList.add('text-danger')
        mostraAluna.textContent= `${inputUsuario} não estava no rolê`
    }
    
    formulario.reset()
})