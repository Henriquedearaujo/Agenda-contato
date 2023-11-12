const form = document.getElementById('form-atividade');

const nomes = [];
const telefones = [];

let linhas = "";

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha()
    atulizarTabela()
    
    
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome-completo');
    const inputTelefone = document.getElementById('numero-telefone');


        nomes.push(inputNome.value);
        telefones.push(parseFloat(inputTelefone.value));
        
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    

    inputNome.value = '';
    inputTelefone.value = '';
}

function atulizarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}
//identifica se é número fixo ou celular e já permite a quantidade de caracteres necessárias
const maskPhoneNumber = (value) => {
    if (!value) return ''
  
    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(value[5] != 9 ? /(\d{4})(\d)/ : /(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
  }
  
  const applyPhoneNumberMask = (input) => {
    input.value = maskPhoneNumber(input.value)
  }


