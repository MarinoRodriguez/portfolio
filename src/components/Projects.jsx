import { useState } from 'preact/hooks';
import { projectsData } from '../data/portfolioData';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = [
    'Todos',
    'Infraestructura & Backend',
    'PoC & Arquitectura',
    '3D & Videojuegos',
    'Herramientas & Automatización',
  ];

  const filteredProjects = activeCategory === 'Todos'
    ? projectsData
    : projectsData.filter((p) => {
        if (activeCategory === 'Herramientas & Automatización') {
          return p.category === 'Herramientas & Automatización' || p.category === 'Productividad';
        }
        return p.category === activeCategory;
      });

  return (
    <section id="projects" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            Portafolio de Código
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            Proyectos Públicos Destacados
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Casos reales de ingeniería, pruebas de concepto (PoC), aislamiento de entornos en contenedores y desarrollo 3D/VR.
          </p>
        </div>

        {/* Categories Filter */}
        <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              class={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Showcase: FastReport Web Docker */}
        {activeCategory === 'Todos' || activeCategory === 'Infraestructura & Backend' ? (
          <div class="mb-14">
            <div class="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 shadow-2xl">
              <div class="bg-[#0b101d] rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
                
                {/* Glow accent */}
                <div class="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none"></div>

                <div class="relative z-10 space-y-6">
                  
                  {/* Top badges */}
                  <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                      <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        Proyecto Insignia
                      </span>
                      <span class="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-800/80 border border-slate-700/60">
                        Infraestructura & Docker
                      </span>
                    </div>

                    <a
                      href="https://github.com/MarinoRodriguez/fast-report-web-docker-based"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-semibold border border-slate-700 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Ver Código en GitHub</span>
                      <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  {/* Title & Description */}
                  <div class="space-y-3">
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                      FastReport Web Docker (.NET en Linux)
                    </h3>
                    <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                      Proyecto diseñado para dar accesibilidad web a una aplicación de escritorio legacy en <span class="text-cyan-300 font-semibold">.NET Framework</span> ejecutándola de forma aislada dentro de un contenedor Linux en VPS. Reemplazó la necesidad de mantener máquinas virtuales completas de Windows exclusivamente para editar un reporte, reduciendo radicalmente el consumo de recursos de cómputo.
                    </p>
                  </div>

                  {/* Metrics Box */}
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30">
                      <span class="block text-xs font-mono text-cyan-400 font-bold uppercase mb-1">Consumo Mínimo</span>
                      <span class="text-xl sm:text-2xl font-black text-white font-mono">220 MB</span>
                      <span class="block text-xs text-slate-400 mt-0.5">&lt; 1% CPU (4-Core @2.2GHz)</span>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                      <span class="block text-xs font-mono text-emerald-400 font-bold uppercase mb-1">Picos Máximos</span>
                      <span class="text-xl sm:text-2xl font-black text-white font-mono">450 MB</span>
                      <span class="block text-xs text-slate-400 mt-0.5">1% - 2% uso de CPU</span>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-900/90 border border-purple-500/30">
                      <span class="block text-xs font-mono text-purple-400 font-bold uppercase mb-1">Ingeniería & IA</span>
                      <span class="text-xl sm:text-2xl font-black text-white font-mono">100% Propia</span>
                      <span class="block text-xs text-slate-400 mt-0.5">Infraestructura, orquestación y Docker por Marino (UI asistida con IA)</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div class="flex flex-wrap gap-2 pt-2">
                    {['Docker', 'Linux Containers', '.NET Framework', 'VPS', 'Orquestación', 'Microservicios'].map((tag) => (
                      <span key={tag} class="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          </div>
        ) : null}

        {/* Projects Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => p.id !== 'fastreport-docker' || activeCategory !== 'Todos')
            .map((proj) => (
              <div
                key={proj.id}
                class="rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between p-6 shadow-xl group hover:-translate-y-1"
              >
                <div class="space-y-4">
                  
                  {/* Top Bar */}
                  <div class="flex items-center justify-between">
                    <span class={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                      proj.badge === 'PoC'
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : proj.badge === 'Prototipo'
                        ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                        : proj.badge === 'VR / 3D'
                        ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                        : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                    }`}>
                      {proj.badge}
                    </span>

                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositorio en GitHub"
                      class="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>

                  {/* Title */}
                  <h4 class="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h4>

                  {/* Summary & Details */}
                  <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Key Highlights list */}
                  {proj.metrics && proj.metrics.length > 0 && (
                    <div class="space-y-1.5 pt-1">
                      {proj.metrics.map((m, idx) => (
                        <div key={idx} class="text-xs text-slate-300 flex items-start gap-2">
                          <span class="text-cyan-400 font-bold shrink-0">▸</span>
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* If there's also a frontend prototype repo */}
                  {proj.frontendRepo && (
                    <div class="pt-2 text-xs font-mono">
                      <a
                        href={proj.frontendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>Ver frontend prototipo</span>
                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}

                </div>

                {/* Footer with tags & Action */}
                <div class="pt-6 mt-4 border-t border-slate-800/80 space-y-3">
                  <div class="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        class="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800 text-slate-400 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block w-full text-center py-2 text-xs font-mono font-medium rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-cyan-300 transition-colors"
                  >
                    Explorar Repositorio →
                  </a>
                </div>

              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
