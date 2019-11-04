const comidas= ['lasanha', 'batata', 'bacon']

console.log(comidas[2]);

comidas.forEach((comida, posicao) =>{
    console.log(`Na posição ${posicao} temos a comida ${comida}`);
    
})

let outrasComidas= comidas.concat('jiló')

console.log(outrasComidas)

let stringJoin = comidas.join(' &  ')

console.log(stringJoin);

comidas.shift() 
console.log(comidas);

comidas.pop()
console.log(comidas);

comidas.unshift('macarrão')
console.log(comidas);


comidas.push('strogonoff')
console.log(comidas);

comidas.reverse()
console.log(comidas);

comidas.splice(1,1,'alface')
console.log(comidas);

comidas.sort()
console.log(comidas);


let mapArray = comidas.map((comida) => `${comida} gostosa`)

console.log(mapArray);

let juntaComida = comidas.reduce((valor, acumulador)=> {
    return  `${valor} e ${acumuador}`
})

console.log(juntaComida);



