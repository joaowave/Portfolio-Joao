// Filtro de Projetos
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de filtro e cards de projeto
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões para desmarcar visualmente
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' apenas no botão clicado para marcar visualmente
            button.classList.add('active');
            
            // Obtém o valor do filtro do atributo data-filter do botão clicado
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});