import { useState } from 'preact/hooks';
import { personalInfo } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" class="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            Iniciemos Conversación
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white">
            ¿Hablamos de tu Próximo Proyecto?
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Abierto a oportunidades laborales, desarrollo de soluciones empresariales, consultoría técnica y retos de alto impacto.
          </p>
        </div>

        {/* Contact Container Box */}
        <div class="max-w-3xl mx-auto">
          <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#111827] to-[#0b0f19] border border-slate-800 shadow-2xl space-y-8 text-center">
            
            <div class="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <div class="space-y-2">
              <span class="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Correo Electrónico Personal
              </span>
              <p class="text-lg sm:text-2xl font-bold font-mono text-cyan-300 break-all">
                {personalInfo.email}
              </p>
            </div>

            {/* Actions */}
            <div class="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${personalInfo.email}?subject=Contacto%20desde%20Portafolio%20Web`}
                class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Enviar Correo Directo
              </a>

              <button
                onClick={copyEmail}
                class="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-mono text-sm transition-all duration-200 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-emerald-400">¡Copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copiar Dirección</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div class="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-cyan-400 flex items-center gap-2 transition-colors font-medium"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>Conectar en LinkedIn</span>
              </a>

              <span>•</span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-cyan-400 flex items-center gap-2 transition-colors font-medium"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Seguir en GitHub</span>
              </a>

              <span>•</span>

              <div class="flex items-center gap-1.5 text-slate-400">
                <span>📍 {personalInfo.location}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
