import * as Icons from './components/Icons.tsx';

export const SectionId = {
    INTRO: 'INTRO',
    AUTHOR: 'AUTHOR',
    CONTEXT: 'CONTEXT',
    PURPOSE: 'PURPOSE',
    STYLE: 'STYLE',
    STRUCTURE: 'STRUCTURE',
    CONTRIBUTION: 'CONTRIBUTION',
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
    { id: SectionId.TRIVIA, title: 'Trivia IA', icon: Icons.QuestionMarkCircleIcon }
];

export const SANTIAGO_CONTENT = {
    INTRO: {
        title: "Introducción al Libro de Santiago",
        objective: "Presentar al autor, el contexto histórico, los destinatarios y el propósito central del libro de Santiago, estableciendo las bases para su estudio detallado.",
        videoUrl: "https://www.youtube.com/watch?v=kzxNQNAs4vE", // Example URL
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
                    { title: "¿Quién fue Santiago?", content: "Tradicionalmente identificado como el 'hermano del Señor' (Gálatas 1:19), Santiago no fue uno de los doce apóstoles originales. Inicialmente escéptico (Juan 7:5), se convirtió en un creyente clave tras ser testigo de la resurrección de Jesús (1 Corintios 15:7). Su piedad y sabiduría lo llevaron a convertirse en el líder indiscutible de la iglesia en Jerusalén, una figura de enorme respeto tanto para creyentes judíos como gentiles.", tooltip: { term: "hermano del Señor", definition: "El término 'hermano' (adelphos) puede significar hermano de sangre, hermanastro o primo cercano. La tradición mayoritaria lo considera hijo de María y José." } },
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
            quote: "Muéstrame tu fe sin obras, y yo te mostraré mi fe por mis obras. (Santiago 2:18)"
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
                        title: "Símbolos y Motivos Recurrentes",
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
            pablo: { name: "Pablo", focus: "La Raíz de la Salvación", quote: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.", citation: "Efesios 2:8-9", Icon: Icons.HeartIcon },
            santiago: { name: "Santiago", focus: "El Fruto de la Salvación", quote: "Así también la fe, si no tiene obras, es muerta en sí misma... Yo te mostraré mi fe por mis obras.", citation: "Santiago 2:17-18", Icon: Icons.Cog8ToothIcon }
        },
        keyContributions: [
            { title: "El 'Ancla' de la Ortodoxia", content: "Proporciona un correctivo vital contra la 'fe fácil' o puramente intelectual. Exige que la doctrina correcta (ortodoxia) se manifieste en una vida correcta (ortopraxis).", Icon: Icons.AnchorIcon },
            { title: "La Voz de la Justicia Social", content: "Es uno de los defensores más feroces de los pobres y oprimidos en el Nuevo Testamento. Su carta da un rostro a la justicia social como un elemento no negociable de la fe.", Icon: Icons.ScaleIcon },
            { title: "Manual para la Madurez", content: "Más allá de la teología, la epístola es un manual práctico para la vida diaria, abordando temas como el control de la lengua, la sabiduría y la oración con una claridad inigualable.", Icon:Icons.AcademicCapIcon }
        ],
        relevance: {
            title: "Un Desafío para el Cristiano del Siglo XXI",
            text: "En una era de 'influencers' y apariencias, Santiago nos llama a una autenticidad radical. Nos pregunta: ¿Tu fe se queda en tus redes sociales y conversaciones, o se traduce en cómo tratas al inmigrante, al pobre y al que piensa diferente? Su mensaje es un antídoto poderoso contra un cristianismo superficial y nominal.",
            quote: "¿De qué sirve, hermanos míos, si alguno dice que tiene fe, y no tiene obras? ¿Podrá la fe salvarle?"
        }
    }
};