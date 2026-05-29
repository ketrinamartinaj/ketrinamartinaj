/**
 * Profile data for Ketrina Martinaj's professional website.
 * All user-facing content lives here — edit this file to update the site.
 *
 * Multilingual: every text field is an object with keys 'en', 'es', 'it'.
 * To add a new language, add that key to every multilingual object and extend i18n below.
 */

'use strict';

// ── Personal (language-independent) ─────────────────────────────────────────
const personal = {
  name: 'Ketrina Martinaj',
  email: 'ketrinamartinaj22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ketrinamartinaj',
  location: 'Pisa, Italy',
  dob: '22 January 2001',
  driversLicense: 'B',
  photo: 'assets/images/profile.jpg' // replace with real photo to enable
};

// ── Professional summary ─────────────────────────────────────────────────────
const summary = {
  en: 'Graduate in Environmental and Workplace Prevention Techniques and ASPP, with training and practical experience in risk assessment and ergonomic analysis. I have gained experience through internships and field activities, handling workplace inspections, data collection and support in writing technical reports. Skilled in biomechanical overload risk assessment using OCRA, NIOSH, RULA and REBA methods. Motivated to apply my expertise in both industrial and construction environments, with a strong focus on risk prevention and operational safety.',
  es: 'Graduada en Técnicas de Prevención en el Entorno y Lugares de Trabajo y ASPP, con formación y experiencia práctica en evaluación de riesgos y análisis ergonómico. He adquirido experiencia a través de prácticas y actividades de campo, ocupándome de inspecciones, recopilación de datos y apoyo en la redacción de informes técnicos. Competente en la evaluación del riesgo por sobrecarga biomecánica mediante métodos OCRA, NIOSH, RULA y REBA. Motivada a aplicar mis competencias tanto en el ámbito industrial como en obras de construcción, con especial atención a la prevención de riesgos y la seguridad operativa.',
  it: "Laureata in Tecniche della Prevenzione nell'Ambiente e nei Luoghi di Lavoro e ASPP, con formazione ed esperienza pratica nella valutazione dei rischi e nell'analisi ergonomica. Ho maturato esperienza attraverso tirocini e attività sul campo, occupandomi di ispezioni, raccolta dati e supporto alla redazione di report tecnici. Competente nella valutazione del rischio da sovraccarico biomeccanico mediante metodi OCRA, NIOSH, RULA e REBA. Motivata ad applicare le mie competenze sia in ambito industriale che nei cantieri, con attenzione alla prevenzione dei rischi e alla sicurezza operativa."
};

