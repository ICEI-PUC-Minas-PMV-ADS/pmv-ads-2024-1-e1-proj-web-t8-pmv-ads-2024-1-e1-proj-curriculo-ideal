const posicao = document.querySelectorAll('section.tutorial > h1');
const divInicial = document.querySelector('aside.menu-lateral > div[href="#posicao1"]');

if (divInicial) {
    divInicial.classList.add('highlight');
}


window.addEventListener('load', () => {
    console.log(posicao);
    console.log(divInicial);
})

let posicaoAtualId = '';
window.addEventListener('scroll', () => {
    posicao.forEach(posicao => {
        const rect = posicao.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom < window.innerHeight) {
            posicaoAtualId = posicao.id;
        }
    })
    
console.log(posicaoAtualId)
    let menuLateral = document.querySelectorAll('aside.menu-lateral > div');
    console.log(menuLateral);
    menuLateral.forEach(selecionado => {
        if (selecionado.getAttribute('href').slice(1) === posicaoAtualId) {
            selecionado.classList.add('highlight');
        }   else {
            selecionado.classList.remove('highlight');
            
        }
    })


})


