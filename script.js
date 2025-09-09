document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte= 1;

        aumentaFonteBotao.addEventListener('clic', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`
   })
        aumentaFonteBotao.addEventListener('clic', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`


})

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click', function(){
botaoDeAcessibilidade.classList.toggle('rotacao-botao');
opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
})

const alternaConstraste = document.getElementById('alterna-contraste');

alternaConstraste.addEventListener('click', function(){
    document.body,this.classList.toggle('alto-contraste');
})

const botaoSelecionar = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'tru';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);

})