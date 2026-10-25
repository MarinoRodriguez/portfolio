import { educationData, certificationsData } from '../data/portfolioData';

export function EducationCertifications() {
  return (
    <section id="education" class="py-20 bg-slate-900/30 border-t border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold bg-purple-950/60 border border-purple-800/60 px-3 py-1 rounded-full">
            Formación Continua
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            Educación & Certificaciones
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Bases académicas de alto rendimiento y certificaciones oficiales en estándares de calidad y seguridad.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Educación Universitaria y Tecnológica */}
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Formación Académica</h3>
            </div>

            <div class="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  class="p-6 rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 space-y-3"
                >
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 class="text-lg font-bold text-slate-100">{edu.degree}</h4>
                    <span class="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                      {edu.grade}
                    </span>
                  </div>

                  <div class="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400 font-mono">
                    <span class="text-slate-300">{edu.institution}</span>
                    <span>{edu.period}</span>
                  </div>

                  <div class="inline-block px-2.5 py-1 text-xs rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                    🏆 {edu.honor}
                  </div>

                  <p class="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones Profesionales */}
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Certificaciones Oficiales</h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  class="p-5 rounded-2xl bg-[#0e1424] border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-mono text-purple-400 font-semibold bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/60">
                        {cert.issuer}
                      </span>
                      <span class="text-xs font-mono text-slate-500">{cert.date}</span>
                    </div>
                    
                    <h4 class="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h4>

                    <p class="text-xs text-slate-400 leading-relaxed">
                      {cert.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
