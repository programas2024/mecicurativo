// ===== GALERÍA DE IMÁGENES =====
// Base de datos de imágenes (simulada)
const imagenesGaleria = [
    { id: 1, url: 'imganes/ave.png', titulo: 'Momento de paz', cat: 'galeria' },
    { id: 2, url: 'imganes/camalio.png', titulo: 'Crecimiento personal', cat: 'galeria' },
    { id: 3, url: 'imganes/cerdo.png', titulo: 'Valores', cat: 'galeria' },
    { id: 4, url: 'imganes/gatoperro.jpeg', titulo: 'Emociones', cat: 'galeria' },
    { id: 5, url: 'imganes/gavilan.jpeg', titulo: 'Liderazgo', cat: 'galeria' },
    { id: 6, url: 'imganes/koala.jpeg', titulo: 'Amistad', cat: 'galeria' },
    { id: 7, url: 'imganes/pavo.jpeg', titulo: 'Superación', cat: 'galeria' },
    { id: 8, url: 'imganes/pulpo.jpeg', titulo: 'Gratitud', cat: 'galeria' },
    { id: 9, url: 'imganes/mono.jpeg', titulo: 'Esperanza', cat: 'galeria' },
    { id: 10, url: 'imganes/mariquita.jpeg', titulo: 'Felicidad', cat: 'galeria' },
    { id: 11, url: 'imganes/elefante.jpeg', titulo: 'Paz interior', cat: 'galeria' },
    { id: 12, url: 'imganes/pato.jpeg', titulo: 'Motivación', cat: 'galeria' }
];

// Función para crear el HTML de la galería
function crearGaleriaHTML() {
    let html = '<div class="galeria-grid">';
    
    imagenesGaleria.forEach(img => {
        html += `
            <div class="galeria-item" onclick="abrirImagen('${img.url}', '${img.titulo}')">
                <img src="${img.url}" alt="${img.titulo}" loading="lazy">
                <div class="galeria-caption">${img.titulo}</div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// Función para mostrar la galería en el área principal
function mostrarGaleria() {
    temaPrincipal.innerHTML = `
        <div class="galeria-container">
            <h2 class="galeria-titulo"><i class="fas fa-images"></i> Galería de reflexiones</h2>
            ${crearGaleriaHTML()}
        </div>
    `;
}

// Función para abrir imagen en grande (opcional)
function abrirImagen(url, titulo) {
    Swal.fire({
        imageUrl: url,
        imageAlt: titulo,
        title: titulo,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            popup: 'swal-popup-redondo'
        }
    });
}

// Agregar la categoría al menú (esto se hace desde app.js, pero aquí está la función)
function agregarCategoriaGaleria() {
    // Esta función será llamada desde app.js después de cargar
    const categoriaGaleria = {
        id: 'galeria',
        nombre: 'Galería',
        icono: 'fa-images',
        color: '#9b59b6',
        colorFondo: '#4a2360'
    };
    
    // Insertar en el array de categorías (esto se hace en app.js)
    return categoriaGaleria;
}