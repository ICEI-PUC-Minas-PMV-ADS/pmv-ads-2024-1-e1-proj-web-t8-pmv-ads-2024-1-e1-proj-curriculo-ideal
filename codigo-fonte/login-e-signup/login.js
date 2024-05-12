var db_vaga_inicial = {}

if (!usuarioCorrente.login) {
    window.location.href = LOGIN_URL;
}

function exibirUsuarios() {

    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    
    let listaUsuarios = '';
    for (i = 0; i < db_usuarios.usuarios.length; i++) {
        let usuario = db_usuarios.usuarios[i];
        listaUsuarios += `<tr><td scope="row">${usuario.nome}</td><td>${usuario.login}</td><td>${usuario.email}</td></tr>`;
    }

    document.getElementById("table-usuarios").innerHTML = listaUsuarios

}

function initPage() {

    // Associa a função de logout ao botão
    document.getElementById('btn_logout').addEventListener('click', logoutUser);

    // Informa o nome do usuário logado
    document.getElementById('nomeUsuario').innerHTML = usuarioCorrente.nome;

    // Lista os usuários 
    exibirUsuarios ();
}
