// Definindo as seções do formulário
var secoes = ['1', '2', '3', '4', '5'];
var indiceAtual = 0;

function avancar() {
    if(indiceAtual < secoes.length - 1) {
        document.getElementById(secoes[indiceAtual]).style.display = 'none';
        indiceAtual++;
        document.getElementById(secoes[indiceAtual]).style.display= 'block';
    }
}

function retroceder() {
    if(indiceAtual > 0) {
        document.getElementById(secoes[indiceAtual]).style.display = 'none';
        indiceAtual--;
        document.getElementById(secoes[indiceAtual]).style.display = 'block';
    }
}

var botoesAvancar = document.querySelectorAll('.avancar-btn');
botoesAvancar.forEach(function(botao) {
    botao.addEventListener('click', avancar);
});

var botoesRetroceder = document.querySelectorAll('.retroceder-btn');
botoesRetroceder.forEach(function(botao) {
    botao.addEventListener('click', retroceder);
});
