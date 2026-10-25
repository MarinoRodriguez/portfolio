import { useState } from 'preact/hooks';
import { personalInfo } from '../data/portfolioData';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Educación & Certificaciones', href: '#education' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header class="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f19]/85 border-b border-slate-800/80 transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" class="flex items-center gap-3 group focus:outline-none">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div class="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                <span class="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-base">
                  MR
                </span>
              </div>
            </div>
            <div>
              <span class="text-sm font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors block">
                {personalInfo.name}
              </span>
              <span class="text-xs text-slate-400 font-mono block">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                class="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Copy Email */}
          <div class="hidden sm:flex items-center gap-2">
            <button
              onClick={copyEmail}
              title="Copiar correo electrónico al portapapeles"
              class="relative flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-700/60 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all duration-200"
            >
              {copied ? (
                <>
                  <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-emerald-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copiar email</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="px-3 py-1.5 text-xs font-mono font-medium rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40 transition-colors inline-flex items-center gap-1.5"
              title="Ver / Descargar Currículum Vitae en PDF"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>CV</span>
            </a>

            <a
              href="#contact"
              class="px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-200"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile menu button */}
          <div class="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              class="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 focus:outline-none"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div class="md:hidden border-b border-slate-800 bg-[#0b0f19]/95 px-4 pt-2 pb-5 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              class="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div class="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={copyEmail}
              class="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded-lg border border-slate-700 bg-slate-800/70 text-slate-300"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar email'}</span>
            </button>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              class="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono font-medium rounded-lg border border-cyan-500/40 text-cyan-300 bg-cyan-950/30"
            >
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Ver / Descargar CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              class="w-full text-center py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-medium"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
