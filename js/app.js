let total
limpar()

function adicionar() {
    let quantidade = document.getElementById("quantidade").value;
    if (quantidade != parseInt(quantidade)) {
        document.getElementById("quantidade").value = ""
        alert("Erro! Insira um valor adequado")
        return
    } else {
        if (quantidade <= 0) {
            document.getElementById("quantidade").value = ""
            alert("Erro! Insira um valor adequado")
            return
        }
    }
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let subtotal = quantidade * valorUnitario;
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    total = total + subtotal;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById("quantidade").value = ""
}

function limpar() {
    total = 0
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
}