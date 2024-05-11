// Definindo as seções do formulário
var secoes = ['1', '2', '3', '4', '5'];
var indiceAtual = 0;
var progressoID = ['25', '50', '75', '100'];
var progresso = 25;
var botoesAvancar = document.querySelectorAll('.avancar-btn');
var botoesRetroceder = document.querySelectorAll('.retroceder-btn');

// Chamando elementos do formulário




function avancar() {
    if(indiceAtual < secoes.length - 1) {
        document.getElementById(secoes[indiceAtual]).style.display = 'none';
        indiceAtual++;
        document.getElementById(secoes[indiceAtual]).style.display= 'block';
        avancarBarraDeProgresso();
    }
}

function retroceder() {
    if(indiceAtual > 0) {
        document.getElementById(secoes[indiceAtual]).style.display = 'none';
        retrocederBarraDeProgresso();
        indiceAtual--;
        document.getElementById(secoes[indiceAtual]).style.display = 'block';
        
    }
}

botoesAvancar.forEach(function(botao) {
    botao.addEventListener('click', avancar);
});

botoesRetroceder.forEach(function(botao) {
    botao.addEventListener('click', retroceder);
});

function avancarBarraDeProgresso() {
    if (indiceAtual < 4) {
    var progressoAtual = document.getElementById(progresso * secoes[indiceAtual]);
    progressoAtual.classList.remove("disabled");
    progressoAtual.classList.add("complete");
    }
}

function retrocederBarraDeProgresso() {
    var progressoAtual = document.getElementById((progresso * secoes[indiceAtual]));
    progressoAtual.classList.remove("complete");
    progressoAtual.classList.add("disabled");
}

function cadastraCurriculo() {
    var nome = document.getElementById("nome");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var pais = document.getElementById("pais");
    var tel = document.getElementById("telefone");
    var email = document.getElementById("email");
    var linkedin = document.getElementById("linkedin");
    var github = document.getElementById("github");
    var website = document.getElementById("website");
    var resumo = document.getElementById("resumo");
    var habilidades = document.getElementById("habilidades");

    var dados = JSON.parse(localStorage.getItem("dadosCurriculo"));

    if(dados == null){
        localStorage.setItem("dadosCurriculo", "[]");
        dados = [];
    }

    var registro = {
        nomeUsuario: nome.value,
        cidadeUsuario: cidade.value,
        estadoUsuario: estado.value,
        paisUsuario: pais.value,
        telUsuario: tel.value,
        emailUsuario: email.value,
        linkedinUsuario: linkedin.value,
        githubUsuario: github.value,
        websiteUsuario: website.value,
        resumoUsuario: resumo.value,
        habilidadesUsuario: habilidades.value
    }

    dados.push(registro);
    localStorage.setItem("dadosCurriculo", JSON.stringify(dados));
}


function mostraCurriculo() {
    let dados = readInformacao();

    let conteudo = "";
    dados.forEach((item) => {
        conteudo += `
            <h1 id="titulo">${nome.id}</h1>
        `

    });
    curriculo.innerHTML = conteudo;

}
// funcao pra atualizar a barra de progresso

