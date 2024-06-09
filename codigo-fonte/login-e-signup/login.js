var usuarioCorrente = {};
var db_cadastro = [];

function initPage() {
    verificaLogin();

    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogin) {
        btnLogin.addEventListener('click', fazerLogin);
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', logoutUser);
    }
}

function verificaLogin() {
    const usuarioLogado = localStorage.getItem('usuarioCorrente');
    console.log("Verificando login...");

    if (usuarioLogado) {
        usuarioCorrente = JSON.parse(usuarioLogado);
        console.log("Usuário corrente encontrado:", usuarioCorrente);

        // Verifique o caminho da página atual para evitar loops de redirecionamento
        if (window.location.pathname !== "/home/index.html" && !window.location.pathname.endsWith("index.html")) {
            console.log("Redirecionando para home...");
            window.location.href = "../home/index.html";
        }
    } else {
        console.log("Nenhum usuário corrente encontrado");
    }
}

function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    db_cadastro = JSON.parse(localStorage.getItem('db_cadastro')) || [];

    var usuario = db_cadastro.find(cadastro => cadastro.email === email && cadastro.senha === senha);

    if (usuario) {
        usuarioCorrente = usuario;
        localStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
        window.location.href = "../home/index.html";
    } else {
        alert('Usuário ou senha inválidos');
    }
}

function logoutUser() {
    usuarioCorrente = {};
    localStorage.removeItem('usuarioCorrente');
    window.location.href = "../login-e-signup/login.html";
}

document.addEventListener('DOMContentLoaded', initPage);
