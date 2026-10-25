import { experienceData } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
            Trayectoria
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            Experiencia Laboral
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Diseñando soluciones escalables de software, liderando equipos y conectando arquitecturas empresariales.
          </p>
        </div>

        {/* Timeline container */}
        <div class="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} class="relative group">
              
              {/* Timeline marker node */}
              <div class={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 ${
                exp.current
                  ? 'border-emerald-400 bg-emerald-950 text-emerald-400 shadow-lg shadow-emerald-500/30'
                  : 'border-slate-600 bg-slate-900 text-slate-400'
              } flex items-center justify-center`}>
                <span class={`w-2 h-2 rounded-full ${exp.current ? 'bg-emerald-400 animate-ping' : 'bg-slate-400'}`}></span>
              </div>

              {/* Card */}
              <div class="p-6 sm:p-8 rounded-2xl bg-[#0e1424] border border-slate-800 group-hover:border-slate-700 transition-all duration-300 shadow-xl space-y-4">
                
                {/* Header info */}
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p class="text-sm font-semibold text-slate-300">
                      {exp.company} <span class="text-slate-500 font-normal">| {exp.location}</span>
                    </p>
                  </div>

                  <div class="flex items-center gap-2">
                    {exp.current && (
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Actual
                      </span>
                    )}
                    <span class="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/60">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p class="text-sm text-slate-300 italic">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul class="space-y-2.5 pt-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} class="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <svg class="w-4 h-4 text-cyan-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div class="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      class="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
