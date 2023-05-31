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

  logoPath = cooperative.logo ? './media/logos/' + cooperative.logo : './media/logos/no-logo.png';
  setModalElementAttr("modal-coop-logo", "src", logoPath);
  setModalElementAttr("modal-coop-url", "href", cooperative.url);

  setModalServices(cooperative);

  // Show modal
  document.body.classList.add("no_scroll");
  var modal = document.getElementById("cooperative-card-modal");
  modal.style.display = "block";
}

function closeModal(modal) {
  // Hide modal
  modal.style.display = "none";
  document.body.classList.remove("no_scroll");

  setModalElement("modal-coop-country", "");
  setModalElement("modal-coop-name", "")
  setModalElement("modal-coop-tagline", "");
  setModalElement("modal-coop-description", "");
  setModalElement("modal-coop-services", "");

  setModalElementAttr("modal-coop-logo", "src", './media/logos/no-logo.png');
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


// STICKY NAVBAR
const navbar = document.querySelector('.navbar-fixed')
window.addEventListener('scroll', function (e) {
  const lastPosition = window.scrollY
  if (lastPosition > 110) {
    navbar.classList.add('scrolled')
  } else if (navbar.classList.contains('scrolled')) {
    navbar.classList.remove('scrolled')
  } else {
    navbar.classList.remove('scrolled')     }
});


// HANDLE CALL TO ACTIONS FROM BUTTONS
function addActionToBtns(btnClass, actionValue) {
  var btns = document.querySelectorAll('a[class$="'+ btnClass+'"]')
  for (let btn of btns) {
    btn.addEventListener('click', function(e) {
      document.getElementById("form-why-input").value = actionValue
      document.getElementById("get-in-touch").scrollIntoView({behavior: 'smooth'});
      e.preventDefault();
    });
  }
}
addActionToBtns("join-community", "join-patio-community");
addActionToBtns("work-together", "work-with-us");


// MANAGE COOPS GRID
let countries_grid = document.getElementById("coops-grid");
for (let country of data.countries) {
  for (let c of country.coops) {
    // CREATE IMAGE
    let img = document.createElement("img");
    img.className = "logo-image";
    img.src = "./media/logos/" + c.logo;

    // CREATE ITEM LINK
    let link = document.createElement("a");
    link.innerHTML = img.outerHTML;
    link.href = '#'
    link.onclick = function() {
      openModal(country.name, c);
    }

    // CREATE LIST ITEM
    let item = document.createElement("div");
    item.setAttribute('class', "item");
    item.appendChild(link);
    countries_grid.appendChild(item);
  }
}
// APPEND LIST TO CONTAINER
document.getElementById("coops-grid-container").appendChild(countries_grid);


/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) {
      return false;
    }
    
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);