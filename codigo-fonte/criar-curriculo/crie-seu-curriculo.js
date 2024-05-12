// Definindo as seções do formulário
var secoes = ['1', '2', '3', '4', '5', '6'];
var indiceAtual = 0;
var progresso = 25;
var botoesAvancar = document.querySelectorAll('.avancar-btn');
var botoesRetroceder = document.querySelectorAll('.retroceder-btn');

function avancar() {
    if (indiceAtual < secoes.length - 1) {
        var secaoAtual = document.getElementById(secoes[indiceAtual]);
        var proximaSecao = document.getElementById(secoes[indiceAtual + 1]);

        if (secaoAtual && proximaSecao) {
            secaoAtual.style.display = 'none';
            indiceAtual++;
            proximaSecao.style.display = 'block';
            console.log(indiceAtual);
            console.log(secoes[indiceAtual]);
            avancarBarraDeProgresso();
            
            if (indiceAtual === 4) { // Se estiver na seção 5
                document.getElementById(secoes[5]).style.display = 'none';
                document.getElementById(secoes[6]).style.display = 'block';
                cadastraCurriculo(); // Chama a função para cadastrar o currículo
            }
        } else {
            console.error('Seção não encontrada.');
        }
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

// funcao pra atualizar a barra de progresso

function avancarBarraDeProgresso() {
    if (indiceAtual < 4) {
        var progressoAtual = document.getElementById(progresso * secoes[indiceAtual]);
        progressoAtual.classList.remove("disabled");
        progressoAtual.classList.add("complete");
    }
}

function retrocederBarraDeProgresso() {
    if (indiceAtual > 5) {
        var progressoAtual = document.getElementById((progresso * secoes[indiceAtual]));
        progressoAtual.classList.remove("complete");
        progressoAtual.classList.add("disabled");
    }

}

// Chamando elementos do formulário

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
    var cargo = document.getElementById("cargo");
    var empresa = document.getElementById("empresa");
    var local = document.getElementById("local");
    var dataInicioEmpresa = document.getElementById("data-inicio-empresa");
    var dataFimEmpresa = document.getElementById("data-fim-empresa");
    var trabalhoAtual = document.getElementById("trabalho-atual");
    var atividadesTrabalho = document.getElementById("atividades-trabalho");
    var instituicao = document.getElementById("instituicao");
    var curso = document.getElementById("curso");
    var grauInstrucao = document.getElementById("grau-instrucao");
    var dataInicioCurso = document.getElementById("data-inicio-curso");
    var dataFimCurso = document.getElementById("data-fim-curso");
    var atividadesEscolares = document.getElementById("resumo-atividades-escolares");
    var template1 = document.getElementById("template-1");
    var template2 = document.getElementById("template-2");
    

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
        habilidadesUsuario: habilidades.value,
        cargoUsuario: cargo.value,
        empresaUsuario: empresa.value,
        localUsuario: local.value,
        dataInicioEmpresa: dataInicioEmpresa.value,
        dataFimEmpresa: dataFimEmpresa.value,
        trabalhoAtualUsuario: trabalhoAtual.value, //se está check = on
        atividadesTrabalho: atividadesTrabalho.value,
        instituicaoUsuario: instituicao.value,
        cursoUsuario: curso.value,
        grauInstrucao: grauInstrucao.value,
        dataInicioCurso: dataInicioCurso.value,
        dataFimCurso: dataFimCurso.value,
        atividadesEscolares: atividadesEscolares.value,
        template1: template1.value,
        template2: template2.value,
    }

    dados.push(registro);
    localStorage.setItem("dadosCurriculo", JSON.stringify(dados));
    mostraCurriculo(dados);
}

     // função para listar na tabela os contatos que estão associados aos filtros 
     function mostraCurriculo(dados) {
        let curriculo =  dados;
        
        // Obtem os dados informados pelo usuário nos filtros
        //let fc = document.getElementById('filtro_cidade').value;
        //let fcg = document.getElementById('filtro_categoria').value;
        //divCurriculo = document.getElementById("curriculo");
        //console.log(divCurriculo);
        // limpa a lista de contatos apresentados
        //divCurriculo.empty();

        // Popula a tabela com os registros do banco de dados
        
        for (let index = 0; index < curriculo.length; index++) {
            const curriculoInfo = curriculo[index];

            // Verifica se os dados do contato batem com os filtros
            //if (((contato.cidade == fc) || (fc == '')) &&
                //((contato.categoria == fcg) || (fcg == ''))) {
            div = document.getElementById("curriculo");
                // Inclui o contato na tabela    
                div.append(`<tr><td scope="row">${curriculoInfo.id}</td>
                                                <td>${curriculoInfo.nomeUsuario}</td>
                                                <td>${curriculoInfo.telUsuario}</td>
                                                <td>${curriculoInfo.emailUsuario}</td>
                                                <td>${curriculoInfo.cidadeUsuario}</td>
                                            </tr>`);
            }
        }

//    }

  /* function mostraCurriculo() {
    let dados = readInformacao();

    let conteudo = "";
    dados.forEach((item) => {
        conteudo += `
            <h1 id="titulo">${nome.id}</h1>
        `

    });
    curriculo.innerHTML = conteudo;

} */


