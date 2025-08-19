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