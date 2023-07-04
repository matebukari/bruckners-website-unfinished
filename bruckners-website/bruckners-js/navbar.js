// Highlight Current Page link in the Navbar
document.addEventListener('DOMContentLoaded', () => {
  const $navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'), 0);
  const $withDropdown = Array.prototype.slice.call(document.querySelectorAll('.with-dropdown'), 0);
  const navDropdown = document.getElementById('nav-dropdown');
  // Highlight Current Page link in the Navbar
  if ($navLinks.length > 0) {
    $navLinks.forEach( el => {
      if(window.location.pathname == el.getAttribute("href")){
         el.className += " current";
      }
    })
  }
  // End of Highlight Current Page link in the Navbar

  if ($withDropdown.length > 0) {
    $withDropdown.forEach( el => {
      el.addEventListener('click', () => {
        navDropdown.classList.toggle('is-active');
      });
    });
  };  
});


const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);