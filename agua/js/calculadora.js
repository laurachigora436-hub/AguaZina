// js/calculadora.js (Versión mejorada)
document.addEventListener('DOMContentLoaded', () => {
    const calcForm = document.getElementById('calc-form');
    const resultadoDiv = document.getElementById('resultado-agua');

    // DATO REAL DE ZINACANTEPEC: Precipitación promedio anual (mm)
    const precipitacionAnual = 900; 
    
    function calcularAgua(areaTecho, material) {
        
        const coeficientes = { 
            teja: 0.8, 
            metal: 0.9,
            concreto: 0.75,
            otro: 0.7
        };

        const coeficiente = coeficientes[material] || 0.7;

        // Fórmula: Captación (Litros) = Área (m²) * Precipitación (mm/año) * Coeficiente
        const litrosAnuales = areaTecho * precipitacionAnual * coeficiente;
        
        return litrosAnuales;
    }

    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const area = parseFloat(document.getElementById('area-techo').value);
            const material = document.getElementById('material-techo').value;
            
            if (isNaN(area) || area <= 0) {
                resultadoDiv.innerHTML = `<p class="error-msg"><i class="fa-solid fa-triangle-exclamation"></i> Error: Ingresa un área de techo válida mayor a cero.</p>`;
                return;
            }

            const litros = calcularAgua(area, material);
            const litrosDiarios = (litros / 365);
            // Uso conservador: el 70% del agua captada se usa para fines secundarios (no potables)
            const ahorroPotencial = (litrosDiarios * 0.7); 

            resultadoDiv.innerHTML = `
                <h2><i class="fa-solid fa-droplet"></i> ¡Potencial Calculado!</h2>
                <p>Estimación anual de agua captada:</p>
                <p><strong>${litros.toLocaleString('es-MX', { maximumFractionDigits: 0 })} Litros</strong></p>
                
                <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid #E2E8F0;">
                
                <p style="font-size: 0.95rem; color: #4A5568;">Tu potencial de ahorro diario para usos no potables (sanitarios, limpieza) es:</p>
                <p><strong>${ahorroPotencial.toLocaleString('es-MX', { maximumFractionDigits: 1 })} Litros/Día</strong></p>
                
                <p style="margin-top: 1rem; font-size: 0.9rem;">Esto cubre ${Math.round((ahorroPotencial / 120) * 100)}% del consumo diario de una persona promedio en Zinacantepec.</p>
                
                <small style="display: block; margin-top: 2rem; color: #718096;">Basado en ${precipitacionAnual} mm/año. ¡Tu sistema se pagaría solo con el ahorro!</small>
            `;
        });
    }
});