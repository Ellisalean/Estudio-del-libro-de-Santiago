import * as Icons from './components/Icons.tsx';

export const SectionId = {
    INTRO: 'INTRO',
    AUTHOR: 'AUTHOR',
    CONTEXT: 'CONTEXT',
    PURPOSE: 'PURPOSE',
    STYLE: 'STYLE',
    STRUCTURE: 'STRUCTURE',
    CONTRIBUTION: 'CONTRIBUTION',
    CHAPTER_1: 'CHAPTER_1',
    CHAPTER_2: 'CHAPTER_2',
    CHAPTER_3: 'CHAPTER_3',
    CHAPTER_4: 'CHAPTER_4',
    CHAPTER_5: 'CHAPTER_5',
    TRIVIA: 'TRIVIA'
};

export const sectionsData = [
    { id: SectionId.INTRO, title: 'Introducción', icon: Icons.HomeIcon },
    { id: SectionId.AUTHOR, title: 'Autor', icon: Icons.UserIcon },
    { id: SectionId.CONTEXT, title: 'Contexto', icon: Icons.GlobeIcon },
    { id: SectionId.PURPOSE, title: 'Propósito', icon: Icons.TargetIcon },
    { id: SectionId.STYLE, title: 'Estilo', icon: Icons.FeatherIcon },
    { id: SectionId.STRUCTURE, title: 'Estructura', icon: Icons.PuzzlePieceIcon },
    { id: SectionId.CONTRIBUTION, title: 'Aportación', icon: Icons.BookOpenIcon },
    { id: SectionId.CHAPTER_1, title: 'Capítulo 1: Estudio', icon: Icons.AcademicCapIcon },
    { id: SectionId.CHAPTER_2, title: 'Capítulo 2: Estudio', icon: Icons.GavelIcon },
    { id: SectionId.CHAPTER_3, title: 'Capítulo 3: Estudio', icon: Icons.ScaleIcon },
    { id: SectionId.CHAPTER_4, title: 'Capítulo 4: Estudio', icon: Icons.ArrowsRightLeftIcon },
    { id: SectionId.CHAPTER_5, title: 'Capítulo 5: Estudio', icon: Icons.HeartIcon },
    { id: SectionId.TRIVIA, title: 'Trivia IA', icon: Icons.QuestionMarkCircleIcon }
];

export const SANTIAGO_CHAPTER_1 = {
    header: {
        title: "La Epístola de Santiago: Capítulo 1",
        subtitle: "La fe puesta a prueba y en acción",
        description: "El primer capítulo de la Epístola de Santiago establece los cimientos para el resto del libro, abordando temas cruciales como la perseverancia en las pruebas, la búsqueda de la sabiduría divina, la naturaleza de la tentación y la importancia de que la fe se manifieste en acciones prácticas. El autor, Santiago, busca que sus lectores no solo oigan la Palabra de Dios, sino que la hagan vida."
    },
    section1: {
        title: "El Saludo y los Destinatarios",
        verse: "Santiago 1:1",
        accordionItems: [
            {
                title: "¿Quién es Santiago?",
                content: "La carta es atribuida a Santiago, el hermano de Jesús (también conocido como Jacobo el Justo). Aunque no fue uno de los doce apóstoles, se convirtió en una figura de gran importancia y líder de la primera iglesia en Jerusalén, siendo descrito por Pablo como uno de los 'pilares' de la Iglesia. Se presenta con humildad como un 'siervo de Dios y del Señor Jesucristo'."
            },
            {
                title: "¿Quiénes son los Destinatarios?",
                content: "La epístola está dirigida a 'las doce tribus que están en la dispersión' (la diáspora). Esto se refiere a las comunidades judeocristianas que vivían fuera de Palestina, esparcidas por varias regiones. Su propósito era instruir y animar a los creyentes en la fe cristiana."
            },
            {
                title: "Nota del Erudito",
                content: "Algunos estudiosos sugieren que el estilo del griego culto de la epístola, y su aceptación gradual en el canon del Nuevo Testamento, podrían indicar una autoría posterior, o que la carta fue pulida por otro escritor. Sin embargo, la tradición mayoritaria la atribuye al hermano de Jesús."
            }
        ],
        debate: {
            title: "Pregunta para Debatir",
            question: "¿Por qué crees que Santiago eligió dirigirse a 'las doce tribus' si su audiencia eran cristianos? ¿Qué implicaciones tiene esto sobre la identidad de la iglesia primitiva?"
        }
    },
    section2: {
        title: "El Valor de las Pruebas y la Sabiduría",
        verse: "Santiago 1:2-18",
        timeline: {
            title: "El Propósito Divino de las Pruebas (1:2-4)",
            steps: [
                { icon: Icons.SparklesIcon, title: "Pruebas Diversas", description: "El punto de partida: dificultades externas que ponen a prueba la fe." },
                { icon: Icons.Cog8ToothIcon, title: "Prueba de la Fe", description: "Este proceso refina y fortalece la creencia genuina." },
                { icon: Icons.AnchorIcon, title: "Produce Paciencia", description: "La perseverancia se desarrolla como resultado de resistir las pruebas." },
                { icon: Icons.CheckCircleIcon, title: "Conduce a la Madurez", description: "El objetivo final: ser 'perfectos y cabales', completos en el carácter." }
            ]
        },
        flipCards: [
            {
                front: { icon: Icons.LightBulbIcon, title: "La Sabiduría de Dios", subtitle: "Santiago 1:5-8" },
                back: {
                    title: "Un Don Divino",
                    content: "Reconociendo que ver las pruebas con gozo requiere una sabiduría especial, Santiago insta a sus lectores a pedirla a Dios, quien la da generosamente. Es crucial pedir con fe, 'no dudando nada', ya que una persona de 'doble ánimo' es inestable e inconstante."
                }
            },
            {
                front: { icon: Icons.ScaleIcon, title: "Pobreza y Riqueza", subtitle: "Santiago 1:9-11" },
                back: {
                    title: "Una Perspectiva Eterna",
                    content: "Santiago enfatiza la fugacidad de las riquezas materiales, comparándolas con la flor que se marchita. El hermano humilde debe gloriarse en su exaltación espiritual y el rico en su humillación, reconociendo el verdadero valor."
                }
            }
        ],
        dragDrop: {
            title: "El Origen de la Tentación y la Promesa Divina (1:12-18)",
            instruction: "Arrastra cada 'Fuente' a su 'Resultado' correcto para entender la enseñanza de Santiago.",
            sources: [
                { id: 'source-4', text: 'Dios (El Padre de las luces)' },
                { id: 'source-2', text: 'Malos Deseos (Concupiscencia)' },
                { id: 'source-5', text: 'La Palabra de Verdad' },
                { id: 'source-1', text: 'Perseverancia en la prueba' },
                { id: 'source-3', text: 'Pecado (una vez consumado)' },
            ],
            targets: [
                { id: 'target-1', accepts: 'source-1', label: 'Resultado de la Perseverancia', text: 'Recibe la corona de la vida.' },
                { id: 'target-2', accepts: 'source-2', label: 'Resultado de la Concupiscencia', text: 'Arrastra y seduce a la tentación.' },
                { id: 'target-3', accepts: 'source-3', label: 'Resultado del Pecado', text: 'Da a luz la Muerte.' },
                { id: 'target-4', accepts: 'source-4', label: 'Resultado de Dios', text: 'Fuente de toda buena dádiva y don perfecto.' },
                { id: 'target-5', accepts: 'source-5', label: 'Resultado de la Palabra', text: 'Nos hace nacer como primicias de su creación.' }
            ]
        }
    },
    section3: {
        title: "Oyentes y Hacedores de la Palabra",
        verse: "Santiago 1:19-27",
        comparison: {
            title: "Instrucciones Prácticas (1:19-20)",
            dos: { title: "Lo que Debemos Hacer", items: ["Ser prontos para oír", "Recibir la palabra con mansedumbre", "Ser hacedores de la palabra"], icon: Icons.CheckCircleIcon, color: "green" },
            donts: { title: "Lo que Debemos Evitar", items: ["Ser tardos para hablar", "Ser tardos para airarse", "Ser solamente oidores olvidadizos"], icon: Icons.XCircleIcon, color: "red" }
        },
        analogy: {
            title: "La Analogía del Espejo (1:21-25)",
            description: "El que solo oye pero no practica, se engaña a sí mismo. Es como una persona que se mira en un espejo y luego olvida cómo era su rostro. La bendición viene al mirar 'atentamente en la perfecta ley de la libertad' y perseverar en ella.",
            imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b9f9faf6-8c9b-4149-86aa-8add6899f787_rw_1920.png?h=b6fbe1a79fc64bdfdab9e3d6020b44c0"
        },
        trivia: {
            question: 'Según Santiago 1:27, ¿cuáles son los dos componentes clave de la "religión pura y sin mácula"?',
            options: [
                "Orar constantemente y ayunar dos veces por semana.",
                "Cuidar a los vulnerables (huérfanos y viudas) y mantenerse puro del mundo.",
                "Asistir a la iglesia cada semana y dar el diezmo.",
                "Refrenar la lengua y estudiar las escrituras diariamente."
            ],
            answerIndex: 1,
            explanation: "Santiago 1:27 define explícitamente la religión auténtica con estas dos acciones: el amor práctico hacia los necesitados y la santidad personal."
        }
    }
};

