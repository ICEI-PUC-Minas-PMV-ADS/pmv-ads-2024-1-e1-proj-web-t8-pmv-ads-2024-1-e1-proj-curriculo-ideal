var modal = document.getElementById('modalCandidatura');


function abrirModal() {

    var modalCandidatura = new bootstrap.Modal(modal);
    modalCandidatura.show();
}


// Carregar os dados que já estao no local storage ao abrir


// [CRUD] Estruturando e separando o CRUD em partes

//CREATE

function inserirVaga() {
    var cargo = document.getElementById('Cargo');
    var empresa = document.getElementById('Empresa');
    var descricao = document.getElementById('Descricao');
    var localidade = document.getElementById('Localidade');
    var status = document.getElementById('Status');
    var db = JSON.parse(localStorage.getItem('db_vaga'));

    if (db == null) {
        localStorage.setItem('db_vaga', '[]');
        db = [];
    }
    let novoId = 1;
    if (db.length != 0)
        novoId = db[db.length - 1].id + 1;

    let novaVaga = {
        id: novoId,
        Cargo: cargo.value,
        Empresa: empresa.value,
        Descricao: descricao.value,
        Localidade: localidade.value,
        Status: status.value,
    };

    db.push(novaVaga);

    localStorage.setItem('db_vaga', JSON.stringify(db));
    window.location.reload();
}
//READ
function exibeVagas(db) {
    // Pra cada vaga cadastrada, gerar um card novo com a informacao do local storage
    db.forEach(function (infoVaga) {
        // cria o card
        var card = document.createElement('div');
        card.className = 'row';

        // adiciona info
        card.innerHTML = `
        <div class="board">
            <div class="dropzone">
                <div class="card" draggable="true">
                    <div class="content">
                        <div class="card-body">
                            <h5 class="card-title">${infoVaga.Cargo}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${infoVaga.Empresa}</h6>
                            <p class="card-text">${infoVaga.Descricao}</p>
                            <p class="card-text">${infoVaga.Localidade}</p>
                            <p class="card-text">${infoVaga.Status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        // lógica pra determinar o status
        var sectionId;
        switch (infoVaga.Status) {
            case 'Aplicado':
                sectionId = 'aplicadas';
                break;
            case 'Em processo':
                sectionId = 'emProcesso';
                break;
            case 'Aprovado':
                sectionId = 'aprovado';
                break;
            case 'Rejeitado':
                sectionId = 'rejeitado';
                break;
            default:
                sectionId = 'aplicadas';
        }

        // Sobe a info ao card
        document.getElementById(sectionId).appendChild(card);
    });
}

/** app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

/** os cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    this.classList.add('is-dragging')
}

function drag() {
}

function dragend() {
    this.classList.remove('is-dragging')
}

/** onde os cards serão soltos */

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
}

function dragover() {

    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}
function dragleave() {
    this.classList.remove('over')
}

function drop() {

}