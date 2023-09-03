// Obtém os elementos HTML relevantes
const form = document.getElementById('form-contatos');
const tabelaContatos = document.getElementById('tabela-contatos');

// Define um array para armazenar os contatos
const contatos = [];

// Adiciona um ouvinte de evento ao formulário para tratar o envio
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    // Obtém os valores dos campos de entrada
    const nomeContato = document.getElementById('nome-contato').value;
    const numeroContato = document.getElementById('numero-contato').value;

    if (nomeContato.trim() !== '' && numeroContato.trim() !== '') {
        contatos.push({ nome: nomeContato, numero: numeroContato });

        atualizaTabelaContatos();

        document.getElementById('nome-contato').value = '';
        document.getElementById('numero-contato').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function atualizaTabelaContatos() {
    const corpoTabela = document.getElementById('tabela-contatos');

    corpoTabela.innerHTML = '';

    contatos.forEach(function(contato) {
        const linha = document.createElement('tr');

        const colunaNome = document.createElement('td');
        colunaNome.textContent = contato.nome;

        const colunaNumero = document.createElement('td');
        colunaNumero.textContent = contato.numero;

        linha.appendChild(colunaNome);
        linha.appendChild(colunaNumero);

        corpoTabela.appendChild(linha);
    });
}
