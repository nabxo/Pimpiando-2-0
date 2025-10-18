document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los contenedores principales
    const main = document.getElementById("contenido");
    const nav = document.getElementById("nav-bar");
    const footer = document.querySelector("footer p"); 

    /**
     * =========================================
     * PARTE 1: ESTRUCTURAS DE DATOS (Map, Array, Set)
     * =========================================
     */

    const secciones = ["Inicio", "Sabores", "Galería", "Contacto", "Ubicación"];
    const contenidoMap = new Map();

    // Contenido de la Sección Inicio (Historia de Helados Bon)
    contenidoMap.set("Inicio", `
        <h1>Helados Bon</h1>
        <h2>¡Qué buenos son!</h2>
        <p><em>Somos un modelo de desarrollo que transmite sabor y alegría para los dominicanos.</em></p>
        
        <div style="max-width: 800px; margin: 30px auto; padding: 20px; border-left: 5px solid var(--principal); background: #fff8e1; text-align: left;">
            <h3>Un Legado de Sabor Dominicano</h3>
            <p>La historia de Helados Bon comienza en **1972** en la República Dominicana, fundada por el empresario suizo Alfonso Morey. Nació con la misión de ofrecer helados hechos con **frutas naturales y sabores tropicales**, que rápidamente capturaron el gusto de los dominicanos.</p>
            <p>A lo largo de las décadas, Bon no solo se ha convertido en la heladería favorita del país, sino en un **símbolo de la cultura y el sabor local**, expandiéndose y manteniendo su compromiso con la calidad y la alegría.</p>
        </div>
    `);

    // Contenido de la Sección Sabores (Uso de 'for' y 'Set')
    const sabores = [
        { nombre: "Fresa", info: "Baja en calorías", esNuevo: false },
        { nombre: "Tamarindo", info: "Rico en Vitamina C", esNuevo: true },
        { nombre: "Chinola", info: "Vitaminas A y C", esNuevo: false },
        { nombre: "Coco", info: "0% Colesterol", esNuevo: true }
    ];

    let saboresHTML = "<h3>Sabores de temporada</h3><ul>";

    // Bucle 'for...of' e 'if'
    for (let sabor of sabores) {
        let tagNuevo = "";
        if (sabor.esNuevo) {
            tagNuevo = '<mark style="background:var(--principal); color:white; padding: 2px 5px; border-radius:3px; margin-left: 5px;">¡Nuevo!</mark>';
        }
        saboresHTML += `<li><strong>${sabor.nombre}</strong>: ${sabor.info}${tagNuevo}</li>`;
    }
    saboresHTML += "</ul>";

    // Set
    const toppings = new Set(["Miel", "Cereal Integral <mark>(Nuevo)</mark>", "Granola"]);
    saboresHTML += "<p><strong>Toppings:</strong> ";
    let toppingArray = Array.from(toppings); 
    
    // Bucle 'for' clásico
    for (let k = 0; k < toppingArray.length; k++) {
        saboresHTML += toppingArray[k];
        if (k < toppingArray.length - 1) saboresHTML += ", ";
    }
    saboresHTML += "</p>";

    // Imágenes de Sabores
    saboresHTML += `
      <div class="grid">
        <img src="sabores.png" alt="Imagen de sabores" width="600">
        <img src="toppings.png" alt="Imagen de toppings" width="250">
      </div>
    `;

    contenidoMap.set("Sabores", saboresHTML);

    // Contenido de la Sección Galería (Corregida)
    const galeriaImgs = ["prueba1.jpg", "prueba2.jpg", "MNCE.jpeg"]; 
    let galeriaHTML = "<h3>Galería de Helados</h3><div class='grid'>";
    let j = 0;
    
    // Bucle 'while'
    while (j < galeriaImgs.length) {
        galeriaHTML += `<img src="${galeriaImgs[j]}" alt="Imagen de helado ${j + 1}" width="250">`;
        j++;
    }
    galeriaHTML += "</div>";
    contenidoMap.set("Galería", galeriaHTML);

    // Contenido de la Sección Contacto (Mejorado)
    contenidoMap.set("Contacto", `
        <h3>Contáctanos y Endulza tu Día</h3>
        
        <div id="formulario-contenedor" style="max-width: 450px; margin: 20px auto; padding: 20px; border-radius: 10px; background: #fff8e1; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p id="mensaje-feedback" style="text-align:center; font-weight: 600; margin-bottom: 20px;">
                Escríbenos directamente o síguenos en nuestras redes.
            </p>
            <form id="formulario-contacto">
                <label for="nombre">Nombre:</label>
                <input id="nombre" type="text" placeholder="Tu nombre completo" required>
                
                <label for="email">Correo:</label>
                <input id="email" type="email" placeholder="ejemplo@correo.com" required>
                
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" rows="3" placeholder="Quiero más información sobre..." required></textarea>
                
                <button type="submit" style="margin-top: 15px;">Enviar Mensaje</button>
            </form>

            <p style="text-align:center; margin-top: 25px; font-size: 1.1em;">
                <a href="https://wa.me/8099086000" target="_blank" style="color: var(--principal); text-decoration: none; margin: 0 10px;">
                    WhatsApp 📞
                </a> 
                |
                <a href="https://www.instagram.com/heladosbonrd/" target="_blank" style="color: var(--principal); text-decoration: none; margin: 0 10px;">
                    Instagram ✨
                </a> 
                |
                <a href="https://web.facebook.com/HeladosBONRD/" target="_blank" style="color: var(--principal); text-decoration: none; margin: 0 10px;">
                    Facebook 👍
                </a>
            </p>
        </div>
    `);

    // Contenido de la Sección Ubicación (Mejorado)
    contenidoMap.set("Ubicación", `
        <h3>¡Encuéntranos y comete un helado!</h3>
        
        <div style="max-width: 900px; margin: 20px auto; padding: 20px; border-radius: 10px; background: #fff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <p style="text-align:center; font-weight: 600; margin-bottom: 20px;">
                Consulta nuestra ubicación principal o usa el botón para buscar tu sucursal más cercana.
            </p>
            
            <p style="text-align:center; margin-bottom: 15px;">
                <a href="https://www.google.com/maps/search/Helados+Bon+Republica+Dominicana" target="_blank">
                    <button>Estamos cerca de ti</button>
                </a>
            </p>

            <h4 style="text-align:center; margin-top: 20px; color: var(--principal);">Ubicación Principal</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.043615323619!2d-69.93121168560367!3d18.48019747457061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf88b5f9f0a0d3%3A0x4cb9d2f2d6dbb72b!2sHelados%20Bon!5e0!3m2!1ses!2sdo!4v1693771098579!5m2!1ses!2sdo" 
                allowfullscreen loading="lazy" 
                style="width:100%; height:400px; border:3px solid #ddd; border-radius:8px;"></iframe>
        </div>
    `);


    /**
     * =========================================
     * PARTE 2: NAVEGACIÓN Y LÓGICA (switch, if)
     * =========================================
     */

    function mostrarSeccion(seccion) {
        
        // Estructura 'if'
        if (!contenidoMap.has(seccion)) {
            main.innerHTML = `<h2>Sección "${seccion}" en construcción</h2><p>Vuelve pronto para ver este contenido.</p>`;
            return; 
        }

        document.querySelectorAll('#nav-bar button').forEach(btn => {
            btn.classList.remove('activo'); 
        });

        let contenidoBase = contenidoMap.get(seccion);
        let mensajeExtra = "";

        // Estructura 'switch'
        switch(seccion) {
            case "Sabores":
                const nuevos = sabores.filter(s => s.esNuevo).length;
                if (nuevos > 3) {
                    mensajeExtra = "<p style='color:red;'>¡Tenemos una gran variedad de helados nuevos!</p>";
                }
                break;
            case "Contacto":
                // Añadimos el mensaje extra DEBAJO del contenido del formulario
                mensajeExtra = "<p style='text-align:center;'>¡Te responderemos en menos de 24 horas!</p>";
                break;
            default:
                break;
        }
        
        main.innerHTML = contenidoBase + mensajeExtra;
        
        const botonActivo = document.querySelector(`#nav-bar button[data-seccion="${seccion}"]`);
        if (botonActivo) { 
            botonActivo.classList.add('activo');
        }

        // --- LÓGICA ESPECÍFICA PARA LA SECCIÓN DE CONTACTO ---
        if (seccion === "Contacto") {
            const form = document.getElementById('formulario-contacto');
            const feedback = document.getElementById('mensaje-feedback');

            if (form && feedback) {
                // Event Listener para capturar el envío del formulario
                form.addEventListener('submit', function(event) {
                    event.preventDefault(); // Detiene la recarga de la página

                    // Cambia el texto de feedback y oculta el formulario
                    feedback.innerHTML = '<span style="color:green; font-weight:700;">Gracias por contactar con nosotros, estaremos respondiendo mediante correo electrónico!</span>';
                    
                    // Opcional: Ocultar el formulario después del envío exitoso
                    form.style.display = 'none';

                    // Opcional: Mostrar el formulario nuevamente después de 5 segundos
                    setTimeout(() => {
                        form.style.display = 'block';
                        feedback.innerHTML = 'Escríbenos directamente o síguenos en nuestras redes.';
                        form.reset(); // Limpia los campos
                    }, 5000);
                });
            }
        }
    }


    /**
     * =========================================
     * PARTE 3: INICIALIZACIÓN (Bucle 'for', Eventos)
     * =========================================
     */

    // Bucle 'for...of' para crear botones
    for (let s of secciones) {
        const btn = document.createElement("button");
        btn.textContent = s;
        btn.setAttribute('data-seccion', s); 
        
        btn.addEventListener("click", () => mostrarSeccion(s));
        nav.appendChild(btn);
    }
    
    // Estructura 'if' en el Footer
    const horaActual = new Date().getHours();
    if (horaActual < 12) {
        footer.innerHTML += " | ¡Buenos días, disfruta tu helado!";
    } else {
        footer.innerHTML += " | ¡Buenas tardes, endulza tu día!";
    }

    // Mostrar la sección inicial
    mostrarSeccion("Inicio");
});