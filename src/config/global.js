export default {
  global: {
    componenteFormativo: 'Venta consultiva de productos financieros',
    descripcionCurso:
      'El programa de venta consultiva busca formar asesores integrales, quienes, basados en esta metodología, puedan ser más competitivos en un mundo altamente tecnológico y enfocado a los negocios virtuales. Es necesario brindar un enfoque diferencial entre el tipo de venta tradicional y la venta consultiva para poder enfocarse en un tipo de venta de productos de manera digital y hacer énfasis en el <em>e-commerce</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-portada.png'),
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
        titulo: 'Introducción a la venta consultiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de ventas',
            hash: '1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estado venta consultiva',
            hash: '1-2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación y organización de la venta consultiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Segmentación del mercado objetivo',
            hash: '2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Presentación del producto al objetivo establecido',
            hash: '2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Herramientas para desarrollar los diferentes tipos de ventas',
            hash: '2-3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ejecución y cierre del proceso de venta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Retroalimentación y mejoramiento del proceso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Marco legal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Programación neurolingüística (PNL) y motivacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Mercadeo o ventas digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: '<em>E-commerce</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  referencias: [
    {
      referencia:
        'Grandas, S. (2016). Venta consultiva: herramienta para incrementar la competitividad de las organizaciones. Universidad Militar Nueva Granada.',
      // link:
      //   'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      referencia:
        'Gutierrez, S. (2020). Formulación e implementación del plan de ventas digitales. Universidad de Guadalajara. ',
      // link:
      //   'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
    },
    {
      referencia:
        'Nguyen, H., Havitch, L. y Moulinier, R. (2011). Escuchar para vender. Empresa Activa. ',
    },
    {
      referencia:
        'Ongallo, C. (2012). La motivación del equipo de ventas. Ediciones Diaz de Santos.',
      // link:
      //   'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Pereira, Y. y Huancachoque, R. (2018). El perfeccionamiento de la venta de productos y servicios ofertados por medios electrónicos y el cumplimiento de las condiciones de oferta. Universidad Andina del Cusco.',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de venta',
      significado:
        'este proceso está compuesto por una serie de pasos o etapas encaminadas y necesarias para lograr la venta de un producto, un bien o un servicio, desde el primer contacto con el cliente hasta la postventa.',
    },
    {
      termino: 'E-commerce',
      terminoHtml: '<em>E-commerce</em>',
      significado:
        'también conocido como comercio electrónico, es un medio o sistema de compra y venta de productos y/o servicios que, por medio de Internet, es utilizado como medio principal de pago; hace que las ventas sean más asequibles al consumidor o cliente final',
    },
    {
      termino: 'Gana-gana',
      significado:
        'acción donde tanto consumidor como empresa disfrutan de los beneficios de la negociación.',
    },
    {
      termino: 'Inbound sales',
      terminoHtml: '<em>Inbound sales</em>',
      significado:
        'hace referencia al enfoque de compra del cliente para el proceso de venta.',
    },
    {
      termino: 'Online',
      terminoHtml: '<em>Online</em>',
      significado:
        'dícese de la condición en que se encuentran los consumidores cuando usan medios electrónicos.',
    },
    {
      termino: 'Venta digital',
      significado:
        'es la nueva forma como las empresas desarrollan nuevos negocios, enfocándose en llegar al cliente, usuario o consumidor, por medio de canales digitales, medios <em>online</em>, redes sociales y estrategias en Internet.',
    },
  ],
  complementario: [
    {
      texto:
        'Academia de Consultores. (2018). ¿Qué es el proceso de ventas y cuáles son sus fases? (Modelo AIDA).',
      tipo: 'Blog',
      link: 'https://academiadeconsultores.com/proceso-de-ventas/',
    },
    {
      texto:
        'Panero, M. (2021, 23 julio). Webinar: 10 herramientas para la venta consultiva [Video]. YouTube.',
      tipo: 'Video-Webinar',
      link: 'https://www.youtube.com/watch?v=_QkfE0gEjno',
    },
    {
      texto: 'Mañas, L. (2016). Manual: técnicas de venta. Editorial CEP.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/51094',
    },
    {
      texto:
        'Amengual, J. (2019, 9 abril). ¿Cómo hacer venta consultiva ? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u8Z0wikOkq8',
    },
    {
      texto:
        'Fernández, M. (2021). Top 7 de técnicas para la venta empresarial consultiva en el 2021. Parrot CRM.',
      tipo: 'Blog',
      link:
        'https://theparrotcrm.com/blog/top-7-de-t%C3%A9cnicas-para-la-venta-empresarial-consultiva-en-el-2021',
    },
    {
      texto:
        'Muñoz, C. [ Carlos Master Muñoz]. (2019, 15 noviembre). ¿Cómo funciona el E COMMERCE? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OdwuYkeZMHI',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Luis Rangel Ayala',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez B.',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: [
          'Milady Tatiana Villamil Castellanos',
          'Álvaro Andres Angarita Ramirez',
          'Daniel Felipe Varón Molina',
        ],
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
