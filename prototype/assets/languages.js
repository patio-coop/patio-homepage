function setLang(object_selected) {
  localStorage.setItem("currentLanguage", object_selected.value);
  Object.keys(data.languages).forEach((key) => {
    const elem = document.getElementById(key);
    if (elem) {
      elem.innerHTML = data.languages[key][object_selected.value];
    }
  });
}

function getTranslation(key) {
  const currentLang = localStorage.getItem("currentLanguage") || "en";
  return data.languages[key][currentLang];
}

function t(key) {
  this.document.currentScript.parentElement.innerHTML =
    "<span id='" + key + "'>" + getTranslation(key) + "</span>";
}

function initLanguageSelector() {
  document.getElementById("language-selector").value =
    localStorage.getItem("currentLanguage") || "en";
}

data.languages = {
  // Site - Main page translations
  "navbar-who-we-are-button": {
    en: "Who we are",
    es: "Quiénes somos",
    hr: "Tko smo",
    pt: "Quem somos",
  },
  "navbar-what-we-do-button": {
    en: "What we do",
    es: "Qué hacemos",
    hr: "Što radimo",
    pt: "O que fazemos",
  },
  "navbar-how-we-work": {
    en: "How we work",
    es: "Cómo trabajamos",
    hr: "Kako radimo",
    pt: "Como trabalhamos",
  },
  "navbar-our-philosophy": {
    en: "Our philosophy",
    es: "Filosofía",
    hr: "Filozofija",
    pt: "Nossa filosofia",
  },
  "navbar-get-in-touch": {
    en: "Get in touch",
    es: "Contacto",
    hr: "Kontakt",
    pt: "Entre em contato",
  },
  "modal-visit-website-btn": {
    en: "Visit Website",
    es: "Visitar Sitio",
    hr: "Posjetite web stranicu",
    pt: "Entre em contato",
  },
  "section1-title-top1": {
    en: "We are",
    es: "Somos",
    hr: "Mi smo",
    pt: "Nós somos a",
  },
  "section1-title-top2": {
    en: "PATIO Community",
    es: "Comunidad PATIO",
    hr: "PATIO zajednica",
    pt: "comunidade PATIO",
  },
  "section1-title-middle": {
    en: "and we",
    es: "y somos",
    hr: "te mi",
    pt: "e nós",
  },
  "section1-title-title": {
    en: "are tech cooperatives from all over the world",
    es: "cooperativas de tecnología de todo el mundo",
    hr: "okupljamo tehnološke zadruge iz cijelog svijeta",
    pt: "somos cooperativas de tecnologia do mundo todo",
  },
  "section1-btn1": {
    en: "Let's work together",
    es: "Trabajemos juntas",
    hr: "Surađujmo",
    pt: "Vamos trabalhar juntos",
  },
  "section1-btn2": {
    en: "Join the community",
    es: "Únete a la comunidad",
    hr: "Pridruži nam se",
    pt: "Junte-se à comunidade",
  },
  "section2-patio": {
    en: "We collaborate by sharing knowledge, job opportunities and human resources. Patio provides the best experience for both co-op members and our partners.",
    es: "Colaboramos compartiendo conocimiento, oportunidades de trabajo y recursos humanos. Patio provee la mejor experiencia tanto para miembros como socios.",
    hr: "Članovi zajednice surađuju dijeleći znanje, poslovne prilike i ljudske resurse. Patio doprinosi kvaliteti rada svojih članica i njihovih partnera.",
    pt: "Nós colaboramos compartilhando conhecimento, oportunidades de trabalho e recursos humanos. A Patio proporciona a melhor experiência para  cooperados e parceiros.",
  },
  "section2-coops": {
    en: "Patio is a network comprised of tech cooperatives, from all corners of the globe, working together in solidarity to democratize the tech sector.",
    es: "Patio es una red de cooperativas de tecnología de todos los rincones del mundo, trabajando juntas en solidaridad para democratizar al sector tecnológico.",
    hr: "Patio je mreža tehnološki orjentiranih zadruga iz cijelog svijeta koje solidarno surađuju u smjeru demokratizacije tehnološkog sektora.",
    pt: "A Patio é uma rede formada por cooperativas de tecnologia, de todos os cantos do globo, trabalhando juntas, em solidariedade, para democratizar o setor de tecnologia.",
  },
  "section3-title": {
    en: "Who we are",
    es: "Quiénes somos",
    hr: "Tko smo",
    pt: "Quem somos",
  },
  "section3-pmain": {
    en: "We are a global community of worker owned cooperatives from all over the world, specializing in the development of digital technology, communication and design.",
    es: "Somos una comunidad de cooperativas de trabajadoras y trabajadores de todo el mundo, especializadas en el desarrollo de tecnología, comunicación y diseño.",
    hr: "Mi smo globalna zajednica radničkih zadruga specijaliziranih za rad s digitalnim tehnologijama, dizajn i komunikacije.",
    pt: "Somos uma comunidade global de cooperativas de trabalho de todo o mundo, especializadas em desenvolvimento de tecnologias digitais, comunicação e design.",
  },
  "section3-p": {
    en: "Working together allows us to have multidisciplinary teams that collaborate on international projects.",
    es: "Trabajar juntas nos permite formar equipos multidisciplinarios para colaborar en proyectos internacionales.",
    hr: "Suradnja kroz zajednicu omogućuje nam stvaranje multidisciplinarnih timova koji rade na projektima internacionalnog karaktera.",
    pt: "Trabalhar em conjunto nos permite ter equipes multidisciplinares que colaboram em projetos internacionais.",
  },
  "section4-coops": {
    en: "cooperatives",
    es: "cooperativas",
    hr: "zadruga",
    pt: "cooperativas",
  },
  "section4-coopers": {
    en: "cooperators",
    es: "cooperativistas",
    hr: "zadrugara",
    pt: "cooperados",
  },
  "section4-countries": {
    en: "countries",
    es: "países",
    hr: "zemalja",
    pt: "países",
  },
  "section4-servicios": {
    en: "digital services",
    es: "servicios digitales",
    hr: "digitalne usluge",
    pt: "serviços digitais",
  },
  "section4-list-title": {
    en: "Members of Patio:",
    es: "Miembros de Patio:",
    hr: "Članovi Patio zajednice:",
    pt: "Integrantes do Pátio:",
  },
  "section4-list-slugline": {
    en: "Click for more info of each coop",
    es: "Clic para más información",
    hr: "Saznaj više o svakom članu",
    pt: "Clique para mais informações",
  },
  "section5-title": {
    en: "What we do",
    es: "Qué hacemos",
    hr: "Što radimo",
    pt: "O que fazemos",
  },
  "section5-subtitle": {
    en: "We innovate and implement the latest technologies to produce digital products and services.",
    es: "Innovamos e implementamos las tecnologías más recientes para producir productos y servicios digitales.",
    hr: "Primjenjujemo suvremenu tehnologiju na inovativan način kako bi stvorili kvalitetne digitalne proizvode i usluge.",
    pt: "Inovamos e implementamos as mais recentes tecnologias para produzir produtos e serviços digitais.",
  },
  "section5-content": {
    en: "Our diverse global community stands behind us to help in each phase of the project as needed, so we can deliver the finest results and maintain the highest standards.",
    es: "Nuestra comunidad global respalda nuestro trabajo y nos ayudamos mutuamente en cada etapa del proyecto para proveer los mejores resultados y mantener los más altos estándares.",
    hr: "Patio je raznolika međunarodna zajednica organizacija koje si međusobno pomažu u raznim fazama projekata na kojima radimo, kako bi postigli što bolje rezultate i kvalitetu.",
    pt: "Nossa comunidade diversa e global nos apoia em cada fase do projeto, para que possamos oferecer os melhores resultados e manter os mais altos padrões.",
  },
  "section5-services-title": {
    en: "Some of",
    es: "Algunos de",
    hr: "Neke od",
    pt: "Alguns de",
  },
  "section5-services-title-bolder": {
    en: "our services",
    es: "nuestros servicios",
    hr: "naših usluga",
    pt: "nossos serviços",
  },
  "services-full-stack": {
    en: "Full-stack Development",
    es: "Desarrollo Full-stack",
    hr: "Full-stack Programiranje",
    pt: "Desenvolvimento Full-stack",
  },
  "services-design": {
    en: "UX/UI Design & Animation",
    es: "UX/UI Diseño y Animación",
    hr: "UX/UI dizajn i Animacija",
    pt: "Design UX/UI & Animação",
  },
  "services-branding": {
    en: "Branding & Creative",
    es: "Branding y Servicios Creativos",
    hr: "Brendiranje i Creativa",
    pt: "Marca & Criação",
  },
  "services-mobile": {
    en: "Mobile Development",
    es: "Desarrollo Móvil",
    hr: "Razvoj Mobilnih Aplikacija",
    pt: "Desenvolvimento para Móveis",
  },
  "services-iot": {
    en: "Software & Hardware for IoT",
    es: "Software y Hardware para IoT",
    hr: "Softver i hardver za IoT",
    pt: "Software e hardware para IoT",
  },
  "services-pm": {
    en: "Project & Product Management",
    es: "Gestión de Proyectos y Productos",
    hr: "Upravljanje Projektima i Razvoj Proizvoda",
    pt: "Gestão de Projetos e Produtos",
  },
  "section6-title": {
    en: "How we work",
    es: "Cómo trabajamos",
    hr: "Kako radimo",
    pt: "Como trabalhamos",
  },
  "section6-pmain": {
    en: "When we receive a request, we share it transparently within the entire community. From this base, we can scale teams to provide whatever is required for a specific project. Also, we can put interdisciplinary, remote teams together to accommodate any required specialized technical capacities.",
    es: "Cuando recibimos una solicitud, la compartimos de manera transparente con toda la comunidad. A partir de esto, escalamos el equipo para cumplir con los requerimientos del proyecto. También podemos conformar equipos multidisciplinarios que trabajen de manera remota de acuerdo a la especialización que se requiera.",
    hr: "Nakon što stigne upit transparentno ga podijelimo sa svim članovima zajednice te zatim stvaramo tim koji će odgovoriti na potrebe projekta. Interdisciplinarni timovi koje čine osobe iz cijelog svijeta s lakoćom mogu priskrbiti sva potrebna tehnička znanja i kapacitet.",
    pt: "Quando recebemos uma solicitação, compartilhamos ela de forma transparente, com toda a comunidade. A partir daí, podemos escalar equipes para fornecer o que for necessário para um projeto específico. Além disso, podemos reunir equipes interdisciplinares para prover quaisquer capacidades técnicas especializadas necessárias.",
  },
  "section6-list-title": {
    en: "Some of the benefits of working with us:",
    es: "Algunos de los beneficios de trabajar con nosotras:",
    hr: "Neke prednosti suradnje s nama:",
    pt: "Vantagens de trabalhar conosco:",
  },
  "section6-list-1": {
    en: "Our large portfolio",
    es: "Gran portafolio",
    hr: "Naš portfolio",
    pt: "Nosso amplo portfólio",
  },
  "section6-list-2": {
    en: "International teams and cultural diversity",
    es: "Equipos internacionales y diversidad cultural",
    hr: "Internacionalni timovi i kulturna raznolikost",
    pt: "Equipes internacionais e diversidade cultural",
  },
  "section6-list-3": {
    en: "Wide range of technologies",
    es: "Amplio rango de tecnologías",
    hr: "Širok raspon tehnologija",
    pt: "Ampla gama de tecnologias",
  },
  "section6-list-4": {
    en: "Pool of knowledge and experience",
    es: "Repositorio de conocimientos y experiencia",
    hr: "Bazen znanja i iskustva",
    pt: "Repositório de conhecimento e experiência",
  },
  "section6-list-5": {
    en: "Socially responsible and linked to local communities",
    es: "Responsabilidad social y vínculos con comunidades locales",
    hr: "Društvena odgovornost i povezanost s lokalnom zajednicom",
    pt: "Socialmente responsável e ligado às suas comunidades locais",
  },
  "section6-island-text-1": {
    en: "Make us your organization's",
    es: "Seamos los socios",
    hr: "Želimo biti tehnološki partner",
    pt: "Nos torne o parceiro tecnológico",
  },
  "section6-island-text-2": {
    en: "technology partner",
    es: "tecnológicos de tu organización.",
    hr: "tvoje organizacije.",
    pt: "da sua organização.",
  },
  "section6-island-btn": {
    en: "Get in touch and ask for a quote",
    es: "Contáctanos y pide una cotización",
    hr: "Javi se i zatraži ponudu",
    pt: "Solicite um orçamento",
  },
  "section7-title": {
    en: "Our philosophy",
    es: "Nuestra filosofía",
    hr: "Filozofija",
    pt: "Nossa filosofia",
  },
  "section7-pmain": {
    en: "Patio is a community that aims to scale worker-ownership towards a more democratic society. Whether you are a small or large cooperative, or a person interested in exploring the cooperative world, let's share some experience together in our cooperative virtual networking sessions. We want to inspire more people to create technical cooperatives. If you need help, let us know! We can share our experience.",
    es: "Patio es una comunidad que busca escalar la propiedad de los trabajadores en la empresa para tener una sociedad más democrática. Seas una cooperativa pequeña o grande, o una persona interesada en el mundo cooperativo, compartamos experiencias juntos en nuestras sesiones virtuales. Si necesitas ayuda, ¡háznoslo saber! Podemos compartirte lo que sabemos.",
    hr: "Patio zajednica želi kroz radničko zadrugarstvo postići višu razinu demokracije u društvu. Bez obzira jeste li malena ili velika zadruga ili pak osoba koju zanima zadrugarstvo, kroz sudjelovanje i umrežavanje u zajednici podijeliti ćemo iskustva. Želimo potaknuti druge da i oni pokrenu tehničke zadruge. Ako trebaš pomoć, javi se! Naše iskustvo ti može pomoći.",
    pt: "Pátio é uma comunidade que visa escalar iniciativas de propriedade dos trabalhadores em direção a uma sociedade mais democrática. Seja você uma cooperativa pequena ou grande, ou uma pessoa interessada em explorar o mundo cooperativo, vamos compartilhar alguma experiência juntos em nossas sessões de networking virtual cooperativo. Queremos inspirar mais pessoas a criar cooperativas tecnológicas. Se precisar de ajuda, conte conosco! Podemos compartilhar nossa experiência.",
  },
  "section7-list-title": {
    en: "Key benefits:",
    es: "Beneficios clave:",
    hr: "Ključne prednosti:",
    pt: "Principais benefícios:",
  },
  "section7-list-1": {
    en: "Having a supportive and healthy community environment that helps cooperatives thrive",
    es: "Tener una comunidad de apoyo y un entorno sano que ayude a las cooperativas prosperar",
    hr: "Zdravo okruženje u kojem možeš naći podršku za razvoj svoje zadruge",
    pt: "Ter um ambiente comunitário, solidário e saudável, que ajude as cooperativas a prosperar",
  },
  "section7-list-2": {
    en: "Learning from each other and innovating together by having a hub for knowledge sharing",
    es: "Aprender e innovar juntas, teniendo un lugar en donde compartir conocimiento",
    hr: "Prostor u kojem možeš puno naučiti od drugih, sebi ravnih, jer dijelimo znanje",
    pt: "Aprender uns com os outros e inovar juntos tendo um polo para compartilhamento de conhecimento",
  },
  "section7-list-3": {
    en: "Allowing diverse approaches based on unique points of view",
    es: "Permitir diversas aproximaciones basadas en puntos de vista únicos",
    hr: "Raznolik pristup i metode rješavanja problema",
    pt: "Permitir diversas abordagens baseadas em pontos de vista diferentes",
  },
  "section7-list-4": {
    en: "Accessing different experts and specializations in a variety of fields",
    es: "Tener acceso a diferentes especialistas en una variedad de campos",
    hr: "Pristup cijelom nizu eksperata i specijalista u raznim poljima",
    pt: "Acesso a diferentes especialistas e especialidades em diversas áreas",
  },
  "section7-list-5": {
    en: "Providing opportunities to join multidisciplinary set of teams",
    es: "Compartir oportunidades y formar parte de equipos multidisciplinarios",
    hr: "Prilika za rad u multidisciplinarnim timovima",
    pt: "Oferecer oportunidades de integrar um conjunto de equipes multidisciplinares",
  },
  "section7-island-text-1": {
    en: "If you are part of a",
    es: "Si eres parte de una",
    hr: "Ako si član ili članica",
    pt: "Se você faz parte de uma",
  },
  "section7-island-text-2": {
    en: "tech cooperative",
    es: "cooperativa de tecnología",
    hr: "tehnološke zadruge",
    pt: "cooperativa de tecnologia",
  },
  "section7-island-btn": {
    en: "Join our community",
    es: "Únete a la comunidad",
    hr: "Pridruži se Patio zajednici",
    pt: "Junte-se à nossa comunidade",
  },
  "section8-title": {
    en: "Get in touch",
    es: "Contáctanos",
    hr: "Kontakt",
    pt: "Entre em contato",
  },
  "section8-pmain": {
    en: "with a brief description of how you want to collaborate. After we hear from you, a representative from our community will get back to you to work together on the details.",
    es: "Con una breve descripción acerca de cómo quieres colaborar. Al recibir tu mensaje, un representante de la comunidad te responderá para acordar juntos los detalles.",
    hr: "Javi nam se s kratkim opisom kako vidiš našu buduću suradnju. Netko od članova Patio zajednice javit će ti se povratno kako bi razradili detalje.",
    pt: "com uma breve descrição de como você deseja colaborar. Após ouvirmos você, um representante da nossa comunidade entrará em contato com você para trabalharmos juntos nos detalhes.",
  },
  "section8-why": {
    en: "Why do you want to contact us?",
    es: "¿Por qué deseas contactarnos?",
    hr: "Napiši zašto nam se želiš javiti?",
    pt: "Por que você quer entrar em contato conosco?",
  },
  "section8-work": {
    en: "Work with us",
    es: "Trabajar con nosotras",
    hr: "Želim raditi s vama",
    pt: "Trabalhe conosco",
  },
  "section8-consulting": {
    en: "Consulting",
    es: "Consulta",
    hr: "Trebam savjet ili imam upit",
    pt: "Fale conosco",
  },
  "section8-join": {
    en: "Join the community",
    es: "Unirse a la comunidad",
    hr: "Želim se priključiti u Patio zajednicu",
    pt: "Junte-se à comunidade Pátio",
  },
  "section8-name": {
    en: "Name",
    es: "Nombre",
    hr: "Ime",
    pt: "Nome",
  },
  "section8-surname": {
    en: "Surname",
    es: "Apellido",
    hr: "Prezime",
    pt: "Sobrenome",
  },
  "section8-email": {
    en: "Email",
    es: "Correo",
    hr: "E-mail",
    pt: "E-mail",
  },
  "section8-phone": {
    en: "Phone",
    es: "Teléfono",
    hr: "Telefon",
    pt: "Telefone",
  },
  "section8-subject": {
    en: "Subject",
    es: "Asunto",
    hr: "Naslov",
    pt: "Assunto",
  },
  "section8-message": {
    en: "Message",
    es: "Mensaje",
    hr: "Poruka",
    pt: "Mensagem",
  },
  "section8-btn-send": {
    en: "Send",
    es: "Enviar",
    hr: "Pošalji",
    pt: "Enviar",
  },
  "section8-select-option": {
    en: "Select an option",
    es: "Seleccione una opción",
    hr: "Odaberite opciju",
    pt: "Selecione uma opção",
  },
  "footer-text": {
    en: "We are a global community of worker cooperatives, specialized in the development of digital technology, communication and design, localted in different countries and working on projects with an international scope.",
    es: "Somos una comunidad global de cooperativas de trabajadoras y trabajadores, especializada en el desarrollo de tecnología digital, comunicación y diseño, ubicadas en países diferentes, y trabajando en proyectos con alcance internacional.",
    hr: "Mi smo globalna zajednica radničkih zadruga specijaliziranih za rad s digitalnim tehnologijama,dizajn i komunikacije. Imamo članove iz 20 zemalja (taj broj raste) te radimo na projektima koji su internacionalnog karaktera.",
    pt: "Somos uma comunidade global de cooperativas de trabalhadores especializados em desenvolvimento de tecnologias digitais, comunicação e design, de 20 países diferentes (e em crescimento), e trabalhando em projetos de âmbito global.",
  },
  "footer-intercoop": {
    en: "This website was made inter-cooperatively by",
    es: "Este sitio fue realizado de manera intercooperativa por",
    hr: "Ovu web stranicu izradila je ova zadruga",
    pt: "Este site foi feito inter-cooperativamente por",
  },

  // Cooperatives taglines & descriptions translations
  "fiqus-tagline": {
    en: "We are a software cooperative. We are collective construction, culture and minds in constant movement.",
    es: "Somos una cooperativa de software. Somos construcción colectiva, cultura y mentes en constante movimiento.",
    hr: "We are a software cooperative. We are collective construction, culture and minds in constant movement.",
    pt: "Somos uma cooperativa de software. Somos construção coletiva, cultura e mentes em constante movimento.",
  },
  "fiqus-description": {
    en: "Fiqus is not just another job, it is a life project, in which we have built a consolidated team of professionals who are in continuous training to provide high quality technical solutions.",
    es: "Fiqus no es un trabajo más, es un proyecto de vida ,en el que construimos un equipo consolidado de profesionales que se encuentra en continua capacitación para poder brindar soluciones técnicas de alta calidad. ",
    hr: "Fiqus is not just another job, it is a life project, in which we have built a consolidated team of professionals who are in continuous training to provide high quality technical solutions.",
    pt: "A Fiqus não é apenas mais um trabalho, é um projeto de vida, no qual construímos uma equipe consolidada de profissionais que estão em contínuo treinamento para poder fornecer soluções técnicas de alta qualidade.",
  },
  "redjar-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "redjar-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "albatros-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "albatros-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "camplight-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "camplight-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "tng-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "tng-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "librecode-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "librecode-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "sofi-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "sofi-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "animorph-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "animorph-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "sociality-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "sociality-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "slobodnadomena-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "slobodnadomena-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "tierracomun-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "tierracomun-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "agaric-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "agaric-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "colab-tagline": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },
  "colab-description": {
    en: "",
    es: "",
    hr: "",
    pt: "",
  },

  // Success Form Page Translations
  "success-thankyou": {
    en: "Thank you!",
    es: "Gracias!",
    hr: "Hvala!",
    pt: "Gracias!",
  },
  "success-message": {
    en: "We received your message and we'll get back to you shortly.",
    es: "Recibimos tu mensaje y te responderemos pronto.",
    hr: "Primili smo vašu poruku i ubrzo ćemo vam se javiti.",
    pt: "Recebemos sua mensagem e retornaremos em breve.",
  },
  "success-btn": {
    en: "Back to our site",
    es: "Volver a nuestro sitio",
    hr: "Povratak na našu stranicu",
    pt: "Voltar ao nosso site",
  },
};
