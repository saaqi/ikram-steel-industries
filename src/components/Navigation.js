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



/* ---------------------------------------
/* ## SETUP SCROLL SPY
--------------------------------------------- */
// let menuSection = document.querySelectorAll('.nav-primary li.menu-item a');
// // for clickable event
// menuSection.forEach(v => {
//   v.onclick = (() => {
//     setTimeout(() => {
//       menuSection.forEach(j => j.classList.remove('active'))
//       v.classList.add('active')
//     }, 300)
//   })
// })
// // for window scrolldown event
// window.onscroll = (() => {
//   let mainSection = document.querySelectorAll('main section');

//   mainSection.forEach((v, i) => {
//     let rect = v.getBoundingClientRect().y

//     if (rect < window.innerHeight - window.innerHeight + 56) {  /* caculate till section reaches to top */
//       menuSection.forEach(v => v.classList.remove('active'))
//       menuSection[i].classList.add('active')
//     }
//   })
// })




/* ## Link smoothing WITH UPDATE URL AS WELL
--------------------------------------------- */
// NATIVE JAVASCRIPT WAY
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });
