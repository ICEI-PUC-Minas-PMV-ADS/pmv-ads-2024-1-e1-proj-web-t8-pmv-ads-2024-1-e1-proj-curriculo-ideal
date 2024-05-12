var db_vaga_inicial = {}

// [CRUD] Estruturando e separando o CRUD em partes

//CREATE
var db = JSON.parse(localStorage.getItem('db_cadastro'));
//if (!db) {
  //  db = db_contatos_inicial
//};
function inserirCadastro() {
    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    
    var db = JSON.parse(localStorage.getItem('db_cadastro'));

    if(db == null) {
        localStorage.setItem('db_cadastro','[]');
        db = [];
    }
    let novoId = 1
    if (db.length != 0) 
        novoId = db[db.length - 1].id + 1;

    let novoCadastro = {
        id: novoId,
        Nome: nome.value,
        Sobrenome: sobrenome.value,
        Email: email.value,
        Senha: senha.value,
    };

    db.push(novoCadastro);
    
    localStorage.setItem('db_cadastro', JSON.stringify(db));

    window.location.href= "../home/index.html";

}

const formularioLogin = document.getElementById("formulario");
const btnLogin = document.getElementsByClassName("btn");
function fazerLogin (){
    let email= document.getElementById("email").value;
    let senha= document.getElementById("senha").value;
    var db = JSON.parse(localStorage.getItem('db_cadastro'));

    if (db) {
        var usuario = db.find(cadastro => cadastro.Email === email && cadastro.Senha === senha);
        console.log (usuario)
        if (usuario) {
            window.location.href = "../home/index.html";
        } else {
            console.log ("invalido");
            alert ("Usuário ou senha inválido");
        }
    } else {
        console.log ("Não tem usuarios");
    }
}