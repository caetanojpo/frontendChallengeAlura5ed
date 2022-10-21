let inputPesquisa = document.querySelector(".header__icon___pesquisa");

inputPesquisa.addEventListener("input", function (){
    let listaProdutos = document.querySelectorAll(".produtos__item");
    let containerProdutos = document.querySelectorAll(".produtos__lista")

    if (this.value.length > 0){
        for (let i = 0; i < listaProdutos.length; i++) {
            let produto = listaProdutos[i];
            let nome = produto.querySelector('.produto__nome').textContent;
            let verificaRegex = new RegExp(this.value, "i");
            if (!verificaRegex.test(nome)) {
                produto.classList.add("hidden");
            } else {
                produto.classList.remove("hidden");
            }          
      
        }
    } else {
        for (let i = 0; i < listaProdutos.length; i++) {
            let produto = listaProdutos[i];
            produto.classList.remove("hidden");
        }

    }
    
});