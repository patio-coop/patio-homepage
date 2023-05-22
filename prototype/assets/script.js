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
      if (!e.target.matches(".manu a")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);

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