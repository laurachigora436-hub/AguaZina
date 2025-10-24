// js/formulario.js (Día 4)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de envío de datos
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;

            // Validación básica (Programador JS)
            if (!nombre || !email) {
                messageDiv.classList.remove('hidden', 'success-msg');
                messageDiv.classList.add('error-msg');
                messageDiv.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Por favor, llena todos los campos obligatorios.`;
                return;
            }
            
            // Simulación de éxito
            setTimeout(() => {
                form.reset();
                messageDiv.classList.remove('hidden', 'error-msg');
                messageDiv.classList.add('success-msg');
                messageDiv.innerHTML = `<i class="fa-solid fa-check-circle"></i> ¡Gracias, ${nombre}! Tu solicitud ha sido enviada con éxito. Te contactaremos pronto.`;
            }, 1000); 
        });
    }
});