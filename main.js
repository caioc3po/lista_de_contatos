
const form = document.getElementById("formulario-adicionar-contato")

let linhas = "";


form.addEventListener("submit", function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato")
    const inputNumeroContato = document.getElementById("numero-contato")
    
    let linha = "<tr>";
    linha += `<td><label>${inputNomeContato.value}</label>/<label>${inputNumeroContato.value}</label></td>`
    

    linhas += linha

    inputNomeContato.value = ""
    inputNumeroContato.value = ""
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tfoot");
    corpoTabela.innerHTML = linhas;
}