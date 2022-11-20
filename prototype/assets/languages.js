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
  },
  "navbar-what-we-do-button": {
    en: "What we do",
    es: "Qué hacemos",
  },
  "navbar-how-we-work": {
    en: "How we work",
    es: "Cómo trabajamos",
  },
  "navbar-our-philosophy": {
    en: "Our philosophy",
    es: "Filosofía",
  },
  "navbar-get-in-touch": {
    en: "Get in touch",
    es: "Contacto",
  },
  "section1-title-top": {
    en: "We are",
    es: "Somos",
  },
  "section1-title-middle": {
    en: "and we",
    es: "y somos",
  },
  "section1-title-title": {
    en: "are tech cooperatives from all over the world",
    es: "cooperativas de tecnología de todo el mundo",
  },
  "section1-btn1": {
    en: "Let's work together",
    es: "Trabajemos juntas",
  },
  "section1-btn2": {
    en: "Join the community",
    es: "Únete a la comunidad",
  },
  "section2-patio": {
    en: "We collaborate by sharing knowledge, job opportunities and human resources. Patio provides the best experience for both co-op members and our partners.",
    es: "Colaboramos compartiendo conocimiento, oportunidades de trabajo y recursos humanos. Patio provee la mejor experiencia tanto para miembros como socios.",
  },
  "section2-coops": {
    en: "Patio is a network comprised of tech cooperatives, from all corners of the globe, working together in solidarity to democratize the tech sector.",
    es: "Patio es una red de cooperativas de tecnología de todos los rincones del mundo, trabajando juntas en solidaridad para democratizar al sector tecnológico.",
  },
};
