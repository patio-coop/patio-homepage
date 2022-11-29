function setLang(object_selected) {
  localStorage.setItem("currentLanguage", object_selected.value);
  Object.keys(data.languages).forEach((key) => {
    const elem = document.getElementById(key);
    if (elem) {
      elem.innerHTML = data.languages[key][object_selected.value];
    }
  });
}

function t(key) {
  const currentLang = localStorage.getItem("currentLanguage") || "en";
  this.document.currentScript.parentElement.innerHTML =
    "<span id='" + key + "'>" + data.languages[key][currentLang] + "</span>";
}

function initLanguageSelector() {
  document.getElementById("language-selector").value =
    localStorage.getItem("currentLanguage") || "en";
}

data.languages = {
  "navbar-who-we-are-button": {
    en: "Who we are",
    es: "Quiénes somos",
    hr: "Tko smo",
  },
  "navbar-what-we-do-button": {
    en: "What we do",
    es: "Qué hacemos",
    hr: "Što radimo",
  },
  "navbar-how-we-work": {
    en: "How we work",
    es: "Cómo trabajamos",
    hr: "Kako radimo",
  },
  "navbar-our-philosophy": {
    en: "Our philosophy",
    es: "Filosofía",
    hr: "Filozofija",
  },
  "navbar-get-in-touch": {
    en: "Get in touch",
    es: "Contacto",
    hr: "Kontakt",
  },
  "section1-title-top1": {
    en: "We are",
    es: "Somos",
    hr: "Mi smo",
  },
  "section1-title-top2": {
    en: "PATIO Community",
    es: "Comunidad PATIO",
    hr: "PATIO zajednica",
  },
  "section1-title-middle": {
    en: "and we",
    es: "y somos",
    hr: "te mi",
  },
  "section1-title-title": {
    en: "are tech cooperatives from all over the world",
    es: "cooperativas de tecnología de todo el mundo",
    hr: "okupljamo tehnološke zadruge iz cijelog svijeta",
  },
  "section1-btn1": {
    en: "Let's work together",
    es: "Trabajemos juntas",
    hr: "Surađujmo",
  },
  "section1-btn2": {
    en: "Join the community",
    es: "Únete a la comunidad",
    hr: "Pridruži nam se",
  },
  "section2-patio": {
    en: "We collaborate by sharing knowledge, job opportunities and human resources. Patio provides the best experience for both co-op members and our partners.",
    es: "Colaboramos compartiendo conocimiento, oportunidades de trabajo y recursos humanos. Patio provee la mejor experiencia tanto para miembros como socios.",
    hr: "Članovi zajednice surađuju dijeleći znanje, poslovne prilike i ljudske resurse. Patio doprinosi kvaliteti rada svojih članica i njihovih partnera.",
  },
  "section2-coops": {
    en: "Patio is a network comprised of tech cooperatives, from all corners of the globe, working together in solidarity to democratize the tech sector.",
    es: "Patio es una red de cooperativas de tecnología de todos los rincones del mundo, trabajando juntas en solidaridad para democratizar al sector tecnológico.",
    hr: "Patio je mreža tehnološki orjentiranih zadruga iz cijelog svijeta koje solidarno surađuju u smjeru demokratizacije tehnološkog sektora.",
  },
  "section3-title": {
    en: "Who we are",
    es: "Quiénes somos",
    hr: "Tko smo",
  },
  "section3-pmain": {
    en: "We are a global community of worker owned cooperatives from all over the world, specializing in the development of digital technology, communication and design.",
    es: "Somos una comunidad de cooperativas de trabajadoras y trabajadores de todo el mundo, especializadas en el desarrollo de tecnología, comunicación y diseño.",
    hr: "Mi smo globalna zajednica radničkih zadruga specijaliziranih za rad s digitalnim tehnologijama, dizajn i komunikacije.",
  },
  "section3-p": {
    en: "Working together allows us to have multidisciplinary teams that collaborate on international projects.",
    es: "Trabajar juntas nos permite formar equipos multidisciplinarios para colaborar en proyectos internacionales.",
    hr: "Suradnja kroz zajednicu omogućuje nam stvaranje multidisciplinarnih timova koji rade na projektima internacionalnog karaktera.",
  },
  "section4-coops": {
    en: "cooperatives",
    es: "cooperativas",
    hr: "zadruga",
  },
  "section4-coopers": {
    en: "cooperators",
    es: "cooperativistas",
    hr: "zadrugara",
  },
  "section4-countries": {
    en: "countries",
    es: "países",
    hr: "zemalja",
  },
  "section4-servicios": {
    en: "digital services",
    es: "servicios digitales",
    hr: "digitalne usluge",
  },
  "section4-list-title": {
    en: "Members of Patio:",
    es: "Miembros de Patio:",
    hr: "Članovi Patio zajednice:",
  },
  "section4-list-slugline": {
    en: "Click for more info of each coop",
    es: "Clic para más información",
    hr: "Saznaj više o svakom članu",
  },
  "section5-title": {
    en: "What we do",
    es: "Qué hacemos",
    hr: "Što radimo",
  },
  "section5-subtitle": {
    en: "We innovate and implement the latest technologies to produce digital products and services.",
    es: "Innovamos e implementamos las tecnologías más recientes para producir productos y servicios digitales.",
    hr: "Primjenjujemo suvremenu tehnologiju na inovativan način kako bi stvorili kvalitetne digitalne proizvode i usluge.",
  },
  "section5-content": {
    en: "Our diverse global community stands behind us to help in each phase of the project as needed, so we can deliver the finest results and maintain the highest standards.",
    es: "Nuestra comunidad global respalda nuestro trabajo y nos ayudamos mutuamente en cada etapa del proyecto para proveer los mejores resultados y mantener los más altos estándares.",
    hr: "Patio je raznolika međunarodna zajednica organizacija koje si međusobno pomažu u raznim fazama projekata na kojima radimo, kako bi postigli što bolje rezultate i kvalitetu.",
  },
  "section5-services-title": {
    en: "Some of",
    es: "Algunos de",
    hr: "Neke od",
  },
  "section5-services-title-bolder": {
    en: "our services",
    es: "nuestros servicios",
    hr: "naših usluga",
  },
  "services-full-stack": {
    en: "Full-stack Development",
    es: "Desarrollo Full-stack",
    hr: "Full-stack Programiranje",
  },
  "services-design": {
    en: "UX/UI Design & Animation",
    es: "UX/UI Diseño y Animación",
    hr: "UX/UI dizajn i Animacija",
  },
  "services-branding": {
    en: "Branding & Creative",
    es: "Branding y Servicios Creativos",
    hr: "Brendiranje i Creativa",
  },
  "services-mobile": {
    en: "Mobile Development",
    es: "Desarrollo Móvil",
    hr: "Razvoj Mobilnih Aplikacija",
  },
  "services-iot": {
    en: "Software & Hardware for IoT",
    es: "Software y Hardware para IoT",
    hr: "Softver i hardver za IoT",
  },
  "services-pm": {
    en: "Project & Product Management",
    es: "Gestión de Proyectos y Productos",
    hr: "Upravljanje Projektima i Razvoj Proizvoda",
  },
  "section6-title": {
    en: "How we work",
    es: "Cómo trabajamos",
    hr: "Kako radimo",
  },
  "section6-pmain": {
    en: "When we receive a request, we share it transparently within the entire community. From this base, we can scale teams to provide whatever is required for a specific project. Also, we can put interdisciplinary, remote teams together to accommodate any required specialized technical capacities.",
    es: "Cuando recibimos una solicitud, la compartimos de manera transparente con toda la comunidad. A partir de esto, escalamos el equipo para cumplir con los requerimientos del proyecto. También podemos conformar equipos multidisciplinarios que trabajen de manera remota de acuerdo a la especialización que se requiera.",
    hr: "Nakon što stigne upit transparentno ga podijelimo sa svim članovima zajednice te zatim stvaramo tim koji će odgovoriti na potrebe projekta. Interdisciplinarni timovi koje čine osobe iz cijelog svijeta s lakoćom mogu priskrbiti sva potrebna tehnička znanja i kapacitet.",
  },
  "section6-list-title": {
    en: "Some of the benefits of working with us:",
    es: "Algunos de los beneficios de trabajar con nosotras:",
    hr: "Neke prednosti suradnje s nama:",
  },
  "section6-list-1": {
    en: "Our large portfolio",
    es: "Gran portafolio",
    hr: "Naš portfolio",
  },
  "section6-list-2": {
    en: "International teams and cultural diversity",
    es: "Equipos internacionales y diversidad cultural",
    hr: "Internacionalni timovi i kulturna raznolikost",
  },
  "section6-list-3": {
    en: "Wide range of technologies",
    es: "Amplio rango de tecnologías",
    hr: "Širok raspon tehnologija",
  },
  "section6-list-4": {
    en: "Pool of knowledge and experience",
    es: "Repositorio de conocimientos y experiencia",
    hr: "Bazen znanja i iskustva",
  },
  "section6-list-5": {
    en: "Socially responsible and linked to local communities",
    es: "Responsabilidad social y vínculos con comunidades locales",
    hr: "Društvena odgovornost i povezanost s lokalnom zajednicom",
  },
  "section6-island-text-1": {
    en: "Make us your organization's",
    es: "Seamos los socios",
    hr: "Želimo biti tehnološki partner",
  },
  "section6-island-text-2": {
    en: "technology partner",
    es: "tecnológicos de tu organización.",
    hr: "tvoje organizacije.",
  },
  "section6-island-btn": {
    en: "Get in touch and ask for a quote",
    es: "Contáctanos y pide una cotización",
    hr: "Javi se i zatraži ponudu",
  },
  "section7-title": {
    en: "Our philosophy",
    es: "Nuestra filosofía",
    hr: "Filozofija",
  },
  "section7-pmain": {
    en: "Patio is a community that aims to scale worker-ownership towards a more democratic society. Whether you are a small or large cooperative, or a person interested in exploring the cooperative world, let's share some experience together in our cooperative virtual networking sessions. We want to inspire more people to create technical cooperatives. If you need help, let us know! We can share our experience.",
    es: "Patio es una comunidad que busca escalar la propiedad de los trabajadores en la empresa para tener una sociedad más democrática. Seas una cooperativa pequeña o grande, o una persona interesada en el mundo cooperativo, compartamos experiencias juntos en nuestras sesiones virtuales. Si necesitas ayuda, ¡háznoslo saber! Podemos compartirte lo que sabemos.",
    hr: "Patio zajednica želi kroz radničko zadrugarstvo postići višu razinu demokracije u društvu. Bez obzira jeste li malena ili velika zadruga ili pak osoba koju zanima zadrugarstvo, kroz sudjelovanje i umrežavanje u zajednici podijeliti ćemo iskustva. Želimo potaknuti druge da i oni pokrenu tehničke zadruge. Ako trebaš pomoć, javi se! Naše iskustvo ti može pomoći.",
  },
  "section7-list-title": {
    en: "Key benefits:",
    es: "Beneficios clave:",
    hr: "Ključne prednosti:",
  },
  "section7-list-1": {
    en: "Having a supportive and healthy community environment that helps cooperatives thrive",
    es: "Tener una comunidad de apoyo y un entorno sano que ayude a las cooperativas prosperar",
    hr: "Zdravo okruženje u kojem možeš naći podršku za razvoj svoje zadruge",
  },
  "section7-list-2": {
    en: "Learning from each other and innovating together by having a hub for knowledge sharing",
    es: "Aprender e innovar juntas, teniendo un lugar en donde compartir conocimiento",
    hr: "Prostor u kojem možeš puno naučiti od drugih, sebi ravnih, jer dijelimo znanje",
  },
  "section7-list-3": {
    en: "Allowing diverse approaches based on unique points of view",
    es: "Permitir diversas aproximaciones basadas en puntos de vista únicos",
    hr: "Raznolik pristup i metode rješavanja problema",
  },
  "section7-list-4": {
    en: "Accessing different experts and specializations in a variety of fields",
    es: "Tener acceso a diferentes especialistas en una variedad de campos",
    hr: "Pristup cijelom nizu eksperata i specijalista u raznim poljima",
  },
  "section7-list-5": {
    en: "Providing opportunities to join multidisciplinary set of teams",
    es: "Compartir oportunidades y formar parte de equipos multidisciplinarios",
    hr: "Prilika za rad u multidisciplinarnim timovima",
  },
  "section7-island-text-1": {
    en: "If you are part of a",
    es: "Si eres parte de una",
    hr: "Ako si član ili članica",
  },
  "section7-island-text-2": {
    en: "tech cooperative",
    es: "cooperativa de tecnología",
    hr: "tehnološke zadruge",
  },
  "section7-island-btn": {
    en: "Join our community",
    es: "Únete a la comunidad",
    hr: "Pridruži se Patio zajednici",
  },
  "section8-title": {
    en: "Get in touch",
    es: "Contáctanos",
    hr: "Kontakt",
  },
  "section8-pmain": {
    en: "with a brief description of how you want to collaborate. After we hear from you, a representative from our community will get back to you to work together on the details.",
    es: "Con una breve descripción acerca de cómo quieres colaborar. Al recibir tu mensaje, un representante de la comunidad te responderá para acordar juntos los detalles.",
    hr: "Javi nam se s kratkim opisom kako vidiš našu buduću suradnju. Netko od članova Patio zajednice javit će ti se povratno kako bi razradili detalje.",
  },
  "section8-why": {
    en: "Why do you want to contact us?",
    es: "¿Por qué deseas contactarnos?",
    hr: "Napiši zašto nam se želiš javiti?",
  },
  "section8-work": {
    en: "Work with us",
    es: "Trabajar con nosotras",
    hr: "Želim raditi s vama",
  },
  "section8-consulting": {
    en: "Consulting",
    es: "Consulta",
    hr: "Trebam savjet ili imam upit",
  },
  "section8-join": {
    en: "Join the community",
    es: "Unirse a la comunidad",
    hr: "Želim se priključiti u Patio zajednicu",
  },
  "section8-name": {
    en: "Name",
    es: "Nombre",
    hr: "Ime",
  },
  "section8-surname": {
    en: "Surname",
    es: "Apellido",
    hr: "Prezime",
  },
  "section8-email": {
    en: "Email",
    es: "Correo",
    hr: "E-mail",
  },
  "section8-phone": {
    en: "Phone",
    es: "Teléfono",
    hr: "Telefon",
  },
  "section8-subject": {
    en: "Subject",
    es: "Asunto",
    hr: "Naslov",
  },
  "section8-message": {
    en: "Message",
    es: "Mensaje",
    hr: "Poruka",
  },
  "section8-btn-send": {
    en: "Send",
    es: "Enviar",
    hr: "Pošalji",
  },
  "footer-text": {
    en: "We are a global community of worker cooperatives, specialized in the development of digital technology, communication and design, localted in different countries and working on projects with an international scope.",
    es: "Somos una comunidad global de cooperativas de trabajadoras y trabajadores, especializada en el desarrollo de tecnología digital, comunicación y diseño, ubicadas en países diferentes, y trabajando en proyectos con alcance internacional.",
    hr: "Mi smo globalna zajednica radničkih zadruga specijaliziranih za rad s digitalnim tehnologijama,dizajn i komunikacije. Imamo članove iz 64 zemalja (taj broj raste) te radimo na projektima koji su internacionalnog karaktera.",
  },
};
