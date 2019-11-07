class Botao {
    constructor(texto, cor, tamanho, icone) {
        this.texto = texto,
            this.cor = cor,
            this.tamanho = tamanho,
            this.icone = icone
    }

    desenhaBotao() {
        const novoBotao = document.createElement('button')
        novoBotao.setAttribute('class', `${this.cor} ${this.tamanho}`)

        if (this.icone) {
            const tagIcone = document.createElement('i')
            tagIcone.setAttribute('class', `fas ${this.icone}`)
            novoBotao.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        } else {

            novoBotao.innerHTML = this.texto
        }
        document.getElementById('buttons-section').appendChild(novoBotao)
    }
}

const botaoVerde = new Botao('Botão verde', 'verde', 'pequeno', 'fa-plus')

botaoVerde.desenhaBotao()

const botaoAzul = new Botao('Botão Azul', 'azul', 'medio', 'fa-plus')

botaoAzul.desenhaBotao()