export const SANTIAGO_CHAPTER_2 = {
    header: {
        title: "La Epístola de Santiago: Capítulo 2",
        subtitle: "Fe sin Favoritismo, Fe con Obras",
        description: "El capítulo 2 es una de las secciones más directas y confrontadoras de la Biblia. Santiago aborda dos pruebas cruciales de una fe genuina: cómo tratamos a los demás, especialmente a los pobres (la prueba social), y qué produce nuestra fe en términos de acciones concretas (la prueba práctica). Este capítulo nos obliga a mirar más allá de nuestras palabras y examinar la verdadera naturaleza de nuestra devoción.",
        keyVerse: {
            citation: "Santiago 2:26",
            text: "Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está muerta."
        }
    },
    section1: {
        title: "Análisis del Texto: El Pecado de la Parcialidad",
        verse: "Santiago 2:1-13",
        scenario: {
            title: "El Escenario en la Asamblea",
            description: "Santiago presenta una situación hipotética para exponer el favoritismo. Imagina esta escena en tu comunidad:",
            visitor1: {
                name: "Visitante Próspero",
                description: "Un hombre con anillo de oro y ropa espléndida.",
                imageUrl: "https://www.shutterstock.com/image-photo/man-holding-money-hand-black-260nw-710867164.jpg"
            },
            visitor2: {
                name: "Visitante Humilde",
                description: "Un pobre con vestido andrajoso.",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThcLsLUOtTvyTiyXZo_440g-QIcYSXs7hZFA&s"
            }
        },
        analysis: {
            title: "El Veredicto de Santiago",
            text: "Al dar preferencia al rico, no solo deshonran al pobre, sino que actúan como 'jueces con malos pensamientos' (v. 4). Están juzgando por apariencias, un estándar del mundo, no del Reino. Esto es una contradicción directa a la fe en un Señor glorioso que se identificó con los humildes."
        }
    },
    section2: {
        title: "Análisis del Texto: Fe y Obras",
        verse: "Santiago 2:14-26",
        comparison: {
            title: "Fe Viva vs. Fe Muerta",
            living: {
                title: "Fe Viva (Genuina)",
                icon: Icons.HeartIcon,
                points: [
                    "Se demuestra con acciones.",
                    "Es práctica y compasiva.",
                    "Produce transformación.",
                    "Es la fe de Abraham y Rahab."
                ]
            },
            dead: {
                title: "Fe Muerta (Inútil)",
                icon: Icons.Cog8ToothIcon,
                points: [
                    "Es solo una confesión verbal.",
                    "Es pasiva e indiferente.",
                    "No tiene poder para salvar.",
                    "Es la 'fe' de los demonios (creen y tiemblan)."
                ]
            }
        },
        examples: {
            title: "Ejemplos Bíblicos de Fe Viva",
            cards: [
                {
                    front: { icon: Icons.UserIcon, title: "Abraham", subtitle: "El Padre de la Fe" },
                    back: { title: "Fe Probada por Obras", content: "La fe de Abraham fue contada por justicia (Gén. 15), pero fue perfeccionada y demostrada como genuina cuando ofreció a Isaac (Gén. 22). Su obediencia fue el fruto visible de su fe invisible." }
                },
                {
                    front: { icon: Icons.HomeIcon, title: "Rahab", subtitle: "La Posadera de Jericó" },
                    back: { title: "Fe Demostrada en Acción", content: "Rahab no fue justificada solo por creer en el Dios de Israel, sino porque actuó sobre esa creencia, arriesgando su vida para proteger a los espías. Sus obras fueron la evidencia de su fe." }
                }
            ]
        }
    },
    section3: {
        title: "Conceptos Clave y Aplicación Práctica",
        glossary: {
            title: "Glosario de Términos Importantes",
            terms: [
                { title: "Acepción de Personas (Parcialidad)", content: "Del griego 'prosopolempsia', significa literalmente 'recibir el rostro'. Se refiere a juzgar o tratar a alguien basándose en su apariencia externa, estatus social, riqueza o poder, en lugar de su valor intrínseco como persona." },
                { title: "La Ley Real", content: "Santiago se refiere al mandamiento de 'Amarás a tu prójimo como a ti mismo' (Levítico 19:18). La llama 'real' porque es la ley del Rey (Jesús) y resume el corazón de toda la ley moral. Cumplir esta ley es el antídoto contra el favoritismo." },
                { title: "Fe Muerta", content: "No se refiere a la ausencia de fe, sino a una fe que es inútil e inoperante. Es un asentimiento puramente intelectual a una verdad teológica que no produce ningún cambio en el comportamiento, la compasión o las acciones de una persona." }
            ]
        },
        application: {
            title: "Aplicación para la Vida Actual",
            points: [
                "**Auditoría de Parcialidad:** Examina tus propias actitudes. ¿A quién admiras más? ¿A quién invitas a tu casa? ¿Cómo tratas al personal de servicio en comparación con un ejecutivo? La 'ley real' nos llama a ver a todos con los ojos de Cristo.",
                "**Fe en Acción:** No te preguntes '¿Tengo fe?', sino '¿Qué está haciendo mi fe?'. Elige una forma práctica esta semana de servir a alguien en necesidad, no como un medio para ganar la salvación, sino como una expresión de la salvación que ya tienes.",
                "**Coherencia Integral:** El mensaje de Santiago es un llamado a la integridad. Que no haya desconexión entre tu devoción del domingo y tu comportamiento del lunes. Tu fe debe ser visible en tu ética de trabajo, en cómo hablas y en cómo usas tus recursos."
            ]
        }
    },
    trivia: {
        title: "Prueba tu Conocimiento",
        questions: [
            {
                question: 'Santiago advierte que si muestras favoritismo, te conviertes en...',
                options: ["Un mal anfitrión", "Un fariseo moderno", "Juez con malos pensamientos", "Una persona imprudente"],
                answerIndex: 2,
                explanation: 'En Santiago 2:4, él dice: "¿no hacéis distinciones entre vosotros mismos, y venís a ser jueces con malos pensamientos?"'
            },
            {
                question: 'Según Santiago 2:19, ¿quiénes también "creen" que Dios es uno, y tiemblan?',
                options: ["Los ángeles", "Los profetas del Antiguo Testamento", "Los demonios", "Los apóstoles"],
                answerIndex: 2,
                explanation: "Santiago usa este ejemplo para mostrar que la creencia intelectual por sí sola no es fe salvadora, ya que incluso los demonios tienen una doctrina correcta pero no son salvos."
            },
            {
                question: "Al cumplir la 'ley real' de amar al prójimo, Santiago dice que...",
                options: ["Ganas el favor de Dios", "Haces bien", "Te conviertes en un buen ciudadano", "Eres perfecto"],
                answerIndex: 1,
                explanation: 'Santiago 2:8 dice: "Si en verdad cumplís la ley real, conforme a la Escritura: Amarás a tu prójimo como a ti mismo, bien hacéis."'
            }
        ]
    }
};

