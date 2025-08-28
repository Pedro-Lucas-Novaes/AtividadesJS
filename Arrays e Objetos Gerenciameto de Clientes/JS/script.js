// Array listaClientes
const listaClientes = [
  {
    nome: "Pedro Lucas",
    endereco: "Jardim das Palmeiras 789",
    cpf: 79517104878,
  },
  {
    nome: "Lucas Henrique",
    endereco: "Bairro Centro 308",
    cpf: 99597904979,
  },
  {
    nome: "Diego Maxx",
    endereco: "Jardim Liberdade 703",
    cpf: 59515154575,
  },
];
// Fim Array listaClientes

// fun listaClientes forEach
function exibirLista() {
  listaClientes.forEach((Cliente) => {
    document.write(`
        Nome: ${Cliente.nome}<br>
        Endereço: ${Cliente.endereco}<br>
        CPF: ${Cliente.cpf}<br><br>
        `);
  });
}
// Fim fun listaClientes forEach

// Adicionando Cliente/Objeto no final da lista
listaClientes.push({
  nome: "Paulo Beti",
  endereco: "Rua José Camargo 566",
  cpf: 37610438655,
});
// Fim Adicionando Cliente/Objeto no final da lista

// Adicionando Cliente/Objeto no Início da lista
listaClientes.unshift({
  nome: "Roberto Sousa",
  endereco: "Rua Calamardo 6",
  cpf: 376454345655,
});
// Fim Adicionando Cliente/Objeto no Início da lista

exibirLista();
