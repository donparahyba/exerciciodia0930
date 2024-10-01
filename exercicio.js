alert("console do navegador");
console.log("mensagem no console");

console.log(`Largura: ${window.innerWidth}, Altura: ${window.innerHeight}`);

localStorage.setItem('meuItem', 'Este é o valor armazenado');
let valorArmazenado = localStorage.getItem('meuItem');
console.log(valorArmazenado);

let meuDiv = document.createElement('div');
meuDiv.id = 'meuDiv';
document.body.appendChild(meuDiv);

meuDiv.textContent = 'texto dentro de div';
meuDiv.style.color = 'white';
meuDiv.style.backgroundColor = 'blue';
meuDiv.style.padding = '10px';

let paragrafo = document.querySelector('p');
paragrafo.textContent = 'texto modificado';
paragrafo.style.backgroundColor = 'yellow';

let imagem = document.querySelector('img');
imagem.setAttribute('title', 'Imagem dinâmica');

let botao = document.createElement('button');
botao.textContent = 'clique aqui';
document.body.appendChild(botao);

botao.addEventListener('click', function() {
  meuDiv.textContent = 'o conteúdo do div foi alterado após o clique!';
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('tecla Enter pressionada');
  }
});

let ul = document.createElement('ul');
document.body.appendChild(ul);

function adicionarItem(texto) {
  let li = document.createElement('li');
  li.textContent = texto;

  let botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'remover';
  botaoRemover.addEventListener('click', function() {
    ul.removeChild(li);
  });

  li.appendChild(botaoRemover);
  ul.appendChild(li);
}

adicionarItem('Item 1');
adicionarItem('Item 2');
adicionarItem('Item 3');
