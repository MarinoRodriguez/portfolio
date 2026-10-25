export const personalInfo = {
  name: "Marino Rodríguez",
  fullName: "Marino Enrique Rodríguez Hernández",
  role: "Desarrollador de Software",
  specialties: "Backend, APIs Escalables, Arquitecturas Offline-First y 3D/VR",
  location: "Santo Domingo, República Dominicana",
  email: "marino.rodriguez.hernandez@gmail.com",
  github: "https://github.com/marinorodriguez",
  linkedin: "https://www.linkedin.com/in/marino-enrique-rodriguez-hernandez-59a0b5253/",
  avatar: "./images/profile.png",
  about: `Soy desarrollador de software con experiencia en el diseño e implementación de soluciones tecnológicas orientadas a negocio. He trabajado tanto en el desarrollo de aplicaciones web y móviles como en la integración con sistemas empresariales, destacándome en la construcción de APIs, diseño de bases de datos y manejo de arquitecturas escalables.

Tengo experiencia gestionando proyectos y desarrollando productos desde cero, incluyendo plataformas SaaS, sistemas de punto de venta (POS), sistemas de administración de jornada laboral y empleados, entre otros. Además, domino el uso de herramientas de inteligencia artificial como un aliado clave para potenciar la productividad, optimizar procesos de desarrollo y acelerar la entrega de soluciones con un enfoque práctico, analítico, atención al detalle y orientación a resultados.`,
};

export const skillsCategories = [
  {
    category: "Backend & Cloud",
    icon: "server",
    skills: [
      "C# / .NET",
      "Go (Golang)",
      "Python",
      "Node.js",
      "RESTful APIs",
      "Microservicios",
      "Docker & Contenedores Linux",
      "Integraciones SAP / ERP",
    ],
  },
  {
    category: "Frontend & Web",
    icon: "layout",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Preact / React",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "PWA & Offline-First APIs",
      "WordPress & Hosting",
    ],
  },
  {
    category: "3D, VR & Game Dev",
    icon: "box",
    skills: [
      "C# para Videojuegos",
      "Unity Engine",
      "Realidad Virtual (VR)",
      "Realidad Aumentada (AR)",
      "Simulaciones Interactivas",
      "Optimización de Renderizado",
    ],
  },
  {
    category: "Bases de Datos & Estándares",
    icon: "database",
    skills: [
      "Microsoft SQL Server",
      "PostgreSQL",
      "PocketBase",
      "Diseño Relacional & Normalización",
      "Norma ISO 9001:2015",
      "Norma ISO 27001:2022",
    ],
  },
];

export const experienceData = [
  {
    role: "Desarrollador Backend",
    company: "FMP Technology Services",
    period: "sep. 2023 – Actualidad",
    location: "Santo Domingo",
    current: true,
    description:
      "Diseño, construcción y mantenimiento de software a la medida para clientes corporativos.",
    achievements: [
      "Desarrollo desde cero de plataforma web para la administración de fuerza laboral con control de asistencia biométrico por reconocimiento facial y geolocalización.",
      "Colaboración en la creación del sistema para puntos de venta (POS) y diseño de estrategias arquitectónicas para que las aplicaciones móviles funcionen sin conexión (offline-first).",
      "Diseño de implementaciones con sistemas externos conectando de forma automatizada el sistema central SAP con plataformas de nómina, ventas, almacén y finanzas.",
      "Aseguramiento de la continuidad operativa total, soporte continuo y resolución de requerimientos de alto impacto para clientes.",
    ],
    tags: ["C#", ".NET", "SAP Integration", "Offline-First", "APIs", "SQL Server"],
  },
  {
    role: "Programador 3D & Encargado de Desarrollo",
    company: "Parque Cibernético de Santo Domingo",
    period: "nov. 2023 – sep. 2024",
    location: "Santo Domingo",
    current: false,
    description:
      "Liderazgo técnico del área de desarrollo coordinando un equipo de 6 programadores en soluciones interactivas y web.",
    achievements: [
      "Planificación y ejecución de proyectos tecnológicos: desarrollo de aplicaciones, portales web, administración de hosting y mantenimiento en WordPress.",
      "Creación de videojuegos y experiencias inmersivas e innovadoras en Realidad Virtual (VR) y Realidad Aumentada (AR).",
      "Gestión de entregas, coordinación multidisciplinaria y optimización de flujos de trabajo de desarrollo interactivo.",
    ],
    tags: ["Unity", "C#", "Virtual Reality (VR)", "Augmented Reality (AR)", "WordPress", "Team Leadership"],
  },
];

