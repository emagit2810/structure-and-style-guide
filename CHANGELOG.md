# Changelog

## 2024-10-19

### Componentes compartidos
- Se incorporó el componente `ServiceCarousel` con navegación accesible, soporte para `prefers-reduced-motion` y transiciones con transform/opacity.
- Se redefinieron los tokens de botones en `index.css` y se actualizó el componente `Button` para aprovecharlos con estados `hover` y `focus-visible` consistentes.

### Agrónica, Automática, Biomédica y Mecanizados
- Se añadió el carrusel de proyectos entre las cards de servicios y el CTA final en cada página.
- Se actualizaron los botones de hero y CTA para utilizar los nuevos tokens de color con contraste alto.
- Se sustituyeron los footers específicos por el componente global `Footer`.

### Equipos
- Se añadió una sección introductoria que describe la tienda y su propuesta de valor.
- Se estandarizaron los estilos de botones (hero, filtros y “Agregar”) con los nuevos tokens de color y estados.

### Página principal (HeroSection)
- Se ajustaron los botones del hero para alinearlos con los nuevos tokens de color y se amplió el flotante de WhatsApp con animación `hover`, nueva posición y foco accesible.
- Se reubicó el flotante de WhatsApp para alinearlo con los indicadores de valor del hero y se redujo el diámetro del contenedor verde para un perfil visual más ligero.

### Header
- Se actualizaron los enlaces del menú para incluir el blog y dirigir la opción “Mecanizado” a la ruta correcta.
- Se aplicaron los nuevos tokens de botón al CTA de contacto del encabezado.

### Blog
- Se creó la plantilla de blog con portada y grid de entradas destacadas.
- Se añadió la publicación “Cómo las máquinas de luz (láser/IPL) eliminan los vellos capilares y por qué no se regeneran” con estructura educativa, diferencias Láser vs. IPL, seguridad y disclaimer.

### Rutas
- Se registraron las rutas `/blog` y `/blog/laser-ipl-fototermolisis` en `App.tsx` para habilitar la navegación a la nueva sección.
