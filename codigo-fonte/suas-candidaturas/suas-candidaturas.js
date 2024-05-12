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
var db = JSON.parse(localStorage.getItem('db_vaga'));
if (!db) {
    db = db_vaga_inicial
};
function inserirVaga() {
    var cargo = document.getElementById('Cargo');
    var empresa = document.getElementById('Empresa');
    var descricao = document.getElementById('Descricao');
    var localidade = document.getElementById('Localidade');
    var status = document.getElementById('Status');
    var db = JSON.parse(localStorage.getItem('db_vaga'));
 
    if(db == null) {
        localStorage.setItem('db_vaga','[]');
        db = [];
    }
    let novoId = 1;
    if (db.length != 0)
        novoId = db[db.length - 1].id + 1;
 
    let novaVaga = {
        id: novoId,
        Cargo: cargo.value,
        Empresa : empresa.value,
        Descrição: descricao.value,
        Localidade: localidade.value,
        Status: status.value,
    };
 
    db.push(novaVaga);
   
    localStorage.setItem('db_vaga', JSON.stringify(db));
    exibeVagas()
}
//READ
function exibeVagas() {
    let vagas =  db_vaga

    
    document.getElementById("card-rejeitado").html("")

    
    for (i = 0; i < db.length; i++) { 
        let vaga = vagas[i]
        document.getElementById("card-rejeitado").append(`
            <h5 class="nome de vaga">${cargo.value}</h5>
            <h6 class="empresa">${empresa.value}</h6>
            <p class="descricao">${descricao.value}</p>
        `)
    }
}
//UPDATE
/* function updateVaga(id, vaga) {

    let index = db.vaga.map(obj => obj.id).indexOf(id);

   
    db.vaga[index].Cargo = cargo.value,
    db.vaga[index].Empresa = empresa.value,
    db.vaga[index].Descricao = descricao.value,
    db.vaga[index].Localidade = localidade.value,
    db.vaga[index].Status = status.value,

    displayMessage("Vaga alterada com sucesso");

    
    localStorage.setItem('db_vaga', JSON.stringify(db));
}
//DELETE
function deleteVaga(id) {    
   
    db.vaga = db.vaga.filter(function (element) { return element.id != id });

    displayMessage("Vaga removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_vaga', JSON.stringify(db));
}*/