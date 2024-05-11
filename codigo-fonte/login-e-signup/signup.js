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
//READ
//UPDATE
/* function updateCadastro(id, cadastro) {

    let index = db.cadastro.map(obj => obj.id).indexOf(id);

   
    db.cadastro[index].Nome = contato.nome,
    db.cadastro[index].Sobrenome = contato.sobrenome,
    db.cadastro[index].Email = contato.email,
    db.cadastro[index].Senha = contato.senha,

    displayMessage("");

    
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}
//DELETE
function deleteCadastro(id) {    
   
    db.cadastro = db.cadastro.filter(function (element) { return element.id != id });

    displayMessage("Cadastro removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}*/

