document.addEventListener('DOMContentLoaded', () => {
    const latCentro = 19.3000;
    const lonCentro = -99.7500;
    const zoomNivel = 13;

    var map = L.map('map').setView([latCentro, lonCentro], zoomNivel);

    setTimeout(function() {
        map.invalidateSize();
    }, 100);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    const RedIcon = new L.DivIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color: #E53E3E; width: 15px; height: 15px; border-radius: 50%; border: 3px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.5);'></div>",
        iconSize: [15, 15],
        iconAnchor: [7, 7],
        popupAnchor: [0, -7]
    });

    const GreenIcon = new L.DivIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color: #38A169; width: 15px; height: 15px; border-radius: 50%; border: 3px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.5);'></div>",
        iconSize: [15, 15],
        iconAnchor: [7, 7],
        popupAnchor: [0, -7]
    });
    
    const ubicaciones = [
        { lat: 19.305, lon: -99.760, nombre: "El Mirador (P. Familiar)", info: "Alta escasez. Solución: Sistema Familiar 7,000L. Capacidad de ahorro del 85%.", icon: RedIcon }, 
        { lat: 19.320, lon: -99.780, nombre: "Zona Norte - Riego Agrícola", info: "Escasez hídrica aguda. Solución: Laguna de 15,000L para riego agrícola.", icon: RedIcon }, 
        { lat: 19.315, lon: -99.730, nombre: "Barrio del Calvario (P. Industrial)", info: "Escasez por baja presión. Solución: Taller de Herrería con 5,000L para procesos.", icon: RedIcon },
        { lat: 19.290, lon: -99.755, nombre: "Mercado Municipal (P. Público)", info: "Demanda alta en el centro. Solución: Sistema de 12,000L para servicios públicos.", icon: RedIcon },
        { lat: 19.280, lon: -99.800, nombre: "Acahualco (P. Rural)", info: "Zona sin red municipal. Solución: Acceso Garantizado a familia de 6.", icon: RedIcon },
        
        { lat: 19.310, lon: -99.740, nombre: "Esc. Benito Juárez (P. Comunitario)", info: "Proyecto exitoso de 10,000L que abastece a más de 300 estudiantes.", icon: GreenIcon },
        { lat: 19.295, lon: -99.780, nombre: "Tecolit (P. Ecológico)", info: "Proyecto de 2,500L que combina captación con beneficios térmicos (Azotea Verde).", icon: GreenIcon },
        { lat: 19.270, lon: -99.720, nombre: "Sta. Cruz Cuauhtenco (P. Comunal)", info: "Cisterna comunitaria de 20,000L que da servicio a 8 viviendas.", icon: GreenIcon },
        { lat: 19.275, lon: -99.745, nombre: "Aula Verde (P. Educación)", info: "Sistema educativo de 5,000L para fines de enseñanza ambiental.", icon: GreenIcon },
        { lat: 19.285, lon: -99.750, nombre: "Colonia Centro (P. Potable)", info: "Sistema de purificación avanzada (UV y Carbón) para consumo humano directo.", icon: GreenIcon }
    ];

    ubicaciones.forEach(ubicacion => {
        const contenidoPopup = `
            <strong>${ubicacion.nombre}</strong><br>
            <span>${ubicacion.info}</span>
        `;
        
        L.marker([ubicacion.lat, ubicacion.lon], { icon: ubicacion.icon })
        .addTo(map)
        .bindPopup(contenidoPopup);
    });
});