
// MANAGE COOP CARD MODAL
function setModalElement(elemID, value) {
  elem = document.getElementById(elemID);
  elem.innerHTML = value;
}

function setModalElementAttr(elemID, attr, value) {
  elem = document.getElementById(elemID);
  elem.setAttribute(attr, value);
}

function setModalServices (cooperative) {
  coopServices = document.getElementById("modal-coop-services");
  for (let service of cooperative.services) {
    let serviceItem = document.createElement("li");
    serviceItem.innerHTML = service;
    coopServices.appendChild(serviceItem);
  }
}

function openModal(country, cooperative) {
  setModalElement("modal-coop-country", country);
  setModalElement("modal-coop-name", cooperative.name)
  setModalElement("modal-coop-tagline", getTranslation(cooperative.tagline));
  setModalElement("modal-coop-description", getTranslation(cooperative.description));

  setModalElementAttr("modal-coop-logo", "src", './media/logos/' + cooperative.logo);
  setModalElementAttr("modal-coop-url", "href", cooperative.url);

  setModalServices(cooperative);

  // Show modal
  var modal = document.getElementById("cooperative-card-modal");
  modal.style.display = "block";
}

function closeModal(modal) {
  // Hide modal
  modal.style.display = "none";

  setModalElement("modal-coop-country", "");
  setModalElement("modal-coop-name", "")
  setModalElement("modal-coop-tagline", "");
  setModalElement("modal-coop-description", "");
  setModalElement("modal-coop-services", "");

  setModalElementAttr("modal-coop-logo", "src", './media/logos/no-logo.jpg');
  setModalElementAttr("modal-coop-url", "href", '#');
}

// CLOSE MODAL ACTIONS
var modal = document.getElementById("cooperative-card-modal");
// Get the <span> element that closes the modal
var closeBtn = document.getElementById("modal-close");
// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function(e) {
  closeModal(modal);
  e.preventDefault();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal(modal);
  }
}


// MANAGE COOPS BY COUNTRY LIST
countries_list = document.getElementById("coops_by_country_list");
for (let country of data.countries) {
  for (let c of country.coops) {
    // CREATE ITEM LINK
    let link = document.createElement("a");
    link.innerHTML = c.name;
    link.setAttribute('class', 'main__section4__list__items__link');
    link.onclick = function() {
      openModal(country.name, c);
    }

    // CREATE LIST ITEM
    let item = document.createElement("li");
    item.setAttribute('class', "main__section4__list__items__item");
    item.appendChild(link);
    countries_list.appendChild(item);
  }
}
// APPEND LIST TO CONTAINER
document.getElementById("coops_by_country_list_container").appendChild(countries_list);


// STICKY NAVBAR
const navbar = document.querySelector('.navbar-fixed')
window.addEventListener('scroll', function (e) {
  const lastPosition = window.scrollY
  if (lastPosition > 110) {
    navbar.classList.add('scrolled')
  } else if (navbar.classList.contains('scrolled')) {
    navbar.classList.remove('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
});