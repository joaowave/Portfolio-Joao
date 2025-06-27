// Formulário de Contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            const originalIcon = submitBtn.querySelector('i').className;
            
            // Feedback visual
            submitBtn.querySelector('span').textContent = 'Enviando...';
            submitBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
            submitBtn.disabled = true;
            
            // Simular tempo de envio
            setTimeout(() => {
                // Resetar botão
                submitBtn.querySelector('span').textContent = 'Mensagem Enviada!';
                submitBtn.querySelector('i').className = 'fas fa-check';
                
                // Resetar formulário
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.querySelector('span').textContent = originalText;
                    submitBtn.querySelector('i').className = originalIcon;
                    submitBtn.disabled = false;
                    
                    // Feedback visual
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success';
                    successMessage.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <p>Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.</p>
                    `;
                    contactForm.appendChild(successMessage);
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 2000);
            }, 1500);
        });
    }
});