document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    const modals = document.querySelectorAll('.modal');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-target');
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentModal = button.closest('.modal');
            if (parentModal) {
                parentModal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Animación de fondo (Hero Slider)
    const heroSlider = document.getElementById('hero-slider');
    const images = [
        'imagenes/hero-bg.jpg',
        'imagenes/hero-bg-2.jpg',
        'imagenes/hero-bg-3.jpg',
        'imagenes/hero-bg-4.jpg'
    ];
    let currentImageIndex = 0;

    function changeHeroBackground() {
        if (heroSlider) {
            heroSlider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }
    }

    if (heroSlider) {
        changeHeroBackground(); 
        setInterval(changeHeroBackground, 5000); 
    }
    
    // Rotación de Equivalencias
    const equivalencias = [
        "1 semana de lavadora (uso diario)",
        "50 garrafones de agua (20L)",
        "Regar un jardín mediano por 1 mes",
        "Llenar 5 veces tu tinaco promedio",
        "125 descargas de inodoro",
    ];

    const outputElement = document.getElementById('equivalencias-output');
    const nextButton = document.getElementById('siguiente-equivalencia');
    let currentIndex = 0;

    function showNextEquivalencia() {
        if (outputElement) {
            outputElement.style.opacity = '0';
            setTimeout(() => {
                outputElement.textContent = equivalencias[currentIndex];
                currentIndex = (currentIndex + 1) % equivalencias.length;
                outputElement.style.opacity = '1';
            }, 300); 
        }
    }

    if (outputElement && nextButton) {
        outputElement.textContent = equivalencias[currentIndex];
        currentIndex = (currentIndex + 1) % equivalencias.length;
        nextButton.addEventListener('click', showNextEquivalencia);
    }

    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const formMessage = document.getElementById('form-message');

    if (contactForm && submitButton && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            formMessage.style.display = 'block';
            formMessage.className = 'estado-formulario cargando';
            formMessage.textContent = 'Enviando solicitud...';
            submitButton.disabled = true;

            setTimeout(() => {
                const success = Math.random() > 0.1; 

                if (success) {
                    formMessage.className = 'estado-formulario exito';
                    formMessage.textContent = '¡Solicitud enviada con éxito! Pronto te contactaremos.';
                    
                    const nombreInput = document.getElementById('nombre');
                    const nombre = nombreInput ? nombreInput.value : 'Usuario';

                    localStorage.setItem('ultimoContactoNombre', nombre);
                    localStorage.setItem('ultimoContactoTimestamp', new Date().toLocaleString());
                    
                    contactForm.reset();
                    
                } else {
                    formMessage.className = 'estado-formulario error';
                    formMessage.textContent = 'Error al enviar. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.';
                }

                submitButton.disabled = false;

                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);

            }, 2000);
        });
    }

    const storedName = localStorage.getItem('ultimoContactoNombre');
    const storedTime = localStorage.getItem('ultimoContactoTimestamp');

    if (storedName) {
        console.log(`Bienvenido de nuevo, ${storedName}. Tu último contacto fue: ${storedTime}`);
    }
});