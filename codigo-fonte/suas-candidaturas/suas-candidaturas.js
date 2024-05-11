var modal = document.getElementById('modalCandidatura');
var db_vaga_inicial = {
    "vaga": [
        {
            "id": 1,
            "Cargo": "Leanne Graham",
            "Empresa": "Belo Horizonte",
            "Descricao": "amigos",
            "Localidade": "Sincere@april.biz",
            "Status": "1-770-736-8031",   
        }
    ]
}

function abrirModal () {

    var modalCandidatura = new bootstrap.Modal(modal);
    modalCandidatura.show();
}

// [CRUD] Estruturando e separando o CRUD em partes

//CREATE
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};
function insertCadastro() {
    var cargo = document.getElementById('Cargo');
    var empresa = document.getElementById('Empresa');
    var descricao = document.getElementById('Descricao');
    var localidade = document.getElementById('Localidade');
    var status = document.getElementById('Status');
    var db = JSON.parse(localStorage.getItem('db_contato'));

    if(db == null) {
        localStorage.setItem('db_contato','[]');
        db = [];
    }
    let novoId = 1;
    if (db.length != 0) 
        novoId = db[db.length - 1].id + 1;

    let novoCadastro = {
        id: novoId,
        Cargo: cargo.value,
        Empresa : empresa.value,
        Descrição: descricao.value,
        Localidade : localidade.value,
        Status: status.value,
    };

    db.push(novoCadastro);
    
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}
//READ
//UPDATE
/* function updateCadastro(id, cadastro) {

    let index = db.cadastro.map(obj => obj.id).indexOf(id);

   
    db.cadastro[index].Cargo = contato.Cargo,
    db.cadastro[index].Empresa = contato.Empresa,
    db.cadastro[index].Descrição = contato.Descrição,
    db.cadastro[index].Localidade = contato.Localidade,
    db.cadastro[index].Status = contato.Status,

    displayMessage("Cadastro alterado com sucesso");

    
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}
//DELETE
function deleteCadastro(id) {    
   
    db.cadastro = db.cadastro.filter(function (element) { return element.id != id });

    displayMessage("Cadastro removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}*/