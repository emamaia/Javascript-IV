function Professor(nome, sobrenome, materia){
    this.nome=nome,
    this.sobrenome=sobrenome,
    this.materia=materia
}

const prof1 = new Professor('Emanuelle', 'Maia', 'História')
const prof2 = new Professor('Lydia', 'Rodeigues','Javascript IV')

Professor.prototype.dizMateria = function(){
    return `A matéria é ${this.materia}`
}

console.log(prof1.dizMateria());

prof2.dizMateria = function(){
    return `A professor é ${this.nome} e a matéria é ${this.materia}`
}

console.log(prof2.dizMateria());