export const educationData = [
  {
    degree: "Ingeniería en Software",
    institution: "UNAPEC (Universidad APEC)",
    period: "sep. 2024 – dic. 2028",
    status: "En curso",
    honor: "Cuadro de Honor Académico",
    grade: "Calificación: 3.6 / 4.0",
    description: "Formación integral en ingeniería de software, arquitectura de sistemas, algoritmia avanzada y gestión de proyectos tecnológicos.",
  },
  {
    degree: "Tecnólogo en Simulaciones Interactivas y Videojuegos",
    institution: "ITLA (Instituto Tecnológico de Las Américas)",
    period: "ene. 2022 – ago. 2024",
    status: "Graduado con Excelencia",
    honor: "Alto Rendimiento Académico",
    grade: "Calificación: 3.9 / 4.0",
    description: "Especialización en desarrollo 3D, programación de videojuegos, simulación física, motores gráficos (Unity) y tecnologías inmersivas VR/AR.",
  },
];

export const certificationsData = [
  {
    title: "Certificación ISO 9001:2015 e ISO 27001:2022",
    issuer: "ISOINNOVA RD",
    date: "dic. 2025",
    focus: "Sistemas de Gestión de Calidad y Seguridad de la Información.",
  },
  {
    title: "C# Expertise",
    issuer: "UDEMY",
    date: "ago. 2023",
    focus: "Desarrollo avanzado en C#, POO, concurrencia, LINQ y buenas prácticas.",
  },
  {
    title: "Diseño y Administración de Bases de Datos",
    issuer: "INFOTEP",
    date: "jun. 2025",
    focus: "Modelado relacional, consultas avanzadas, optimización de índices y transaccionalidad.",
  },
  {
    title: "Contabilidad General y Control Financiero",
    issuer: "INFOTEP",
    date: "jun. 2026",
    focus: "Manejo financiero, conciliaciones, estructura contable y flujo de negocio.",
  },
];