export const SANTIAGO_CHAPTER_3 = {
    header: {
        title: "La Epístola de Santiago: Capítulo 3",
        subtitle: "El Poder de la Lengua y la Sabiduría Verdadera",
        description: "El capítulo 3 se sumerge en dos indicadores clave de la madurez espiritual: el control de la lengua y la manifestación de una sabiduría que proviene de Dios. Santiago utiliza metáforas poderosas para ilustrar el inmenso poder, tanto para bien como para mal, que reside en nuestras palabras. Luego, contrasta la sabiduría del mundo, llena de envidia y ambición, con la sabiduría celestial, que es pura, pacífica y misericordiosa.",
        keyVerse: {
            citation: "Santiago 3:17",
            text: "Pero la sabiduría que es de lo alto es primeramente pura, después pacífica, amable, benigna, llena de misericordia y de buenos frutos, sin incertidumbre ni hipocresía."
        }
    },
    section1: {
        title: "El Poder Indomable de la Lengua",
        verse: "Santiago 3:1-12",
        metaphors: {
            title: "Metáforas del Poder",
            items: [
                { name: "El Freno del Caballo", text: "Así como un pequeño freno dirige a un gran caballo, nuestras palabras dirigen nuestra vida.", icon: Icons.Cog8ToothIcon },
                { name: "El Timón del Barco", text: "Un pequeño timón gobierna una nave inmensa en medio de la tormenta; la lengua tiene un poder similar.", icon: Icons.AnchorIcon },
                { name: "El Fuego del Bosque", text: "Una pequeña chispa puede incendiar un bosque entero, ilustrando el potencial destructivo de la lengua.", icon: Icons.SparklesIcon }
            ]
        },
        analogy: {
            title: "La Analogía de la Fuente",
            verse: "Santiago 3:11-12",
            text: "Santiago argumenta que es una contradicción fundamental que de la misma boca salgan bendición y maldición. Lo compara con una fuente: no puede brotar agua dulce y amarga del mismo manantial. Esta inconsistencia revela un problema en el corazón, la fuente de nuestras palabras.",
            imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/59c04355-9e0a-449c-96dd-a5318b7bbae4_rw_1920.png?h=012a955835c2439ea864e7e1327c0302"
        }
    },
    section2: {
        title: "Las Dos Sabidurías",
        verse: "Santiago 3:13-18",
        comparison: {
            title: "Sabiduría Terrenal vs. Sabiduría Celestial",
            earthly: {
                title: "Sabiduría Terrenal",
                icon: Icons.GlobeIcon,
                characteristics: [
                    "Origen: Terrenal, animal, diabólica.",
                    "Motivación: Celos amargos y contención (ambición egoísta).",
                    "Resultado: Perturbación y toda obra perversa."
                ]
            },
            heavenly: {
                title: "Sabiduría Celestial",
                icon: Icons.LightBulbIcon,
                characteristics: [
                    "Origen: Desciende 'de lo alto' (de Dios).",
                    "Motivación: Mansedumbre y humildad.",
                    "Resultado: Pura, pacífica, amable, benigna, llena de misericordia y buenos frutos."
                ]
            }
        }
    },
    application: {
        title: "Aplicación Práctica",
        points: [
            { title: "El Desafío del Silencio", content: "Practica el 'pronto para oír, tardo para hablar' (1:19). Antes de hablar, especialmente en una discusión, haz una pausa y pregúntate: ¿esto edificará, sanará o destruirá?" },
            { title: "Diagnóstico del Corazón", content: "Usa tus palabras como un diagnóstico. Si notas un patrón de crítica, queja o exageración, en lugar de solo corregir las palabras, pregúntale a Dios qué hay en tu corazón que las está produciendo." },
            { title: "Busca el Fruto de la Paz", content: "En tus decisiones y relaciones, no te preguntes '¿qué es lo más inteligente?' o '¿qué me beneficia más?', sino '¿qué producirá el 'fruto de justicia' que se siembra en paz?' (3:18). La verdadera sabiduría siempre conduce a la paz." }
        ]
    }
};

