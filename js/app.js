// ===== BASE DE DATOS =====
const temas = [
    // Valores (11 temas)
    { id: 1, nombre: "Apreciate", cat: "valores", icono: "fa-star", desc: "El primer paso para sanar es valorarte a ti mismo." },
    { id: 2, nombre: "Persona individual", cat: "valores", icono: "fa-user", desc: "Cada persona es única y merece respeto." },
    { id: 3, nombre: "El respeto", cat: "valores", icono: "fa-handshake", desc: "Base de toda relación saludable." },
    { id: 4, nombre: "La honestidad", cat: "valores", icono: "fa-gem", desc: "Ser auténtico contigo y con los demás." },
    { id: 5, nombre: "La confianza", cat: "valores", icono: "fa-lock", desc: "Se construye con pequeños actos diarios." },
    { id: 6, nombre: "Un amigo de verdad te entiende sin hablar", cat: "valores", icono: "fa-user-group", desc: "La conexión verdadera va más allá de las palabras." },
    { id: 7, nombre: "El compartir", cat: "valores", icono: "fa-hands", desc: "Lo que compartes se multiplica." },
    { id: 8, nombre: "Los detalles", cat: "valores", icono: "fa-gift", desc: "Pequeñas acciones, grandes significados." },
    { id: 9, nombre: "La discreción", cat: "valores", icono: "fa-eye-slash", desc: "Saber guardar silencio también es sabiduría." },
    { id: 10, nombre: "Una persona leal", cat: "valores", icono: "fa-shield-heart", desc: "La lealtad no se exige, se demuestra." },
    { id: 11, nombre: "Aprecia lo que tienes", cat: "valores", icono: "fa-heart", desc: "La gratitud transforma tu mirada." },
    
    // Crecimiento (9 temas)
    { id: 12, nombre: "Es tu momento", cat: "crecimiento", icono: "fa-clock", desc: "El momento de actuar es ahora." },
    { id: 13, nombre: "La persistencia", cat: "crecimiento", icono: "fa-arrow-trend-up", desc: "Caer está permitido, levantarse es obligatorio." },
    { id: 14, nombre: "La comunicación asertiva", cat: "crecimiento", icono: "fa-comments", desc: "Decir lo que sientes sin herir." },
    { id: 15, nombre: "Las críticas", cat: "crecimiento", icono: "fa-message", desc: "Aprende de ellas, no te paralices." },
    { id: 16, nombre: "Las oportunidades", cat: "crecimiento", icono: "fa-door-open", desc: "Llegan cuando menos lo esperas." },
    { id: 17, nombre: "Progratinar", cat: "crecimiento", icono: "fa-calendar-xmark", desc: "Hoy es el mejor día para empezar." },
    { id: 18, nombre: "El trabajo", cat: "crecimiento", icono: "fa-briefcase", desc: "Más que obligación, es propósito." },
    { id: 19, nombre: "La dedicación", cat: "crecimiento", icono: "fa-clock", desc: "El esfuerzo constante da frutos." },
    { id: 20, nombre: "El camino hacia el éxito", cat: "crecimiento", icono: "fa-road", desc: "Disfruta cada paso, no solo la meta." },
    
    // Emociones (4 temas)
    { id: 21, nombre: "Autocontrol", cat: "emociones", icono: "fa-scale-balanced", desc: "Gestionar tus emociones es poder." },
    { id: 22, nombre: "La emoción más poderosa", cat: "emociones", icono: "fa-fire", desc: "El amor lo transforma todo." },
    { id: 23, nombre: "Las emociones", cat: "emociones", icono: "fa-face-smile", desc: "Todas son válidas, todas importan." },
    { id: 24, nombre: "El bullying", cat: "emociones", icono: "fa-hand-fist", desc: "Hablemos para sanar." },
    
    // Liderazgo (4 temas)
    { id: 25, nombre: "Lo que debe tener un líder", cat: "liderazgo", icono: "fa-medal", desc: "Humildad, visión y empatía." },
    { id: 26, nombre: "Moral y ética", cat: "liderazgo", icono: "fa-scale-balanced", desc: "El carácter define al líder." },
    { id: 27, nombre: "El liderazgo", cat: "liderazgo", icono: "fa-people-arrows", desc: "Influyes siempre, aunque no lo sepas." },
    { id: 28, nombre: "Los profesionales", cat: "liderazgo", icono: "fa-briefcase", desc: "La excelencia es un hábito." },
    
    // Especial (3 temas)
    { id: 29, nombre: "Una frase del día", cat: "especial", icono: "fa-quote-left", desc: "Pequeñas dosis de inspiración." },
    { id: 30, nombre: "Feliz día de la mujer", cat: "especial", icono: "fa-venus", desc: "Celebremos cada día." },
    { id: 31, nombre: "El aprecio a la mujer", cat: "especial", icono: "fa-star", desc: "Reconocimiento y gratitud." }
];

