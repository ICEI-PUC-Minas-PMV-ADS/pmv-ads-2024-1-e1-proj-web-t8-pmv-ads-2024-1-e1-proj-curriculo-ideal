// Definindo as seções do formulário
var secoes = ['1', '2', '3', '4', '5', '6'];
var indiceAtual = 0;
var progresso = 25;
var botoesAvancar = document.querySelectorAll('.avancar-btn');
var botoesRetroceder = document.querySelectorAll('.retroceder-btn');

let novoId = 1;
var experiencias = [];   

function avancar() {
    if(indiceAtual < secoes.length) {
        if(indiceAtual == 2) {
            var dados = JSON.parse(localStorage.getItem("dadosCurriculo")) || [];
            var curriculo = dados.find(item => item.id == novoId) || {};

            curriculo.experiencias = experiencias;

            localStorage.setItem("dadosCurriculo", JSON.stringify(dados));
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
    const cargo = document.getElementById("cargo").value;
    const empresa = document.getElementById("empresa").value;
    const local = document.getElementById("local").value;
    const dataInicioEmpresa = document.getElementById("data-inicio-empresa").value;
    const dataFimEmpresa = document.getElementById("data-fim-empresa").value;
    const trabalhoAtual = document.getElementById("trabalho-atual").value;
    const atividadesTrabalho = document.getElementById("atividades-trabalho").value;

    experiencias.push({
        cargo: cargo,
        empresa: empresa,
        local: local,
        dataInicioEmpresa: dataInicioEmpresa,
        dataFimEmpresa: dataFimEmpresa,
        trabalhoAtual: trabalhoAtual,
        atividadesTrabalho: atividadesTrabalho
    });

    document.getElementById("cargo").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("local").value = "";
    document.getElementById("data-inicio-empresa").value = "";
    document.getElementById("data-fim-empresa").value = "";
    document.getElementById("trabalho-atual").value = "";
    document.getElementById("atividades-trabalho").value = "";

    exibirExperiencias();
});

function exibirExperiencias() {
    const containerExperiencias = document.getElementById("experiencias-adicionadas");
    containerExperiencias.innerHTML = "";

    experiencias.forEach(function(exp, index) {
        const experienciaDiv = document.createElement("div");
        experienciaDiv.className = "experiencia-item";
        experienciaDiv.innerHTML = `
        <h4>Experiência ${index + 1}</h4>
        <p><strong>Cargo:</strong> ${exp.cargo}</p>
        <p><strong>Empresa:</strong> ${exp.empresa}</p>
        <p><strong>Local:</strong> ${exp.local}</p>
        <p><strong>Data de Início:</strong> ${exp.dataInicio}</p>
        <p><strong>Data de Término:</strong> ${exp.dataFim}</p>
        <p><strong>Trabalho Atual:</strong> ${exp.trabalhoAtual ? 'Não' : 'Sim'}</p>
        <p><strong>Atividades:</strong> ${exp.atividades}</p>
    `;
        containerExperiencias.appendChild(experienciaDiv);
    });
}

function cadastraCurriculo() {

    // Chamando elementos do formulário
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

    
    if (dados.length != 0) {
        novoId = dados[dados.length - 1].id + 1;
    }

    var registro = {
        id: novoId,
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

        experiencia: {
            experiencias,
            cargoUsuario: cargo.value,
            empresaUsuario: empresa.value,
            localUsuario: local.value,
            dataInicioEmpresa: dataInicioEmpresa.value,
            dataFimEmpresa: dataFimEmpresa.value,
            trabalhoAtualUsuario: trabalhoAtual.value,
            atividadesTrabalho: atividadesTrabalho.value,
        },            
        instituicaoUsuario: instituicao.value,
        cursoUsuario: curso.value,
        grauInstrucao: grauInstrucao.value,
        dataInicioCurso: dataInicioCurso.value,
        dataFimCurso: dataFimCurso.value,
        atividadesEscolares: atividadesEscolares.value,
        template1: template1.value, //imprimindo como ON no "curriculo", será revisado posteriormente
        template2: template2.value, //imprimindo como ON no "curriculo", será revisado posteriormente
    }

    dados.push(registro);
    localStorage.setItem("dadosCurriculo", JSON.stringify(dados));
    mostraCurriculo(dados, novoId);
}

     // função para listar na tabela os contatos que estão associados aos filtros 
     function mostraCurriculo(dados, novoId) {
        let curriculo = dados.filter(curriculoInfo => curriculoInfo.id === novoId);
    
        if (curriculo.length > 0) {
            div = document.getElementById("curriculo");
            div.innerHTML = ""; 
    
            // Exibe apenas o currículo com o ID específico
            const curriculoInfo = curriculo[0];
            div.innerHTML = `
                <div>${curriculoInfo.nomeUsuario}</div>
                <div>${curriculoInfo.telUsuario}</div>
                <div>${curriculoInfo.emailUsuario}</div>
                <div>${curriculoInfo.cidadeUsuario}</div>
                <div>${curriculoInfo.estadoUsuario}</div>
                <div>${curriculoInfo.paisUsuario}</div>
                <div>${curriculoInfo.linkedinUsuario}</div>
                <div>${curriculoInfo.githubUsuario}</div>
                <div>${curriculoInfo.websiteUsuario}</div>
                <div>${curriculoInfo.resumoUsuario}</div>
                <div>${curriculoInfo.habilidadesUsuario}</div>
                <div>${curriculoInfo.experiencia}</div>
                <div>${curriculoInfo.instituicaoUsuario}</div>
                <div>${curriculoInfo.cursoUsuario}</div>
                <div>${curriculoInfo.grauInstrucao}</div>
                <div>${curriculoInfo.dataInicioCurso}</div>
                <div>${curriculoInfo.dataFimCurso}</div>
                <div>${curriculoInfo.atividadesEscolares}</div>
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