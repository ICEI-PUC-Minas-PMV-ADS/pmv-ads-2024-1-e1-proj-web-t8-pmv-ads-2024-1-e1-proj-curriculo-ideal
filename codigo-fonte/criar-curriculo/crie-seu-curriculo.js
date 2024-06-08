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


function avancar() {
    if(indiceAtual < secoes.length) {
        if(indiceAtual == 2 || indiceAtual == 3) {
           atualizarCurriculo();
        }

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
    const experiencia = {
        cargo: document.getElementById("cargo").value,
        empresa: document.getElementById("empresa").value,
        local: document.getElementById("local").value,
        dataInicioEmpresa: document.getElementById("data-inicio-empresa").value,
        dataFimEmpresa: document.getElementById("data-fim-empresa").value,
        trabalhoAtual: document.getElementById("trabalho-atual").value,
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
        <h4>Experiência ${index + 1}</h4>
        <p><strong>Cargo:</strong> ${exp.cargo}</p>
        <p><strong>Empresa:</strong> ${exp.empresa}</p>
        <p><strong>Local:</strong> ${exp.local}</p>
        <p><strong>Data de Início:</strong> ${exp.dataInicioEmpresa}</p>
        <p><strong>Data de Término:</strong> ${exp.dataFimEmpresa}</p>
        <p><strong>Trabalho Atual:</strong> ${exp.trabalhoAtual ? 'Não' : 'Sim'}</p>
        </div>
        <div class="exp-atividade">
        <p><strong>Atividades:</strong> ${exp.atividadesTrabalho}</p>
        </div>
    `).join('');
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
        `).join('');
};

function limparCampos(ids) {
    ids.forEach(id => document.getElementById(id).value = '');
}


function cadastraCurriculo() {
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
        template1: document.getElementById("template-1").value, //como imprimir em um formato se template 1 ou em outro formato se template 2?
        template2: document.getElementById("template-2").value, //como imprimir em um formato se template 1 ou em outro formato se template 2?
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
            div.innerHTML = ` 
                <div>${curriculo.nomeUsuario}</div>
                <div>${curriculo.telUsuario}</div>
                <div>${curriculo.emailUsuario}</div>
                <div>${curriculo.cidadeUsuario}</div>
                <div>${curriculo.estadoUsuario}</div>
                <div>${curriculo.paisUsuario}</div>
                <div>${curriculo.linkedinUsuario}</div>
                <div>${curriculo.githubUsuario}</div>
                <div>${curriculo.websiteUsuario}</div>
                <div>${curriculo.resumoUsuario}</div>
                <div>${curriculo.habilidadesUsuario}</div>
                <div>${curriculo.experiencias}</div>
                <div>${curriculo.formacoes}</div>
            `;
        } else {
            console.log("Nenhum currículo encontrado com o ID especificado.");
        }
    }

function gerarCurriculo(){
    var pdfObject = jsPDFInvoiceTemplate.default(props);
    console.log(pdfObject)
}

var props = {
    outputType: jsPDFInvoiceTemplate.OutputType.Save,
    //onJsPDFDocCreation?: (jsPDFDoc: jsPDF) => void, //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
    returnJsPDFDocObject: true,
    fileName: "Currículo Ideal",
    orientationLandscape: false,
    compress: true,
    logo: {
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
        type: 'PNG', //optional, when src= data:uri (nodejs case)
        width: 53.33, //aspect ratio = width/height
        height: 26.66,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: 'JPG', //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
            top: 0, //negative or positive num, from the current position
            left: 0 //negative or positive num, from the current position
        }
    },
    business: {
        name: "Business Name",
        address: "Albania, Tirane ish-Dogana, Durres 2001",
        phone: "(+355) 069 11 11 111",
        email: "email@example.com",
        email_1: "info@example.al",
        website: "www.example.al",
    },
    contact: {
        label: "Invoice issued for:",
        name: "Client Name",
        address: "Albania, Tirane, Astir",
        phone: "(+355) 069 22 22 222",
        email: "client@website.al",
        otherInfo: "www.website.al",
    },
    invoice: {
        label: "Invoice #: ",
        num: 19,
        invDate: "Payment Date: 01/01/2021 18:12",
        invGenDate: "Invoice Date: 02/02/2021 10:17",
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "#", 
            style: { 
              width: 10 
            } 
          }, 
          { 
            title: "Title",
            style: {
              width: 30
            } 
          }, 
          { 
            title: "Description",
            style: {
              width: 80
            } 
          }, 
          { title: "Price"},
          { title: "Quantity"},
          { title: "Unit"},
          { title: "Total"}
        ],
        table: Array.from(Array(10), (item, index)=>([
            index + 1,
            "There are many variations ",
            "Lorem Ipsum is simply dummy text dummy text ",
            200.5,
            4.5,
            "m2",
            400.5
        ])),
        additionalRows: [{
            col1: 'Total:',
            col2: '145,250.50',
            col3: 'ALL',
            style: {
                fontSize: 14 //optional, default 12
            }
        },
        {
            col1: 'VAT:',
            col2: '20',
            col3: '%',
            style: {
                fontSize: 10 //optional, default 12
            }
        },
        {
            col1: 'SubTotal:',
            col2: '116,199.90',
            col3: 'ALL',
            style: {
                fontSize: 10 //optional, default 12
            }
        }],
        invDescLabel: "Invoice Note",
        invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    footer: {
        text: "The invoice is created on a computer and is valid without the signature and stamp.",
    },
    pageEnable: true,
    pageLabel: "Page ",
};