// Categorías con colores (INCLUYENDO GALERÍA)
const categorias = [
    { id: 'valores', nombre: 'Valores', icono: 'fa-hand-sparkles', color: '#1e6f9c', colorFondo: '#0a3b55' },
    { id: 'crecimiento', nombre: 'Crecimiento', icono: 'fa-seedling', color: '#8e44ad', colorFondo: '#4a2360' },
    { id: 'emociones', nombre: 'Emociones', icono: 'fa-heart', color: '#c44569', colorFondo: '#822b4a' },
    { id: 'liderazgo', nombre: 'Liderazgo', icono: 'fa-crown', color: '#0e7c5c', colorFondo: '#064e39' },
    { id: 'especial', nombre: 'Especiales', icono: 'fa-calendar-star', color: '#e67e22', colorFondo: '#a55c17' },
    // NUEVA CATEGORÍA GALERÍA
    { id: 'galeria', nombre: 'Galería', icono: 'fa-images', color: '#9b59b6', colorFondo: '#4a2360' }
];

// Elementos DOM
const menuHorizontal = document.getElementById('menuHorizontal');
const temaPrincipal = document.getElementById('temaPrincipal');

// ===== FUNCIONES =====
function mostrarTema(tema) {
    if (tema.cat === 'galeria') {
        // Si es galería, llamar a la función de galeria.js
        if (typeof mostrarGaleria === 'function') {
            mostrarGaleria();
        } else {
            console.error('Error: mostrarGaleria no está definida');
            temaPrincipal.innerHTML = '<div class="placeholder-text"><i class="fas fa-exclamation-triangle"></i><p>Error al cargar la galería</p></div>';
        }
        return;
    }
    
    const categoria = categorias.find(c => c.id === tema.cat);
    const colorBorde = categoria ? categoria.color : '#8e44ad';
    
    temaPrincipal.innerHTML = `
        <div class="icono-gigante"><i class="fas ${tema.icono}" style="color: ${colorBorde}"></i></div>
        <h2>${tema.nombre}</h2>
        <div class="categoria-tag" style="background: ${categoria?.colorFondo || '#2b174e'}">${tema.cat}</div>
        <div class="descripcion">${tema.desc}</div>
    `;
    temaPrincipal.style.borderLeftColor = colorBorde;
}

function cerrarTodosSubmenus() {
    document.querySelectorAll('.submenu').forEach(sub => {
        sub.classList.remove('mostrar');
    });
    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('activo');
    });
}

