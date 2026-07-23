'use strict';

// ── SVG Icon Builder ────────────────────────────────────────────────────────
// Used as fallback when PNG assets are not yet present.
// Replace PNG files in assets/icons/ to use your own icons.

function toDataURI(svg) {
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

const ICON_SVGS = {
  finder: toDataURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A9EFF"/>
        <stop offset="100%" stop-color="#1A62D9"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#g)"/>
    <rect x="0" y="0" width="60" height="120" rx="26" fill="rgba(255,255,255,0.07)"/>
    <circle cx="44" cy="50" r="8" fill="white" opacity="0.95"/>
    <circle cx="76" cy="50" r="8" fill="white" opacity="0.95"/>
    <path d="M38 70 Q60 84 82 70" stroke="white" stroke-width="5.5" fill="none" stroke-linecap="round"/>
  </svg>`),

  apps: toDataURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2BA8FF"/>
        <stop offset="100%" stop-color="#0070E0"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#g)"/>
    <rect x="26" y="26" width="28" height="28" rx="7" fill="white" opacity="0.92"/>
    <rect x="66" y="26" width="28" height="28" rx="7" fill="white" opacity="0.92"/>
    <rect x="26" y="66" width="28" height="28" rx="7" fill="white" opacity="0.92"/>
    <rect x="66" y="66" width="28" height="28" rx="7" fill="white" opacity="0.92"/>
  </svg>`),

  safari: toDataURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#36BCFF"/>
        <stop offset="100%" stop-color="#0078E0"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#g)"/>
    <circle cx="60" cy="60" r="32" stroke="rgba(255,255,255,0.30)" stroke-width="1.5" fill="none"/>
    <circle cx="60" cy="60" r="2.5" fill="white" opacity="0.6"/>
    <polygon points="60,28 66,56 60,54 54,56" fill="rgba(255,90,80,0.92)"/>
    <polygon points="60,92 54,64 60,66 66,64" fill="rgba(255,255,255,0.82)"/>
    <line x1="38" y1="60" x2="44" y2="60" stroke="rgba(255,255,255,0.40)" stroke-width="1.5"/>
    <line x1="76" y1="60" x2="82" y2="60" stroke="rgba(255,255,255,0.40)" stroke-width="1.5"/>
  </svg>`),

  books: toDataURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F8B830"/>
        <stop offset="100%" stop-color="#D47800"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#g)"/>
    <path d="M60 36 Q38 34 26 40 L26 84 Q38 80 60 82 Z" fill="rgba(255,255,255,0.92)"/>
    <path d="M60 36 Q82 34 94 40 L94 84 Q82 80 60 82 Z" fill="rgba(255,255,255,0.76)"/>
    <line x1="60" y1="36" x2="60" y2="82" stroke="rgba(180,100,0,0.35)" stroke-width="2"/>
  </svg>`),

  calendar: toDataURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F84040"/>
        <stop offset="100%" stop-color="#D01010"/>
      </linearGradient>
      <clipPath id="cl">
        <rect width="120" height="120" rx="26"/>
      </clipPath>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#g)"/>
    <rect x="0" y="48" width="120" height="72" fill="white" clip-path="url(#cl)"/>
    <text x="60" y="40" text-anchor="middle" fill="white" font-size="16" font-weight="700"
      font-family="-apple-system,BlinkMacSystemFont,sans-serif" letter-spacing="0.08em">JUN</text>
    <text x="60" y="82" text-anchor="middle" fill="#F84040" font-size="30" font-weight="700"
      font-family="-apple-system,BlinkMacSystemFont,sans-serif">22</text>
    <line x1="14" y1="64" x2="106" y2="64" stroke="rgba(0,0,0,0.06)" stroke-width="1"/>
  </svg>`),

  mail: toDataURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#36BCFF"/>
        <stop offset="100%" stop-color="#0078E0"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#g)"/>
    <rect x="18" y="36" width="84" height="58" rx="8" fill="rgba(255,255,255,0.14)"
      stroke="rgba(255,255,255,0.88)" stroke-width="2.5"/>
    <polyline points="18,44 60,74 102,44"
      stroke="rgba(255,255,255,0.92)" stroke-width="2.5" fill="none"
      stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`),

  findme: toDataURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#44D468"/>
        <stop offset="100%" stop-color="#1AA43E"/>
      </linearGradient>
    </defs>
    <rect width="120" height="120" rx="26" fill="url(#g)"/>
    <circle cx="60" cy="52" r="28" stroke="rgba(255,255,255,0.38)" stroke-width="2" fill="none"/>
    <circle cx="60" cy="52" r="16" stroke="rgba(255,255,255,0.65)" stroke-width="2" fill="none"/>
    <circle cx="60" cy="52" r="5.5" fill="white"/>
    <line x1="60" y1="68" x2="60" y2="86" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`)
};

// ── Finder Content ──────────────────────────────────────────────────────────
const FINDER_BIO = [
  ['greeting', 'Hola, soy Stephano.'],
  ['para', 'Desde hace varios años dedico gran parte de mi tiempo a construir aplicaciones dentro del ecosistema Apple, explorar nuevos frameworks y entender cómo la tecnología puede convertirse en productos digitales útiles, escalables y bien diseñados.'],
  ['para', 'Lo que más me atrae del desarrollo de software es la posibilidad de crear a través del código un producto que pueda evolucionar, resolver un problema real y crecer más allá de una primera idea. Me interesa ese recorrido que existe entre imaginar algo, convertirlo en una aplicación funcional y seguir mejorándolo con criterio técnico, diseño, arquitectura y visión de producto. Esa forma de entender el software también explica mi interés por las startups, la innovación y los equipos que buscan transformar ideas en productos reales.'],
  ['para', 'Con el deseo de profundizar en este camino, tuve la oportunidad de viajar a Italia y formar parte de la Apple Developer Academy en Nápoles, una experiencia que marcó profundamente mi forma de entender la tecnología. Más allá del desarrollo de software, descubrí el valor de trabajar junto a personas con diferentes perspectivas, compartir ideas, colaborar en equipos multidisciplinarios y aprender a observar los problemas desde distintos puntos de vista.'],
  ['para', 'Italia terminó convirtiéndose en mi hogar durante casi una década. Durante esos años trabajé en distintos proyectos dentro del sector FinTech, participando en la construcción de aplicaciones utilizadas por millones de usuarios y enfrentando desafíos relacionados con arquitectura, seguridad, experiencia de usuario y evolución de productos digitales a gran escala. Esa etapa me permitió crecer como desarrollador, pero también entender la importancia de construir software sostenible, bien pensado y preparado para evolucionar con el tiempo.'],
  ['para', 'También me atrae mucho el mundo de la creatividad digital, especialmente las aplicaciones que combinan herramientas visuales, personalización, rendimiento y una experiencia de usuario muy cuidada. Me interesa cómo este tipo de productos logran unir diseño gráfico, interacción, fluidez, precisión y tecnología para convertir una pantalla en un espacio de creación. Esa relación entre código, diseño, color, forma y experiencia visual es una parte importante de lo que me inspira al construir productos digitales.'],
  ['para', 'Después de varios años viviendo en Europa decidí regresar al Perú con la intención de aportar todo lo aprendido, conectar con el ecosistema tecnológico de Latinoamérica y seguir construyendo desde una nueva perspectiva. Este regreso representa una oportunidad para participar más activamente en el crecimiento de los productos digitales, las startups y el mundo FinTech de nuestra región.'],
  ['para', 'iOStephano nace como una forma de documentar este recorrido. Es un espacio donde comparto ideas, aprendizajes, exploraciones técnicas, novedades del ecosistema Apple y reflexiones sobre desarrollo de software, inteligencia artificial, arquitectura y creación de productos digitales.'],
  ['para', 'También estoy desarrollando SwiftLATAM, una iniciativa pensada para conectar y fortalecer a la comunidad de desarrolladores Apple en Latinoamérica, y 8+ Core, un laboratorio enfocado en la creación de productos digitales y software para plataformas Apple.'],
  ['para', 'Gracias por pasar por aquí.'],
  ['para', 'Espero que encuentres algo interesante, útil o inspirador en este recorrido.']
];

const PROFILE_PLACEHOLDER = toDataURI(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">' +
  '<circle cx="90" cy="90" r="90" fill="#2C2F3A"/>' +
  '<text x="90" y="112" text-anchor="middle" fill="rgba(255,255,255,0.30)"' +
  ' font-size="72" font-weight="500"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">S</text>' +
  '</svg>'
);

function buildDefaultHTML(app) {
  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="window-body">' +
      '<p class="window-description">' + app.description + '</p>' +
      '<span class="window-badge">' + app.badge + '</span>' +
    '</div>'
  );
}

function buildFinderHTML(app) {
  var paragraphs = FINDER_BIO.map(function(item) {
    return '<p class="finder-' + item[0] + '">' + item[1] + '</p>';
  }).join('');

  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="finder-body">' +
      '<img class="finder-photo" src="assets/profile/profile-stefano.png" alt="Stephano"' +
        ' onerror="this.src=\'' + PROFILE_PLACEHOLDER + '\';this.onerror=null;">' +
      paragraphs +
    '</div>'
  );
}

// ── Apps Window ─────────────────────────────────────────────────────────────
const APP_ICON_SVGS = {
  swiftlatam: toDataURI(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0%" stop-color="#F05138"/>' +
    '<stop offset="100%" stop-color="#C8341E"/>' +
    '</linearGradient></defs>' +
    '<rect width="80" height="80" rx="18" fill="url(#g)"/>' +
    '<text x="40" y="51" text-anchor="middle" fill="white" font-size="22" font-weight="700"' +
    ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">SL</text>' +
    '</svg>'
  ),
  eightcore: toDataURI(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0%" stop-color="#3D3A8A"/>' +
    '<stop offset="100%" stop-color="#1E1C5A"/>' +
    '</linearGradient></defs>' +
    '<rect width="80" height="80" rx="18" fill="url(#g)"/>' +
    '<text x="40" y="51" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-size="22" font-weight="700"' +
    ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">8+</text>' +
    '</svg>'
  )
};

function buildAppsHTML(app) {
  function projectBlock(name, iconSrc, iconFallback, desc, appId) {
    return (
      '<div class="app-project">' +
        '<img class="app-project-icon" src="' + iconSrc + '" alt="' + name + '"' +
          ' onerror="this.src=\'' + iconFallback + '\';this.onerror=null;">' +
        '<div class="app-project-info">' +
          '<h3 class="app-project-name">' + name + '</h3>' +
          '<p class="app-project-desc">' + desc + '</p>' +
          '<button class="app-project-link" type="button" data-app-id="' + appId + '">Link</button>' +
        '</div>' +
      '</div>'
    );
  }

  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="apps-body">' +
      projectBlock(
        'SwiftLATAM',
        'assets/apps/swiftlatam-icon.png',
        APP_ICON_SVGS.swiftlatam,
        'SwiftLATAM reúne a Apple Developers de Latinoamérica para aprender, compartir y crecer en comunidad.',
        'swiftlatam'
      ) +
      '<div class="app-project-divider" aria-hidden="true"></div>' +
      projectBlock(
        '8+CORE',
        'assets/apps/8pluscore-icon.png',
        APP_ICON_SVGS.eightcore,
        '8+CORE es un laboratorio de software que diseña y desarrolla apps, sistemas y productos digitales para el ecosistema Apple.',
        '8pluscore'
      ) +
    '</div>'
  );
}

// ── SwiftLATAM Window ───────────────────────────────────────────────────────
const SWIFTLATAM_PREVIEW_PLACEHOLDER = toDataURI(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 720">' +
  '<defs><linearGradient id="slg" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0%" stop-color="#F05138"/>' +
  '<stop offset="100%" stop-color="#8C2513"/>' +
  '</linearGradient></defs>' +
  '<rect width="480" height="720" rx="18" fill="url(#slg)"/>' +
  '<text x="240" y="350" text-anchor="middle" fill="rgba(255,255,255,0.90)"' +
  ' font-size="42" font-weight="700"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">SwiftLATAM</text>' +
  '<text x="240" y="682" text-anchor="middle" fill="rgba(255,255,255,0.55)"' +
  ' font-size="13" font-family="-apple-system,BlinkMacSystemFont,sans-serif">' +
  'Coloca tu imagen en assets/previews/swiftlatam-preview.png' +
  '</text>' +
  '</svg>'
);

function buildSwiftLatamHTML(app) {
  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="project-preview-body">' +
      '<img class="project-preview-img"' +
        ' src="assets/previews/swiftlatam-preview.png"' +
        ' alt="' + app.title + '"' +
        ' draggable="false"' +
        ' onerror="this.src=\'' + SWIFTLATAM_PREVIEW_PLACEHOLDER + '\';this.onerror=null;">' +
    '</div>'
  );
}

// ── 8+ Core Window ──────────────────────────────────────────────────────────
const EIGHTCORE_PREVIEW_PLACEHOLDER = toDataURI(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 720">' +
  '<defs><linearGradient id="ecg" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0%" stop-color="#3D3A8A"/>' +
  '<stop offset="100%" stop-color="#151338"/>' +
  '</linearGradient></defs>' +
  '<rect width="480" height="720" rx="18" fill="url(#ecg)"/>' +
  '<text x="240" y="350" text-anchor="middle" fill="rgba(255,255,255,0.90)"' +
  ' font-size="42" font-weight="700"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">8+ Core</text>' +
  '<text x="240" y="682" text-anchor="middle" fill="rgba(255,255,255,0.55)"' +
  ' font-size="13" font-family="-apple-system,BlinkMacSystemFont,sans-serif">' +
  'Coloca tu imagen en assets/previews/8pluscore-preview.png' +
  '</text>' +
  '</svg>'
);

function build8PlusCoreHTML(app) {
  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="project-preview-body">' +
      '<img class="project-preview-img"' +
        ' src="assets/previews/8pluscore-preview.png"' +
        ' alt="' + app.title + '"' +
        ' draggable="false"' +
        ' onerror="this.src=\'' + EIGHTCORE_PREVIEW_PLACEHOLDER + '\';this.onerror=null;">' +
    '</div>'
  );
}

// ── Safari Window ───────────────────────────────────────────────────────────
const YOUTUBE_PREVIEW_PLACEHOLDER = toDataURI(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480">' +
  '<rect width="900" height="480" fill="#0F0F0F"/>' +
  '<rect width="900" height="4" fill="#FF0000"/>' +
  '<rect x="0" y="4" width="900" height="136" fill="#181818"/>' +
  '<circle cx="80" cy="200" r="44" fill="#212121"/>' +
  '<text x="80" y="212" text-anchor="middle" fill="rgba(255,0,0,0.85)" font-size="30"' +
  ' font-family="sans-serif">▶</text>' +
  '<text x="144" y="192" fill="white" font-size="22" font-weight="700"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">iOStephano</text>' +
  '<text x="144" y="216" fill="rgba(255,255,255,0.50)" font-size="13"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">@iOStephano · Swift · iOS · Apple Ecosystem</text>' +
  '<rect x="680" y="182" width="138" height="38" rx="19" fill="#FF0000"/>' +
  '<text x="749" y="206" text-anchor="middle" fill="white" font-size="13" font-weight="600"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">Suscribirse</text>' +
  '<line x1="0" y1="252" x2="900" y2="252" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>' +
  '<rect x="20" y="268" width="256" height="144" rx="8" fill="#181818"/>' +
  '<rect x="296" y="268" width="256" height="144" rx="8" fill="#181818"/>' +
  '<rect x="572" y="268" width="256" height="144" rx="8" fill="#181818"/>' +
  '<text x="148" y="350" text-anchor="middle" fill="rgba(255,255,255,0.10)" font-size="40"' +
  ' font-family="sans-serif">▶</text>' +
  '<text x="424" y="350" text-anchor="middle" fill="rgba(255,255,255,0.10)" font-size="40"' +
  ' font-family="sans-serif">▶</text>' +
  '<text x="700" y="350" text-anchor="middle" fill="rgba(255,255,255,0.10)" font-size="40"' +
  ' font-family="sans-serif">▶</text>' +
  '<text x="450" y="452" text-anchor="middle" fill="rgba(255,255,255,0.22)" font-size="12"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">Haz clic para abrir el canal en YouTube →</text>' +
  '</svg>'
);

function buildSafariHTML(app) {
  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="safari-urlbar">' +
      '<div class="safari-url-capsule">' +
        '<span class="safari-url-text">youtube.com/@iOStephano</span>' +
      '</div>' +
    '</div>' +
    '<div class="safari-body">' +
      '<a class="safari-preview-link"' +
        ' href="https://www.youtube.com/@iOStephano"' +
        ' target="_blank"' +
        ' rel="noopener noreferrer"' +
        ' aria-label="Abrir canal de iOStephano en YouTube (nueva pestaña)">' +
        '<img class="safari-preview-img"' +
          ' src="assets/previews/youtube-channel-preview.png"' +
          ' alt="Vista previa del canal de YouTube de iOStephano"' +
          ' draggable="false"' +
          ' onerror="this.src=\'' + YOUTUBE_PREVIEW_PLACEHOLDER + '\';this.onerror=null;">' +
      '</a>' +
    '</div>'
  );
}

// ── Books Window ────────────────────────────────────────────────────────────
const BOOKS_COVER_PLACEHOLDER = toDataURI(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 320">' +
  '<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0%" stop-color="#F8B830"/>' +
  '<stop offset="100%" stop-color="#C87800"/>' +
  '</linearGradient></defs>' +
  '<rect width="220" height="320" rx="12" fill="url(#bg)"/>' +
  '<rect x="0" y="0" width="22" height="320" rx="12" fill="rgba(0,0,0,0.18)"/>' +
  '<rect x="34" y="44" width="152" height="5" rx="2.5" fill="rgba(255,255,255,0.72)"/>' +
  '<rect x="34" y="58" width="110" height="4" rx="2" fill="rgba(255,255,255,0.48)"/>' +
  '<text x="118" y="196" text-anchor="middle" fill="rgba(255,255,255,0.16)"' +
  ' font-size="80" font-weight="700"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">S</text>' +
  '<rect x="34" y="278" width="96" height="3" rx="1.5" fill="rgba(255,255,255,0.42)"/>' +
  '</svg>'
);

// WhatsApp purchase link: one number for all books, message includes the title.
function buildBookWhatsAppLink(title) {
  var message = 'Hola, estoy interesado en comprar el libro "' + title + '". Quisiera recibir más información para realizar la compra.';
  return 'https://wa.me/51914718102?text=' + encodeURIComponent(message);
}

// Configura la colección de libros aquí.
// Para agregar/editar un libro: añade/edita una entrada con title, description,
// price, imagePath. whatsappLink se genera automáticamente a partir del title.
const BOOKS_DATA = [
  {
    title: 'Swift',
    description: 'Swift es una guía práctica para aprender el lenguaje desde sus fundamentos hasta su uso profesional, con explicaciones claras, ejemplos aplicados y una progresión pensada para el desarrollo moderno de software en el ecosistema Apple.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-swift.png'
  },
  {
    title: 'Foundation',
    description: 'Foundation es una guía práctica para comprender las APIs fundamentales que sostienen gran parte del desarrollo con Swift. A través de explicaciones claras y ejemplos aplicados, este libro aborda estructuras, fechas, colecciones, archivos, concurrencia, internacionalización y herramientas clave para construir software moderno, robusto y mantenible.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-foundation.png'
  },
  {
    title: 'SwiftData',
    description: 'SwiftData es una guía práctica para aprender el framework moderno de persistencia de Apple, desde sus conceptos iniciales hasta su aplicación en proyectos reales. El libro explica modelos, relaciones, consultas, contexto, almacenamiento y estrategias de migración desde Core Data, con ejemplos claros orientados al desarrollo actual con Swift y SwiftUI.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-swiftdata.png'
  },
  {
    title: 'Swift Testing',
    description: 'Swift Testing es una guía práctica para aprender el nuevo enfoque de pruebas en Swift, desde la escritura de tests simples hasta la validación de comportamientos más complejos. El libro también explica cómo adaptar proyectos existentes basados en XCTest, facilitando una transición progresiva hacia una forma más moderna, expresiva y clara de probar software.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-swift-testing.png'
  },
  {
    title: 'Foundation Models',
    description: 'Foundation Models es una guía práctica para aprender a integrar capacidades de inteligencia generativa dentro de aplicaciones Apple usando APIs nativas en Swift. El libro aborda el uso del framework, la creación de experiencias inteligentes, el trabajo con modelos de lenguaje, respuestas estructuradas, generación de contenido y buenas prácticas para construir funciones modernas basadas en Apple Intelligence.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-foundation-models.png'
  },
  {
    title: 'Legacy Frameworks',
    description: 'Legacy Frameworks reúne tres tecnologías fundamentales del ecosistema Apple: Core Data, XCTest y Combine. Este libro explica cada framework con profundidad, desde sus conceptos base hasta su uso en proyectos reales, ayudando a comprender herramientas que siguen presentes en aplicaciones profesionales y que continúan siendo importantes para mantener, evolucionar y modernizar código existente.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-legacy-frameworks.png'
  },
  {
    title: 'Emerging Frameworks',
    description: 'Emerging Frameworks es una guía práctica para explorar frameworks recientes y en evolución dentro del ecosistema Apple. El libro aborda App Intents, Observation, Translation y BrowserEngineKit, explicando cómo estas tecnologías abren nuevas posibilidades para crear apps más integradas, inteligentes, observables y preparadas para los cambios actuales del desarrollo en plataformas Apple.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-emerging-frameworks.png'
  },
  {
    title: 'SwiftUI',
    description: 'SwiftUI es una guía práctica para aprender a construir interfaces modernas en el ecosistema Apple, desde los conceptos esenciales hasta patrones avanzados de composición, estado, navegación, animaciones, arquitectura e integración con APIs actuales. El libro acompaña una progresión clara para crear experiencias visuales flexibles, mantenibles y preparadas para aplicaciones reales.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-swiftui.png'
  },
  {
    title: 'UIKit',
    description: 'UIKit es una guía práctica para comprender uno de los frameworks más importantes en la historia del desarrollo iOS. El libro aborda sus componentes, ciclos de vida, navegación, vistas, controladores, patrones de interfaz y su integración con SwiftUI, permitiendo mantener proyectos existentes y combinar lo mejor de ambos mundos en aplicaciones modernas.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-uikit.png'
  },
  {
    title: 'Spatial Graphics Computing',
    description: 'Spatial Graphics Computing es el libro más avanzado de la colección. Reúne Metal, RealityKit, ARKit y Vision para explorar el desarrollo gráfico, espacial y visual dentro del ecosistema Apple. A través de estos frameworks, el libro aborda renderizado, realidad aumentada, experiencias 3D, visión computacional y construcción de interfaces inmersivas orientadas al futuro del software interactivo.',
    price: 'S/ 100',
    imagePath: 'assets/books/book-spatial-graphics-computing.png'
  }
].map(function(book) {
  book.whatsappLink = buildBookWhatsAppLink(book.title);
  return book;
});

function buildBooksHTML(app) {
  var book = BOOKS_DATA[0];
  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="books-body">' +
      '<div class="books-carousel" data-book-index="0">' +
        '<div class="books-layout">' +
          '<img class="books-cover" data-book-cover' +
            ' src="' + book.imagePath + '"' +
            ' alt="' + book.title + '"' +
            ' draggable="false"' +
            ' onerror="this.src=\'' + BOOKS_COVER_PLACEHOLDER + '\';this.onerror=null;">' +
          '<div class="books-content">' +
            '<h3 class="books-title" data-book-title>' + book.title + '</h3>' +
            '<div class="books-price">' +
              '<span class="books-price-label">Precio</span>' +
              '<span class="books-price-value" data-book-price>' + book.price + '</span>' +
            '</div>' +
            '<p class="books-description" data-book-description>' + book.description + '</p>' +
            '<div class="books-actions">' +
              '<a class="books-link-btn" data-book-link' +
                ' href="' + book.whatsappLink + '"' +
                ' target="_blank" rel="noopener noreferrer">Comprar por WhatsApp</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="books-nav">' +
          '<button class="books-nav-btn books-nav-btn--prev" type="button" data-book-prev aria-label="Libro anterior">‹</button>' +
          '<span class="books-counter" data-book-counter>1 / ' + BOOKS_DATA.length + '</span>' +
          '<button class="books-nav-btn books-nav-btn--next" type="button" data-book-next aria-label="Libro siguiente">›</button>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

// Updates the carousel DOM in place to show the book at `index`.
function renderBookIntoWindow(win, index) {
  var book = BOOKS_DATA[index];
  var carousel = win.querySelector('.books-carousel');
  carousel.dataset.bookIndex = String(index);

  var img = win.querySelector('[data-book-cover]');
  img.onerror = function() {
    img.src = BOOKS_COVER_PLACEHOLDER;
    img.onerror = null;
  };
  img.src = book.imagePath;
  img.alt = book.title;

  win.querySelector('[data-book-title]').textContent = book.title;
  win.querySelector('[data-book-price]').textContent = book.price;
  win.querySelector('[data-book-description]').textContent = book.description;
  win.querySelector('[data-book-link]').href = book.whatsappLink;
  win.querySelector('[data-book-counter]').textContent = (index + 1) + ' / ' + BOOKS_DATA.length;
}

const BOOKS_AUTOPLAY_INTERVAL_MS = 10000;

// Moves the carousel by `step` books (±1), wrapping at both ends.
// Shared by the manual prev/next buttons and the autoplay interval so
// autoplay always resumes from whatever book is currently showing.
function advanceBook(win, step) {
  var carousel = win.querySelector('.books-carousel');
  if (!carousel) return;
  var current = parseInt(carousel.dataset.bookIndex || '0', 10);
  var next = (current + step + BOOKS_DATA.length) % BOOKS_DATA.length;
  renderBookIntoWindow(win, next);
}

// Wires the prev/next controls and autoplay for the Books carousel.
// Called once per window; the interval id is stored on the window element
// so closeWindow() can clear it and avoid duplicated intervals on reopen.
function initBooksCarousel(win) {
  var carousel = win.querySelector('.books-carousel');
  var prevBtn = win.querySelector('[data-book-prev]');
  var nextBtn = win.querySelector('[data-book-next]');
  if (!carousel || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', function() { advanceBook(win, -1); });
  nextBtn.addEventListener('click', function() { advanceBook(win, 1); });

  win.booksAutoplayId = setInterval(function() {
    advanceBook(win, 1);
  }, BOOKS_AUTOPLAY_INTERVAL_MS);
}

// ── Calendar Window ─────────────────────────────────────────────────────────
const CALENDAR_EVENTS_PLACEHOLDER = toDataURI(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 594">' +
  '<rect width="420" height="594" rx="10" fill="#12141A"/>' +
  '<rect x="0" y="0" width="420" height="64" rx="10" fill="#1C1F2B"/>' +
  '<rect x="0" y="54" width="420" height="10" fill="#1C1F2B"/>' +
  '<text x="210" y="40" text-anchor="middle" fill="rgba(255,255,255,0.72)"' +
  ' font-size="18" font-weight="600"' +
  ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">Eventos</text>' +
  '<line x1="32" y1="82" x2="388" y2="82" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>' +
  '<rect x="32" y="96" width="6" height="6" rx="3" fill="rgba(255,80,80,0.80)"/>' +
  '<rect x="46" y="96" width="180" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>' +
  '<rect x="32" y="112" width="240" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>' +
  '<line x1="32" y1="130" x2="388" y2="130" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>' +
  '<rect x="32" y="144" width="6" height="6" rx="3" fill="rgba(80,180,255,0.80)"/>' +
  '<rect x="46" y="144" width="220" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>' +
  '<rect x="32" y="160" width="260" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>' +
  '<line x1="32" y1="178" x2="388" y2="178" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>' +
  '<rect x="32" y="192" width="6" height="6" rx="3" fill="rgba(80,220,120,0.80)"/>' +
  '<rect x="46" y="192" width="160" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>' +
  '<rect x="32" y="208" width="200" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>' +
  '<line x1="32" y1="226" x2="388" y2="226" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>' +
  '<rect x="32" y="240" width="6" height="6" rx="3" fill="rgba(255,200,60,0.80)"/>' +
  '<rect x="46" y="240" width="200" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>' +
  '<rect x="32" y="256" width="280" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>' +
  '<line x1="32" y1="274" x2="388" y2="274" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>' +
  '<rect x="32" y="288" width="6" height="6" rx="3" fill="rgba(200,100,255,0.80)"/>' +
  '<rect x="46" y="288" width="190" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>' +
  '<rect x="32" y="304" width="230" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>' +
  '<text x="210" y="560" text-anchor="middle" fill="rgba(255,255,255,0.14)"' +
  ' font-size="11" font-family="-apple-system,BlinkMacSystemFont,sans-serif">' +
  'Coloca tu imagen en assets/previews/calendar-events.png' +
  '</text>' +
  '</svg>'
);

function buildCalendarHTML(app) {
  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="calendar-body">' +
      '<img class="calendar-events-img"' +
        ' src="assets/previews/calendar-events.png"' +
        ' alt="Eventos"' +
        ' draggable="false"' +
        ' onerror="this.src=\'' + CALENDAR_EVENTS_PLACEHOLDER + '\';this.onerror=null;">' +
    '</div>'
  );
}

// ── Find Me Window ──────────────────────────────────────────────────────────
function socialFallback(letter, bg) {
  return toDataURI(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">' +
    '<rect width="48" height="48" rx="12" fill="' + bg + '"/>' +
    '<text x="24" y="33" text-anchor="middle" fill="rgba(255,255,255,0.92)"' +
    ' font-size="18" font-weight="700"' +
    ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">' + letter + '</text>' +
    '</svg>'
  );
}

const FINDME_DATA = [
  {
    sectionTitle: 'Social',
    items: [
      { name: 'YouTube',   iconPath: 'assets/social/youtube-icon.png',   fallback: socialFallback('YT', '#FF0000'), url: 'https://www.youtube.com/@iOStephano' },
      { name: 'TikTok',   iconPath: 'assets/social/tiktok-icon.png',    fallback: socialFallback('TK', '#1A1A2E'), url: 'https://www.tiktok.com/@iostephano' },
      { name: 'Instagram', iconPath: 'assets/social/instagram-icon.png', fallback: socialFallback('IG', '#C13584'), url: 'https://www.instagram.com/iostephanocanal/' },
      { name: 'Threads',   iconPath: 'assets/social/threads-icon.png',   fallback: socialFallback('TH', '#1A1A1A'), url: 'https://www.threads.com/@iostephanocanal' },
      { name: 'Facebook',  iconPath: 'assets/social/facebook-icon.png',  fallback: socialFallback('FB', '#1877F2'), url: 'https://www.facebook.com/iostephano' },
      { name: 'X',         iconPath: 'assets/social/x-icon.png',         fallback: socialFallback('X',  '#14141A'), url: 'https://x.com/iOStephano' },
      { name: 'LinkedIn',  iconPath: 'assets/social/linkedin-icon.png',  fallback: socialFallback('LI', '#0A66C2'), url: 'https://www.linkedin.com/in/iostephano/' }
    ]
  },
  {
    sectionTitle: 'Ecosistema',
    items: [
      { name: 'SwiftLATAM', iconPath: 'assets/social/swiftlatam-icon.png', fallback: socialFallback('SL', '#F05138'), url: null, appId: 'swiftlatam' },
      { name: '8+CORE',     iconPath: 'assets/social/8pluscore-icon.png',  fallback: socialFallback('8+', '#3D3A8A'), url: null, appId: '8pluscore' },
      { name: 'Book',       iconPath: 'assets/social/book-icon.png',       fallback: socialFallback('BK', '#C87800'), url: null, appId: 'books' },
      { name: 'GitHub',     iconPath: 'assets/social/github-icon.png',     fallback: socialFallback('GH', '#1B1F24'), url: 'https://github.com/iostephano' }
    ]
  }
];

function buildFindMeHTML(app) {
  function buildItem(item) {
    var btn = item.appId
      ? '<button class="findme-link" type="button" data-app-id="' + item.appId + '">Link</button>'
      : item.url
      ? '<a class="findme-link" href="' + item.url + '" target="_blank" rel="noopener noreferrer">Link</a>'
      : '<button class="findme-link findme-link--disabled" type="button" disabled>Link</button>';
    return (
      '<div class="findme-item">' +
        '<img class="findme-icon" src="' + item.iconPath + '" alt="' + item.name + '"' +
          ' draggable="false"' +
          ' onerror="this.src=\'' + item.fallback + '\';this.onerror=null;">' +
        '<span class="findme-name">' + item.name + '</span>' +
        btn +
      '</div>'
    );
  }

  var sections = FINDME_DATA.map(function(section, i) {
    var items = section.items.map(buildItem).join('');
    var divider = i < FINDME_DATA.length - 1 ? '<div class="findme-divider" aria-hidden="true"></div>' : '';
    return (
      '<section class="findme-section">' +
        '<h3 class="findme-section-title">' + section.sectionTitle + '</h3>' +
        '<div class="findme-grid">' + items + '</div>' +
      '</section>' +
      divider
    );
  }).join('');

  return (
    '<div class="window-titlebar">' +
      '<div class="window-controls">' +
        '<button class="window-dot window-dot--close" aria-label="Close ' + app.label + '" data-close="' + app.id + '"></button>' +
        '<span class="window-dot window-dot--min" aria-hidden="true"></span>' +
        '<span class="window-dot window-dot--max" aria-hidden="true"></span>' +
      '</div>' +
      '<h2 class="window-title" id="wt-' + app.id + '">' + app.title + '</h2>' +
    '</div>' +
    '<div class="findme-body">' + sections + '</div>'
  );
}

// Looks up an app-like object (Dock app or desktop file) by id, so a single
// internal window can be opened from multiple entry points (desktop icon,
// Apps window, Find Me) without duplicating any data or open logic.
function findAppById(id) {
  return APPS.find(function(a) { return a.id === id; }) ||
         DESKTOP_FILES.find(function(a) { return a.id === id; });
}

// Wires any element with [data-app-id] inside a window to open the matching
// internal app/window via handleIconClick — used by both Apps (SwiftLATAM /
// 8+CORE links) and Find Me (SwiftLATAM / 8+CORE / Book), instead of an
// external link.
function initInternalAppLinks(win) {
  win.querySelectorAll('[data-app-id]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var target = findAppById(btn.dataset.appId);
      if (target) handleIconClick(target);
    });
  });
}

// ── App Data Model ──────────────────────────────────────────────────────────
const APPS = [
  {
    id: 'finder',
    label: 'Finder',
    iconPath: 'assets/icons/icon-finder.png',
    title: 'iOStephano',
    description: 'Un espacio personal donde documento mi camino como desarrollador iOS, construyo proyectos reales con Swift y exploro el ecosistema Apple desde una mirada técnica, práctica y de producto.',
    badge: 'Fase 1',
    type: 'internal'
  },
  {
    id: 'apps',
    label: 'Apps',
    iconPath: 'assets/icons/icon-apps.png',
    title: 'Apps',
    description: '',
    badge: 'Coming Soon',
    type: 'internal'
  },
  {
    id: 'safari',
    label: 'Safari',
    iconPath: 'assets/icons/icon-safari.png',
    title: 'Safari',
    description: '',
    badge: 'Fase 2',
    type: 'internal'
  },
  {
    id: 'books',
    label: 'Books',
    iconPath: 'assets/icons/icon-books.png',
    title: 'Books',
    description: 'Recursos, lecturas y materiales que forman parte del proceso de aprendizaje y construcción. Los libros que definen la perspectiva técnica y de producto.',
    badge: 'Fase 2',
    type: 'internal'
  },
  {
    id: 'calendar',
    label: 'Calendar',
    iconPath: 'assets/icons/icon-calendar.png',
    title: 'Calendar',
    description: 'Un calendario simbólico para mostrar avances, hitos y próximos pasos del ecosistema iOS Stefano. La construcción tiene un rumbo.',
    badge: 'Fase 2',
    type: 'internal'
  },
  {
    id: 'mail',
    label: 'Mail',
    iconPath: 'assets/icons/icon-mail.png',
    title: 'Contact',
    description: 'Canal de contacto para conversar sobre desarrollo iOS, proyectos, colaboración técnica o producto digital. La conversación es el primer paso.',
    badge: 'Fase 1',
    type: 'mailto',
    href: 'mailto:iostephano@proton.me'
  },
  {
    id: 'findme',
    label: 'Find Me',
    iconPath: 'assets/icons/icon-findme.png',
    title: 'Find Me',
    description: 'Presencia digital, redes y lugares donde seguir el trabajo de iOS Stefano. El ecosistema no vive solo en este sitio.',
    badge: 'Fase 2',
    type: 'internal'
  }
];

// ── State ───────────────────────────────────────────────────────────────────
let windowZIndex = 200;

// ── Dock ────────────────────────────────────────────────────────────────────
function renderDock() {
  const list = document.getElementById('dockList');
  if (!list) return;

  APPS.forEach(app => {
    const li = document.createElement('li');
    li.className = 'dock-item';

    const btn = document.createElement('button');
    btn.className = 'dock-btn';
    btn.setAttribute('aria-label', app.label);
    btn.dataset.appId = app.id;

    const img = document.createElement('img');
    img.className = 'dock-icon';
    img.src = app.iconPath;
    img.alt = '';
    img.draggable = false;
    img.onerror = () => {
      img.src = ICON_SVGS[app.id] || ICON_SVGS.apps;
      img.onerror = null;
    };

    const tooltip = document.createElement('span');
    tooltip.className = 'dock-tooltip';
    tooltip.textContent = app.label;
    tooltip.setAttribute('aria-hidden', 'true');

    btn.appendChild(img);
    btn.appendChild(tooltip);
    btn.addEventListener('click', () => handleIconClick(app));

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// ── Window System ───────────────────────────────────────────────────────────
function handleIconClick(app) {
  if (app.type === 'mailto') {
    closeAllWindows();
    window.location.href = app.href;
    return;
  }
  const existing = document.getElementById('window-' + app.id);
  if (existing && !existing.classList.contains('window--closing')) {
    bringToFront(existing);
    nudgeWindow(existing);
    return;
  }
  // Single-window mode: close every other open window before opening a new one
  closeAllWindows();
  openWindow(app);
}

function closeAllWindows() {
  const layer = document.getElementById('windowsLayer');
  if (!layer) return;
  [...layer.querySelectorAll('.window:not(.window--closing)')].forEach(win => {
    closeWindow(win.id.replace('window-', ''));
  });
}

function bringToFront(win) {
  win.style.zIndex = ++windowZIndex;
}

function nudgeWindow(win) {
  win.style.transition = 'transform 120ms cubic-bezier(.3,.9,.4,1)';
  const current = win.style.transform;
  win.style.transform = current.replace('scale(1)', 'scale(1.018)');
  setTimeout(() => {
    win.style.transform = current;
    setTimeout(() => { win.style.transition = ''; }, 130);
  }, 120);
}

function openWindow(app) {
  const layer = document.getElementById('windowsLayer');
  if (!layer) return;

  const win = document.createElement('div');
  const extraClass = app.id === 'finder'     ? ' window--finder'
                   : app.id === 'apps'       ? ' window--apps'
                   : app.id === 'safari'     ? ' window--safari'
                   : app.id === 'books'      ? ' window--books'
                   : app.id === 'calendar'   ? ' window--calendar'
                   : app.id === 'findme'     ? ' window--findme'
                   : app.id === 'swiftlatam' ? ' window--swiftlatam'
                   : app.id === '8pluscore'  ? ' window--8pluscore'
                   : '';
  win.className = 'window' + extraClass;
  win.id = 'window-' + app.id;
  win.setAttribute('role', 'dialog');
  win.setAttribute('aria-labelledby', 'wt-' + app.id);
  win.setAttribute('aria-modal', 'false');
  win.style.zIndex = ++windowZIndex;
  win.tabIndex = -1;

  const htmlBuilder = app.id === 'finder'     ? buildFinderHTML
                    : app.id === 'apps'       ? buildAppsHTML
                    : app.id === 'safari'     ? buildSafariHTML
                    : app.id === 'books'      ? buildBooksHTML
                    : app.id === 'calendar'   ? buildCalendarHTML
                    : app.id === 'findme'     ? buildFindMeHTML
                    : app.id === 'swiftlatam' ? buildSwiftLatamHTML
                    : app.id === '8pluscore'  ? build8PlusCoreHTML
                    : buildDefaultHTML;
  win.innerHTML = htmlBuilder(app);

  win.addEventListener('mousedown', () => bringToFront(win));
  win.addEventListener('touchstart', () => bringToFront(win), { passive: true });

  win.querySelector('[data-close]').addEventListener('click', e => {
    e.stopPropagation();
    closeWindow(app.id);
  });

  if (app.id === 'books') initBooksCarousel(win);
  if (app.id === 'apps' || app.id === 'findme') initInternalAppLinks(win);

  layer.appendChild(win);

  requestAnimationFrame(() => win.classList.add('window--open'));

  win.focus({ preventScroll: true });
}

function closeWindow(appId) {
  const win = document.getElementById('window-' + appId);
  if (!win || win.classList.contains('window--closing')) return;

  if (win.booksAutoplayId) {
    clearInterval(win.booksAutoplayId);
    win.booksAutoplayId = null;
  }

  win.classList.remove('window--open');
  win.classList.add('window--closing');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(() => win.remove(), reduced ? 0 : 210);
}

function closeTopWindow() {
  const layer = document.getElementById('windowsLayer');
  if (!layer) return;

  const open = [...layer.querySelectorAll('.window:not(.window--closing)')];
  if (!open.length) return;

  const top = open.reduce((a, b) =>
    parseInt(b.style.zIndex || 0) > parseInt(a.style.zIndex || 0) ? b : a
  );

  const appId = top.id.replace('window-', '');
  closeWindow(appId);
}

// ── Keyboard ────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeTopWindow();
});

// ── Desktop Files ───────────────────────────────────────────────────────────
// Íconos SVG inline usados como fallback cuando el PNG no existe todavía.
const FILE_ICON_SVGS = {
  swiftlatam: toDataURI(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 140">' +
    '<defs><clipPath id="csl"><rect width="110" height="140" rx="14"/></clipPath></defs>' +
    '<rect width="110" height="140" rx="14" fill="white"/>' +
    '<polygon points="74,0 110,0 110,36" fill="#EBEBEB" clip-path="url(#csl)"/>' +
    '<polygon points="74,0 110,36 74,36" fill="#D4D4D4" clip-path="url(#csl)"/>' +
    '<rect y="104" width="110" height="36" fill="#F05138" clip-path="url(#csl)"/>' +
    '<text x="55" y="82" text-anchor="middle" fill="#F05138" font-size="26" font-weight="700"' +
    ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">SL</text>' +
    '<text x="55" y="128" text-anchor="middle" fill="white" font-size="11" font-weight="600"' +
    ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">.swift</text>' +
    '</svg>'
  ),
  '8pluscore': toDataURI(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 140">' +
    '<defs><clipPath id="c8p"><rect width="110" height="140" rx="14"/></clipPath></defs>' +
    '<rect width="110" height="140" rx="14" fill="white"/>' +
    '<polygon points="74,0 110,0 110,36" fill="#EBEBEB" clip-path="url(#c8p)"/>' +
    '<polygon points="74,0 110,36 74,36" fill="#D4D4D4" clip-path="url(#c8p)"/>' +
    '<rect y="104" width="110" height="36" fill="#3D3A8A" clip-path="url(#c8p)"/>' +
    '<text x="55" y="82" text-anchor="middle" fill="#3D3A8A" font-size="26" font-weight="700"' +
    ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">8+</text>' +
    '<text x="55" y="128" text-anchor="middle" fill="white" font-size="11" font-weight="600"' +
    ' font-family="-apple-system,BlinkMacSystemFont,sans-serif">.lab</text>' +
    '</svg>'
  )
};

// Configura los archivos del escritorio aquí.
// Para agregar un archivo: añadir una entrada al array con su id, label, iconPath y textos.
const DESKTOP_FILES = [
  {
    id: 'swiftlatam',
    label: 'SwiftLATAM.swift',
    iconPath: 'assets/desktop-files/swiftlatam-file.png',
    title: 'SwiftLATAM',
    description: 'Comunidad de desarrolladores Apple en Latinoamérica.',
    badge: 'Coming Soon',
    type: 'internal'
  },
  {
    id: '8pluscore',
    label: '8+Core.lab',
    iconPath: 'assets/desktop-files/8pluscore-file.png',
    title: '8+ Core',
    description: 'Laboratorio de software para el ecosistema Apple.',
    badge: 'Coming Soon',
    type: 'internal'
  }
];

function renderDesktopFiles() {
  const container = document.getElementById('desktopFiles');
  if (!container) return;

  DESKTOP_FILES.forEach(file => {
    const btn = document.createElement('button');
    btn.className = 'desktop-file';
    btn.type = 'button';
    btn.setAttribute('aria-label', file.label);

    const img = document.createElement('img');
    img.className = 'desktop-file-icon';
    img.src = file.iconPath;
    img.alt = '';
    img.draggable = false;
    img.onerror = () => {
      img.src = FILE_ICON_SVGS[file.id] || FILE_ICON_SVGS.swiftlatam;
      img.onerror = null;
    };

    const label = document.createElement('span');
    label.className = 'desktop-file-label';
    label.textContent = file.label;

    btn.appendChild(img);
    btn.appendChild(label);
    btn.addEventListener('click', () => handleIconClick(file));

    container.appendChild(btn);
  });
}

// ── Widget ──────────────────────────────────────────────────────────────────
// Configura las imágenes del carrusel aquí.
// Para agregar imágenes: añadir rutas a este array en orden de aparición.
// Tamaño recomendado: 720×360 px (horizontal, proporción 2:1).
const WIDGET_IMAGES = [
  'assets/widgets/widget-01.webp',
  'assets/widgets/widget-02.webp',
  'assets/widgets/widget-03.webp'
];

function initWidget() {
  const track = document.getElementById('widgetTrack');
  if (!track || !WIDGET_IMAGES.length) return;

  WIDGET_IMAGES.forEach((src, i) => {
    const img = document.createElement('img');
    img.className = 'widget-img' + (i === 0 ? ' widget-img--active' : '');
    img.src = src;
    img.alt = '';
    img.draggable = false;
    track.appendChild(img);
  });

  if (WIDGET_IMAGES.length <= 1) return;

  let current = 0;
  setInterval(() => {
    const imgs = track.querySelectorAll('.widget-img');
    imgs[current].classList.remove('widget-img--active');
    current = (current + 1) % imgs.length;
    imgs[current].classList.add('widget-img--active');
  }, 4000);
}

// ── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderDock();
  initWidget();
  renderDesktopFiles();
});
