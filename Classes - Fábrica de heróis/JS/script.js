class Heroi{
    constructor(nome,vida,velocidade,forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr(){
        return `${this.nome} está correndo!`;
    }
    andar(){
        return  `${this.nome} está andando!`;
    }
    atacar(){
        return `${this.nome} está atacando!`;
    }
    defender(){
        return `${this.nome} está se defendendo!`
    }
}

class HomemAranha extends Heroi {
  constructor(nome,vida,velocidade,forca,teia){
    super(nome,vida,velocidade,forca);
    this.teia = teia;
  }
  sentidoAranha(){
    return `${this.nome} detectou um perigo`;
  }
}

class Superman extends Heroi {
  constructor(nome,vida,velocidade,forca,visaoDeCalor){
    super(nome,vida,velocidade,forca);
    this.visaoDeCalor = visaoDeCalor;
  }
  SuperForca(){
    return `${this.nome} está usando sua super força`;
  }
}

class Batman extends Heroi {
  constructor(nome,vida,velocidade,forca,furtividade){
    super(nome,vida,velocidade,forca);
    this.furtividade = furtividade; 
  }
  persuasao(){
    return `${this.nome} o está usando sua Persuasão`;
  }
}



const homemAranha = new HomemAranha("Homem-Aranha", 1000, "80km", 200, 1);
document.write(
  `<p>O Herói ${homemAranha.nome}, Possui ${homemAranha.vida} pontos de vida, chega velocidade máxima de ${homemAranha.velocidade} por hora, E possui ${homemAranha.forca} pontos de força. No momento, ${homemAranha.atacar()}, ${homemAranha.teia}</p>`
);

const SuperMan = new Superman("Super man", 99999, "99999km", 99999, 1);
document.write(
  `<p>O Herói ${SuperMan.nome}, Possui ${SuperMan.vida} pontos de vida, chega velocidade máxima de ${SuperMan.velocidade} por hora, E possui ${SuperMan.forca} pontos de força. No momento, ${SuperMan.defender()}, ${SuperMan.visaoDeCalor}</p>`
);

const BatMan = new Batman("Batman", 100, "30km", 20, 1);
document.write(
  `<p>O Herói ${BatMan.nome}, Possui ${BatMan.vida} pontos de vida, chega velocidade máxima de ${BatMan.velocidade} por hora, E possui ${BatMan.forca} pontos de força. No momento, ${BatMan.andar()}, ${BatMan.furtividade}</p>`
);

document.write(`<p>${homemAranha.sentidoAranha()}</p>`);
document.write(`<p>${SuperMan.SuperForca()}</p>`);
document.write(`<p>${BatMan.persuasao()}</p>`);
