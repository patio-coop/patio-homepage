function setLang(object_selected) {
    localStorage.setItem('currentLanguage', object_selected.value);
    Object.keys(data.languages).forEach((key)=>{
        const elem = document.getElementById(key);
        if(elem) {
            elem.innerHTML = data.languages[key][object_selected.value];
        }
    });
}

function t(key) {
    const currentLang = localStorage.getItem('currentLanguage') || "en";
    this.document.currentScript.parentElement.innerHTML = "<span id='" + key + "'>"+ data.languages[key][currentLang]+"</span>";
}

function initLanguageSelector() {
    document.getElementById("language-selector").value = localStorage.getItem('currentLanguage') || "en";
}

data.languages = {
    "navbar-who-we-are-button": {
        "en": "Who we are",
        "es": "Quiénes somos",
    },
    "navbar-what-we-do-button": {
        "en": "What we do",
        "es": "Qué hacemos",
    },
    "navbar-how-we-work": {
        "en": "How we work",
        "es": "Cómo trabajamos",
    },
    "navbar-our-philosophy": {
        "en": "Our philosophy",
        "es": "Nuestra filosofía",
    },
    "navbar-get-in-touch": {
        "en": "Get in touch",
        "es": "Contacto",
    },
}