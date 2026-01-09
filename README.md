# ✨ TODO List - Aplicación de Gestión de Tareas

Una aplicación web moderna y elegante para gestionar tareas diarias, desarrollada con HTML5, CSS3 y JavaScript vanilla como parte de una prueba técnica.

![TODO List Preview](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descripción

TODO List es una aplicación web que permite a los usuarios organizar sus tareas de manera eficiente. Con un diseño moderno que incluye tema oscuro, efectos de glassmorfismo y animaciones suaves, la aplicación ofrece una experiencia de usuario premium mientras mantiene un código limpio y bien estructurado.

## ✨ Características

### Funcionalidades Core
- ✅ **Agregar tareas**: Crea nuevas tareas con validación de entrada
- ✅ **Marcar como completada**: Alterna el estado de las tareas entre pendiente y completada
- ✅ **Eliminar tareas**: Elimina tareas con confirmación previa
- ✅ **Validación**: Previene la creación de tareas vacías
- ✅ **Actualización dinámica**: Interfaz reactiva sin recargas de página

### Funcionalidades Bonus
- 🎯 **Persistencia de datos**: Las tareas se guardan en localStorage
- 📊 **Contador de tareas**: Muestra el número de tareas pendientes en tiempo real
- 🔍 **Sistema de filtros**: Visualiza todas las tareas, solo pendientes o solo completadas
- ⚠️ **Confirmación de eliminación**: Diálogo de confirmación antes de eliminar tareas

### Diseño
- 🎨 **Tema oscuro moderno**: Paleta de colores vibrante con gradientes
- 💎 **Efectos glassmorfismo**: Tarjetas con efecto de vidrio esmerilado
- 📱 **Diseño responsive**: Adaptable a móvil, tablet y escritorio
- ✨ **Animaciones suaves**: Micro-interacciones y transiciones fluidas
- 🔤 **Tipografía moderna**: Google Fonts (Inter)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica con etiquetas `<header>`, `<main>`, `<section>`, `<footer>`
- **CSS3**: Diseño moderno con Flexbox, Grid, custom properties y animaciones
- **JavaScript (Vanilla)**: Lógica de aplicación con programación orientada a objetos
- **Git/GitHub**: Control de versiones con commits descriptivos
- **localStorage API**: Persistencia de datos en el navegador

## 📁 Estructura del Proyecto

```
todo-list/
│
├── index.html          # Estructura HTML principal
├── css/
│   └── styles.css      # Estilos y diseño responsive
├── js/
│   └── app.js          # Lógica de la aplicación
└── README.md           # Documentación del proyecto
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- No se requieren dependencias adicionales

### Instrucciones

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/todo-list.git
   cd todo-list
   ```

2. **Abrir la aplicación**
   - Abre el archivo `index.html` en tu navegador web
   - O usa un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (npx)
     npx serve
     ```

3. **Usar la aplicación**
   - Escribe una tarea en el campo de entrada
   - Presiona "Agregar" o Enter para crear la tarea
   - Haz clic en el checkbox para marcar como completada
   - Usa los filtros para ver tareas específicas
   - Haz clic en "Eliminar" para borrar una tarea

## 💡 Características Técnicas

### Buenas Prácticas Implementadas
- ✅ Separación de responsabilidades (HTML/CSS/JS)
- ✅ Código legible y bien comentado
- ✅ Nombres de variables descriptivos
- ✅ Uso de `addEventListener` para eventos
- ✅ Programación orientada a objetos
- ✅ Manejo de errores con try/catch
- ✅ Validación de entrada de usuario

### Arquitectura del Código
- **Clase TodoApp**: Encapsula toda la lógica de la aplicación
- **Métodos organizados**: Separación clara entre core, rendering, filtering, storage
- **Estado centralizado**: Gestión de tareas y filtros en un solo lugar
- **Event delegation**: Listeners eficientes para elementos dinámicos

### Responsive Design
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**:
  - Móvil: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px

## 🎨 Paleta de Colores

```css
Primary: hsl(260, 100%, 65%)     /* Púrpura vibrante */
Secondary: hsl(320, 100%, 60%)   /* Rosa magenta */
Accent: hsl(180, 100%, 50%)      /* Cian brillante */
Background: hsl(230, 20%, 10%)   /* Azul oscuro */
Success: hsl(140, 70%, 55%)      /* Verde */
Danger: hsl(0, 70%, 60%)         /* Rojo */
```

## 📸 Capturas de Pantalla

*La aplicación presenta un diseño moderno con tema oscuro, efectos de glassmorfismo y animaciones suaves que mejoran la experiencia del usuario.*

## 🔄 Control de Versiones

Este proyecto utiliza Git para el control de versiones. Commits principales:

1. `Initial project setup with folder structure`
2. `Add HTML structure and semantic elements`
3. `Add CSS styling with responsive design`
4. `Add core JavaScript functionality`
5. `Add localStorage and bonus features`
6. `Add README and documentation`

## 📝 Licencia

Este proyecto fue desarrollado como parte de una prueba técnica y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ como prueba técnica de nivel intermedio.

---

**Fecha de desarrollo**: Enero 2026

**Versión**: 1.0.0
