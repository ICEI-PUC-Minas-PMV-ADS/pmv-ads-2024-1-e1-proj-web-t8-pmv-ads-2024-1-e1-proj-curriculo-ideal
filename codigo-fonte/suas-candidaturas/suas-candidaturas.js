document.addEventListener('DOMContentLoaded', function () {
    verificarLogin();
    inicializarEventos();
    carregarVagas();
});

let usuarioLogado = null;
let isEditing = false;
let currentEditingId = null;

function verificarLogin() {
    usuarioLogado = JSON.parse(localStorage.getItem('usuarioCorrente'));
    if (!usuarioLogado) {
        window.location.href = "../login-e-signup/login.html";
    } else {
        console.log("Usuário logado:", usuarioLogado);
    }
}

function inicializarEventos() {
    const modal = document.getElementById('modalCandidatura');

    document.getElementById('adicionarvaga').addEventListener('click', function () {
        isEditing = false;
        resetForm();
        abrirModal(modal);
    });

    document.getElementById('avancar').addEventListener('click', function () {
        salvarVaga(isEditing, currentEditingId);
    });

    document.getElementById('busca').addEventListener('input', function () {
        buscarVagas(this.value.toLowerCase());
    });

    document.getElementById('toggleView').addEventListener('click', function () {
        toggleView(this);
    });
}

function abrirModal(modal) {
    const modalCandidatura = new bootstrap.Modal(modal);
    modalCandidatura.show();
}

function resetForm() {
    document.getElementById('Cargo').value = '';
    document.getElementById('Empresa').value = '';
    document.getElementById('Descricao').value = '';
    document.getElementById('Localidade').value = '';
    document.getElementById('Status').value = 'Aplicado';
}

function salvarVaga(isEditing, currentEditingId) {
    const cargo = document.getElementById('Cargo').value;
    const empresa = document.getElementById('Empresa').value;
    const descricao = document.getElementById('Descricao').value;
    const localidade = document.getElementById('Localidade').value;
    const status = document.getElementById('Status').value;

    if (!cargo || !empresa || !descricao || !localidade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const db = JSON.parse(localStorage.getItem('db_vaga')) || [];

    if (isEditing) {
        const index = db.findIndex(vaga => vaga.id === currentEditingId);
        db[index] = { id: currentEditingId, Cargo: cargo, Empresa: empresa, Descricao: descricao, Localidade: localidade, Status: status, usuarioId: usuarioLogado.id };
    } else {
        if (db.some(vaga => vaga.Cargo === cargo && vaga.Empresa === empresa && vaga.usuarioId === usuarioLogado.id)) {
            alert('Uma vaga com o mesmo cargo e empresa já existe.');
            return;
        }
        const novoId = db.length ? db[db.length - 1].id + 1 : 1;
        db.push({ id: novoId, Cargo: cargo, Empresa: empresa, Descricao: descricao, Localidade: localidade, Status: status, usuarioId: usuarioLogado.id });
    }

    localStorage.setItem('db_vaga', JSON.stringify(db));
    carregarVagas();
    bootstrap.Modal.getInstance(document.getElementById('modalCandidatura')).hide();
}

function carregarVagas() {
    const db = JSON.parse(localStorage.getItem('db_vaga')) || [];
    const vagasDoUsuario = db.filter(vaga => vaga.usuarioId === usuarioLogado.id);
    exibeVagas(vagasDoUsuario);
}

function exibeVagas(db) {
    const sections = {
        'aplicadas': document.getElementById('aplicadas'),
        'emProcesso': document.getElementById('emProcesso'),
        'aprovado': document.getElementById('aprovado'),
        'rejeitado': document.getElementById('rejeitado')
    };

    Object.values(sections).forEach(section => section.innerHTML = '');

    db.forEach(function (infoVaga) {
        const card = criarCard(infoVaga);
        const sectionId = mapearStatusParaSecao(infoVaga.Status);
        sections[sectionId].appendChild(card);
    });

    adicionarEventosDeEdicao();
    adicionarEventosDeletar();
    adicionarDragAndDrop();
}

function criarCard(infoVaga) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('draggable', 'true');
    card.dataset.id = infoVaga.id;
    card.innerHTML = `
        <div class="content">
            <div class="card-body">
                <h5 class="card-title">${infoVaga.Cargo}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${infoVaga.Empresa}</h6>
                <p class="card-text">${infoVaga.Descricao}</p>
                <p class="card-text">${infoVaga.Localidade}</p>
                <p class="card-text">${infoVaga.Status}</p>
                <button class="btn btn-sm edit-button"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-sm delete-button"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`;
    return card;
}