// ── Professional experience ──────────────────────────────────────────────────
// startDate / endDate: { month: 1-12, year: YYYY } — endDate null = current role
const experience = [
  {
    id: 'cie-pisa',
    title: {
      en: 'Biomechanical Overload Risk Manager',
      es: 'Gestora del Riesgo por Sobrecarga Biomecánica',
      it: 'Gestore del Rischio da Sovraccarico Biomeccanico'
    },
    organization: 'Centro Italiano di Ergonomia - Pisa',
    location: 'Pisa, PI',
    logo: { abbr: 'CIE', bg: '#fff', src: 'assets/images/ergonomialogo.png' },
    startDate: { month: 10, year: 2024 },
    endDate: null,
    responsibilities: {
      en: [
        'Ergonomic analysis of workplaces',
        'Biomechanical overload risk assessment',
        'Ergonomic analysis of workstations in production contexts',
        'Biomechanical risk assessment using OCRA, NIOSH, RULA and REBA methods',
        'Support in designing improvement interventions to reduce risk',
        'Use of OsTools software for technical analysis and reporting'
      ],
      es: [
        'Análisis ergonómico de puestos de trabajo',
        'Evaluación del riesgo por sobrecarga biomecánica',
        'Análisis ergonómico de puestos de trabajo en contextos productivos',
        'Evaluación del riesgo biomecánico mediante métodos OCRA, NIOSH, RULA y REBA',
        'Apoyo en el diseño de intervenciones de mejora para la reducción del riesgo',
        'Uso del software OsTools para análisis e informes técnicos'
      ],
      it: [
        'Analisi ergonomica dei posti di lavoro',
        'Valutazione rischio sovraccarico biomeccanico',
        'Analisi ergonomica di postazioni di lavoro in contesti produttivi',
        'Valutazione del rischio biomeccanico tramite metodi OCRA, NIOSH, RULA e REBA',
        'Supporto alla progettazione di interventi migliorativi per la riduzione del rischio',
        'Utilizzo del software OsTools per analisi e reportistica tecnica'
      ]
    }
  },
  {
    id: 'arpat',
    title: { en: 'Intern', es: 'Practicante', it: 'Tirocinante' },
    organization: 'ARPAT',
    location: 'Pisa',
    logo: { abbr: 'ARP', bg: '#fff', src: 'assets/images/arpat.jpeg' },
    startDate: { month: 6, year: 2024 },
    endDate: { month: 10, year: 2024 },
    responsibilities: {
      en: [
        'Workplace inspections for regulatory compliance verification',
        'Data collection and analysis for technical reports',
        'Field sampling and at third-party companies'
      ],
      es: [
        'Inspecciones en lugares de trabajo para verificación de conformidad normativa',
        'Recopilación y análisis de datos para informes técnicos',
        'Muestreo en campo y en empresas terceras'
      ],
      it: [
        'Ispezioni in ambienti di lavoro per verifica conformità normativa',
        'Raccolta e analisi dati per report tecnici',
        'Campionamento sul Campo e presso aziende terze'
      ]
    }
  },
  {
    id: 'usl',
    title: { en: 'Intern', es: 'Practicante', it: 'Tirocinante' },
    organization: 'USL',
    location: 'Pisa',
    logo: { abbr: 'USL', bg: '#fff', src: 'assets/images/uslpisa.png' },
    startDate: { month: 2, year: 2023 },
    endDate: { month: 5, year: 2023 },
    responsibilities: {
      en: [
        'Workplace inspections for regulatory compliance verification',
        'Assessment of risk factors (chemical, physical, biological)',
        'Data collection and analysis for technical reports',
        'Control of PPE use and equipment safety',
        'Environmental sampling (air, water, surfaces, food)'
      ],
      es: [
        'Inspecciones en lugares de trabajo para verificación de conformidad normativa',
        'Evaluación de factores de riesgo (químicos, físicos, biológicos)',
        'Recopilación y análisis de datos para informes técnicos',
        'Control del uso de EPIs y seguridad de los equipos',
        'Muestreos ambientales (aire, agua, superficies, alimentos)'
      ],
      it: [
        'Ispezioni in ambienti di lavoro per verifica conformità normativa',
        'Valutazione dei fattori di rischio (chimici, fisici, biologici)',
        'Raccolta e analisi dati per report tecnici',
        'Controllo utilizzo DPI e sicurezza delle attrezzature',
        'Campionamenti ambientali (aria, acqua, superfici, alimenti)'
      ]
    }
  },
  {
    id: 'istituto-igiene',
    title: { en: 'Intern', es: 'Practicante', it: 'Tirocinante' },
    organization: "Dipartimento di Ricerca e Traslazione — Istituto d'Igiene",
    location: 'Pisa, PI',
    logo: { abbr: 'IIG', bg: '#fff', src: 'assets/images/richercatraslacione.png' },
    startDate: { month: 7, year: 2022 },
    endDate: { month: 11, year: 2022 },
    responsibilities: {
      en: [
        'Area, surface, water and food sampling',
        'Execution of assigned tasks under work pressure',
        'Collaboration in activities beyond assigned scope',
        'Support and collaboration with colleagues in managing tasks',
        'Commitment to exceeding required results and objectives',
        'Attention to instructions and suggestions received'
      ],
      es: [
        'Muestreos de área, superficies, agua y alimentos',
        'Ejecución de tareas asignadas bajo presión laboral',
        'Colaboración en actividades más allá del ámbito asignado',
        'Apoyo y colaboración con colegas en la gestión de las tareas',
        'Compromiso con la superación de los resultados y objetivos requeridos',
        'Atención y respeto de las instrucciones y sugerencias recibidas'
      ],
      it: [
        'Campionamenti area, superfici, acqua e alimenti',
        'Esecuzione degli incarichi affidati gestendo la pressione lavorativa',
        "Collaborazione nell'esecuzione di attività oltre a quelle assegnate",
        'Supporto e collaborazione con i colleghi nella gestione degli incarichi',
        'Ricerca del superamento dei risultati e degli obiettivi richiesti',
        'Attenzione e rispetto di istruzioni e suggerimenti ricevuti'
      ]
    }
  }
];