export const projectsData = [
  {
    id: "fastreport-docker",
    title: "FastReport Web Docker (.NET en Linux)",
    repo: "https://github.com/MarinoRodriguez/fast-report-web-docker-based",
    category: "Infraestructura & Backend",
    badge: "Destacado",
    summary:
      "Aislamiento y ejecución de una aplicación de escritorio Windows (.NET Framework) dentro de contenedores Linux en VPS para brindar accesibilidad web completa.",
    description:
      "Este proyecto busca dar accesibilidad a una aplicación de escritorio legacy haciéndola utilizable a través de la web. En lugar de mantener una costosa y lenta máquina virtual Windows completa dedicada a una sola aplicación de reportes, se aisló y orquestó la aplicación dentro de un contenedor Linux en un VPS, reduciendo drásticamente el consumo de recursos. Se utilizó IA como apoyo para la creación de la interfaz web, mientras que la infraestructura, dockerización, orquestación y el administrador de contenedores fue desarrollado 100% por Marino.",
    metrics: [
      "Consumo mínimo: ~220 MB RAM y <1% CPU (procesador 4 cores @2.2GHz)",
      "Picos máximos: 450 MB RAM y 1%–2% de CPU",
      "Aislamiento total y eliminación del overhead de una VM dedicada",
    ],
    tags: ["Docker", "Linux Containers", ".NET Framework", "VPS", "JavaScript", "Infraestructura"],
  },
  {
    id: "web-offline",
    title: "Web Offline-First PoC",
    repo: "https://github.com/MarinoRodriguez/web-offline",
    category: "PoC & Arquitectura",
    badge: "PoC",
    summary:
      "Prueba de concepto que pone a prueba la capacidad del navegador para construir aplicaciones web offline-first completamente operativas sin conexión.",
    description:
      "Proyecto de investigación tipo prueba de concepto (PoC) en el cual se evalúan las APIs modernas del navegador para construir experiencias offline-first. Permite a los usuarios acceder al aplicativo y realizar operaciones críticas incluso en ausencia total de conexión a internet, sincronizando el estado una vez restaurada la red.",
    metrics: [
      "Operatividad 100% offline para flujos de datos esenciales",
      "Persistencia local en el cliente y sincronización asíncrona",
    ],
    tags: ["C#", "Offline-First", "Service Workers", "Web APIs", "Resiliencia"],
  },
  {
    id: "vr-template",
    title: "Plantilla de Realidad Virtual (VR Framework)",
    repo: "https://github.com/MarinoRodriguez/Plantilla-de-Vr",
    category: "3D & Videojuegos",
    badge: "VR / 3D",
    summary:
      "Arquitectura base y plantilla modular en C# para el desarrollo estructurado de simulaciones interactivas y videojuegos en Realidad Virtual.",
    description:
      "Framework base desarrollado en C# y Unity para agilizar la producción de experiencias inmersivas en VR. Incluye sistemas de interacción con objetos, configuración de visores, locomoción, mapeo de controladores y optimizaciones de pipeline gráfico para mantener un framerate fluido e inmersivo.",
    metrics: [
      "Estructura modular reutilizable para proyectos de VR/AR",
      "Optimización de framerate para evitar mareos por movimiento",
    ],
    tags: ["C#", "Unity", "Virtual Reality", "Simulaciones 3D", "Físicas"],
  },
  {
    id: "attendance-poc",
    title: "Prototipo de Asistencia Facial & Geo",
    repo: "https://github.com/MarinoRodriguez/app-asistencia-backend",
    frontendRepo: "https://github.com/MarinoRodriguez/app-asistencia-frontend",
    category: "PoC & Arquitectura",
    badge: "Prototipo",
    summary:
      "Prototipo exploratorio inicial creado para validar y presentar la viabilidad del control de asistencia por reconocimiento facial y geolocalización.",
    description:
      "Versión prototipo inicial desarrollada para validar técnicamente y presentar la idea de marcaje biométrico georreferenciado. El código de este repositorio refleja la fase de experimentación y validación temprana que sirvió como base para diseñar posteriormente la solución enterprise de gestión de personal construida en FMP Technology Services.",
    metrics: [
      "Validación de captura biométrica en navegador/móvil",
      "Integración de coordenadas GPS y validación de perímetro",
    ],
    tags: ["C#", "JavaScript", "Biometría", "Prototipado", "Geolocalización"],
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker Application",
    repo: "https://github.com/MarinoRodriguez/habit-tracker",
    category: "Productividad",
    badge: "TypeScript",
    summary:
      "Aplicación de productividad y seguimiento diario de hábitos estructurada con tipado estricto en TypeScript.",
    description:
      "Herramienta interactiva orientada a la consistencia y seguimiento de metas personales. Desarrollada con TypeScript para garantizar mantenibilidad, tipado estricto y un flujo reactivo limpio para registrar rachas y estadísticas.",
    metrics: [
      "Gestión de estado modular y tipado estricto",
      "Visualización clara de consistencia y rachas de hábitos",
    ],
    tags: ["TypeScript", "Frontend", "Productividad", "Web App"],
  },
  {
    id: "whatsapp-bot",
    title: "WhatsApp Automation Bot",
    repo: "https://github.com/MarinoRodriguez/whatsapp-chistebot",
    category: "Herramientas & Automatización",
    badge: "Automation",
    summary:
      "Bot conversacional y automatización de mensajería en Node.js con consumo dinámico de APIs externas.",
    description:
      "Proyecto de automatización de mensajería instantánea implementado con JavaScript y Node.js. Administra eventos entrantes, procesamiento de mensajes y consumo de servicios web externos para generación de respuestas dinámicas en tiempo real.",
    metrics: [
      "Manejo de eventos y webhooks en tiempo real",
      "Integración asíncrona con servicios REST externos",
    ],
    tags: ["JavaScript", "Node.js", "Automation", "Chatbots", "APIs"],
  },
  {
    id: "go-microservices",
    title: "Concurrencia y Microservicios en Go",
    repo: "https://github.com/MarinoRodriguez/first-time-in-go",
    category: "Infraestructura & Backend",
    badge: "Go",
    summary:
      "Implementación de servicios y ejercicios de concurrencia de alto rendimiento utilizando Go (Golang).",
    description:
      "Proyecto enfocado en dominar las capacidades nativas de concurrencia en Go, explorando goroutines, canales, sincronización de memoria y creación de endpoints backend ultrarrápidos y de bajo consumo.",
    metrics: [
      "Aprovechamiento de concurrencia ligera de Go",
      "Bajo consumo de memoria y tiempos de respuesta mínimos",
    ],
    tags: ["Go", "Concurrencia", "Goroutines", "Backend", "APIs"],
  },
  {
    id: "spity-game",
    title: "Spity - Prototipo de Videojuego en C#",
    repo: "https://github.com/MarinoRodriguez/Spity---Emil",
    category: "3D & Videojuegos",
    badge: "Game Dev",
    summary:
      "Desarrollo de lógica de videojuego, control de estados y mecánicas interactivas implementadas en C#.",
    description:
      "Desarrollo de mecánicas de juego en C#, implementando sistemas de control de jugador, detección de colisiones, bucle de juego y arquitectura orientada a componentes interactivos.",
    metrics: [
      "Aplicación de patrones de diseño para videojuegos en C#",
      "Control de estados y animaciones de entidades",
    ],
    tags: ["C#", "Game Development", "POO", "Lógica Interactiva"],
  },
];
