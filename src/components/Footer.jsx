import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer class="border-t border-slate-800/80 bg-[#080c14] py-12 text-slate-400 text-xs sm:text-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div class="flex items-center gap-3 text-center md:text-left">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1px]">
              <div class="w-full h-full bg-[#0b0f19] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                MR
              </div>
            </div>
            <div>
              <p class="font-bold text-slate-200">
                {personalInfo.fullName}
              </p>
              <p class="text-xs text-slate-500 font-mono">
                Santo Domingo, República Dominicana
              </p>
            </div>
          </div>

          {/* Built with details */}
          <div class="text-center font-mono text-xs text-slate-500">
            <p>Construido con <span class="text-cyan-400">Preact</span> + <span class="text-emerald-400">Tailwind CSS</span> + <span class="text-purple-400">Vite</span></p>
            <p class="text-[11px] text-slate-600">CI/CD con GitHub Actions en GitHub Pages</p>
          </div>

          {/* Quick links & Back to top */}
          <div class="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              class="hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono text-xs"
              title="Volver arriba"
            >
              <span>Arriba</span>
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