// ── Education ────────────────────────────────────────────────────────────────
const education = [
  {
    id: 'unipisa',
    degree: {
      en: "Bachelor's Degree — Environmental and Workplace Prevention Techniques",
      es: 'Grado Universitario — Técnicas de Prevención en el Entorno y Lugares de Trabajo',
      it: "Laurea Triennale — Tecniche della Prevenzione nell'Ambiente e nei Luoghi di Lavoro"
    },
    institution: 'Università di Pisa',
    location: 'Pisa',
    logo: { abbr: 'UP', bg: '#fff', src: 'assets/images/unipisa.logo.png' },
    date: { month: 4, year: 2025 },
    note: {
      en: 'Thesis: Impact of Microclimate on Construction Sites — Thermal Risks and Prevention Strategies',
      es: 'Tesis: Impacto del Microclima en Obras de Construcción — Riesgos Térmicos y Estrategias de Prevención',
      it: 'Tesi: Impatto del Microclima sui Cantieri — Rischi Termici e Strategie di Prevenzione'
    }
  },
  {
    id: 'newton',
    degree: {
      en: 'High School Diploma — Fashion System',
      es: 'Bachillerato — Sistema de Moda',
      it: 'Diploma Superiore — Sistema Moda'
    },
    institution: 'Istituto Statale di Istruzione Superiore I. Newton',
    location: 'Varese',
    logo: { abbr: 'IN', bg: '#fff', src: 'assets/images/institutovareselogo.jpg' },
    date: { month: 6, year: 2021 },
    note: null
  }
];

// ── Skills ───────────────────────────────────────────────────────────────────
const skills = {
  technical: {
    en: [
      'Risk Assessment (D.Lgs. 81/08)',
      'Ergonomic Analysis (OCRA, NIOSH, RULA, REBA)',
      'Environmental Sampling',
      'Workplace Inspections & Safety Audits',
      'Occupational Health & Safety Legislation'
    ],
    es: [
      'Evaluación de Riesgos (D.Lgs. 81/08)',
      'Análisis Ergonómico (OCRA, NIOSH, RULA, REBA)',
      'Muestreos Ambientales',
      'Inspecciones y Auditorías de Seguridad',
      'Normativa de Salud y Seguridad Laboral'
    ],
    it: [
      'Valutazione dei rischi (D.Lgs. 81/08)',
      'Analisi ergonomica (OCRA, NIOSH, RULA, REBA)',
      'Campionamenti ambientali',
      'Ispezioni e audit sicurezza',
      'Normativa salute e sicurezza sul lavoro'
    ]
  },
  itTools: {
    en: ['OsTools', 'Microsoft Office Suite', 'Database & Data Analysis'],
    es: ['OsTools', 'Suite de Microsoft Office', 'Bases de Datos y Análisis de Datos'],
    it: ['OsTools', 'Pacchetto Office', 'Database e analisi dati']
  }
};

// ── Languages ────────────────────────────────────────────────────────────────
// proficiency: 0-100, used for the visual bar
const languages = [
  {
    name: { en: 'Albanian', es: 'Albanés', it: 'Albanese' },
    level: { en: 'Native', es: 'Nativo', it: 'Madrelingua' },
    proficiency: 100
  },
  {
    name: { en: 'Italian', es: 'Italiano', it: 'Italiano' },
    level: { en: 'C1 — Advanced', es: 'C1 — Avanzado', it: 'C1 — Avanzato' },
    proficiency: 90
  },
  {
    name: { en: 'English', es: 'Inglés', it: 'Inglese' },
    level: { en: 'B2 — Upper-Intermediate', es: 'B2 — Intermedio Alto', it: 'B2 — Intermedio Avanzato' },
    proficiency: 72
  }
];