export const SANTIAGO_CHAPTER_4 = {
    header: {
        title: "La Epístola de Santiago: Capítulo 4",
        subtitle: "Guerra Interior, Humildad Exterior",
        description: "Santiago se adentra en la raíz de los conflictos que plagan a la comunidad: las pasiones y deseos egoístas que luchan en nuestro interior. Este capítulo es un llamado radical a abandonar la 'amistad con el mundo' —un sistema de valores centrado en el yo— y a someterse humildemente a Dios. Santiago diagnostica el problema (el orgullo) y ofrece la cura (la gracia que Dios da a los humildes).",
        keyVerse: {
            citation: "Santiago 4:7-8",
            text: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros. Acercaos a Dios, y él se acercará a vosotros."
        }
    },
    section1: {
        title: "El Origen de los Conflictos",
        verse: "Santiago 4:1-12",
        flow: {
            title: "La Cascada del Conflicto",
            steps: [
                { title: "Deseos Internos (Pasiones)", description: "La raíz de todo: codicia, envidia y el deseo de placer.", icon: Icons.HeartIcon },
                { title: "Conflicto y Lucha", description: "Estos deseos no satisfechos llevan a peleas y disputas con otros.", icon: Icons.ArrowsRightLeftIcon },
                { title: "Oraciones sin Respuesta", description: "Se pide a Dios con motivaciones incorrectas: para gastar en los propios deleites.", icon: Icons.XCircleIcon },
                { title: "Amistad con el Mundo", description: "El resultado es un adulterio espiritual, adoptando los valores egoístas del mundo.", icon: Icons.GlobeIcon }
            ]
        },
        solution: {
            title: "El Camino de Regreso a Dios",
            text: "La solución de Santiago es un arrepentimiento profundo y activo: 'Limpiad las manos, pecadores; y vosotros los de doble ánimo, purificad vuestros corazones' (4:8). Implica humillarse, lamentar el pecado y permitir que Dios nos exalte en su tiempo. También incluye dejar de juzgar y hablar mal de los hermanos, reconociendo que solo hay un Legislador y Juez."
        }
    },
    section2: {
        title: "La Arrogancia de la Autosuficiencia",
        verse: "Santiago 4:13-17",
        analogy: {
            title: "La Vida es como un Vapor",
            description: "Santiago confronta la arrogancia de planificar el futuro sin considerar a Dios. Describe la vida como 'neblina que se aparece por un poco de tiempo, y luego se desvanece' (4:14). Esta imagen subraya nuestra fragilidad y dependencia de Dios.",
            imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/807dc1f1-ae90-4956-ba4e-683848aeb790_rw_1920.png?h=a22be4988de2eba53266299bd2bdf774"
        },
        rightVsWrong: {
            title: "Planificación Arrogante vs. Planificación Piadosa",
            arrogant: { title: "La Manera Incorrecta", quote: "'Hoy y mañana iremos a tal ciudad, y estaremos allá un año, y traficaremos, y ganaremos...'", problem: "Presume del futuro y excluye a Dios de la ecuación." },
            godly: { title: "La Manera Correcta", quote: "'Si el Señor quiere, viviremos y haremos esto o aquello.'", solution: "Reconoce la soberanía de Dios y somete todos los planes a Su voluntad." }
        }
    },
    application: {
        title: "Aplicación Práctica",
        points: [
            { title: "Identifica la Raíz", content: "Cuando surja un conflicto, no te centres solo en la ofensa externa. Pregúntate: ¿Qué deseo o pasión en mí está siendo frustrado y causando esta reacción?" },
            { title: "Practica el 'Si el Señor Quiere'", content: "Al hacer planes (diarios, semanales, anuales), añade conscientemente la frase 'si el Señor quiere'. No como un cliché, sino como un recordatorio genuino de tu dependencia de Él." },
            { title: "El Pecado de Omisión", content: "Reflexiona en el versículo final (4:17): 'y al que sabe hacer lo bueno, y no lo hace, le es pecado'. ¿Hay alguna acción buena que Dios te ha estado llamando a hacer y que has estado posponiendo? Actúa hoy." }
        ]
    }
};

