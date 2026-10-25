# Marino Rodríguez | Portafolio Profesional

Sitio web de portafolio personal moderno, ultrarrápido y responsivo construido con **Preact**, **Vite** y **Tailwind CSS**, diseñado para destacar proyectos de arquitectura de software, backend escalable, soluciones offline-first, contenedores e ingeniería 3D/VR.

## Tecnologías Principales

- **[Preact](https://preactjs.com/)**: Alternativa rápida y de 3kB a React con el mismo rendimiento y compatibilidad.
- **[Vite](https://vitejs.dev/)**: Entorno de desarrollo ultrarrápido y bundler optimizado.
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilos responsivos con tema oscuro refinado y paleta de acentos cian/esmeralda.
- **[GitHub Actions](https://github.com/features/actions)**: Pipeline de Integración y Despliegue Continuo (CI/CD) automatizado para **GitHub Pages**.

## Estructura del Proyecto

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo CI/CD automatizado para GitHub Pages
├── public/
│   ├── cv-marino-rodriguez.pdf # Currículum Vitae en PDF
│   └── images/
│       └── profile.png         # Fotografía de perfil profesional
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación con menú móvil, botón CV y copia de email
│   │   ├── Hero.jsx            # Encabezado con fotografía, bio, botón de CV y enlaces directos
│   │   ├── About.jsx           # Perfil profesional y parrilla de tecnologías
│   │   ├── Experience.jsx      # Línea de tiempo de experiencia laboral
│   │   ├── Projects.jsx        # Galería de proyectos con filtros y métricas
│   │   ├── EducationCertifications.jsx # Grados universitarios y certificaciones ISO
│   │   ├── Contact.jsx         # Tarjeta de contacto interactiva
│   │   └── Footer.jsx          # Pie de página y enlaces
│   ├── data/
│   │   └── portfolioData.js    # Fuente de datos centralizada
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Instalación y Desarrollo Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/MarinoRodriguez/portfolio.git
   cd portfolio
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Compilar para producción:
   ```bash
   npm run build
   ```

## Despliegue en GitHub Pages

El repositorio incluye un flujo automatizado en `.github/workflows/deploy.yml`. Para habilitarlo en tu repositorio de GitHub:

1. Ve a la pestaña **Settings** de tu repositorio en GitHub.
2. En la barra lateral izquierda, selecciona **Pages**.
3. En **Build and deployment** -> **Source**, selecciona **GitHub Actions**.
4. Cada vez que hagas `git push origin main`, GitHub Actions compilará y desplegará automáticamente la última versión de tu portafolio.

---

Diseñado y programado por **Marino Rodríguez**  
Santo Domingo, República Dominicana  
Email: [marino.rodriguez.hernandez@gmail.com](mailto:marino.rodriguez.hernandez@gmail.com)  
Enlaces: [LinkedIn](https://www.linkedin.com/in/marino-enrique-rodriguez-hernandez-59a0b5253/) | [GitHub](https://github.com/marinorodriguez)
