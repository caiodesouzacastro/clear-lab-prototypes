// Header/footer dos protótipos — editorial v2

const ILLUSTRATIONS = {
  "A": `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50,40)">
      <rect x="0" y="20" width="120" height="160" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)"/>
      <rect x="14" y="6" width="120" height="160" fill="rgba(207,90,54,0.25)" stroke="rgba(255,255,255,0.4)"/>
      <rect x="28" y="-8" width="120" height="160" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.8)" stroke-width="1.4"/>
      <g stroke="rgba(255,255,255,0.6)" stroke-width="1">
        <line x1="38" y1="6" x2="138" y2="6"/>
        <line x1="38" y1="20" x2="138" y2="20"/>
        <line x1="38" y1="34" x2="120" y2="34"/>
        <line x1="38" y1="62" x2="138" y2="62"/>
        <line x1="38" y1="76" x2="138" y2="76"/>
        <line x1="38" y1="90" x2="110" y2="90"/>
        <line x1="38" y1="118" x2="138" y2="118"/>
        <line x1="38" y1="132" x2="125" y2="132"/>
      </g>
      <circle cx="42" cy="13" r="3.5" fill="rgb(250,228,218)"/>
      <circle cx="42" cy="69" r="3.5" fill="rgb(218,240,222)"/>
      <circle cx="42" cy="125" r="3.5" fill="rgb(248,235,200)"/>
    </g>
  </svg>`,
  "B": `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(140,140)">
      <circle r="100" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>
      <circle r="60" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/>
      <circle r="30" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.8"/>
      <g stroke="rgba(255,255,255,0.6)" stroke-width="1">
        <line x1="0" y1="0" x2="-70" y2="-50"/>
        <line x1="0" y1="0" x2="80" y2="-30"/>
        <line x1="0" y1="0" x2="70" y2="50"/>
        <line x1="0" y1="0" x2="-40" y2="75"/>
        <line x1="0" y1="0" x2="-85" y2="20"/>
      </g>
      <circle r="14" fill="rgb(250,228,218)"/>
      <circle cx="-70" cy="-50" r="7" fill="rgba(255,255,255,0.85)"/>
      <circle cx="80" cy="-30" r="7" fill="rgba(255,255,255,0.85)"/>
      <circle cx="70" cy="50" r="7" fill="rgba(255,255,255,0.85)"/>
      <circle cx="-40" cy="75" r="7" fill="rgba(255,255,255,0.85)"/>
      <circle cx="-85" cy="20" r="7" fill="rgba(255,255,255,0.85)"/>
    </g>
  </svg>`,
  "C": `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(60,50)">
      <rect x="0" y="0" width="160" height="22" fill="rgba(207,90,54,0.35)"/>
      <rect x="0" y="34" width="110" height="8" fill="rgba(255,255,255,0.35)"/>
      <rect x="0" y="48" width="140" height="8" fill="rgba(255,255,255,0.35)"/>
      <rect x="0" y="62" width="80" height="8" fill="rgba(255,255,255,0.35)"/>
      <g transform="translate(0,100)">
        <rect x="0" y="32" width="24" height="36" fill="rgba(255,255,255,0.55)"/>
        <rect x="32" y="14" width="24" height="54" fill="rgba(255,255,255,0.7)"/>
        <rect x="64" y="0" width="24" height="68" fill="rgb(250,228,218)"/>
        <rect x="96" y="22" width="24" height="46" fill="rgba(255,255,255,0.55)"/>
        <rect x="128" y="38" width="24" height="30" fill="rgba(255,255,255,0.45)"/>
      </g>
    </g>
  </svg>`,
  "D": `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50,60)" stroke="rgba(255,255,255,0.7)" stroke-width="1.2" fill="none">
      <circle cx="0" cy="80" r="14" fill="rgb(250,228,218)" stroke="none"/>
      <line x1="14" y1="80" x2="68" y2="20"/>
      <line x1="14" y1="80" x2="68" y2="60"/>
      <line x1="14" y1="80" x2="68" y2="100"/>
      <line x1="14" y1="80" x2="68" y2="140"/>
      <rect x="72" y="10" width="100" height="22" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)"/>
      <rect x="72" y="50" width="100" height="22" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)"/>
      <rect x="72" y="90" width="100" height="22" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)"/>
      <rect x="72" y="130" width="100" height="22" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)"/>
    </g>
  </svg>`,
  "E": `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(80,50)">
      <rect x="0" y="0" width="130" height="180" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.7)" stroke-width="1.4"/>
      <g stroke="rgba(255,255,255,0.55)" stroke-width="1">
        <line x1="14" y1="22" x2="118" y2="22"/>
        <line x1="14" y1="36" x2="104" y2="36"/>
        <line x1="14" y1="50" x2="110" y2="50"/>
        <line x1="14" y1="76" x2="118" y2="76"/>
        <line x1="14" y1="90" x2="90" y2="90"/>
        <line x1="14" y1="104" x2="112" y2="104"/>
        <line x1="14" y1="130" x2="118" y2="130"/>
        <line x1="14" y1="144" x2="100" y2="144"/>
        <line x1="14" y1="158" x2="118" y2="158"/>
      </g>
      <rect x="12" y="18" width="92" height="10" fill="rgba(248,235,200,0.45)"/>
      <rect x="12" y="86" width="76" height="10" fill="rgba(250,228,218,0.55)"/>
      <rect x="12" y="140" width="86" height="10" fill="rgba(218,240,222,0.5)"/>
    </g>
  </svg>`,
  "F": `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(15,100)">
      <rect x="0" y="0" width="44" height="56" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.7)"/>
      <line x1="44" y1="28" x2="60" y2="28" stroke="rgb(250,228,218)" stroke-width="1.5"/>
      <polygon points="56,24 64,28 56,32" fill="rgb(250,228,218)"/>
      <g transform="translate(64,0)">
        <rect x="0" y="0" width="44" height="56" fill="rgba(218,240,222,0.2)" stroke="rgba(255,255,255,0.7)"/>
        <line x1="44" y1="28" x2="60" y2="28" stroke="rgb(250,228,218)" stroke-width="1.5"/>
        <polygon points="56,24 64,28 56,32" fill="rgb(250,228,218)"/>
      </g>
      <g transform="translate(128,0)">
        <rect x="0" y="0" width="44" height="56" fill="rgba(232,222,245,0.25)" stroke="rgba(255,255,255,0.7)"/>
        <line x1="44" y1="28" x2="60" y2="28" stroke="rgb(250,228,218)" stroke-width="1.5"/>
        <polygon points="56,24 64,28 56,32" fill="rgb(250,228,218)"/>
      </g>
      <g transform="translate(192,0)">
        <rect x="0" y="0" width="44" height="56" fill="rgba(248,235,200,0.3)" stroke="rgba(255,255,255,0.7)"/>
      </g>
      <g transform="translate(50,70)">
        <circle cx="0" cy="0" r="4.5" fill="rgb(218,240,222)"/>
        <line x1="0" y1="-12" x2="0" y2="-3" stroke="rgba(255,255,255,0.4)" stroke-width="0.8" stroke-dasharray="2,2"/>
        <circle cx="80" cy="0" r="4.5" fill="rgb(250,228,218)"/>
        <line x1="80" y1="-12" x2="80" y2="-3" stroke="rgba(255,255,255,0.4)" stroke-width="0.8" stroke-dasharray="2,2"/>
        <circle cx="160" cy="0" r="4.5" fill="rgb(218,240,222)"/>
        <line x1="160" y1="-12" x2="160" y2="-3" stroke="rgba(255,255,255,0.4)" stroke-width="0.8" stroke-dasharray="2,2"/>
      </g>
    </g>
  </svg>`
};

