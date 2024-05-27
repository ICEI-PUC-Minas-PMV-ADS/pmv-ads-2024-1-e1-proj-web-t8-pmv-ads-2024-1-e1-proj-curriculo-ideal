document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modalCandidatura');
    var isEditing = false;
    var currentEditingId = null;

    function abrirModal() {
        var modalCandidatura = new bootstrap.Modal(modal);
        modalCandidatura.show();
    }

    document.getElementById('adicionarvaga').addEventListener('click', function () {
        isEditing = false;
        resetForm();
        abrirModal();
    });

    function resetForm() {
        document.getElementById('Cargo').value = '';
        document.getElementById('Empresa').value = '';
        document.getElementById('Descricao').value = '';
        document.getElementById('Localidade').value = '';
        document.getElementById('Status').value = 'Aplicado';
    }

    function carregarVagas() {
        var db = JSON.parse(localStorage.getItem('db_vaga')) || [];
        exibeVagas(db);
    }

    document.getElementById('avancar').addEventListener('click', function () {
        var cargo = document.getElementById('Cargo').value;
        var empresa = document.getElementById('Empresa').value;
        var descricao = document.getElementById('Descricao').value;
        var localidade = document.getElementById('Localidade').value;
        var status = document.getElementById('Status').value;

        if (!cargo || !empresa || !descricao || !localidade) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        var db = JSON.parse(localStorage.getItem('db_vaga')) || [];

        if (isEditing) {
            let index = db.findIndex(vaga => vaga.id === currentEditingId);
            db[index] = {
                id: currentEditingId,
                Cargo: cargo,
                Empresa: empresa,
                Descricao: descricao,
                Localidade: localidade,
                Status: status,
            };
        } else {
            let novoId = db.length ? db[db.length - 1].id + 1 : 1;
            let novaVaga = {
                id: novoId,
                Cargo: cargo,
                Empresa: empresa,
                Descricao: descricao,
                Localidade: localidade,
                Status: status,
            };
            db.push(novaVaga);
        }

        localStorage.setItem('db_vaga', JSON.stringify(db));
        window.location.reload();
    });

    function exibeVagas(db) {
        db.forEach(function (infoVaga) {
            var card = document.createElement('div');
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
                        <button class="btn btn-warning btn-sm edit-button">Editar</button>
                        <button class="btn btn-danger btn-sm delete-button">Deletar</button>
                    </div>
                </div>
            `;

            var sectionId;
            switch (infoVaga.Status) {
                case 'Aplicado':
                    sectionId = 'aplicadas';
                    break;
                case 'Em processo':
                    sectionId = 'emProcesso';
                    break;
                case 'Aceito':
                    sectionId = 'aprovado';
                    break;
                case 'Rejeitado':
                    sectionId = 'rejeitado';
                    break;
                default:
                    sectionId = 'aplicadas';
            }

            document.getElementById(sectionId).appendChild(card);
        });

        adicionarDragAndDrop();
        adicionarEventosDeEdicao();
        adicionarEventosDeletar();
    }

    function adicionarEventosDeEdicao() {
        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', function () {
                var card = this.closest('.card');
                var id = parseInt(card.dataset.id);
                var db = JSON.parse(localStorage.getItem('db_vaga'));

                var vaga = db.find(vaga => vaga.id === id);
                if (vaga) {
                    document.getElementById('Cargo').value = vaga.Cargo;
                    document.getElementById('Empresa').value = vaga.Empresa;
                    document.getElementById('Descricao').value = vaga.Descricao;
                    document.getElementById('Localidade').value = vaga.Localidade;
                    document.getElementById('Status').value = vaga.Status;

                    isEditing = true;
                    currentEditingId = id;
                    abrirModal();
                }
            });
        });
    }

    function adicionarEventosDeletar() {
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', function () {
                var card = this.closest('.card');
                var id = parseInt(card.dataset.id);
                var db = JSON.parse(localStorage.getItem('db_vaga'));

                var novaDb = db.filter(vaga => vaga.id !== id);
                localStorage.setItem('db_vaga', JSON.stringify(novaDb));
                window.location.reload();
            });
        });
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

        function drag() {}

        function dragend() {
            this.classList.remove('is-dragging');
        }

        function dragenter() {}

        function dragover(event) {
            event.preventDefault();
            this.classList.add('over');
            const cardBeingDragged = document.querySelector('.is-dragging');
            this.appendChild(cardBeingDragged);
        }

        function dragleave() {
            this.classList.remove('over');
        }

        function drop() {
            this.classList.remove('over');
            atualizarStatus(this.id);
        }

        function atualizarStatus(sectionId) {
            const statusMap = {
                'aplicadas': 'Aplicado',
                'emProcesso': 'Em processo',
                'aprovado': 'Aceito',
                'rejeitado': 'Rejeitado'
            };

            const card = document.querySelector('.is-dragging');
            const db = JSON.parse(localStorage.getItem('db_vaga'));
            const cardId = parseInt(card.dataset.id);
            const vaga = db.find(vaga => vaga.id === cardId);

            if (vaga) {
                vaga.Status = statusMap[sectionId];
                localStorage.setItem('db_vaga', JSON.stringify(db));
            }
        }
    }

    carregarVagas();
});
