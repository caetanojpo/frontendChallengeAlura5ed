let inputNome = document.querySelector('.adicionar__nome');
let inputValor = document.querySelector('.adicionar__valor');
let inputTexto = document.querySelector('.adicionar__txt');
let btn = document.querySelector('.adc__form___btn');

btn.addEventListener("click", function(e){
    e.preventDefault();
    let nome = inputNome.value;
    let valor = inputValor.value;
    let texto = inputTexto.value;
    let erro = document.querySelector('.contato__erro');
    
    if (nome.match(/^\s*$/g) || valor.match(/^\s*$/g) || texto.match(/^\s*$/g) || nome.length == 0 || valor == 0 || texto == 0){
        erro.textContent = "Campo não pode ser vazio";
    } else{
        erro.textContent =  ' ';
    }


    if (nome.length > 20) {
        erro.textContent = 'O nome deve ter no máximo 20 caracteres'
    } else{
        erro.textContent =  ' ';
    }


    if(texto.length > 150){
        erro.textContent = "O texto deve ter no maxímo 150 caracteres"
    } else{
        erro.textContent =  ' ';
    }


    if(!valor.match(/\d+/g)){
        erro.textContent = "O valor deve conter apenas números";
    } else{
        erro.textContent =  ' ';
    }

    
})