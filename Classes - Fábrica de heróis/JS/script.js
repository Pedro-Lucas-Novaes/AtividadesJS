function spanDestaque(texto) {
  return `<span class="destaque">${texto}</span>`;
} 

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
  `<p>O Herói ${spanDestaque(homemAranha.nome)}<br>
   Possui ${spanDestaque(homemAranha.vida)} pontos de vida<br>
   Chega velocidade máxima de ${spanDestaque(homemAranha.velocidade)} por hora<br>
    Possui ${spanDestaque(homemAranha.forca)} pontos de força<br> 
    No momento ${spanDestaque(homemAranha.atacar())}<br> 
     ${spanDestaque(homemAranha.teia ? "Homem Aranha está lançando teia!" : "Homem Aranha não possui teias")}</p>`
);

const SuperMan = new Superman("Super man", 99999, "99999km", 99999, 1);
document.write(
  `<p>O Herói ${spanDestaque(SuperMan.nome)}<br>
   Possui ${spanDestaque(SuperMan.vida)} pontos de vida<br>
    Chega velocidade máxima de ${spanDestaque(SuperMan.velocidade)} por hora<br>
     Possui ${spanDestaque(SuperMan.forca)} pontos de força<br>
      No momento ${spanDestaque(SuperMan.defender())}<br>
       ${spanDestaque(SuperMan.visaoDeCalor ? "Super Man está usando visão de calor" : "Super man não está usando visão de calor")}</p>`
);

const BatMan = new Batman("Batman", 100, "30km", 20, 0);
document.write(
  `<p>O Herói ${spanDestaque(BatMan.nome)}<br>
   Possui ${spanDestaque(BatMan.vida)} pontos de vida<br>
    Chega velocidade máxima de ${spanDestaque(BatMan.velocidade)} por hora<br>
     Possui ${spanDestaque(BatMan.forca)} pontos de força<br>
      No momento ${spanDestaque(BatMan.andar())}<br>
       ${spanDestaque(BatMan.furtividade ? "Batman está entre as sombras" : "Fuja...")}</p>`
);

document.write(`<p>${spanDestaque(homemAranha.sentidoAranha())}</p>`);
document.write(`<p>${spanDestaque(SuperMan.SuperForca())}</p>`);
document.write(`<p>${spanDestaque(BatMan.persuasao())}</p>`);