function construirMenu() {
    let html = '';
    
    categorias.forEach(cat => {
        if (cat.id === 'galeria') {
            // Para galería, crear un submenú especial
            html += `
                <div class="menu-item" data-cat="${cat.id}">
                    <button class="menu-btn" onclick="toggleSubmenu('${cat.id}')">
                        <i class="fas ${cat.icono}"></i>
                        <span>${cat.nombre}</span>
                    </button>
                    <div class="submenu ${cat.id}" id="submenu-${cat.id}" style="border-color: ${cat.color}">
                        <div class="tema-link" onclick="seleccionarTema(999)">
                            <i class="fas fa-images" style="color: ${cat.color}"></i>
                            <span>Ver galería completa</span>
                        </div>
                        <div class="tema-link" onclick="seleccionarTema(998)">
                            <i class="fas fa-star" style="color: ${cat.color}"></i>
                            <span>Destacados</span>
                        </div>
                        <div class="tema-link" onclick="seleccionarTema(997)">
                            <i class="fas fa-clock" style="color: ${cat.color}"></i>
                            <span>Recientes</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Para categorías normales
            const temasCat = temas.filter(t => t.cat === cat.id);
            
            html += `
                <div class="menu-item" data-cat="${cat.id}">
                    <button class="menu-btn" onclick="toggleSubmenu('${cat.id}')">
                        <i class="fas ${cat.icono}"></i>
                        <span>${cat.nombre}</span>
                    </button>
                    <div class="submenu ${cat.id}" id="submenu-${cat.id}" style="border-color: ${cat.color}">
                        ${temasCat.map(t => `
                            <div class="tema-link" onclick="seleccionarTema(${t.id})">
                                <i class="fas ${t.icono}" style="color: ${cat.color}"></i>
                                <span>${t.nombre}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    menuHorizontal.innerHTML = html;
}

// Funciones globales para los onclick
window.toggleSubmenu = function(catId) {
    const submenu = document.getElementById(`submenu-${catId}`);
    const btn = event.currentTarget;
    
    if (submenu.classList.contains('mostrar')) {
        submenu.classList.remove('mostrar');
        btn.classList.remove('activo');
    } else {
        cerrarTodosSubmenus();
        submenu.classList.add('mostrar');
        btn.classList.add('activo');
    }
};

window.seleccionarTema = function(id) {
    if (id === 999) {
        // ID especial para galería completa
        if (typeof mostrarGaleria === 'function') {
            mostrarGaleria();
        } else {
            temaPrincipal.innerHTML = '<div class="placeholder-text"><i class="fas fa-exclamation-triangle"></i><p>Error: Galería no disponible</p></div>';
        }
    } else if (id === 998) {
        // Mostrar destacados CON ZOOM
        temaPrincipal.innerHTML = `
            <div class="galeria-container">
                <h2 class="galeria-titulo"><i class="fas fa-star"></i> Destacados</h2>
                <div class="galeria-grid">
                    <div class="galeria-item" onclick="abrirImagenZoom('imganes/camalio.png', 'Cambia por tu bienestar')">
                        <img src="imganes/camalio.png" alt="Cambia por tu bienestar" loading="lazy">
                        <div class="galeria-caption"><i class="fas fa-search-plus"></i> Cambia por tu bienestar</div>
                    </div>
                    <div class="galeria-item" onclick="abrirImagenZoom('imganes/gatoperro.jpeg', 'La lealtad')">
                        <img src="imganes/gatoperro.jpeg" alt="la lealtad" loading="lazy">
                        <div class="galeria-caption"><i class="fas fa-search-plus"></i> La lealtad</div>
                    </div>
                    <div class="galeria-item" onclick="abrirImagenZoom('imganes/koala.jpeg', 'Constancia')">
                        <img src="imganes/koala.jpeg" alt="constancia" loading="lazy">
                        <div class="galeria-caption"><i class="fas fa-search-plus"></i> Constancia</div>
                    </div>
                </div>
            </div>
        `;
    } else if (id === 997) {
        // Mostrar recientes CON ZOOM
        temaPrincipal.innerHTML = `
            <div class="galeria-container">
                <h2 class="galeria-titulo"><i class="fas fa-clock"></i> Recientes</h2>
                <div class="galeria-grid">
                    <div class="galeria-item" onclick="abrirImagenZoom('imganes/cerdo.png', 'Valorate')">
                        <img src="imganes/cerdo.png" alt="valorate" loading="lazy">
                        <div class="galeria-caption"><i class="fas fa-search-plus"></i> Valorate</div>
                    </div>
                    <div class="galeria-item" onclick="abrirImagenZoom('imganes/gatoperro.jpeg', 'La lealtad')">
                        <img src="imganes/gatoperro.jpeg" alt="La lealtad" loading="lazy">
                        <div class="galeria-caption"><i class="fas fa-search-plus"></i> La lealtad</div>
                    </div>
                    <div class="galeria-item" onclick="abrirImagenZoom('imganes/koala.jpeg', 'Constancia')">
                        <img src="imganes/koala.jpeg" alt="Constancia" loading="lazy">
                        <div class="galeria-caption"><i class="fas fa-search-plus"></i> Constancia</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        const tema = temas.find(t => t.id === id);
        if (tema) mostrarTema(tema);
    }
    cerrarTodosSubmenus();
};


// ===== FUNCIÓN DE ZOOM PARA IMÁGENES =====
function abrirImagenZoom(url, titulo) {
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
// Evento para cerrar menús al hacer clic fuera
document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-item')) {
        cerrarTodosSubmenus();
    }
});

// Eventos de los botones
document.addEventListener('DOMContentLoaded', function() {
    const btnAyuda = document.getElementById('btnAyuda');
    const btnMision = document.getElementById('btnMision');
    const btnSoporte = document.getElementById('btnSoporte');
    const btnAgradecimientos = document.getElementById('btnAgradecimientos'); // NUEVO
    
    if (btnAyuda) btnAyuda.addEventListener('click', mostrarAyuda);
    if (btnMision) btnMision.addEventListener('click', mostrarMision);
    if (btnSoporte) btnSoporte.addEventListener('click', mostrarSoporte);
    if (btnAgradecimientos) btnAgradecimientos.addEventListener('click', mostrarAgradecimientos); //
});

// Inicializar
construirMenu();