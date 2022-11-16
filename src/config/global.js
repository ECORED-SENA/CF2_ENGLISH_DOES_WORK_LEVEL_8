export default {
  global: {
    componenteFormativo:
      '<em> I was wondering if...</em> <br> <span class= r--4>Me preguntaba si…</span> ',
    descripcionCurso:
      'Este componente va a ser la introducción al estudio de diferentes tipos de textos, se combinarán los tiempos verbales y se revisarán algunas lecturas cuyo tema principal es el empleo y la vida social. Se trabajará con características y diferencias de tipos de textos (descriptivo, expositivo y periodístico), técnicas de comprensión lectora (<em> scanning</em> y <em>skimming</em>), y comunicaciones escritas (<em>e-mails</em> y <em>documents</em>). Se estudiarán los marcadores de discurso y algo relacionado con preguntas formales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a8.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Types of texts</em> (Tipos de texto)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Verb tenses</em> (Tiempos verbales)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Irregular verbs</em> (Verbos irregulares)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Reading comprehension</em> (Comprensión de lectura)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Linkers</em> (Conectores)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Let&#x2019s talk about job</em> (Hablemos de empleo)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>Interviews</em> (Entrevistas)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Important questions</em> (Preguntas relevantes) ',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Types of texts (Tipos de textos)',
      referencia:
        'Palme, B. (2011). The range of documentary texts: Types and categories. En R. Bagnall (Ed.), The Oxford Handbook of Papyrology. Oxford Academic. ',
      tipo: 'Artículo',
      link: 'https://doi.org/10.1093/oxfordhb/9780199843695.013.0016',
    },
    {
      tema: 'Verb tenses (Tiempos verbales)',
      referencia:
        'Caplan, N. (2019). Grammar choices for graduate and professional writers. University of Michigan Press ELT.',
      tipo: 'Artículo',
      link:
        'https://academicguides.waldenu.edu/writingcenter/grammar/verbtenses',
    },
    {
      tema: 'Irregular verbs (Verbos irregulares)',
      referencia:
        'Mind Blooming. (2020). Verbs Part 3: Simple Verb Tenses (Past, Present, and Future Tense) |English For Kids | Mind Blooming [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4Rm9l6y3-WY',
    },
    {
      tema: 'Reading comprehension (Comprensión de lectura)',
      referencia:
        'Michaelis, L. (2021). Tense in English. En B. Aarts (Ed.), The Handbook of English Linguistics. Wiley-Blackwell. ',
      tipo: 'Web',
      link:
        'https://www.researchgate.net/publication/228045646_Tense_in_English',
    },
    {
      tema: 'Let&#x2019s talk about job (Hablemos de empleo)',
      referencia:
        'Raynier, L. (2017). How to Get a Job With No Experience [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OF8nx8Pt0tI',
    },
    {
      tema: 'Interviews (Entrevistas)',
      referencia:
        'Paulhus, D., Westlake, B., Calvez, S. y Harms, P. (2013). Self‐presentation style in job interviews: the role of personality and culture. Journal of Applied Social Psychology, 43(10), p. 2042-2059. ',
      tipo: 'Artículo',
      link: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/jasp.12157',
    },
    {
      tema: 'Important questions (Preguntas relevantes)',
      referencia:
        'Foti, R. (2011). Academic Job Interviews: Questions and Advice. Virginia Tech.',
      tipo: 'PDF',
      link:
        'https://vtechworks.lib.vt.edu/bitstream/handle/10919/72241/gsls_roseanne_foti_interviews.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Texto descriptivo',
      significado:
        'elaboración escrita en la que se cuenta acerca de la apariencia física de un objeto, animal, cosa, situación, etc.',
    },
    {
      termino: 'Texto periodístico',
      significado:
        'los textos periodísticos son textos publicados en medios escritos (como periódicos, revistas o páginas web informativas), cuya función principal es informar al lector sobre un tema de interés general.',
    },
    {
      termino: 'Texto explicativo',
      significado:
        'brinda información sobre hechos y conceptos específicos. Su objetivo principal es difundir contenido comprensible para el receptor. Por ejemplo: la definición de un concepto en un diccionario, el contenido de los manuales de estudio o un artículo de ciencia publicado en una revista.',
    },
    {
      termino: '<em>Skimming</em>',
      significado:
        'técnica que se usa para buscar las ideas principales de un texto leyendo los primeros y últimos párrafos, los títulos y subtítulos, los epígrafes de cada apartado, buscando la estructura de los contenidos que se van a desarrollar a lo largo de las páginas.',
    },
    {
      termino: '<em>Scanning</em>',
      significado:
        'también conocida como “búsqueda de información específica”, se trata de una lectura de exploración, de escaneo, para localizar algún dato concreto (como, por ejemplo, una búsqueda en un diccionario o localizar una fecha en un tema). ',
    },
  ],
  referencias: [
    {
      referencia:
        'British Council. (2021). Cultural behaviour in business. British Council LearnEnglish.',
      link:
        'https://learnenglish.britishcouncil.org/skills/reading/c1-reading/cultural-behaviour-in-business',
    },
    {
      referencia:
        'Diaz, S. y Laguado, J. (2013). Improving reading skills through skimming and scanning techniques at a public school: Action research. Opening Writing Doors Journal, 10(1), p. 133-150.',
      link: '',
    },
    {
      referencia:
        'Hashemi, L. y Murphy, R. (2004). English Grammar in Use. Supplementary exercises. Cambridge.',
      link: '',
    },
    {
      referencia:
        'McNamara, D. (Ed.). (2007). Reading comprehension strategies: Theories, interventions, and technologies. Psychology Press.',
      link: '',
    },
    {
      referencia:
        'Pulakos, E. y Schmitt, N. (1995). Experience‐based and situational interview questions: Studies of validity. Personnel Psychology, 48(2), p. 289-308.',
      link: '',
    },
    {
      referencia:
        'Uchiyama, K. (2006). English Verb Tenses: An informal reference for ESL students, the good folks who teach them, and the idly curious',
      link:
        'https://kenanaonline.com/files/0064/64047/english-verb-tenses-englize.com.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo de Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edith Grande',
        cargo: 'Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios – CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital  ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
