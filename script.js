document.addEventListener('DOMContentLoaded', function () {
    const botaoSakura = document.getElementById('botao-sakura');
    const menuSakura = document.getElementById('menu-sakura');

    botaoSakura.addEventListener('click', function () {
        botaoSakura.classList.toggle('flor-girando');
        menuSakura.classList.toggle('menu-desabrochando');
    });

    const aumentarPetalas = document.getElementById('aumentar-petalas');
    const diminuirPetalas = document.getElementById('diminuir-petalas');

    let tamanhoFonteSakura = 1;

    aumentarPetalas.addEventListener('click', function () {
        tamanhoFonteSakura += 0.1;
        document.body.style.fontSize = `${tamanhoFonteSakura}rem`;
    });

    diminuirPetalas.addEventListener('click', function () {
        tamanhoFonteSakura -= 0.1;
        document.body.style.fontSize = `${tamanhoFonteSakura}rem`;
    });
});
