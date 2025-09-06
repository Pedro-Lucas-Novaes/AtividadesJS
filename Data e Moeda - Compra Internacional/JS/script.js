const dataAtual = new Date();
document.write(`Data atual: ${dataAtual}`);

const valorDolar = 500.75;

const compraInternacional = valorDolar.toLocaleString("en", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>Valor da compra em Dólar: ${compraInternacional}.</p>`);

const compraNacional = valorDolar * 5.42
document.write(`<p>Valor da compra em Real: ${compraNacional.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
})}.</p>`);


const dataEntrega = new Date(dataAtual);
dataEntrega.setDate(dataAtual.getDate() + 12);
document.write(`A data de entrega: ${dataEntrega}`);