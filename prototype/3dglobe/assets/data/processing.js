// NOTE: this file is executed FIRST, then scripts/config.js then scripts/apps.js then scripts/shaders.js then scripts/index.js
//

function getCountry(name, countries) {
  return countries.find(c => c.name === name);
}

function getCountries(object, countries) {
  return Object.keys(object).reduce((r, e) => {
    r[e] = object[e].map(c => getCountry(c, countries))
    return r;
  }, {})
}


