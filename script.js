// Troca de imagens das categorias ao passar o mouse
document.addEventListener('DOMContentLoaded', () => {
    const servico = document.querySelectorAll('.servicos');
  
    servico.forEach(item => { 
        const imagem = item.querySelector('.img-categorias');
        const imagemOriginal = item.getAttribute('data-imagem-original');
        const imagemTroca = item.getAttribute('data-imagem-troca');
  
        item.addEventListener('mouseenter', () => {
            imagem.src = imagemTroca;
        });
  
        item.addEventListener('mouseleave', () => {
            imagem.src = imagemOriginal;
        });
    });
  });

  // 