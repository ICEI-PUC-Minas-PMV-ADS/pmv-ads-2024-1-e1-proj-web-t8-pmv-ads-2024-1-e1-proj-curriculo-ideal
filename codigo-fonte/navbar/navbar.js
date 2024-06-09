window.onload = exibirNavbar();

function exibirNavbar() {
    const usuarioLogado = localStorage.getItem('usuarioCorrente');
    const navDiv = document.getElementById('navbar');

    if (usuarioLogado) {
        navDiv.innerHTML = `
        <figure id="logo">
            <a href="../home/index.html"><img class="logo" src="../img/logo.svg" alt="logo" /></a>
        </figure>
        <div id="menu">
            <ul>
                <li><a href="../home/index.html">HOME</a></li>
                <li><a href="../como-fazer/como-fazer.html">APRENDA</a></li>
                <li><a href="../criar-curriculo/crie-seu-curriculo.html">CRIE</a></li>
                <li><a href="../suas-candidaturas/suas-candidaturas.html">ORGANIZE</a></li>
                <li><button id="btnLogout"><i class="fa-solid fa-right-from-bracket"></i></button></li>
            </ul>
        </div>
        `;
    } else {
        // Se o usuário não estiver logado, exibe os botões de login e sign up
        navDiv.innerHTML = `
        <figure id="logo">
            <a href="../home/index.html"><img class="logo" src="../img/logo.svg" alt="logo" /></a>
        </figure>
        <div id="menu">
            <ul>
                <li><a href="../home/index.html">HOME</a></li>
                <li><a href="../como-fazer/como-fazer.html">APRENDA</a></li>
                <li><a href="../criar-curriculo/crie-seu-curriculo.html">CRIE</a></li>
                <li><a href="../suas-candidaturas/suas-candidaturas.html">ORGANIZE</a></li>
                <li><a href="../login-e-signup/login.html">LOGIN</a></li>
                <li><a href="../login-e-signup/signup.html">SIGN UP</a></li>
            </ul>
        </div>
        `;
    }
}

function initPage() {
    verificaLogin();

    const btnLogout = document.getElementById('btnLogout');

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

    } else {
        console.log("Nenhum usuário corrente encontrado");
    }
}

function logoutUser() {
    usuarioCorrente = {};
    localStorage.removeItem('usuarioCorrente');
    window.location.href = "../login-e-signup/login.html";
}

document.addEventListener('DOMContentLoaded', initPage);