function mapearStatusParaSecao(status) {
    const statusMap = {
        'Aplicado': 'aplicadas',
        'Em processo': 'emProcesso',
        'Aprovado': 'aprovado',
        'Rejeitado': 'rejeitado'
    };
    return statusMap[status] || 'aplicadas';
}

function adicionarEventosDeEdicao() {
    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const id = parseInt(card.dataset.id);
            const db = JSON.parse(localStorage.getItem('db_vaga'));
            const vaga = db.find(vaga => vaga.id === id);
            if (vaga) {
                preencherFormEdicao(vaga);
                abrirModal(document.getElementById('modalCandidatura'));
            }
        });
    });
}

function preencherFormEdicao(vaga) {
    document.getElementById('Cargo').value = vaga.Cargo;
    document.getElementById('Empresa').value = vaga.Empresa;
    document.getElementById('Descricao').value = vaga.Descricao;
    document.getElementById('Localidade').value = vaga.Localidade;
    document.getElementById('Status').value = vaga.Status;
    isEditing = true;
    currentEditingId = vaga.id;
}

function adicionarEventosDeletar() {
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function () {
            if (confirm('Tem certeza que deseja deletar esta vaga?')) {
                const card = this.closest('.card');
                const id = parseInt(card.dataset.id);
                deletarVaga(id);
                window.location.reload();
            }
        });
    });
}

function deletarVaga(id) {
    let db = JSON.parse(localStorage.getItem('db_vaga'));
    db = db.filter(vaga => vaga.id !== id);
    localStorage.setItem('db_vaga', JSON.stringify(db));
    carregarVagas();
}

function adicionarDragAndDrop() {
    const cards = document.querySelectorAll('.card');
    const dropzones = document.querySelectorAll('.dropzone');

    cards.forEach(card => {
        card.addEventListener('dragstart', dragstart);
        card.addEventListener('drag', drag);
        card.addEventListener('dragend', dragend);
    });

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragenter', dragenter);
        dropzone.addEventListener('dragover', dragover);
        dropzone.addEventListener('dragleave', dragleave);
        dropzone.addEventListener('drop', drop);
    });

    function dragstart() {
        this.classList.add('is-dragging');
    }

    function drag() { }

    function dragend() {
        this.classList.remove('is-dragging');
    }

    function dragenter() { }

    function dragover(event) {
        event.preventDefault();
        this.classList.add('over');
    }

    function dragleave() {
        this.classList.remove('over');
    }

    function drop() {
        this.classList.remove('over');
        const sectionId = this.id;
        const card = document.querySelector('.is-dragging');
        atualizarStatus(card, sectionId);
    }

    function atualizarStatus(card, sectionId) {
        const statusMap = {
            'aplicadas': 'Aplicado',
            'emProcesso': 'Em processo',
            'aprovado': 'Aprovado',
            'rejeitado': 'Rejeitado'
            
        };

        const db = JSON.parse(localStorage.getItem('db_vaga'));
        const cardId = parseInt(card.dataset.id);
        const vaga = db.find(vaga => vaga.id === cardId);

        if (vaga) {
            vaga.Status = statusMap[sectionId];
            localStorage.setItem('db_vaga', JSON.stringify(db));
            carregarVagas();
            window.location.reload();
        }
    }
}

function buscarVagas(termo) {
    const db = JSON.parse(localStorage.getItem('db_vaga')) || [];
    const vagasDoUsuario = db.filter(vaga => vaga.usuarioId === usuarioLogado.id);
    const vagasFiltradas = vagasDoUsuario.filter(vaga => vaga.Cargo.toLowerCase().includes(termo) || vaga.Empresa.toLowerCase().includes(termo));
    exibeVagas(vagasFiltradas);
}

function toggleView(button) {
    const main = document.querySelector('main');
    main.classList.toggle('list-view');
    button.textContent = main.classList.contains('list-view') ? 'Quadro' : 'Lista';
}
