let nome =  document.getElementById("contato-nome");
let msg =  document.getElementById("contato-msg");
let btn = document.querySelector(".form__btn");

btn.addEventListener("click", function(e){
    e.preventDefault();
    let erro = document.querySelector('.contato__erro');
    let nomeDigitado = nome.value;
    let msgDigitada = msg.value;
    if(nomeDigitado.length > 40){
        erro.textContent = "Nome deve ser maior que 40 caracteres";
    }  else {
        erro.textContent =  ' ';
    }
    if(msgDigitada.length > 120) {
        erro.textContent = "Mensagem deve ser maior que 120 caracteres";
    }  else {
        erro.textContent =  ' ';
    }
    if(nomeDigitado.match(/^\s*$/g) || msgDigitada.match(/^\s*$/g) || msgDigitada.length == 0 || nomeDigitado == 0) {
        erro.textContent = "Campo não pode ser vazio";
    }  else {
        erro.textContent =  ' ';
    }
    
})