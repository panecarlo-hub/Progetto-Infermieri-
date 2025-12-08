import { Translation } from '@/types';

export const translations: { it: Translation; es: Translation } = {
  it: {
    // Navigation
    nav: {
      home: 'Home',
      howItWorks: 'Come funziona',
      forCompanies: 'Per le aziende',
      forWorkers: 'Per i lavoratori',
      database: 'Database professionisti',
      subscriptions: 'Abbonamenti',
      aboutUs: 'Chi siamo',
      services: 'Servizi',
      contacts: 'Contatti',
      login: 'Accedi',
      register: 'Registrati',
      dashboard: 'Area riservata',
    },
    // Hero Section
    hero: {
      title: 'La piattaforma che connette il talento sanitario con le opportunità',
      subtitle: 'MediLinker è il punto di incontro tra professionisti sanitari qualificati e strutture mediche italiane. Trova il candidato perfetto o la tua prossima opportunità professionale.',
      ctaEmployer: 'Cerca professionisti',
      ctaWorker: 'Trova lavoro',
      trustedBy: 'Già scelto da',
      facilities: 'strutture sanitarie',
    },
    // Features
    features: {
      title: 'Perché scegliere MediLinker',
      subtitle: 'Una piattaforma completa per il recruiting sanitario',
      verified: {
        title: 'Profili verificati',
        description: 'Ogni professionista viene verificato dal nostro team. Documenti, titoli e iscrizioni agli albi sono controllati accuratamente.',
      },
      matching: {
        title: 'Matching intelligente',
        description: 'Il nostro sistema di filtri avanzati ti permette di trovare esattamente il profilo che cerchi in pochi click.',
      },
      secure: {
        title: 'Sicurezza garantita',
        description: 'Conformità GDPR totale. I dati sensibili sanitari sono protetti con i più alti standard di sicurezza.',
      },
      support: {
        title: 'Assistenza completa',
        description: 'Ti accompagniamo in ogni fase: dal primo contatto all\'assunzione, incluse pratiche burocratiche e riconoscimento titoli.',
      },
      multilingual: {
        title: 'Multilingua',
        description: 'Piattaforma disponibile in italiano e spagnolo, con traduzione automatica dei documenti.',
      },
      whatsapp: {
        title: 'Supporto diretto',
        description: 'Chat WhatsApp dedicata per un supporto rapido e personalizzato.',
      },
    },
    // How it works
    howItWorks: {
      title: 'Come funziona',
      subtitle: 'Tre semplici passaggi per iniziare',
      forWorkers: {
        title: 'Per i professionisti sanitari',
        step1: {
          title: 'Crea il tuo profilo',
          description: 'Registrati gratuitamente e completa il tuo profilo con esperienze, titoli di studio e documenti.',
        },
        step2: {
          title: 'Fatti trovare',
          description: 'Il tuo profilo sarà visibile alle strutture sanitarie italiane in cerca di personale qualificato.',
        },
        step3: {
          title: 'Ricevi proposte',
          description: 'Le aziende interessate ti contatteranno tramite la piattaforma. Noi ti supportiamo in ogni fase.',
        },
      },
      forEmployers: {
        title: 'Per le strutture sanitarie',
        step1: {
          title: 'Registra la tua azienda',
          description: 'Crea un account aziendale con i dati della tua struttura sanitaria.',
        },
        step2: {
          title: 'Cerca nel database',
          description: 'Utilizza i filtri avanzati per trovare i professionisti con le competenze che cerchi.',
        },
        step3: {
          title: 'Contatta i candidati',
          description: 'Con un abbonamento attivo puoi contattare i candidati e gestire le assunzioni.',
        },
      },
    },
    // For Companies
    forCompanies: {
      title: 'Per le strutture sanitarie',
      subtitle: 'Trova personale sanitario qualificato per la tua struttura',
      benefits: {
        title: 'I vantaggi per le aziende',
        database: 'Accesso a un database di professionisti sanitari qualificati',
        filters: 'Filtri di ricerca avanzati per trovare il candidato ideale',
        documents: 'Visualizzazione documenti e certificati verificati',
        support: 'Assistenza completa nelle pratiche di assunzione',
        visa: 'Supporto per visti e riconoscimento titoli esteri',
      },
      cta: 'Registra la tua azienda',
      requirements: {
        title: 'Requisiti per la registrazione',
        list: [
          'Partita IVA attiva',
          'Ragione sociale e indirizzo sede legale',
          'Indirizzo PEC',
          'Numero REA',
          'Referente aziendale',
        ],
      },
    },
    // For Workers
    forWorkers: {
      title: 'Per i professionisti sanitari',
      subtitle: 'La tua carriera nel settore sanitario italiano inizia qui',
      benefits: {
        title: 'I vantaggi per i lavoratori',
        visibility: 'Visibilità presso centinaia di strutture sanitarie italiane',
        free: 'Registrazione e creazione profilo completamente gratuiti',
        support: 'Assistenza nella traduzione e validazione documenti',
        recognition: 'Supporto per il riconoscimento dei titoli in Italia',
        opportunities: 'Accesso a opportunità esclusive di lavoro',
      },
      cta: 'Crea il tuo profilo',
      profile: {
        title: 'Cosa puoi inserire nel profilo',
        list: [
          'Dati personali e contatti',
          'Formazione e specializzazioni',
          'Esperienza lavorativa',
          'Iscrizione ad albi professionali',
          'Documenti e certificati',
          'Lingue parlate e disponibilità',
        ],
      },
    },
    // Subscriptions
    subscriptions: {
      title: 'Piani di abbonamento',
      subtitle: 'Scegli il piano più adatto alle tue esigenze',
      monthly: 'Mensile',
      quarterly: 'Trimestrale',
      annual: 'Annuale',
      perMonth: '/mese',
      popular: 'Più popolare',
      features: 'Caratteristiche incluse',
      cta: 'Attiva ora',
      contact: 'Contattaci',
      plans: {
        starter: {
          name: 'Starter',
          description: 'Ideale per piccole strutture',
        },
        professional: {
          name: 'Professional',
          description: 'Per strutture in crescita',
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Per grandi organizzazioni',
        },
      },
    },
    // About Us
    aboutUs: {
      title: 'Chi siamo',
      subtitle: 'La missione di MediLinker',
      description: 'MediLinker nasce dalla volontà di creare un ponte tra il talento sanitario internazionale e le strutture mediche italiane che necessitano di personale qualificato.',
      mission: {
        title: 'La nostra missione',
        text: 'Facilitare l\'incontro tra domanda e offerta nel settore sanitario, garantendo trasparenza, sicurezza e supporto professionale in ogni fase del processo.',
      },
      values: {
        title: 'I nostri valori',
        trust: {
          title: 'Fiducia',
          description: 'Costruiamo relazioni basate sulla trasparenza e l\'affidabilità.',
        },
        quality: {
          title: 'Qualità',
          description: 'Selezioniamo e verifichiamo ogni profilo con la massima attenzione.',
        },
        support: {
          title: 'Supporto',
          description: 'Accompagniamo utenti e aziende in ogni fase del percorso.',
        },
      },
    },
    // Services
    services: {
      title: 'I nostri servizi',
      subtitle: 'Soluzioni complete per il recruiting sanitario',
      list: {
        recruitment: {
          title: 'Ricerca e selezione',
          description: 'Identifichiamo i migliori talenti sanitari per la tua struttura attraverso un processo di selezione accurato.',
        },
        visa: {
          title: 'Assistenza visti',
          description: 'Supporto completo per il rilascio di visti lavorativi per personale extracomunitario.',
        },
        translation: {
          title: 'Traduzione documenti',
          description: 'Servizio di traduzione e validazione di documenti e certificati professionali.',
        },
        recognition: {
          title: 'Riconoscimento titoli',
          description: 'Assistenza nelle procedure di riconoscimento dei titoli di studio in Italia.',
        },
        contracts: {
          title: 'Gestione contrattuale',
          description: 'Supporto nella redazione e gestione dei contratti di lavoro.',
        },
        consulting: {
          title: 'Consulenza HR',
          description: 'Servizi di consulenza per la gestione delle risorse umane nel settore sanitario.',
        },
      },
    },
    // Contact
    contacts: {
      title: 'Contattaci',
      subtitle: 'Siamo qui per aiutarti',
      form: {
        name: 'Nome e cognome',
        email: 'Email',
        phone: 'Telefono',
        company: 'Azienda (opzionale)',
        subject: 'Oggetto',
        message: 'Messaggio',
        submit: 'Invia messaggio',
        success: 'Messaggio inviato con successo!',
        error: 'Errore nell\'invio. Riprova.',
      },
      info: {
        title: 'Informazioni di contatto',
        address: 'Indirizzo',
        email: 'Email',
        phone: 'Telefono',
        hours: 'Orari',
        hoursValue: 'Lun-Ven: 9:00 - 18:00',
      },
      whatsapp: 'Scrivici su WhatsApp',
    },
    // Auth
    auth: {
      login: {
        title: 'Accedi al tuo account',
        email: 'Email',
        password: 'Password',
        remember: 'Ricordami',
        forgot: 'Password dimenticata?',
        submit: 'Accedi',
        noAccount: 'Non hai un account?',
        register: 'Registrati',
      },
      register: {
        title: 'Crea il tuo account',
        userType: 'Tipo di utente',
        worker: 'Professionista sanitario',
        employer: 'Struttura sanitaria',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Conferma password',
        terms: 'Accetto i termini e le condizioni',
        privacy: 'Ho letto l\'informativa sulla privacy',
        submit: 'Registrati',
        hasAccount: 'Hai già un account?',
        login: 'Accedi',
      },
    },
    // Footer
    footer: {
      description: 'La piattaforma di incontro tra professionisti sanitari e strutture mediche italiane.',
      quickLinks: 'Link rapidi',
      legal: 'Legale',
      privacy: 'Privacy Policy',
      terms: 'Termini e Condizioni',
      cookies: 'Cookie Policy',
      gdpr: 'Informativa GDPR',
      followUs: 'Seguici',
      newsletter: {
        title: 'Newsletter',
        placeholder: 'La tua email',
        submit: 'Iscriviti',
      },
      copyright: '© 2024 MediLinker. Tutti i diritti riservati.',
    },
    // Common
    common: {
      learnMore: 'Scopri di più',
      getStarted: 'Inizia ora',
      contactUs: 'Contattaci',
      loading: 'Caricamento...',
      error: 'Si è verificato un errore',
      success: 'Operazione completata',
      save: 'Salva',
      cancel: 'Annulla',
      edit: 'Modifica',
      delete: 'Elimina',
      search: 'Cerca',
      filter: 'Filtra',
      reset: 'Reset',
      next: 'Avanti',
      previous: 'Indietro',
      yes: 'Sì',
      no: 'No',
    },
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      howItWorks: 'Cómo funciona',
      forCompanies: 'Para empresas',
      forWorkers: 'Para trabajadores',
      database: 'Base de datos',
      subscriptions: 'Suscripciones',
      aboutUs: 'Sobre nosotros',
      services: 'Servicios',
      contacts: 'Contactos',
      login: 'Iniciar sesión',
      register: 'Registrarse',
      dashboard: 'Área privada',
    },
    // Hero Section
    hero: {
      title: 'La plataforma que conecta el talento sanitario con las oportunidades',
      subtitle: 'MediLinker es el punto de encuentro entre profesionales sanitarios cualificados y estructuras médicas italianas. Encuentra el candidato perfecto o tu próxima oportunidad profesional.',
      ctaEmployer: 'Buscar profesionales',
      ctaWorker: 'Buscar trabajo',
      trustedBy: 'Ya elegido por',
      facilities: 'estructuras sanitarias',
    },
    // Features
    features: {
      title: 'Por qué elegir MediLinker',
      subtitle: 'Una plataforma completa para el reclutamiento sanitario',
      verified: {
        title: 'Perfiles verificados',
        description: 'Cada profesional es verificado por nuestro equipo. Documentos, títulos e inscripciones en colegios profesionales son controlados cuidadosamente.',
      },
      matching: {
        title: 'Coincidencia inteligente',
        description: 'Nuestro sistema de filtros avanzados te permite encontrar exactamente el perfil que buscas en pocos clics.',
      },
      secure: {
        title: 'Seguridad garantizada',
        description: 'Cumplimiento total del RGPD. Los datos sensibles sanitarios están protegidos con los más altos estándares de seguridad.',
      },
      support: {
        title: 'Asistencia completa',
        description: 'Te acompañamos en cada fase: desde el primer contacto hasta la contratación, incluyendo trámites burocráticos y reconocimiento de títulos.',
      },
      multilingual: {
        title: 'Multilingüe',
        description: 'Plataforma disponible en italiano y español, con traducción automática de documentos.',
      },
      whatsapp: {
        title: 'Soporte directo',
        description: 'Chat de WhatsApp dedicado para un soporte rápido y personalizado.',
      },
    },
    // How it works
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'Tres simples pasos para empezar',
      forWorkers: {
        title: 'Para profesionales sanitarios',
        step1: {
          title: 'Crea tu perfil',
          description: 'Regístrate gratis y completa tu perfil con experiencias, títulos de estudio y documentos.',
        },
        step2: {
          title: 'Hazte visible',
          description: 'Tu perfil será visible para estructuras sanitarias italianas que buscan personal cualificado.',
        },
        step3: {
          title: 'Recibe propuestas',
          description: 'Las empresas interesadas te contactarán a través de la plataforma. Nosotros te apoyamos en cada fase.',
        },
      },
      forEmployers: {
        title: 'Para estructuras sanitarias',
        step1: {
          title: 'Registra tu empresa',
          description: 'Crea una cuenta empresarial con los datos de tu estructura sanitaria.',
        },
        step2: {
          title: 'Busca en la base de datos',
          description: 'Utiliza los filtros avanzados para encontrar profesionales con las competencias que buscas.',
        },
        step3: {
          title: 'Contacta candidatos',
          description: 'Con una suscripción activa puedes contactar candidatos y gestionar las contrataciones.',
        },
      },
    },
    // For Companies
    forCompanies: {
      title: 'Para estructuras sanitarias',
      subtitle: 'Encuentra personal sanitario cualificado para tu estructura',
      benefits: {
        title: 'Las ventajas para las empresas',
        database: 'Acceso a una base de datos de profesionales sanitarios cualificados',
        filters: 'Filtros de búsqueda avanzados para encontrar el candidato ideal',
        documents: 'Visualización de documentos y certificados verificados',
        support: 'Asistencia completa en los trámites de contratación',
        visa: 'Soporte para visas y reconocimiento de títulos extranjeros',
      },
      cta: 'Registra tu empresa',
      requirements: {
        title: 'Requisitos para el registro',
        list: [
          'Número de IVA activo',
          'Razón social y dirección de la sede legal',
          'Dirección PEC',
          'Número REA',
          'Referente empresarial',
        ],
      },
    },
    // For Workers
    forWorkers: {
      title: 'Para profesionales sanitarios',
      subtitle: 'Tu carrera en el sector sanitario italiano empieza aquí',
      benefits: {
        title: 'Las ventajas para los trabajadores',
        visibility: 'Visibilidad ante cientos de estructuras sanitarias italianas',
        free: 'Registro y creación de perfil completamente gratuitos',
        support: 'Asistencia en la traducción y validación de documentos',
        recognition: 'Soporte para el reconocimiento de títulos en Italia',
        opportunities: 'Acceso a oportunidades exclusivas de trabajo',
      },
      cta: 'Crea tu perfil',
      profile: {
        title: 'Qué puedes incluir en el perfil',
        list: [
          'Datos personales y contactos',
          'Formación y especializaciones',
          'Experiencia laboral',
          'Inscripción en colegios profesionales',
          'Documentos y certificados',
          'Idiomas hablados y disponibilidad',
        ],
      },
    },
    // Subscriptions
    subscriptions: {
      title: 'Planes de suscripción',
      subtitle: 'Elige el plan más adecuado a tus necesidades',
      monthly: 'Mensual',
      quarterly: 'Trimestral',
      annual: 'Anual',
      perMonth: '/mes',
      popular: 'Más popular',
      features: 'Características incluidas',
      cta: 'Activar ahora',
      contact: 'Contáctanos',
      plans: {
        starter: {
          name: 'Starter',
          description: 'Ideal para pequeñas estructuras',
        },
        professional: {
          name: 'Professional',
          description: 'Para estructuras en crecimiento',
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Para grandes organizaciones',
        },
      },
    },
    // About Us
    aboutUs: {
      title: 'Sobre nosotros',
      subtitle: 'La misión de MediLinker',
      description: 'MediLinker nace de la voluntad de crear un puente entre el talento sanitario internacional y las estructuras médicas italianas que necesitan personal cualificado.',
      mission: {
        title: 'Nuestra misión',
        text: 'Facilitar el encuentro entre oferta y demanda en el sector sanitario, garantizando transparencia, seguridad y apoyo profesional en cada fase del proceso.',
      },
      values: {
        title: 'Nuestros valores',
        trust: {
          title: 'Confianza',
          description: 'Construimos relaciones basadas en la transparencia y la fiabilidad.',
        },
        quality: {
          title: 'Calidad',
          description: 'Seleccionamos y verificamos cada perfil con la máxima atención.',
        },
        support: {
          title: 'Soporte',
          description: 'Acompañamos a usuarios y empresas en cada fase del recorrido.',
        },
      },
    },
    // Services
    services: {
      title: 'Nuestros servicios',
      subtitle: 'Soluciones completas para el reclutamiento sanitario',
      list: {
        recruitment: {
          title: 'Búsqueda y selección',
          description: 'Identificamos los mejores talentos sanitarios para tu estructura a través de un proceso de selección cuidadoso.',
        },
        visa: {
          title: 'Asistencia para visas',
          description: 'Soporte completo para la obtención de visas de trabajo para personal extracomunitario.',
        },
        translation: {
          title: 'Traducción de documentos',
          description: 'Servicio de traducción y validación de documentos y certificados profesionales.',
        },
        recognition: {
          title: 'Reconocimiento de títulos',
          description: 'Asistencia en los procedimientos de reconocimiento de títulos de estudio en Italia.',
        },
        contracts: {
          title: 'Gestión contractual',
          description: 'Soporte en la redacción y gestión de contratos de trabajo.',
        },
        consulting: {
          title: 'Consultoría HR',
          description: 'Servicios de consultoría para la gestión de recursos humanos en el sector sanitario.',
        },
      },
    },
    // Contact
    contacts: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte',
      form: {
        name: 'Nombre y apellido',
        email: 'Email',
        phone: 'Teléfono',
        company: 'Empresa (opcional)',
        subject: 'Asunto',
        message: 'Mensaje',
        submit: 'Enviar mensaje',
        success: '¡Mensaje enviado con éxito!',
        error: 'Error en el envío. Inténtalo de nuevo.',
      },
      info: {
        title: 'Información de contacto',
        address: 'Dirección',
        email: 'Email',
        phone: 'Teléfono',
        hours: 'Horarios',
        hoursValue: 'Lun-Vie: 9:00 - 18:00',
      },
      whatsapp: 'Escríbenos en WhatsApp',
    },
    // Auth
    auth: {
      login: {
        title: 'Accede a tu cuenta',
        email: 'Email',
        password: 'Contraseña',
        remember: 'Recuérdame',
        forgot: '¿Olvidaste la contraseña?',
        submit: 'Acceder',
        noAccount: '¿No tienes cuenta?',
        register: 'Regístrate',
      },
      register: {
        title: 'Crea tu cuenta',
        userType: 'Tipo de usuario',
        worker: 'Profesional sanitario',
        employer: 'Estructura sanitaria',
        email: 'Email',
        password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña',
        terms: 'Acepto los términos y condiciones',
        privacy: 'He leído la política de privacidad',
        submit: 'Registrarse',
        hasAccount: '¿Ya tienes cuenta?',
        login: 'Acceder',
      },
    },
    // Footer
    footer: {
      description: 'La plataforma de encuentro entre profesionales sanitarios y estructuras médicas italianas.',
      quickLinks: 'Enlaces rápidos',
      legal: 'Legal',
      privacy: 'Política de privacidad',
      terms: 'Términos y condiciones',
      cookies: 'Política de cookies',
      gdpr: 'Información RGPD',
      followUs: 'Síguenos',
      newsletter: {
        title: 'Newsletter',
        placeholder: 'Tu email',
        submit: 'Suscribirse',
      },
      copyright: '© 2024 MediLinker. Todos los derechos reservados.',
    },
    // Common
    common: {
      learnMore: 'Saber más',
      getStarted: 'Empezar ahora',
      contactUs: 'Contáctanos',
      loading: 'Cargando...',
      error: 'Se ha producido un error',
      success: 'Operación completada',
      save: 'Guardar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Eliminar',
      search: 'Buscar',
      filter: 'Filtrar',
      reset: 'Restablecer',
      next: 'Siguiente',
      previous: 'Anterior',
      yes: 'Sí',
      no: 'No',
    },
  },
};

export function getTranslation(locale: 'it' | 'es', key: string): string {
  const keys = key.split('.');
  let value: string | string[] | Translation = translations[locale];

  for (const k of keys) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value) && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}