// ── Certifications ───────────────────────────────────────────────────────────
// category values: 'Ergonomics' | 'Safety' | 'IT' | 'Language'
const certifications = [
  {
    id: 'ocra01',
    category: 'Ergonomics',
    name: {
      en: 'OCRA 01 · CIE Academy — Risk Factors in Repetitive Tasks',
      es: 'OCRA 01 · CIE Academy — Factores de Riesgo en Tareas Repetitivas',
      it: 'Certificazione OCRA 01 · CIE Academy — I Fattori di Rischio nei Compiti Ripetitivi'
    }
  },
  {
    id: 'ocra02',
    category: 'Ergonomics',
    name: {
      en: 'OCRA 02 · CIE Academy — Postures, Force and Complex Tasks',
      es: 'OCRA 02 · CIE Academy — Posturas, Fuerza y Tareas Complejas',
      it: 'Certificazione OCRA 02 · CIE Academy — Le Posture, la Forza e i Compiti Complessi'
    }
  },
  {
    id: 'niosh01',
    category: 'Ergonomics',
    name: {
      en: 'NIOSH 01 — Risk Factors and Interventions for Risk Reduction',
      es: 'NIOSH 01 — Factores de Riesgo e Intervenciones para la Reducción del Riesgo',
      it: 'Certificazione NIOSH 01 — I Fattori di Rischio e gli Interventi per la Riduzione del Rischio'
    }
  },
  {
    id: 'niosh02',
    category: 'Ergonomics',
    name: {
      en: 'NIOSH 02 — Assessment of Complex Tasks and Advanced Management',
      es: 'NIOSH 02 — Evaluación de Tareas Complejas y Gestión Avanzada',
      it: 'Certificazione NIOSH 02 — La Valutazione dei Compiti Complessi e la Gestione Avanzata'
    }
  },
  {
    id: 'aspp',
    category: 'Safety',
    name: {
      en: 'Update Course with Learning Verification — Health & Safety Officer / Manager (ASPP / RSPP)',
      es: 'Curso de Actualización con Verificación — Personal y Responsable del Servicio de Prevención y Protección (ASPP / RSPP)',
      it: "Attestato di Aggiornamento con Verifica dell'Apprendimento — Addetto e Responsabile del Servizio di Prevenzione e Protezione (ASPP / RSPP)"
    }
  },
  {
    id: 'unpisi',
    category: 'Safety',
    name: {
      en: 'WEBINAR UNPISI — Application of the "Diffida" Institution in Food Safety',
      es: 'WEBINAR UNPISI — Aplicación del Instituto de la "Diffida" en Seguridad Alimentaria',
      it: "Corso WEBINAR UNPISI — Applicazione dell'Istituto della Diffida nel Settore della Sicurezza Alimentare"
    }
  },
  {
    id: 'sound',
    category: 'Safety',
    name: {
      en: 'Sound Wave Propagation in Confined Environments',
      es: 'Propagación de Ondas Sonoras en Ambientes Confinados',
      it: 'La Propagazione di Onde Sonore in Ambiente Confinato'
    }
  },
  {
    id: 'ecdl',
    category: 'IT',
    name: {
      en: 'ECDL Certification (Standard · Base · Essentials · IT Security)',
      es: 'Certificación ECDL (Standard · Base · Essentials · IT Security)',
      it: 'Certificazione ECDL (Standard · Base · Essentials · IT Security)'
    }
  },
  {
    id: 'programming',
    category: 'IT',
    name: {
      en: 'Training Certificate in Programming Basics & Robotics',
      es: 'Certificado de Formación en Bases de Programación y Robótica',
      it: 'Attestato di Formazione in Basi di Programmazione e Robotica'
    }
  },
  {
    id: 'webdesign',
    category: 'IT',
    name: {
      en: 'Training Certificate in Web Design',
      es: 'Certificado de Formación en Diseño Web',
      it: 'Attestato di Formazione in Web Design'
    }
  },
  {
    id: 'trinity',
    category: 'Language',
    name: {
      en: 'Trinity Graded Examination in Spoken English — B1',
      es: 'Examen Trinity de Inglés Oral — B1',
      it: 'Certificazione Trinity Graded Examination in Spoken English — B1'
    }
  }
];

