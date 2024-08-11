// Passo 1 - Dar um jeito de pegar o elemento HTML dos botões 
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// - passo 2 - Dar um jeito de identificar o click do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {


      // - passo 3 - Desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        // - passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        // - passo 5 - Esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        // - Passo 6 - fazer aparecer a imagem correpondente ao botão clicado
        imagens[indice].classList.add("ativa");

        // Passo 7 - Esconder a informção do Dragão anteriormente selecionado
       const informacoesAtiva = document.querySelector(".informacoes.ativa");
       informacoesAtiva.classList.remove("ativa");

       // - Passo 8 - mostrar informações do dragão referente ao botão clicado
       informacoes[indice].classList.add("ativa");



        





    });
});