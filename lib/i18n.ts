// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both the ES and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language. Keeping it flat and
// co-located (rather than adding a dependency like next-intl) keeps the
// project tiny and makes the strings easy to audit.
export type Lang = "es" | "en";

export const LANGUAGES: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).es === "string";
}

export const DICT = {
  picker: {
    season: { es: "EstaciÃ³n", en: "Season" },
    language: { es: "Idioma", en: "Language" },
  },
  seasons: {
    spring: { es: "Primavera", en: "Spring" },
    summer: { es: "Verano", en: "Summer" },
    autumn: { es: "OtoÃ±o", en: "Autumn" },
    winter: { es: "Invierno", en: "Winter" },
  },
  nav: {
    aria: { es: "Secciones", en: "Sections" },
    home: { es: "Inicio", en: "Home" },
    about: { es: "Sobre mÃ­", en: "About" },
    stack: { es: "Stack", en: "Stack" },
    experience: { es: "Experiencia", en: "Experience" },
    project: { es: "Proyecto", en: "Project" },
    contact: { es: "Contacto", en: "Contact" },
  },
  header: {
    availability: {
      es: "Open to opportunities",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { es: "Hola, soy", en: "Hi, I am" },
    roleLine: {
      es: "Aspiring Software Engineer & Full Stack Developer.",
      en: "Aspiring Software Engineer & Full Stack Developer.",
    },
    tagline: {
      es: "Especializado en ERPs y aplicaciones full-stack para empresas.",
      en: "Specialised in ERPs and full-stack apps for businesses.",
    },
    cv: { es: "Descargar CV", en: "Download CV" },
    hire: { es: "Contactarme", en: "Contact me" },
    scroll: { es: "Scroll para explorar", en: "Scroll to explore" },
    keysHint: {
      es: "Â· hover sobre las teclas",
      en: "Â· hover over the keys",
    },
  },
  about: {
    title: { es: "Sobre", en: "About" },
    titleAccent: { es: "MÃ­", en: "Me" },
    name: { es: "Suresh Tirumala", en: "Suresh Tirumala" },
    tagline: {
      es: "Dando forma al maÃ±ana con cÃ³digo y creatividad",
      en: "Shaping Tomorrow with Code and Creativity",
    },
    bio: {
      es: "Como apasionado desarrollador Full Stack con experiencia en React, TypeScript, Django, REST, HTML y CSS, destaco en crear experiencias digitales fluidas. Mi trayectoria incluye roles como Intern en MuLearn, Presidente del Sindicato en SNGIST y CEO en SNGIST IEDC, donde he impulsado la innovaciÃ³n y liderado transformaciones digitales. Como lÃ­der, he empoderado equipos hacia la excelencia y fomentado el espÃ­ritu emprendedor. Busco conectar con entusiastas de la tecnologÃ­a y visionarios para explorar nuevas oportunidades.",
      en: "As a passionate Full Stack Developer with expertise in React, TypeScript, Django, REST, HTML, and CSS, I excel in crafting seamless digital experiences. My journey includes roles as a MuLearn Intern, Union Chairman at SNGIST, and CEO at SNGIST IEDC, where I've driven innovation and led digital transformations. As a leader, I've empowered teams towards excellence and fostered an entrepreneurial spirit. I'm keen to connect with like-minded tech enthusiasts and visionaries.",
    },
  },
  stack: {
    title: { es: "Tech Stack", en: "Tech Stack" },
    hint: {
      es: "(hint: pasa el ratÃ³n por una tecla)",
      en: "(hint: hover over a key)",
    },
    hintMobile: {
      es: "Las herramientas con las que construyo.",
      en: "The tools I build with.",
    },
  },
  experience: {
    title: { es: "Experience", en: "Experience" },
    subtitle: {
      es: "Mi trayectoria profesional.",
      en: "My professional journey.",
    },
  },
  projects: {
    kicker: { es: "proyecto", en: "project" },
    viewMore: { es: "Ver mÃ¡s", en: "View more" },
    openSite: { es: "Abrir sitio", en: "Visit site" },
    viewCode: { es: "Ver cÃ³digo", en: "View code" },
    close: { es: "Cerrar", en: "Close" },
    stackLabel: { es: "Stack", en: "Stack" },
    overview: { es: "Resumen", en: "Overview" },
  },
  contact: {
    kicker: { es: "contacto", en: "contact" },
    title: { es: "Â¿Hablamos?", en: "Let's talk?" },
    body: {
      es: "Si lo que has visto te interesa, el teclado ya estÃ¡ listo para recibir el primer mensaje.",
      en: "If what you've seen interests you, the keyboard is ready for the first message.",
    },
    copyEmail: { es: "Copiar email", en: "Copy email" },
    openMail: { es: "Abrir mail", en: "Open mailto" },
    github: { es: "GitHub", en: "GitHub" },
    linkedin: { es: "LinkedIn", en: "LinkedIn" },
    emailToast: { es: "Email copiado", en: "Email copied" },
    footer: {
      es: "Â© 2026 Suresh Mahima Kumar Tirumala. Todos los derechos reservados.",
      en: "Â© 2026 Suresh Mahima Kumar Tirumala. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        es: "Donde empezÃ³ todo. Sigue aquÃ­, sigue mandando.",
        en: "Where it all started. Still here, still in charge.",
      },
      typescript: {
        es: "Mismo JS, con cinturÃ³n de seguridad.",
        en: "Same JS, with a seatbelt.",
      },
      html5: {
        es: "Los huesos de cualquier pÃ¡gina.",
        en: "The bones of any page.",
      },
      css: {
        es: "El detalle que separa lo bueno de lo bonito.",
        en: "What separates good from beautiful.",
      },
      tailwindcss: {
        es: "Utility-first. DiseÃ±o en el HTML.",
        en: "Utility-first. Design inside the HTML.",
      },
      python: {
        es: "Se lee como inglÃ©s, escala como cohete.",
        en: "Reads like English, scales like a rocket.",
      },
      react: {
        es: "Componentes, componentes, componentes.",
        en: "Components, components, components.",
      },
      nextdotjs: {
        es: "React adulto: routing, SSR, edge.",
        en: "React all grown up: routing, SSR, edge.",
      },
      vuedotjs: {
        es: "El frontend mÃ¡s relajado.",
        en: "The most relaxed frontend.",
      },
      nodedotjs: {
        es: "JavaScript en el servidor.",
        en: "JavaScript on the server.",
      },
      php: {
        es: "Mueve mÃ¡s web de la que crees.",
        en: "Runs more of the web than you think.",
      },
      odoo: {
        es: "ERP que no hace llorar.",
        en: "ERP that doesn't make you cry.",
      },
      postgresql: {
        es: "La base de datos aburrida que siempre funciona.",
        en: "The boring database that always works.",
      },
      docker: {
        es: "Igual en mi mÃ¡quina, igual en producciÃ³n.",
        en: "Same on my machine, same in production.",
      },
      git: {
        es: "Historia y mÃ¡quina del tiempo del cÃ³digo.",
        en: "History and a time machine for your code.",
      },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.es ?? path;
  return path;
}

