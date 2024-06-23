function initPage() {
    document.getElementById('btnSignUp').addEventListener('click', inserirCadastro);
}

function inserirCadastro() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    db_cadastro = JSON.parse(localStorage.getItem('db_cadastro')) || [];

    var usuarioExistente = db_cadastro.find(cadastro => cadastro.email === email);

    if (usuarioExistente) {
        alert('Usuário já cadastrado com esse e-mail');
    } else {
        let novoId = 1;
        if (db_cadastro.length > 0) {
            novoId = db_cadastro[db_cadastro.length - 1].id + 1;
        }

        var novoCadastro = {
            id: novoId,
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senha,
        }

        db_cadastro.push(novoCadastro);
        localStorage.setItem('db_cadastro', JSON.stringify(db_cadastro));

        alert('Cadastro realizado com sucesso!');

        window.location.href = "../login-e-signup/login.html";
    }
}

document.addEventListener('DOMContentLoaded', initPage);