export const SANTIAGO_CHAPTER_5 = {
    header: {
        title: "La Epístola de Santiago: Capítulo 5",
        subtitle: "Paciencia, Oración y Restauración",
        description: "En su capítulo final, Santiago ofrece algunas de sus advertencias más severas y sus consuelos más tiernos. Comienza con una denuncia profética contra los ricos opresores, luego se dirige a los creyentes sufrientes, exhortándolos a la paciencia y la perseverancia. El libro concluye con un poderoso llamado a una vida de oración ferviente y a la práctica de la restauración mutua dentro de la comunidad de fe.",
        keyVerse: {
            citation: "Santiago 5:16",
            text: "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho."
        }
    },
    section1: {
        title: "Advertencia a los Ricos Opresores",
        verse: "Santiago 5:1-6",
        warnings: {
            title: "Señales del Juicio Venidero",
            points: [
                { icon: Icons.XCircleIcon, title: "Riquezas Corrompidas", text: "Sus tesoros acumulados se han podrido y sus metales preciosos testificarán contra ellos." },
                { icon: Icons.GavelIcon, title: "Salarios Retenidos", text: "El jornal de los obreros que defraudaron clama a Dios por justicia." },
                { icon: Icons.UserIcon, title: "Vida de Lujo y Placer", text: "Vivieron en deleites sobre la tierra, engordando sus corazones para el día de la matanza." },
                { icon: Icons.CheckCircleIcon, title: "Condena al Justo", text: "Han condenado y dado muerte al justo, que no les ofreció resistencia." }
            ]
        }
    },
    section2: {
        title: "Llamado a la Paciencia y la Oración",
        verse: "Santiago 5:7-20",
        examples: {
            title: "Modelos de Paciencia",
            cards: [
                { name: "El Labrador", lesson: "Espera con paciencia el fruto precioso de la tierra, aguardando las lluvias.", imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" },
                { name: "Los Profetas", lesson: "Soportaron el sufrimiento mientras hablaban en el nombre del Señor.", imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/6686f795-902d-4032-b87f-7abf0f5ab63b_rw_1920.png?h=f9b85ad4b847806ab4e8854d435dc89e" },
                { name: "Job", lesson: "Su perseverancia es un testimonio de que el fin del Señor es de gran compasión y misericordia.", imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/0d18894e-c0f1-41b6-a06f-6a803716252b_rw_1920.png?h=5e64519b40eeef2c4a5b958bf325d4d1" }
            ]
        },
        prayerGuide: {
            title: "Una Guía Práctica para la Oración",
            situations: [
                { situation: "¿Estás sufriendo?", action: "Ora.", verse: "v. 13" },
                { situation: "¿Estás alegre?", action: "Canta alabanzas.", verse: "v. 13" },
                { situation: "¿Estás enfermo?", action: "Llama a los ancianos de la iglesia para que oren y te unjan.", verse: "v. 14" },
                { situation: "¿Has pecado?", action: "Confiésalo a tus hermanos y ora por ellos.", verse: "v. 16" }
            ],
            example: {
                title: "El Poder de la Oración: Elías",
                text: "Santiago recuerda a sus lectores que Elías era un hombre con una naturaleza como la nuestra. Sin embargo, 'oró fervientemente para que no lloviese, y no llovió... y otra vez oró, y el cielo dio lluvia'. Este ejemplo demuestra que la oración ferviente de una persona justa tiene un poder extraordinario."
            }
        }
    },
    application: {
        title: "Aplicación Práctica",
        points: [
            { title: "Evalúa tu Relación con el Dinero", content: "¿Estás acumulando tesoros en la tierra o en el cielo? ¿Eres justo en todos tus tratos financieros y generoso con lo que Dios te ha dado?" },
            { title: "Cultiva la Paciencia Activa", content: "Cuando enfrentes una prueba larga, imita al labrador. No esperes pasivamente, sino sigue trabajando y confiando en que Dios enviará la 'lluvia' a su debido tiempo." },
            { title: "Crea una Cultura de Restauración", content: "Busca activamente restaurar a un hermano que se haya desviado. No con un espíritu de juicio, sino con amor, sabiendo que 'el que haga volver a un pecador del error de su camino, salvará de muerte un alma, y cubrirá multitud de pecados' (5:20)." }
        ]
    }
};

export const SANTIAGO_CONTENT = {
    INTRO: {
        title: "Introducción al Libro de Santiago",
        objective: "Presentar al autor, el contexto histórico, los destinatarios y el propósito central del libro de Santiago, estableciendo las bases para su estudio detallado.",
        videoUrl: "https://www.youtube.com/watch?v=CixYzLVKj6I",
        alternatingSections: [
            {
                title: "Una Fe Práctica y Sin Hipocresía",
                text: "Santiago no se enfoca en teología abstracta, sino en la aplicación diaria de la fe. Insiste en que la creencia genuina debe manifestarse en acciones concretas: cuidar de los huérfanos y las viudas, controlar la lengua y tratar a todos por igual, sin favoritismos. Para Santiago, una fe que no transforma el comportamiento es una fe inútil.",
                imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/5cfc2361-08a8-4a74-8b03-a031a5a92c57_rw_1920.png?h=5b6e98843e5f10332571ffea63156e5e"
            },
            {
                title: "Un Espejo para el Alma",
                text: "El autor compara la Palabra de Dios con un espejo (Santiago 1:23-24). No es algo para ser escuchado pasivamente, sino para ser obedecido activamente. El estudio de este libro nos obliga a examinarnos a nosotros mismos, confrontando nuestras inconsistencias y desafiándonos a alinear nuestra vida con la voluntad de Dios.",
                imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b9f9faf6-8c9b-4149-86aa-8add6899f787_rw_1920.png?h=b6fbe1a79fc64bdfdab9e3d6020b44c0"
            }
        ],
        relevance: {
            title: "¿Por Qué Estudiar Santiago Hoy?",
            points: [
                { title: "A Nivel Personal", content: "Ofrece una guía para la autoevaluación, ayudando a que la fe se traduzca en acción y promoviendo una integridad genuina.", Icon: Icons.UserIcon, gradient: "from-blue-400 to-indigo-500" },
                { title: "A Nivel Ministerial", content: "Proporciona herramientas para enseñar sobre ética cristiana y coherencia, formando discípulos maduros y comprometidos.", Icon: Icons.BookOpenIcon, gradient: "from-purple-400 to-pink-500" },
                { title: "A Nivel Colectivo", content: "Desafía a la iglesia a ser un agente de justicia y misericordia, examinando cómo trata a los vulnerables en la comunidad.", Icon: Icons.UserGroupIcon, gradient: "from-green-400 to-teal-500"}
            ]
        },
        keyData: [
            { title: "Versículo Clave", content: "Santiago 2:26 - 'Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está muerta.'" },
            { title: "Autoría y Fecha", content: "Escrito por Santiago (Jacobo), el hermano de Jesús y líder de la iglesia de Jerusalén. Se cree que fue redactado alrededor del 45-49 d.C., convirtiéndolo en uno de los primeros libros del Nuevo Testamento." },
            { title: "Estilo Directo e Imperativo", content: "El libro está lleno de mandatos. Contiene aproximadamente 60 imperativos en 108 versículos, ¡casi uno cada dos versículos! Esto subraya su naturaleza como un manual práctico para la vida cristiana." }
        ],
        quickQA: {
            question: "¿Cuál es la única vez que Santiago menciona 'fe' y 'obras' juntas para declarar su interdependencia?",
            answer: "Santiago 2:17: 'Así también la fe, si no tiene obras, es muerta en sí misma.' Aunque habla de ambas en todo el capítulo, esta es la declaración más concisa y directa."
        }
    },
    AUTHOR: {
        title: "El Autor: Santiago, el Justo",
        intro: { name: "Santiago (Jacobo), hermano del Señor", relevance: "Líder de la primera comunidad cristiana en Jerusalén, pilar de la iglesia primitiva y defensor de una fe práctica y visible.", imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8d9455f3-f2cd-4202-892e-fec4dceaa6a0_rw_1920.png?h=517ad5ade3bb098ff8e4465b06a14c96" },
        tabs: [
            { id: 'biography', title: 'Biografía' },
            { id: 'work', title: 'Obra y Temas' },
            { id: 'legacy', title: 'Legado y Citas' }
        ],
        content: {
            biography: {
                sections: [
                    { title: "¿Quién fue Santiago?", content: "Tradicionalmente identificado como el 'hermano del Señor' (Gálatas 1:19), Santiago no fue uno de los doce apóstoles originales. Inicialmente escéptico (Juan 7:5), se convirtió en un creyente clave tras ser testigo de la resurrección de Jesús (1 Corintios 15:7). Su piedad y sabiduría lo llevaron a convertirse en el líder indiscutible de la iglesia en Jerusalén, una figura de enorme respeto tanto para creyentes judíos como gentiles." },
                    { title: "Liderazgo y Relevancia", content: "Como obispo de Jerusalén, Santiago jugó un papel decisivo en el <Tooltip text='Reunión clave (49 d.C.) donde se decidió que los gentiles convertidos al cristianismo no necesitaban seguir la ley mosaica.'>Concilio de Jerusalén</Tooltip>. Su veredicto (Hechos 15:13-21) fue fundamental para la unidad de la iglesia primitiva, reconciliando las facciones judeo-cristianas y las misiones a los gentiles lideradas por Pablo. Fue considerado una de las tres 'columnas' de la iglesia, junto con Pedro y Juan (Gálatas 2:9)." }
                ],
                timeline: [
                    { year: "~5 d.C.", event: "Nacimiento en Nazaret, Galilea.", icon: Icons.UserIcon },
                    { year: "~33 d.C.", event: "Testigo de una aparición de Jesús resucitado (1 Corintios 15:7).", icon: Icons.BookOpenIcon },
                    { year: "~49 d.C.", event: "Preside el Concilio de Jerusalén, promoviendo la unidad.", icon: Icons.UserGroupIcon },
                    { year: "62 d.C.", event: "Martirio en Jerusalén, según el historiador Flavio Josefo.", icon: Icons.CalendarIcon }
                ],
                map: {
                    title: "Geografía de su Vida", imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/3d6f69fb-480b-40d9-9fd5-df4c96b8ee3d_rw_1920.png?h=f4f4ddb6d3e5108d33546f4e6bb24f96",
                    locations: [
                        { name: "Nazaret", description: "Lugar de nacimiento y juventud.", top: '50%', left: '45%' },
                        { name: "Jerusalén", description: "Centro de su ministerio y liderazgo.", top: '68%', left: '44%' },
                        { name: "Egipto", description: "Centro de su ministerio y liderazgo.", top: '85%', left: '35%' },
                        { name: "Siria", description: "Destinatarios de su epístola (creyentes judíos dispersos).", top: '39%', left: '50%' }
                    ]
                }
            },
            work: {
                movement: "La Epístola de Santiago es un ejemplo destacado de la <Tooltip text='Literatura centrada en la sabiduría y la ética práctica, común en la tradición judía (ej. Proverbios).'>literatura sapiencial</Tooltip> judeocristiana. Su estilo es directo, lleno de imperativos y metáforas extraídas de la vida cotidiana (el campo, el mar, la naturaleza). No es un tratado teológico sistemático como las cartas de Pablo, sino un manual de ética para la vida cristiana.",
                themes: [
                    { title: "Justicia Social", content: "Una fuerte defensa de los pobres y una crítica a los ricos que oprimen." },
                    { title: "Sabiduría Práctica", content: "La verdadera sabiduría viene de Dios y se demuestra en una vida humilde y pacífica." },
                    { title: "Poder de la Lengua", content: "Advertencias severas sobre el daño que pueden causar las palabras descontroladas." },
                    { title: "Fe y Obras", content: "Su tema más famoso: la fe auténtica se manifiesta inevitably en acciones concretas." },
                ],
                carousel: [
                    { imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/feccdc83-9926-48d2-ba6b-1640be008819_rw_1920.png?h=443949ec3ca7a211c56464dbbe98fe3a", caption: "Representación artística de Santiago escribiendo su epístola." },
                    { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Papyrus_23_James_1%2C15-18.jpg/800px-Papyrus_23_James_1%2C15-18.jpg", caption: "Santiago 1:15–18 en el Papiro 23 ( verso ; c. 250 d. C. )." },
                    { imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/02e7bae4-5499-45fb-84f6-80f5b9cc1220_rw_1920.png?h=c4f813f5385607d20c84073e9ee3f5c1", caption: "Ilustración del Concilio de Jerusalén, donde Santiago tuvo un rol central." }
                ]
            },
            legacy: {
                legacy: "El legado de Santiago es el de un cristianismo con 'los pies en la tierra'. Su insistencia en la coherencia entre lo que se cree y lo que se hace ha sido un ancla para la iglesia a lo largo de los siglos. Aunque Martín Lutero llegó a llamarla 'epístola de paja' por un aparente conflicto con la 'sola fide' de Pablo, hoy se entiende que ambas perspectivas son complementarias: Pablo habla de la raíz de la salvación (la fe) y Santiago de su fruto (las obras). Su carta sigue siendo un desafío vital contra la fe nominal y la hipocresía religiosa.",
                experts: [
                    { author: "Douglas J. Moo, teólogo", quote: "Santiago nos obliga a mirar en el espejo de la Palabra de Dios y preguntarnos si nuestra fe es visible." },
                    { author: "Hegesipo (historiador, s. II)", quote: "Era llamado 'el Justo' por su extraordinaria virtud." }
                ],
                quotes: [
                    "Sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos. (Santiago 1:22)",
                    "La fe, si no tiene obras, es muerta en sí misma. (Santiago 2:17)",
                    "La sabiduría que es de lo alto es primeramente pura, después pacífica, amable, benigna, llena de misericordia y de buenos frutos. (Santiago 3:17)"
                ]
            }
        }
    },
    CONTEXT: {
        title: "El Mundo de Santiago: Contexto y Audiencia",
        historical: {
            title: "Contexto Histórico-Social",
            text: "La epístola fue escrita en un período de tensión. El Imperio Romano dominaba Judea, generando inestabilidad política y económica. Los destinatarios, 'las doce tribus en la dispersión' (Santiago 1:1), eran creyentes judíos que vivían fuera de Palestina. Estas comunidades enfrentaban una doble presión: la persecución del Imperio y la marginación dentro de sus propias sinagogas por su fe en Jesús. La carta refleja problemas reales como la opresión económica de los terratenientes ricos (Santiago 5:1-6) y la discriminación dentro de la propia comunidad (Santiago 2:1-4).",
            map: {
                imageUrl: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/3d6f69fb-480b-40d9-9fd5-df4c96b8ee3d_rw_1920.png?h=f4f4ddb6d3e5108d33546f4e6bb24f96",
                title: "Mapa de la Diáspora Judía (s. I d.C.)",
                points: [
                    { name: "Jerusalén", description: "Centro del ministerio de Santiago y de la iglesia primitiva.", top: '63%', left: '43%' },
                    { name: "Siria", description: "Una de las principales áreas de la dispersión a la que se dirige la carta.", top: '40%', left: '49%' },
                    { name: "Egipto", description: "Hogar de una gran comunidad judía, especialmente en Alejandría.", top: '83%', left: '35%' },
                    { name: "Asia Menor", description: "Región con numerosas comunidades judías, clave en la expansión del cristianismo.", top: '06%', left: '20%' }
                ]
            }
        },
        cultural: {
            title: "Contexto Cultural y Filosófico",
            text: "El ambiente cultural era una mezcla del judaísmo del Segundo Templo y el helenismo. Santiago se apoya fuertemente en la literatura de sabiduría del Antiguo Testamento (como Proverbios) y en las enseñanzas de Jesús, especialmente el Sermón del Monte. Su enfoque no es la teología abstracta, sino la ética práctica, un rasgo distintivo del pensamiento judío centrado en la 'halajá' (el camino o la forma de vivir).",
            influences: {
                title: "Influencias y Rechazos",
                admired: ["Enseñanzas de Jesús (Sermón del Monte)", "Literatura de Sabiduría (Proverbios)", "Ley de Moisés (entendida como 'la ley real del amor')", "Profetas del Antiguo Testamento (denuncia de la injusticia)"],
                rejected: ["Favoritismo hacia los ricos (parcialidad)", "Sabiduría 'terrenal, animal, diabólica'", "Una fe puramente intelectual sin obras", "El legalismo vacío"]
            }
        },
        controversy: {
            title: "Controversias y Debates",
            text: "La controversia más famosa es la aparente contradicción entre la 'justificación por obras' de Santiago (2:24) y la 'justificación por fe' de Pablo (Romanos 3:28). Martín Lutero, en su momento, llegó a dudar del lugar de Santiago en la Biblia. Sin embargo, hoy la mayoría de los teólogos ven sus enseñanzas como complementarias. Pablo se enfoca en la raíz de la salvación (la fe que nos declara justos ante Dios), mientras que Santiago se enfoca en el fruto (las obras que demuestran que esa fe es genuina y viva). No son dos caminos a la salvación, sino dos aspectos inseparables de la misma realidad.",
            quote: "<Tooltip text='Este versículo es el corazón del argumento de Santiago: la fe genuina no puede mantenerse en privado; debe ser visible y demostrable.'>Muéstrame tu fe sin obras, y yo te mostraré mi fe por mis obras. (Santiago 2:18)</Tooltip>"
        },
        engagement: {
            title: "Para Reflexionar",
            relevance: {
                title: "Relevancia Hoy",
                text: "Los temas de Santiago sobre justicia social, coherencia y el peligro de las palabras son increíblemente relevantes. Nos desafía a examinar si nuestra fe tiene un impacto real en cómo tratamos a los demás y cómo manejamos nuestros recursos. ¿Nuestras iglesias acogen a los pobres y marginados? ¿Nuestra vida privada refleja lo que profesamos en público?"
            },
            quiz: {
                question: "¿Qué metáfora usa Santiago para describir la lengua humana, destacando su poder destructivo?",
                answer: "Usa la metáfora de 'un pequeño fuego que incendia un gran bosque' (Santiago 3:5-6), para ilustrar cómo algo tan pequeño puede causar una destrucción inmensa."
            }
        }
    },
    PURPOSE: {
        title: "Propósito y Temas Centrales",
        objective: "Llamar a la coherencia entre fe y obras, corrigiendo una espiritualidad superficial. El problema detectado es que los destinatarios profesaban fe, pero había 'discrepancia entre creencia y comportamiento' (ej: lengua incontrolada en 3:1-12; discriminación en 2:1-13).",
        themes: [
            { title: "Pruebas y crecimiento espiritual", content: "Las dificultades purifican la fe (1:2-4).", Icon: Icons.HeartIcon, gradient: "from-blue-400 to-indigo-500" },
            { title: "Sabiduría divina vs. terrenal", content: "La verdadera sabiduría se muestra con acciones humildes (3:13-18).", Icon: Icons.AcademicCapIcon, gradient: "from-purple-400 to-pink-500" },
            { title: "Riqueza y justicia social", content: "Denuncia la opresión a los pobres (5:1-6).", Icon: Icons.ScaleIcon, gradient: "from-green-400 to-teal-500" },
            { title: "Fe y Obras", content: "La fe se demuestra con acciones coherentes (2:14-26).", Icon: Icons.Cog8ToothIcon, gradient: "from-orange-400 to-red-500" },
            { title: "El poder de la lengua", content: "Advertencia sobre el daño que pueden causar las palabras (3:1-12).", Icon: Icons.FeatherIcon, gradient: "from-yellow-400 to-amber-500" },
            { title: "Paciencia y oración", content: "Exhortación a perseverar y a depender de Dios (5:7-18).", Icon: Icons.AnchorIcon, gradient: "from-cyan-400 to-sky-500" }
        ],
        focus: {
            title: "Enfoque práctico",
            content: "Es un manual de ética cristiana, con 64 imperativos en 108 versículos (ej: 'Sed hacedores de la palabra', 1:22). Tiene influencia del Antiguo Testamento (especialmente Proverbios) y las enseñanzas de Jesús (comparar Santiago 5:12 con Mateo 5:34-37)."
        }
    },
    STYLE: {
        title: "Análisis del Estilo y Género Literario",
        intro: "El estilo de Santiago es directo, práctico y memorable. Utiliza imágenes poderosas y mandatos claros para construir un argumento a favor de una fe viva y coherente. Exploremos sus componentes clave.",
        tabs: [{ id: 'definition', title: 'Definición Teórica' }, { id: 'examples', title: 'Ejemplos Prácticos' }],
        content: {
            definition: {
                definition: "El libro de Santiago se clasifica principalmente como una <strong>epístola</strong> (una carta formal). Sin embargo, su contenido y tono lo acercan a la <strong>literatura sapiencial</strong>, similar al libro de Proverbios. También se le describe como una <strong>homilía o sermón</strong> en forma de carta, debido a su naturaleza exhortativa y su estructura temática en lugar de una narrativa lineal.",
                comparison: {
                    title: "Comparativa de Géneros del Nuevo Testamento",
                    headers: ["Característica", "Epístola de Santiago", "Epístola Paulina", "Evangelio"],
                    rows: [
                        ["Enfoque Principal", "Ética y sabiduría práctica", "Doctrina teológica y pastoral", "Narrativa de la vida de Jesús"],
                        ["Estructura", "Temática, con exhortaciones", "Formal (saludo, cuerpo, cierre)", "Cronológica y biográfica"],
                        ["Tono", "Directo, imperativo, urgente", "Argumentativo, personal, doctrinal", "Narrativo, testimonial"]
                    ]
                }
            },
            examples: {
                traits: {
                    title: "Rasgos del Estilo",
                    language: "El lenguaje de Santiago es <strong>vívido, concreto y lleno de imágenes</strong> extraídas de la naturaleza y la vida cotidiana. Evita la complejidad teológica abstracta en favor de un griego claro y contundente, caracterizado por su abundancia de verbos en imperativo (mandatos).",
                    motifs: {
                        title: "Símbolos y Motivos Recorrentes",
                        items: [
                            { symbol: "El Espejo", meaning: "La Palabra de Dios como herramienta de autoexamen que exige acción." },
                            { symbol: "El Freno y el Timón", meaning: "Pequeños elementos que dirigen algo mucho más grande, usados como metáfora del poder de la lengua." },
                            { symbol: "La Ola del Mar", meaning: "Símbolo de la persona que duda, inestable y arrastrada por las circunstancias." }
                        ]
                    }
                },
                carousel: {
                    title: "Análisis de Fragmentos",
                    items: [
                        { fragment: "Porque si alguno es oidor de la palabra pero no hacedor de ella, este es semejante al hombre que considera en un <mark>espejo</mark> su rostro natural. Porque él se considera a sí mismo, y se va, y luego olvida cómo era.", citation: "Santiago 1:23-24", analysis: "Uso de una metáfora cotidiana (el espejo) para ilustrar la diferencia entre oír pasivamente y actuar coherentemente." },
                        { fragment: "He aquí, nosotros ponemos <mark>freno en la boca de los caballos</mark> para que nos obedezcan, y dirigimos así todo su cuerpo. Mirad también las naves; aunque tan grandes, y llevadas de impetuosos vientos, son gobernadas con un muy <mark>pequeño timón</mark> por donde el que las gobierna quiere.", citation: "Santiago 3:3-4", analysis: "Imágenes paralelas para enfatizar el desproporcionado poder de un elemento pequeño (la lengua)." },
                        { fragment: "¡Oh <mark>almas adúlteras</mark>! ¿No sabéis que la amistad del mundo es enemistad contra Dios? Cualquiera, pues, que quiera ser amigo del mundo, se constituye enemigo de Dios.", citation: "Santiago 4:4", analysis: "Ejemplo de <Tooltip text='Una técnica retórica en la que el orador se enfrenta a un oponente imaginario para fortalecer su argumento.'>diatriba</Tooltip>, usando un lenguaje fuerte y directo para confrontar a la audiencia." }
                    ]
                },
                techniques: {
                    title: "Técnicas Literarias Destacadas",
                    items: [
                        { name: "Metáfora", definition: "Comparar dos cosas distintas sin usar 'como'.", example: "'La lengua es un fuego, un mundo de maldad.' (3:6)" },
                        { name: "Símil", definition: "Comparar dos cosas usando 'como' o 'semejante a'.", example: "'Toda buena dádiva... desciende de lo alto, del Padre de las luces, en el cual no hay mudanza, ni sombra de variación.' (1:17) - La vida humana es como la sombra que cambia." },
                        { name: "Imperativo", definition: "El uso constante de mandatos directos.", example: "'Someteos, pues, a Dios; resistid al diablo... Acercaos a Dios...' (4:7-8)" },
                        { name: "Diatriba", definition: "Un discurso polémico o invectiva, a menudo con preguntas retóricas.", example: "'¿De dónde vienen las guerras y los pleitos entre vosotros? ¿No es de vuestras pasiones...?' (4:1)" },
                        { name: "Personificación", definition: "Atribuir cualidades humanas a objetos inanimados.", example: "'El jornal de los obreros... clama; y los clamores... han entrado en los oídos del Señor.' (5:4)" }
                    ]
                },
                influences: {
                    title: "Influencias y Legado",
                    influencedBy: { title: "Influenciado Por", items: ["Enseñanzas de Jesús (Sermón del Monte)", "Literatura Sapiencial (Libro de Proverbios)", "Los Profetas del Antiguo Testamento"] },
                    legacy: { title: "Dejó un Legado En", items: ["La Ética Cristiana Práctica", "La Teología Pastoral", "Movimientos de Justicia Social"] }
                }
            }
        }
    },
    STRUCTURE: {
        title: "Estructura del Libro",
        objective: "Analizar la organización y el flujo de la epístola de Santiago, identificando sus secciones clave y cómo se conectan para desarrollar sus temas principales.",
        thematic: {
            title: "Estructura Temática (La más aceptada)",
            description: "Santiago no sigue una estructura lineal estricta, sino que organiza su carta en torno a temas recurrentes que se entrelazan. Es como una serie de mini-sermones o exhortaciones.",
            sections: [
                { ref: "1:1", topic: "Saludo" }, { ref: "1:2-18", topic: "Pruebas y tentaciones" }, { ref: "1:19-27", topic: "Oír y hacer la Palabra" }, { ref: "2:1-13", topic: "Advertencia contra el favoritismo" },
                { ref: "2:14-26", topic: "Fe y obras" }, { ref: "3:1-12", topic: "El poder de la lengua" }, { ref: "3:13-18", topic: "Dos tipos de sabiduría" }, { ref: "4:1-12", topic: "Conflictos y humildad" },
                { ref: "4:13-17", topic: "Advertencia contra la arrogancia" }, { ref: "5:1-6", topic: "Advertencia a los ricos opresores" }, { ref: "5:7-12", topic: "Paciencia en el sufrimiento" }, { ref: "5:13-20", topic: "Oración y restauración" }
            ]
        },
        chiastic: {
            title: "Estructura Quiástica (Propuesta por algunos eruditos)",
            description: "Algunos analistas sugieren una estructura en 'quiasmo', donde las ideas se presentan y luego se reflejan en orden inverso, creando un patrón simétrico que resalta el mensaje central.",
            diagram: [
                { label: "A", ref: "1:2-27", topic: "Pruebas y la Palabra (Externo)", level: 0 },
                { label: "B", ref: "2:1-26", topic: "Fe y obras (Social)", level: 1 },
                { label: "C", ref: "3:1-18", topic: "La lengua y la sabiduría (CENTRO)", level: 2 },
                { label: "B'", ref: "4:1-5:6", topic: "Conflictos y riquezas (Social)", level: 1 },
                { label: "A'", ref: "5:7-20", topic: "Paciencia y oración (Externo)", level: 0 },
            ]
        }
    },
    CONTRIBUTION: {
        title: "Aportación Única: El Puente entre Fe y Acción",
        intro: "Santiago no contradice el evangelio de la gracia; lo completa. Su aportación es un llamado radical a una fe que se ve, se siente y actúa. Es el puente indispensable entre la creencia interna y la conducta externa, asegurando que el cristianismo sea una realidad transformadora y no una simple confesión.",
        comparison: {
            title: "Fe y Obras: Dos Caras de la Misma Moneda",
            subtitle: "Pablo y Santiago abordan la salvación desde ángulos complementarios. Pablo se enfoca en la raíz (la fe que justifica), mientras que Santiago se enfoca en el fruto (las obras que demuestran esa fe).",
            pablo: {
                name: "Pablo",
                focus: "La Raíz de la Salvación",
                quote: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
                citation: "Efesios 2:8-9",
                Icon: Icons.GavelIcon
            },
            santiago: {
                name: "Santiago",
                focus: "El Fruto de la Salvación",
                quote: "¿Mas quieres saber, hombre vano, que la fe sin obras es muerta? ...Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está muerta.",
                citation: "Santiago 2:20, 26",
                Icon: Icons.HeartIcon
            }
        },
        keyContributions: [
            { title: "Defensa de la Justicia Social", content: "Santiago ofrece una de las críticas más fuertes del Nuevo Testamento contra la opresión de los pobres y el favoritismo hacia los ricos, estableciendo un estándar ético para la comunidad cristiana.", Icon: Icons.ScaleIcon },
            { title: "Madurez a través de las Pruebas", content: "Introduce el concepto de que las pruebas no son para destruir, sino para perfeccionar la fe, produciendo paciencia y un carácter completo.", Icon: Icons.SparklesIcon },
            { title: "El Poder de las Palabras", content: "Su enseñanza sobre el control de la lengua es una de las más detalladas y prácticas de la Biblia, fundamental para la salud de la comunidad.", Icon: Icons.FeatherIcon }
        ],
        relevance: {
            title: "Relevancia Duradera",
            text: "En una era de 'cristianismo cultural' o fe nominal, Santiago es un antídoto necesario. Desafía a cada creyente y a cada iglesia a examinar la autenticidad de su fe. Su mensaje no es 'obras para ser salvo', sino 'obras porque eres salvo', una verdad que sigue siendo vital para la iglesia hoy.",
            quote: "Santiago no enseña una salvación por obras, sino una fe que obra."
        }
    },
    TRIVIA_STATIC: {
        triviaQuestions: [
            {
                question: "¿Qué metáfora utiliza Santiago para describir a una persona que duda?",
                options: ["Un árbol arrancado por el viento", "Una ola del mar, impulsada por el viento", "Una nube sin agua", "Una estrella errante"],
                answerIndex: 1,
                explanation: "En Santiago 1:6, se compara al que duda con 'la onda del mar, que es arrastrada por el viento y echada de una parte a otra'."
            },
            {
                question: "Según Santiago, ¿cuál es la 'ley real' que resume los mandamientos?",
                options: ["No cometerás adulterio", "Honra a tu padre y a tu madre", "Amarás a tu prójimo como a ti mismo", "No darás falso testimonio"],
                answerIndex: 2,
                explanation: "Santiago 2:8 cita Levítico 19:18, 'Amarás a tu prójimo como a ti mismo', y la llama la 'Ley Real'."
            },
            {
                question: "Además de Abraham, ¿a qué otra persona del Antiguo Testamento menciona Santiago como ejemplo de fe justificada por obras?",
                options: ["Moisés", "David", "Elías", "Rahab"],
                answerIndex: 3,
                explanation: "En Santiago 2:25, menciona a Rahab la ramera, quien 'fue justificada por obras, cuando recibió a los mensajeros y los envió por otro camino'."
            },
            {
                question: "Santiago advierte que los maestros recibirán un juicio más severo porque pueden tropezar fácilmente en una área. ¿Cuál es?",
                options: ["En el orgullo", "En la interpretación doctrinal", "En la palabra (con la lengua)", "En la gestión financiera"],
                answerIndex: 2,
                explanation: "Santiago 3:1-2 advierte a no hacerse maestros muchos, sabiendo que recibirán 'mayor condenación', porque 'todos ofendemos muchas veces. Si alguno no ofende en palabra, este es varón perfecto'."
            }
        ]
    }
};