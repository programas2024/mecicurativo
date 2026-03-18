// ===== ALERTA DE AGRADECIMIENTOS =====
function mostrarAgradecimientos() {
    Swal.fire({
        ...estiloBase,
        title: '<span style="font-size: 42px; font-weight: 700; color: #2c1b4e; text-shadow: 0 2px 10px rgba(155,89,182,0.3);">🙏 AGRADECIMIENTOS</span>',
        html: `
            <div style="text-align: center; padding: 5px; max-height: 500px; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none;">
                
                <!-- MENSAJE PRINCIPAL -->
                <div style="background: linear-gradient(145deg, #2c1b4e, #4a2d6e); padding: 30px 20px; border-radius: 70px; margin: 15px 0; box-shadow: 0 15px 30px rgba(44,27,78,0.4);">
                    <i class="fas fa-heart" style="font-size: 60px; color: #ffb8d9; margin-bottom: 15px; filter: drop-shadow(0 5px 10px rgba(255,255,255,0.3));"></i>
                    <p style="color: white; font-size: 24px; line-height: 1.5; font-weight: 400; text-shadow: 0 2px 5px rgba(0,0,0,0.3);">
                        Gracias a todos por hacer parte de mi proyecto<br>
                        <strong style="font-size: 28px; color: #ffeaa7;">que surgió por los valores, experiencias</strong><br>
                        y con el objetivo de darle<br>
                        <span style="background: #e84393; padding: 5px 20px; border-radius: 50px; color: white; font-weight: 700;">MOTIVACIÓN A LAS PERSONAS</span>
                    </p>
                </div>

                <!-- PADRES (DESTACADO) -->
                <div style="background: linear-gradient(145deg, #ffd1dc, #ffe5f0); padding: 25px; border-radius: 80px; margin: 20px 0; border: 4px solid white; box-shadow: 0 10px 25px rgba(232,67,147,0.3);">
                    <i class="fas fa-heart" style="font-size: 50px; color: #e84393; margin-bottom: 10px;"></i>
                    <h3 style="font-size: 32px; color: #2c1b4e; margin-bottom: 10px; font-weight: 700;">👨‍👩‍👧 PADRES</h3>
                    <p style="font-size: 20px; color: #1a1a2e; line-height: 1.5; font-style: italic;">
                        "Por siempre enseñarme tantas cosas bonitas<br>
                        y brindarme tanta confianza en mí"
                    </p>
                    <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <span style="background: white; padding: 12px 30px; border-radius: 60px; font-weight: 700; font-size: 18px; border: 3px solid #e84393;">💖 FLOR ELBA</span>
                        <span style="background: white; padding: 12px 30px; border-radius: 60px; font-weight: 700; font-size: 18px; border: 3px solid #e84393;">💙 JOSÉ JESÚS</span>
                    </div>
                </div>

                <!-- FAMILIA -->
                <div style="background: linear-gradient(145deg, #b3e0cf, #d4f0e0); padding: 25px; border-radius: 80px; margin: 20px 0; border: 4px solid white; box-shadow: 0 10px 25px rgba(14,124,92,0.3);">
                    <i class="fas fa-users" style="font-size: 50px; color: #0e7c5c; margin-bottom: 10px;"></i>
                    <h3 style="font-size: 32px; color: #2c1b4e; margin-bottom: 10px; font-weight: 700;">👪 FAMILIA</h3>
                    <p style="font-size: 18px; color: #1a1a2e; line-height: 1.6; font-style: italic; padding: 0 10px;">
                        "Por ser mi ejemplo de salir adelante, de ser constantes,<br>
                        de no cambiar sin importar las circunstancias<br>
                        y siempre tener una alegría en los labios"
                    </p>
                    <div style="margin-top: 20px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">ELVIA ROSA</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">BARNEY</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">FABIÁN DAVID</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">FABIÁN ARISTÓBULO</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">JOSÉ ARLEX</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">DARIO</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">JUAN CARLOS</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">LIS DANY</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">PEDRO</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">EDUAR ANTONIO</span>
                        <span style="background: white; padding: 10px 22px; border-radius: 50px; font-weight: 600; border: 2px solid #0e7c5c;">CLAUDIA MILENA</span>
                    </div>
                </div>

                <!-- AMIGOS -->
                <div style="background: linear-gradient(145deg, #fbc1d0, #ffd9e3); padding: 25px; border-radius: 80px; margin: 20px 0; border: 4px solid white; box-shadow: 0 10px 25px rgba(196,69,105,0.3);">
                    <i class="fas fa-heart" style="font-size: 50px; color: #c44569; margin-bottom: 10px;"></i>
                    <h3 style="font-size: 32px; color: #2c1b4e; margin-bottom: 10px; font-weight: 700;">🤝 AMIGOS</h3>
                    <div style="margin-top: 20px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                        <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">DANIEL ARBOLEDA</span>
                        <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">HERNEY BENAVIDEZ</span>
                        <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">ANGIE RODRÍGUEZ</span>
                        <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">VICTORIA MANRIQUE</span>
                        <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">ANDRÉS TORO</span>
                    <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">ANGELA ROMERO</span>
                        <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">NICOLAS GUTIERREZ</span>
                        <span style="background: white; padding: 12px 25px; border-radius: 60px; font-weight: 600; font-size: 16px; border: 2px solid #c44569; box-shadow: 0 5px 10px rgba(0,0,0,0.1);">MILAGROS RAMIREZ</span>
                        </div>
                </div>

                <!-- CIERRE ESPECIAL -->
                <div style="background: #2c1b4e; padding: 25px; border-radius: 100px; margin: 25px 0 10px; border: 4px solid white; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px; background: linear-gradient(45deg, #9b59b6, #e84393, #f1c40f); opacity: 0.2; z-index: 0;"></div>
                    <i class="fas fa-star" style="font-size: 40px; color: #f1c40f; position: relative; z-index: 1; margin-bottom: 10px;"></i>
                    <p style="color: white; font-size: 28px; font-weight: 700; position: relative; z-index: 1; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">
                        ¡GRACIAS TOTALES!
                    </p>
                    <p style="color: #f1c40f; font-size: 20px; position: relative; z-index: 1;">
                        <i class="fas fa-heart"></i> Este proyecto es de todos <i class="fas fa-heart"></i>
                    </p>
                </div>

            </div>
            <style>
                .swal2-html-container::-webkit-scrollbar { display: none; }
                .swal2-html-container { scrollbar-width: none; -ms-overflow-style: none; }
            </style>
        `,
        iconHtml: '<i class="fas fa-heart" style="font-size: 50px; color: #e84393; filter: drop-shadow(0 5px 15px rgba(232,67,147,0.5));"></i>',
        width: '750px',
        background: '#fff9ff',
        confirmButtonColor: '#2c1b4e',
        confirmButtonText: '💝 Gracias a todos',
        showCloseButton: true,
        closeButtonHtml: '×',
        customClass: {
            popup: 'swal-popup-redondo-agradecimientos',
            closeButton: 'swal-close-button'
        }
    });
}

// Estilo adicional para este popup
const agradecimientosStyle = document.createElement('style');
agradecimientosStyle.innerHTML = `
    .swal-popup-redondo-agradecimientos {
        border-radius: 70px !important;
        border: 6px solid white !important;
        box-shadow: 0 40px 70px rgba(44,27,78,0.5) !important;
    }
`;
document.head.appendChild(agradecimientosStyle);