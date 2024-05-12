/** app */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

modal = document.getElementById('modalCandidatura');

var modal = document.getElementById('modalCandidatura');

 
function abrirModal () {
 
    var modalCandidatura = new bootstrap.Modal(modal);
    modalCandidatura.show();
}


/** help */
function log(message) {
    console.log('>' + message)
}

/** os cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    log('> CARD: Start dragging')
    this.classList.add('is-dragging')
}

function drag(){
    log('> CARD: Is dragging')
}

function dragend(){
    log('> CARD: Stop drag')
    this.classList.remove('is-dragging')
}

/** onde os cards serão soltos */  

dropzones.forEach( dropzone => {
dropzone.addEventListener('dragenter', dragenter)
dropzone.addEventListener('dragover', dragover)
dropzone.addEventListener('dragleave', dragleave)
dropzone.addEventListener('drop', drop)
})

function dragenter( ){
 log('DROPZONE: Enter in zone')
}
function dragover( ){
    log('DROPZONE: Over') 
    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}
function dragleave( ){
    log('DROPZONE: Leave')
    this.classList.remove('over')
}
function drop( ){
    log('DROPZONE: Dropped')
    
}





=======
// Carregar os dados que já estao no local storage ao abrir
window.onload = function() {
    var db = JSON.parse(localStorage.getItem('db_vaga'));
 
    if (db && db.length > 0) {
        exibeVagas(db);
    }
};
 
// [CRUD] Estruturando e separando o CRUD em partes
 
//CREATE

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
    exibeVagas(db)
}
//READ
function exibeVagas(db) {
    // Pra cada vaga cadastrada, gerar um card novo com a informacao do local storage
    db.forEach(function(infoVaga) {
        // cria o card
        var card = document.createElement('div');
        card.className = 'row';
 
        // adiciona info
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${infoVaga.Cargo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${infoVaga.Empresa}</h6>
                    <p class="card-text">${infoVaga.Descricao}</p>
                    <p class="card-text">${infoVaga.Localidade}</p>
                    <p class="card-text">${infoVaga.Status}</p>
                </div>
            </div>`;
 
        // lógica pra determinar o status
        var sectionId;
        switch(infoVaga.Status) {
            case 'Aplicado':
                sectionId = 'aplicadasCards';
                break;
            case 'Em processo':
                sectionId = 'emProcessoCards';
                break;
            case 'Aprovado':
                sectionId = 'aprovadoCards';
                break;
            case 'Rejeitado':
                sectionId = 'rejeitadoCards';
                break;
            default:
                sectionId = 'aplicadasCards'; 
        }
 
        // Sobe a info ao card
        document.getElementById(sectionId).appendChild(card);
    });
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

