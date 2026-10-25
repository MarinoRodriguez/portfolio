import { personalInfo } from '../data/portfolioData';

export function Hero() {
  return (
    <section class="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background ambient glow */}
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div class="flex-1 text-center lg:text-left space-y-6">
            
            {/* Status pill */}
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-medium">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponible para nuevos proyectos y retos de alto impacto</span>
            </div>

            {/* Main Title */}
            <div class="space-y-2">
              <p class="font-mono text-cyan-400 text-sm tracking-wide">Hola, mi nombre es</p>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <p class="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                {personalInfo.specialties}
              </p>
            </div>

            {/* Description brief */}
            <p class="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Desarrollador de software enfocado en la construcción de arquitecturas escalables,
              integración de sistemas empresariales (<span class="text-cyan-300 font-medium">SAP, POS</span>),
              soluciones <span class="text-emerald-300 font-medium">offline-first</span> para entornos críticos y
              experiencias inmersivas en <span class="text-purple-300 font-medium">3D y Realidad Virtual</span>.
            </p>

            {/* Location & Quick Info */}
            <div class="flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
              <span class="text-slate-600">•</span>
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Full Stack & Backend</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explorar Proyectos
              </a>

              <a
                href="#contact"
                class="px-5 py-3 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 hover:border-slate-600 text-slate-200 font-medium text-sm transition-all duration-200"
              >
                Ponerse en Contacto
              </a>

              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="px-5 py-3 rounded-xl border border-cyan-500/40 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 hover:text-cyan-200 font-medium text-sm transition-all duration-200 inline-flex items-center gap-2"
                title="Abrir y descargar Currículum Vitae en PDF"
              >
                <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Descargar CV</span>
              </a>

              {/* Social icons */}
              <div class="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub"
                  class="p-3 rounded-xl border border-slate-800 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all duration-200"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de LinkedIn"
                  class="p-3 rounded-xl border border-slate-800 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Profile Photo with Glow Frame */}
          <div class="relative shrink-0 flex items-center justify-center">
            {/* Outer gradient glow */}
            <div class="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>

            {/* Image frame */}
            <div class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl p-1 bg-gradient-to-br from-cyan-400/80 via-slate-700/50 to-emerald-400/80 shadow-2xl">
              <div class="w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                <img
                  src={personalInfo.avatar}
                  alt={`Fotografía de ${personalInfo.name}`}
                  class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Float Experience Pill */}
              <div class="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#0b0f19]/95 border border-cyan-500/40 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-xs font-mono text-slate-400">Enfoque</span>
                  <span class="block text-xs font-bold text-slate-100">Soluciones de Negocio & AI</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