(function() {
  function buildHeader(el) {
    const letter = el.dataset.letter || '?';
    const titulo = el.dataset.titulo || 'Protótipo';
    const tag = el.dataset.tag || 'Protótipo';
    const subtitle = el.dataset.subtitle || '';

    const illust = ILLUSTRATIONS[letter] || '';

    el.innerHTML = `
      <header class="proto-header">
        <div class="proto-header-illust">${illust}</div>
        <div class="proto-header-inner">
          <div class="proto-mast">
            <a href="../" class="proto-mast-brand">
              <span class="proto-mast-mark">C<em>L</em></span>
              <span>CLEAR Lab</span>
              <span class="proto-mast-sep">/</span>
              <span class="proto-mast-sub">Protótipo ${letter}</span>
            </a>
            <div class="proto-mast-actions">
              <a href="../" class="proto-mast-back">← Voltar ao portal</a>
              <button class="theme-toggle-mast" onclick="toggleTheme()" aria-label="Tema">☾</button>
            </div>
          </div>
          <div class="proto-bandeira">${tag}</div>
          <h1 class="proto-h1"><span class="proto-h1-letra">${letter}.</span> ${titulo}</h1>
          ${subtitle ? `<p class="proto-h1-sub">${subtitle}</p>` : ''}
          <div class="proto-h1-meta">
            <span class="proto-badge">Mockup · v0.1</span>
            <span class="proto-meta-piece">Dados ilustrativos</span>
            <span class="proto-meta-piece">CLEAR Lab · FGV EESP</span>
          </div>
        </div>
      </header>
    `;
  }

  function buildFooter(el) {
    el.innerHTML = `
      <footer class="proto-footer">
        <div class="proto-footer-inner">
          <div class="proto-footer-block">
            <strong>Este protótipo</strong>
            Mockup estático ilustrativo.<br>
            Dados, gestores e respostas são fictícios.<br>
            Código sob MIT.
          </div>
          <div class="proto-footer-block">
            <strong>Voltar</strong>
            <a href="../">Portal dos protótipos</a><br>
            <a href="https://fgvclear.org">CLEAR · FGV EESP</a>
          </div>
          <div class="proto-footer-block">
            <strong>Repositórios irmãos</strong>
            <a href="https://caiodesouzacastro.github.io/radar-politicas-municipais/">Radar PNCP</a><br>
            <a href="https://caiodesouzacastro.github.io/painel-clear/">Painel CLEAR</a>
          </div>
          <div class="proto-footer-block">
            <strong>Versão</strong>
            v0.1 · Maio 2026<br>
            Vol. 01 · Edição 01
          </div>
        </div>
      </footer>
    `;
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-proto-header]').forEach(buildHeader);
    document.querySelectorAll('[data-proto-footer]').forEach(buildFooter);
    // theme toggle icon
    const saved = localStorage.getItem('clear-theme') || 'light';
    document.querySelectorAll('.theme-toggle-mast').forEach(b => b.textContent = saved === 'dark' ? '☀' : '☾');
  });
})();
