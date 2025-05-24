/* ## Set Mobile Navigation stuff
--------------------------------------------- */
// selecting the element
const navLinks = document.querySelectorAll('.primary-menu .menu-item a, .go-top a, .site-title a, .shop-link')
const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('nav.nav-primary')
const toggleIcon = document.querySelector('.toggle-icon')


// Functionality for main menu-toggle button
menuButton.addEventListener('click', function () {

  // Show site navigation
  navigation.classList.toggle('show')

  // toggle activated class
  menuButton.classList.toggle('activated')

  // toggle attrs
  if (menuButton.getAttribute('aria-expanded') === 'true') {
    toggleIcon.classList.remove('bx-x')
  } else {
    toggleIcon.classList.add('bx-x')
  }

  if (menuButton.getAttribute('aria-expanded') === 'true') {
    menuButton.setAttribute('aria-expanded', 'false')
  } else {
    menuButton.setAttribute('aria-expanded', 'true')
  }

  if (menuButton.getAttribute('aria-pressed') === 'true') {
    menuButton.setAttribute('aria-pressed', 'false')
  } else {
    menuButton.setAttribute('aria-pressed', 'true')
  }

});

// Functionality of individual links
for (var eachLink of navLinks) {
  eachLink.addEventListener('click', function () {

    // Hide Main Navigation on click
    navigation.classList.remove('show')

    // remove activated class and attrs from menu-toggle button
    menuButton.classList.remove('activated')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-pressed', 'false')
    toggleIcon.classList.remove('bx-x')

  });
}


navigation.setAttribute('tabindex', '-1')
navigation.setAttribute('aria-hidden', 'true')

