function spanDestaque(texto) {
  return `<span class="destaque">${texto}</span>`;
} 

const dataAtual = new Date(); 
document.write(`<p>Data atual: ${spanDestaque(dataAtual)}</p>`);

const valorDolar = 500.75;

const compraInternacional = valorDolar.toLocaleString("en", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>Valor da compra em Dólar: ${spanDestaque(compraInternacional)}</p>`);

const compraNacional = valorDolar * 5.42;

const valorFormatado = compraNacional.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
});

document.write(`<p>Valor da compra em Real: ${spanDestaque(valorFormatado)}</p>`);


const dataEntrega = (diasParaAdicionar) => {
  const dataAtual = new Date();
  dataAtual.setDate(dataAtual.getDate() + diasParaAdicionar);

  const dia = String(dataAtual.getDate()).padStart(2, '0');
  const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  const ano = dataAtual.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`;

  document.write(`<p>A data de entrega será: ${spanDestaque(dataFormatada)}</p>`);
};

dataEntrega(12);


