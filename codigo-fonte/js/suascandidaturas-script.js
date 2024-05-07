var modal = document.getElementById("modal");

function abrirModal(){
    modal.style.display = "block";
}
$('#meuModal').on('shown.bs.modal', function () {
    $('#meuInput').trigger('focus')
  })