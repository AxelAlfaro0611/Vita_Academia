const carousel = [
    {
        img: 'inicio_clases',
    },
    {
        img: 'pizarra',
    },
]

const servicios = [
    {
        title: 'pizarra_interactiva',
        link: './servicios/pizarra-interactiva/index.html'
    },
    
    {
        title: 'tutoría personalizada',
        link: './servicios/tutoría/index.html'
    },
    {
        title: 'psicopedagogia',
        link: './servicios/psicopedagogia/index.html'
    },
    {
        title: 'aula_virtual',
        link: '#servicsios'
    },
]

const universidades = {
    "unmsm" : [
        "San Marcos",
        "Universidad Nacional Mayor de San Marcos"
    ],
    "unfv" : [
        "Villarreal",
        "Universidad Nacional Federico Villarreal"
    ],
    "unac" : [
        "Callao",
        "Universidad Nacional del Callao"
    ],
    "uni" : [
        "UNI",
        "Universidad Nacional de Ingeniería"
    ],
    "unalm" : [
        "Agraria",
        "Universidad Nacional Agraria la Molina"
    ],
    "particulares" : [
        "Particulares",
        "Universidades particulares"
    ],
    "escolares" : [
        "Escolares",
        "Colegios del Perú"
    ],
}

const ciclos = [
    {
        id: 'escolar',
        titulo: 'Ciclo Escolar (1° a 3° de secundaria)',
        objetivo: 'Brindar una formación académica sólida y progresiva que complemente el currículo escolar, reforzando las áreas críticas como matemáticas, comunicación, ciencias y habilidades analíticas desde una etapa temprana.',
        caracteristicas: [
            'Enfoque en el desarrollo de bases académicas y habilidades para un aprendizaje autónomo.',
            'Clases dinámicas con metodologías participativas adaptadas al nivel escolar.',
            'Preparación anticipada en temas que serán clave en grados superiores.',
            'Refuerzo académico para lograr un mejor desempeño en el colegio.',
        ],
        duracion: [
            'Se realiza en paralelo al año escolar.',
            'Frecuencia: Interdiario en turno mañana y turno tarde de acuerdo a elección y disponibilidad del estudiante.',

        ],
    },
    {
        id: 'verano',
        titulo: 'Ciclo de Verano (4° y 5° de secundaria, egresados)',
        objetivo: 'Aprovechar el periodo de vacaciones para preparar a los estudiantes en temas preuniversitarios clave, fomentando una transición eficiente hacia los retos académicos de los últimos años de secundaria o la postulación a la universidad.',
        caracteristicas: [
            'Intensivo en matemáticas, razonamiento verbal, física, química, y biología.',
            'Énfasis en técnicas de estudio, comprensión lectora y resolución de problemas.',
            'Ideal para nivelar conocimientos y prepararse para ciclos más avanzados.',

        ],
        duracion: [
            'Enero y febrero (2 meses).',
            'Frecuencia: De lunes a sábado en turno mañana y tarde.',
        ],
    },
    {
        id: 'repaso',
        titulo: 'Ciclo de Repaso Intensivo (Postulantes a universidades)',
        objetivo: 'Consolidar y perfeccionar los conocimientos necesarios para rendir con éxito exámenes de admisión a universidades nacionales o privadas.',
        caracteristicas: [
            'Resolución de simulacros basados en los exámenes de admisión más recientes.',
            'Clases personalizadas para reforzar áreas de bajo rendimiento.',
            'Talleres de estrategias para responder bajo presión en los exámenes.',
            'Énfasis en áreas según la universidad y carrera elegida (ciencias, letras, ingeniería, etc.).',

        ],
        duracion: [
            '1 a 3 meses antes del examen de admisión.',
            'Frecuencia: Intensivo diario en turno mañana.',
        ],
    },
    {
        id: 'anual',
        titulo: 'Ciclo Anual',
        objetivo: 'Preparar integralmente a los estudiantes para los exámenes de admisión de las principales universidades y fortalecer su formación académica general.',
        caracteristicas: [
            'Curso completo que abarca todas las áreas temáticas necesarias para ingresar a la universidad.',
            'Evaluaciones periódicas para medir avances y reforzar conocimientos.',
            'Plan personalizado para cada estudiante basado en su nivel y metas.',
            'Docentes especializados con amplia experiencia en preparación preuniversitaria.',


        ],
        duracion: [
            'Marzo a diciembre (10 meses).',
            'Frecuencia: De lunes a sábado, horarios flexibles (mañana, tarde o noche).',
        ],
    },
    {
        id: 'semestral',
        titulo: 'Ciclo Semestral',
        objetivo: 'Ofrecer una preparación compacta e intensiva para estudiantes que desean rendir exámenes de admisión en un periodo más corto.',
        caracteristicas: [
            'Enfoque práctico en resolución de ejercicios y simulacros tipo examen.',
            'Revisión exhaustiva de temarios clave en un tiempo reducido.',
            'Ideal para quienes tienen bases previas o necesitan una preparación rápida.',
        ],
        duracion: [
            '6 meses (por ejemplo, marzo a agosto o agosto a febrero).',
            'Frecuencia: Clases diarias de lunes a sábado, con horarios intensivos.',
        ],
    },
]

const arreglo_ciclos = [
    {
        tipo: 'publica',
        universidades: [
            "unmsm",
        ],
        ciclos: [
            {
                tipo: "verano",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
            {
                tipo: "repaso",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
        ]
    },
    {
        tipo: 'publica',
        universidades: [
            "unfv",
        ],
        ciclos: [
            {
                tipo: "verano",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
            {
                tipo: "repaso",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
        ]
    },
    {
        tipo: 'publica',
        universidades: [
            "uni",
        ],
        ciclos: [
            {
                tipo: "verano",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
            {
                tipo: "repaso",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
        ]
    },
    {
        tipo: 'publica',
        universidades: [
            "unalm",
        ],
        ciclos: [
            {
                tipo: "verano",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
            {
                tipo: "repaso",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
        ]
    },
    {
        tipo: 'particular',
        universidades: [
            "particulares",
        ],
        ciclos: [
            {
                tipo: "Verano PUCP",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
            {
                tipo: "Repaso PUCP",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
        ]
    },
    {
        tipo: 'escolar',
        universidades: [
            "escolares",
        ],
        ciclos: [
            {
                tipo: "Verano Matematica",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
            {
                tipo: "Verano Lenguaje",
                text: `
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni ad, assumenda amet tempora quam earum quidem dolorem! Optio dolorum non at earum natus soluta ut nobis consectetur consequatur alias eaque, itaque minus doloribus. Explicabo, odio voluptates laudantium vero molestiae numquam quaerat impedit ipsum dignissimos praesentium quidem dicta! Similique, obcaecati. Iste, inventore aliquid delectus dolores voluptatum officiis error! Labore, incidunt.
                `,
                inicio: '02 de Enero del 2025',
                modalidad: 'Prescencial',
                duracion: '9 semanas',
                'dias': 'Lunes a Sábados',
                horarios: {
                    mañana : "08:00am - 13:00pm",
                    tarde : "08:00am - 13:00pm",
                    noche : "08:00am - 13:00pm",
                }
            },
        ]
    },
]