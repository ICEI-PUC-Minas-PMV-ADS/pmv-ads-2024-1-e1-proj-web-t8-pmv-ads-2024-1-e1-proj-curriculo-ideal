// Definindo as seções do formulário
var secoes = ['1', '2', '3', '4', '5', '6'];
var indiceAtual = 0;
var progresso = 25;
var botoesAvancar = document.querySelectorAll('.avancar-btn');
var botoesRetroceder = document.querySelectorAll('.retroceder-btn');

let novoId = 1;
var experiencias = [];
var formacoes = [];   

function atualizarCurriculo() {
    const dados = JSON.parse(localStorage.getItem("dadosCurriculo")) || [];
    let curriculo = dados.find(item => item.id === novoId) || {};

    if (indiceAtual === 2) {
        curriculo.experiencias = experiencias;
    } else if (indiceAtual === 3) {
        curriculo.formacoes = formacoes;
    }

    if (!dados.includes(curriculo)) {
        dados.push(curriculo);
    }

    localStorage.setItem("dadosCurriculo", JSON.stringify(dados));
}

// Função para verificar se todos os campos obrigatórios da seção atual estão preenchidos
function camposObrigatoriosPreenchidos() {
    var secaoAtual = document.getElementById(secoes[indiceAtual]);
    var camposObrigatorios = secaoAtual.querySelectorAll('input[required], select[required], textarea[required]');
    let preenchidos = true;

    if (indiceAtual === 2 || indiceAtual === 3) {
        return true;
    }

    camposObrigatorios.forEach(function(campo) {
        if (!campo.value.trim()) {
            preenchidos = false;
        }
    });

    return preenchidos;
}

function avancar() {
    if(indiceAtual < secoes.length && camposObrigatoriosPreenchidos) {
        if(indiceAtual == 2 || indiceAtual == 3) {
           atualizarCurriculo();
        }

        document.getElementById(secoes[indiceAtual]).style.display = 'none';
        indiceAtual++;
        document.getElementById(secoes[indiceAtual]).style.display= 'block';
        avancarBarraDeProgresso();
    };
};

function retroceder() {
    if(indiceAtual > 0) {
        document.getElementById(secoes[indiceAtual]).style.display = 'none';
        retrocederBarraDeProgresso();
        indiceAtual--;
        document.getElementById(secoes[indiceAtual]).style.display = 'block'; 
    }
}

botoesAvancar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        if (camposObrigatoriosPreenchidos()) {
            avancar();
        } else {
            alert('Preencha todos os campos obrigatórios.');
        }
    });
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
    if (indiceAtual < 4) {
        var progressoAtual = document.getElementById((progresso * secoes[indiceAtual]));
        progressoAtual.classList.remove("complete");
        progressoAtual.classList.add("disabled");
    }

}

// Função para adicionar experiência profissional

document.getElementById("adicionar-experiencia").addEventListener("click", function() {
    if (!camposObrigatoriosPreenchidosExperiencia()) {
        alert('Preencha todos os campos obrigatórios para adicionar uma experiência.');
        return;
    }    
    
    const experiencia = {
        cargo: document.getElementById("cargo").value,
        empresa: document.getElementById("empresa").value,
        local: document.getElementById("local").value,
        dataInicioEmpresa: document.getElementById("data-inicio-empresa").value,
        dataFimEmpresa: document.getElementById("trabalho-atual").checked ? "Atualmente": document.getElementById("data-fim-empresa").value,
        trabalhoAtual: document.getElementById("trabalho-atual").checked,
        atividadesTrabalho: document.getElementById("atividades-trabalho").value,
    };

    experiencias.push(experiencia);
    exibirExperiencias();
    limparCampos(["cargo", "empresa", "local", "data-inicio-empresa", "data-fim-empresa", "trabalho-atual", "atividades-trabalho"]);
});

