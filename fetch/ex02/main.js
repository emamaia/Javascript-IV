const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById('complemento')
const bairroInput = document.getElementById('bairro')
const localidadeInput = document.getElementById('localidade')
const ufInput = document.getElementById('uf')
const exibeInput = document.getElementById('exibe-endereco')
//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", () => {
    if (cepInput.value) {
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            ///façam aparecer os valores nos inputs 
            //  console.log(json);
            //  console.log(json.logradouro);
            //  console.log(json.complemento);
            //  console.log(json.bairro);     

            retornaEndereco(json)

        })
    }
})

retornaEndereco = dados => {
    logradouroInput.value = dados.logradouro
    complementoInput.value = dados.complemento
    bairroInput.value = dados.bairro
    localidadeInput.value = dados.localidade
    ufInput.value = dados.uf
    exibeInput.value = dados
}