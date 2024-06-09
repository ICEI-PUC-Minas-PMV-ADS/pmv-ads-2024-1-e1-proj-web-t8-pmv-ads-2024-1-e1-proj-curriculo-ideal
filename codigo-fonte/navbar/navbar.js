window.onload = exibirNavbar();

function exibirNavbar() {
    const navDiv = document.getElementById('navbar');
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
            <li><button id="btnLogout">LOGOUT</button></li>
        </ul>
    </div>
`;
}