function exibirExperiencias() {
    const containerExperiencias = document.getElementById("experiencias-adicionadas");
    containerExperiencias.innerHTML = experiencias.map((exp, index) => `
        <div class="experiencia-item">
            <div class="exp-info">
                <h4>Experiência ${index + 1}</h4>
                <p><strong>Cargo:</strong> ${exp.cargo}</p>
                <p><strong>Empresa:</strong> ${exp.empresa}</p>
                <p><strong>Local:</strong> ${exp.local}</p>
                <p><strong>Data de Início:</strong> ${exp.dataInicioEmpresa}</p>
                <p><strong>Data de Término:</strong> ${exp.dataFimEmpresa}</p>
                <p><strong>Trabalho Atual:</strong> ${exp.trabalhoAtual ? 'Sim' : 'Não'}</p>
            </div>
            <div class="exp-atividade">
                <p><strong>Atividades:</strong> ${exp.atividadesTrabalho}</p>
            </div>
        </div>
    `).join('');
}

function camposObrigatoriosPreenchidosExperiencia() {
    var camposObrigatorios = document.querySelectorAll('#experiencia-form input[required], #experiencia-form select[required], #experiencia-form textarea[required]');
    let preenchidos = true;

    camposObrigatorios.forEach(function(campo) {
        if (!campo.value.trim()) {
            preenchidos = false;
        }
    });

    return preenchidos;
}

// Função para adicionar formação acadêmica
document.getElementById("adicionar-formacao").addEventListener("click", function() {
    const formacao = { 
    instituicao: document.getElementById("instituicao").value,
    curso: document.getElementById("curso").value,
    grauInstrucao: document.getElementById("grau-instrucao").value,
    dataInicioCurso: document.getElementById("data-inicio-curso").value,
    dataFimCurso: document.getElementById("data-fim-curso").value,
    atividadesEscolares: document.getElementById("resumo-atividades-escolares").value,
    };

    formacoes.push(formacao);
    exibirFormacoes();
    limparCampos(["instituicao", "curso", "grau-instrucao", "data-inicio-curso", "data-fim-curso", "resumo-atividades-escolares"]);
});

function exibirFormacoes() {
    const containerFormacoes = document.getElementById("formacoes-adicionadas");
    containerFormacoes.innerHTML = formacoes.map((form, index) => `
        <div class="formacao-item">
            <div class="form-info">
                <h4>Formação ${index + 1}</h4>
                <p><strong>Instituição:</strong> ${form.instituicao}</p>
                <p><strong>Curso:</strong> ${form.curso}</p>
                <p><strong>Grau de Instrução:</strong> ${form.grauInstrucao}</p>
                <p><strong>Data de Início:</strong> ${form.dataInicioCurso}</p>
                <p><strong>Data de Término:</strong> ${form.dataFimCurso}</p>
            </div>
            <div class="form-atividade">
                <p><strong>Atividades:</strong> ${form.atividadesEscolares}</p>
            </div>
        </div>
        `).join('');
};

function camposObrigatoriosPreenchidosFormacao() {
    var camposObrigatorios = document.querySelectorAll('#formacao-form input[required], #formacao-form select[required], #formacao-form textarea[required]');
    let preenchidos = true;

    camposObrigatorios.forEach(function(campo) {
        if (!campo.value.trim()) {
            preenchidos = false;
        }
    });

    return preenchidos;
}

function limparCampos(ids) {
    ids.forEach(id => document.getElementById(id).value = '');
}

document.getElementById("trabalho-atual").addEventListener("change", function() {
    const dataFimEmpresaInput = document.getElementById("data-fim-empresa");
    if (this.checked) {
        dataFimEmpresaInput.value = ""; // Limpa o valor do campo de data de término
        dataFimEmpresaInput.disabled = true; // Desativa o campo de data de término
    } else {
        dataFimEmpresaInput.disabled = false; // Ativa o campo de data de término
    }
});

cadastraCurriculo("template-1");

document.getElementById("template-1").addEventListener("change", function() {
    console.log("cliquei template 1", this.checked);
    if (this.checked) {
        cadastraCurriculo("template-1"); // Passando o ID do template selecionado
    }
});

document.getElementById("template-2").addEventListener("change", function() {
    console.log("cliquei template 2", this.checked);
    if (this.checked) {

        cadastraCurriculo("template-2"); // Passando o ID do template selecionado
    }
});


