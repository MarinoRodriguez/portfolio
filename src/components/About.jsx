import { personalInfo, skillsCategories } from '../data/portfolioData';

export function About() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'server':
        return (
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        );
      case 'layout':
        return (
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        );
      case 'box':
        return (
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        );
      case 'database':
      default:
        return (
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        );
    }
  };

  return (
    <section id="about" class="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            Perfil Profesional
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            Sobre Mí & Enfoque de Ingeniería
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Combinando visión práctica de negocio, arquitecturas de alto rendimiento y tecnologías emergentes.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Bio Text */}
          <div class="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed bg-[#0e1424]/80 p-6 sm:p-8 rounded-2xl border border-slate-800/90 shadow-xl backdrop-blur-sm">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <span class="text-cyan-400 font-mono">01.</span>
              Construyendo software con impacto real
            </h3>
            
            <p>
              Soy desarrollador de software enfocado en resolver necesidades de negocio complejas mediante sistemas robustos, mantenibles y escalables. Cuento con experiencia trabajando en todo el ciclo de vida del producto: desde el modelado de bases de datos relacionales y el diseño de APIs RESTful de alto rendimiento, hasta la integración fluida con plataformas empresariales como <span class="text-cyan-300 font-medium">SAP</span> y sistemas de punto de venta (<span class="text-cyan-300 font-medium">POS</span>).
            </p>

            <p>
              He liderado equipos de programación y diseñado arquitecturas <span class="text-emerald-300 font-medium">offline-first</span> para garantizar que las operaciones continúen aun en condiciones de conectividad inestable. Además, integro herramientas de <span class="text-purple-300 font-medium">inteligencia artificial</span> en mis flujos de desarrollo para maximizar la productividad, acelerar entregas y mantener un estándar de calidad riguroso.
            </p>

            <div class="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div class="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <span class="text-cyan-400 block font-bold text-lg mb-0.5">+2 Años</span>
                <span class="text-slate-400">Exp. en Producción</span>
              </div>
              <div class="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <span class="text-emerald-400 block font-bold text-lg mb-0.5">3.9 & 3.6</span>
                <span class="text-slate-400">Excelencia UNAPEC/ITLA</span>
              </div>
              <div class="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 col-span-2 sm:col-span-1">
                <span class="text-purple-400 block font-bold text-lg mb-0.5">ISO 9001/27001</span>
                <span class="text-slate-400">Calidad & Seguridad</span>
              </div>
            </div>
          </div>

          {/* Quick Value Cards */}
          <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 class="text-sm font-bold text-white mb-1">Optimización & Bajo Consumo</h4>
              <p class="text-xs text-slate-400 leading-relaxed">
                Priorizo la eficiencia de memoria y CPU, sustituyendo arquitecturas pesadas por contenedores optimizados y microservicios rápidos.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="text-sm font-bold text-white mb-1">Estrategias Offline-First</h4>
              <p class="text-xs text-slate-400 leading-relaxed">
                Diseño aplicaciones resilientes que operan de forma fluida aun cuando la conectividad de red se interrumpe por completo.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group">
              <div class="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 class="text-sm font-bold text-white mb-1">Liderazgo & Coordinación</h4>
              <p class="text-xs text-slate-400 leading-relaxed">
                Capacidad comprobada liderando equipos de desarrollo, planificando hitos de entrega y comunicando soluciones a diferentes niveles de negocio.
              </p>
            </div>

          </div>

        </div>

        {/* Stack Tecnológico Categorizado */}
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <h3 class="text-xl font-bold text-white">Stack Tecnológico & Competencias</h3>
            <div class="h-[1px] flex-1 bg-slate-800"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsCategories.map((cat) => (
              <div
                key={cat.category}
                class="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {getCategoryIcon(cat.icon)}
                      </svg>
                    </div>
                    <h4 class="text-sm font-bold text-slate-200">{cat.category}</h4>
                  </div>

                  <ul class="space-y-2">
                    {cat.skills.map((skill) => (
                      <li key={skill} class="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
