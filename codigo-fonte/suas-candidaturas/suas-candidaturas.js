modal = document.getElementById('modalCandidatura');

function abrirModal () {

    var modalCandidatura = new bootstrap.Modal(modal);
    modalCandidatura.show();
}


/** help */
function log(message) {
    console.log('>' + message)
}


/** app */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/** os cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart(){
    log('> CARD: Start dragging')
    this.classList.add('is-dragging')
}

function drag(){
    log('> CARD: Is dragging')
}

function dragend(){
    log('> CARD: Stop drag')
    this.classList.remove('is-dragging')
}

/** onde os cards serão soltos */  

dropzones.forEach( dropzone => {
dropzone.addEventListener('dragenter', dragenter)
dropzone.addEventListener('dragover', dragover)
dropzone.addEventListener('dragleave', dragleave)
dropzone.addEventListener('drop', drop)
})

function dragenter( ){
 log('DROPZONE: Enter in zone')
}
function dragover( ){
    log('DROPZONE: Over') 
    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
}
function dragleave( ){
    log('DROPZONE: Leave')
    this.classList.remove('over')
}
function drop( ){
    log('DROPZONE: Dropped')
    
}