// ── UI translations (labels, navigation, section headings) ───────────────────
const i18n = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      eyebrow:    'Ergonomist & Occupational Safety Specialist',
      tagline:    'Protecting workers through science-based ergonomic analysis',
      cta:        'Get in Touch',
      explore:    'View Experience',
      downloadCV: 'Download CV'
    },
    sections: {
      about:          { label: 'Profile',      title: 'About Me' },
      experience:     { label: 'Career',       title: 'Professional Experience' },
      education:      { label: 'Academic',     title: 'Education & Training' },
      skills:         { label: 'Expertise',    title: 'Skills & Competencies' },
      certifications: { label: 'Credentials',  title: 'Certifications & Certificates' },
      contact:        { label: 'Connect',      title: 'Get in Touch' }
    },
    stats: {
      years:     'Years of Experience',
      methods:   'Assessment Methods',
      languages: 'Languages',
      certs:     'Certifications'
    },
    current: 'Present',
    contact: {
      email:    'Email',
      linkedin: 'LinkedIn',
      location: 'Location',
      license:  "Driver's License"
    },
    skillsHeaders: {
      technical: 'Technical Skills',
      it:        'IT Skills',
      languages: 'Languages'
    },
    certCategories: {
      Ergonomics: 'Ergonomics',
      Safety:     'Safety & Prevention',
      IT:         'Information Technology',
      Language:   'Languages'
    }
  },

  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      certifications: 'Certificaciones',
      contact: 'Contacto'
    },
    hero: {
      eyebrow: 'Ergónoma y Especialista en Seguridad Laboral',
      tagline: 'Protegiendo a los trabajadores mediante análisis ergonómico científico',
      cta:        'Contactar',
      explore:    'Ver Experiencia',
      downloadCV: 'Descargar CV'
    },
    sections: {
      about:          { label: 'Perfil',        title: 'Sobre Mí' },
      experience:     { label: 'Carrera',       title: 'Experiencia Profesional' },
      education:      { label: 'Académico',     title: 'Educación y Formación' },
      skills:         { label: 'Expertise',     title: 'Habilidades y Competencias' },
      certifications: { label: 'Credenciales',  title: 'Certificaciones y Certificados' },
      contact:        { label: 'Conectar',      title: 'Contacto' }
    },
    stats: {
      years:     'Años de Experiencia',
      methods:   'Métodos de Evaluación',
      languages: 'Idiomas',
      certs:     'Certificaciones'
    },
    current: 'Actualidad',
    contact: {
      email:    'Correo Electrónico',
      linkedin: 'LinkedIn',
      location: 'Ubicación',
      license:  'Carnet de Conducir'
    },
    skillsHeaders: {
      technical: 'Habilidades Técnicas',
      it:        'Habilidades Informáticas',
      languages: 'Idiomas'
    },
    certCategories: {
      Ergonomics: 'Ergonomía',
      Safety:     'Seguridad y Prevención',
      IT:         'Tecnología de la Información',
      Language:   'Idiomas'
    }
  },

  it: {
    nav: {
      about: 'Chi Sono',
      experience: 'Esperienza',
      education: 'Formazione',
      skills: 'Competenze',
      certifications: 'Certificazioni',
      contact: 'Contatti'
    },
    hero: {
      eyebrow: 'Ergonoma e Specialista in Sicurezza sul Lavoro',
      tagline: 'Proteggere i lavoratori attraverso analisi ergonomica scientifica',
      cta:        'Contattami',
      explore:    'Vedi Esperienza',
      downloadCV: 'Scarica CV'
    },
    sections: {
      about:          { label: 'Profilo',       title: 'Chi Sono' },
      experience:     { label: 'Carriera',      title: 'Esperienze Professionali' },
      education:      { label: 'Accademico',    title: 'Istruzione e Formazione' },
      skills:         { label: 'Expertise',     title: 'Competenze' },
      certifications: { label: 'Credenziali',   title: 'Certificazioni e Attestati' },
      contact:        { label: 'Contatto',      title: 'Contatti' }
    },
    stats: {
      years:     'Anni di Esperienza',
      methods:   'Metodi di Valutazione',
      languages: 'Lingue',
      certs:     'Certificazioni'
    },
    current: 'Presente',
    contact: {
      email:    'Email',
      linkedin: 'LinkedIn',
      location: 'Indirizzo',
      license:  'Patente di Guida'
    },
    skillsHeaders: {
      technical: 'Competenze Tecniche',
      it:        'Competenze Informatiche',
      languages: 'Lingue'
    },
    certCategories: {
      Ergonomics: 'Ergonomia',
      Safety:     'Sicurezza e Prevenzione',
      IT:         'Informatica',
      Language:   'Lingue'
    }
  }
};
