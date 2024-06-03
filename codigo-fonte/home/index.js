document.addEventListener('DOMContentLoaded', function() {
  const parte1 = document.getElementById('parte1');
  const parte2 = document.getElementById('parte2');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  parte1.classList.remove('nao-mostrar');
  parte2.classList.add('nao-mostrar');

  prevBtn.addEventListener('click', function() {
    parte1.classList.remove('nao-mostrar');
    parte2.classList.add('nao-mostrar');
  });

  nextBtn.addEventListener('click', function() {
    parte1.classList.add('nao-mostrar');
    parte2.classList.remove('nao-mostrar');
  });
});

let intervalId = setInterval(switchPartes, 10000); 


function switchPartes() {
  if (parte1.classList.contains('nao-mostrar')) {
    parte1.classList.remove('nao-mostrar');
    parte2.classList.add('nao-mostrar');
  } else {
    parte1.classList.add('nao-mostrar');
    parte2.classList.remove('nao-mostrar');
  }
}
