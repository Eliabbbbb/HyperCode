document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.getElementById('teamContainer');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupBody = document.getElementById('popupBody');
    const closePopup = document.getElementById('closePopup');
    
    // Generar las imágenes del equipo
    equipo.forEach((integrante, index) => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('team-member');
        memberElement.setAttribute('data-index', index);
        
        memberElement.innerHTML = `
            <img src="${integrante.imagen}" alt="${integrante.nombre}">
            <h3>${integrante.nombre}</h3>
        `;
        
        // Añadir evento de clic
        memberElement.addEventListener('click', () => {
            showPopup(integrante);
        });
        
        teamContainer.appendChild(memberElement);
    });
    
    // Función para mostrar el popup
    function showPopup(integrante) {
        popupBody.innerHTML = `
            <img src="${integrante.imagen}" alt="${integrante.nombre}">
            <h2>${integrante.nombre}</h2>
            <p class="age">${integrante.edad} años</p>
            <p class="description">${integrante.descripcion}</p>
        `;
        
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
    
    // Cerrar popup
    closePopup.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Permitir scroll nuevamente
    });
    
    // Cerrar popup al hacer clic fuera del contenido
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Efectos de hover mejorados para miembros del equipo
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});