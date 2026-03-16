console.log("Bem-vindo à Aviação Elite!");

// Botão de alerta genérico
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // evita conflito com clique no card
    alert('Redirecionando para aeronaves disponíveis...');
  });
});

// Seleciona o container dos cards
const blogCards = document.querySelector('.blog-cards');

// Duplicar os cards para criar efeito infinito
blogCards.innerHTML += blogCards.innerHTML;

// Variáveis de controle do scroll infinito
let scrollAmount = 0;
const speed = 0.5; // mais suave
let scrollPaused = false;

// Função para scroll contínuo e suave
function scrollCards() {
  if (!scrollPaused) {
    scrollAmount += speed;
    if (scrollAmount >= blogCards.scrollWidth / 2) {
      scrollAmount = 0; // reinicia suavemente
    }
    blogCards.scrollLeft = scrollAmount;
  }
  requestAnimationFrame(scrollCards);
}
scrollCards();

// Parar o scroll ao passar o mouse (opcional)
blogCards.addEventListener('mouseenter', () => scrollPaused = true);
blogCards.addEventListener('mouseleave', () => scrollPaused = false);

// Efeito de digitação nos títulos de serviço
const titulos = document.querySelectorAll('.servico-conteudo h3');
titulos.forEach(titulo => {
  const texto = titulo.textContent;
  titulo.textContent = '';
  let i = 0;
  const velocidade = 150;
  function digitarTitulo() {
    if (i < texto.length) {
      titulo.textContent += texto.charAt(i);
      i++;
      setTimeout(digitarTitulo, velocidade);
    }
  }
  digitarTitulo();
});

// Pop-up de informações
const popup = document.createElement('div');
popup.id = 'blog-info-popup';
popup.style.position = 'fixed';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.backgroundColor = 'var(--cor-fundo-card)';
popup.style.color = 'var(--cor-primaria)';
popup.style.padding = '25px 30px';
popup.style.borderRadius = '12px';
popup.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
popup.style.zIndex = '999';
popup.style.display = 'none';
popup.style.textAlign = 'center';
popup.style.width = '300px';

// Texto dentro do pop-up
const popupText = document.createElement('p');
popupText.id = 'blog-info-text';
popupText.textContent = 'Clique em um card para ver mais informações.';
popup.appendChild(popupText);

// Botão de fechar
const closeBtn = document.createElement('span');
closeBtn.id = 'close-popup';
closeBtn.innerHTML = '&times;';
closeBtn.style.position = 'absolute';
closeBtn.style.top = '8px';
closeBtn.style.right = '12px';
closeBtn.style.fontSize = '1.3rem';
closeBtn.style.cursor = 'pointer';
closeBtn.style.color = 'var(--cor-destaque)';
popup.appendChild(closeBtn);

document.body.appendChild(popup);

// Função para abrir popup
function openPopup(info) {
  popupText.textContent = info;
  popup.style.display = 'block';
  scrollPaused = true;
}

// Função para fechar popup
function hidePopup() {
  popup.style.display = 'none';
  scrollPaused = false;
}

// Clique no botão "x" para fechar popup
closeBtn.addEventListener('click', hidePopup);

// Seleciona todos os cards **depois da duplicação**
const cards = document.querySelectorAll('.blog-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const info = card.getAttribute('data-info') || 'Informação do blog não disponível.';
    openPopup(info);
  });
});

// Efeito de digitação no texto individual simples (tipo slogan ou destaque)
const textoPrincipal = "A excelência está nos detalhes.";
let j = 0;
const velocidadeTexto = 80;

function digitarTextoPrincipal() {
  const el = document.getElementById("typewriter");
  if (el && j < textoPrincipal.length) {
    el.innerHTML += textoPrincipal.charAt(j);
    j++;
    setTimeout(digitarTextoPrincipal, velocidadeTexto);
  }
}

window.addEventListener("DOMContentLoaded", digitarTextoPrincipal);
