// Definindo as seções do formulário
var secoes = ['1', '2', '3', '4', '5'];
var indiceAtual = 0;

function avancar() {
    if(indiceAtual < secoes.length - 1) {
        document.getElementById(secoes[indiceAtual]).style.display = 'none';
        indiceAtual++;
        document.getElementById(secoes[indiceAtual]).style.display= 'block';
        console.log(indiceAtual);
        atualizarBarraDeProgresso(indiceAtual);
        
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


// funcao pra atualizar a barra de progresso

function atualizarBarraDeProgresso(nivel) {
    var dados1 = document.querySelector("#dados1");
    var resumo2 = document.querySelector("#resumo2");
    var experiencias3 = document.querySelector("#experiencias3");
    var escolaridade4 = document.querySelector("#escolaridade4");
    
    if (nivel === 1) {
        dados1.classList.remove("active");
        dados1.classList.add("complete");
        resumo2.classList.remove("disabled");
        resumo2.classList.add("active");
    } else if (nivel === 2) {
        resumo2.classList.remove("active");
        resumo2.classList.add("complete");
        experiencias3.classList.remove("disabled");
        experiencias3.classList.add("active");
    } else if (nivel === 3) {
        experiencias3.classList.remove("active");
        experiencias3.classList.add("complete");
        escolaridade4.classList.remove("disabled");
        escolaridade4.classList.add("active");
    } else if (nivel === 4) {
        escolaridade4.classList.remove("active");
        escolaridade4.classList.add("complete");
    }
    



}