function cadastraCurriculo(templateSelecionado) {
    var dados = JSON.parse(localStorage.getItem("dadosCurriculo")) || [];
    
    if (dados.length > 0) {
        novoId = dados[dados.length - 1].id + 1;
    }

    const registro = {
        id: novoId,
        nomeUsuario: document.getElementById("nome").value,
        cidadeUsuario: document.getElementById("cidade").value,
        estadoUsuario: document.getElementById("estado").value,
        paisUsuario:  document.getElementById("pais").value,
        telUsuario: document.getElementById("telefone").value,
        emailUsuario: document.getElementById("email").value,
        linkedinUsuario: document.getElementById("linkedin").value,
        githubUsuario: document.getElementById("github").value,
        websiteUsuario: document.getElementById("website").value,
        resumoUsuario: document.getElementById("resumo").value,
        habilidadesUsuario: document.getElementById("habilidades").value,
        experiencias,
        formacoes,
        template: templateSelecionado,
    }

    dados.push(registro);
    localStorage.setItem("dadosCurriculo", JSON.stringify(dados));
    mostraCurriculo(dados, novoId);
}

 // função para listar na tabela os contatos que estão associados aos filtros 
function mostraCurriculo(dados, novoId) {
    const curriculo = dados.find(curriculoInfo => curriculoInfo.id === novoId);
    
        if (curriculo) {
            const div = document.getElementById("curriculo");
            div.innerHTML = '';


            if (curriculo.template === "template-1") {
                div.className = 'curriculo';
                div.classList.add("template-1");
            } else if (curriculo.template === "template-2") {
                div.className = 'curriculo';
                div.classList.add("template-2");
            }

            div.innerHTML += ` 
                <div class="nome">${curriculo.nomeUsuario}</div>
                <div class="tel">${curriculo.telUsuario}</div>
                <div class="email">${curriculo.emailUsuario}</div>
                <div class="cidade">${curriculo.cidadeUsuario}</div>
                <div class="estado">${curriculo.estadoUsuario}</div>
                <div class="pais">${curriculo.paisUsuario}</div>
                <div class="linkedin">${curriculo.linkedinUsuario}</div>
                <div class="github">${curriculo.githubUsuario}</div>
                <div class="website">${curriculo.websiteUsuario}</div>
                <div class="resumo">${curriculo.resumoUsuario}</div>
                <div class="habilidades">${curriculo.habilidadesUsuario}</div>
                <div>
                <h4>Experiências</h4>
                ${curriculo.experiencias.map(exp => `
                    <div>
                        <p><strong>Cargo:</strong> ${exp.cargo}</p>
                        <p><strong>Empresa:</strong> ${exp.empresa}</p>
                        <p><strong>Local:</strong> ${exp.local}</p>
                        <p><strong>Data de Início:</strong> ${exp.dataInicioEmpresa}</p>
                        <p><strong>Data de Término:</strong> ${exp.dataFimEmpresa}</p>
                        <p><strong>Trabalho Atual:</strong> ${exp.trabalhoAtual ? 'Sim' : 'Não'}</p>
                        <p><strong>Atividades:</strong> ${exp.atividadesTrabalho}</p>
                    </div>
                `).join('')}
            </div>
            <div>
                <h4>Formações</h4>
                ${curriculo.formacoes.map(form => `
                    <div>
                        <p><strong>Instituição:</strong> ${form.instituicao}</p>
                        <p><strong>Curso:</strong> ${form.curso}</p>
                        <p><strong>Grau de Instrução:</strong> ${form.grauInstrucao}</p>
                        <p><strong>Data de Início:</strong> ${form.dataInicioCurso}</p>
                        <p><strong>Data de Término:</strong> ${form.dataFimCurso}</p>
                        <p><strong>Atividades:</strong> ${form.atividadesEscolares}</p>
                    </div>
                `).join('')}
            </div>
            `;
        } else {
            console.log("Nenhum currículo encontrado com o ID especificado.");
        }
    }

    function gerarCurriculo() {
        const { jsPDF } = window.jspdf;
        var doc = new jsPDF('l', 'mm', [1200, 1210]);

        var pdfjs = document.querySelector('#curriculo');
    
        // Convert HTML to PDF in JavaScript
        doc.html(pdfjs, {
            callback: function(doc) {
                doc.save("output.pdf");
            },
            x: 100,
            y: 100
        });
    }
