import '../scss/_bs-static.scss';
import '../scss/main.scss';
import 'boxicons/css/boxicons.min.css'
import 'fslightbox';
// import 'boxicons';


/* ## Set Mobile Navigation stuff
--------------------------------------------- */
// selecting the element
const menuLinks = document.querySelectorAll('.primary-menu .menu-item a, .go-top a, .site-title a');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav.nav-primary');
const toggleIcon = document.querySelector('.toggle-icon');


// Functionality for main menu-toggle button
menuButton.addEventListener('click', function() {

	// Show site navigation
	navigation.classList.toggle('show');

	// toggle activated class
	menuButton.classList.toggle('activated');

	// toggle attrs
	if(menuButton.getAttribute('aria-expanded') === 'true') {
    toggleIcon.classList.remove('bx-x');
	} else {
    toggleIcon.classList.add('bx-x');
  }

	if(menuButton.getAttribute('aria-expanded') === 'true') {
		menuButton.setAttribute('aria-expanded', 'false');
	} else {
		menuButton.setAttribute('aria-expanded', 'true');
	}

	if(menuButton.getAttribute('aria-pressed') === 'true') {
		menuButton.setAttribute('aria-pressed', 'false');
	} else {
		menuButton.setAttribute('aria-pressed', 'true');
	}


	// Show Main Navigation


});

// Functionality of individual links
for ( var eachLink of menuLinks ) {
	eachLink.addEventListener('click', function() {

		// Hide Main Navigation on click
		navigation.classList.remove('show');

		// remove activated class and attrs from menu-toggle button
		menuButton.classList.remove('activated');
		menuButton.setAttribute('aria-expanded', 'false');
		menuButton.setAttribute('aria-pressed', 'false');

	});
}



/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.querySelector('body').classList.add('dark');
  } else {
    document.querySelector('body').classList.remove('dark');
  }
});




/* ## SETUP SCROLL SPY
--------------------------------------------- */
let menuSection = document.querySelectorAll('.nav-primary li.menu-item a');
// for clickable event
menuSection.forEach(v=> {
  v.onclick = (()=> {
   setTimeout(()=> {
      menuSection.forEach(j=> j.classList.remove('active'))
    v.classList.add('active')
  },300)
   })
})
// for window scrolldown event
window.onscroll = (()=> {
  let mainSection = document.querySelectorAll('main section');

  mainSection.forEach((v,i)=> {
    let rect = v.getBoundingClientRect().y

    if(rect < window.innerHeight-window.innerHeight+100) {  /* caculate till section reaches to top */
      menuSection.forEach(v=> v.classList.remove('active'))
      menuSection[i].classList.add('active')
    }
  })
})


/* ## Link smoothing WITH UPDATE URL AS WELL
--------------------------------------------- */
// NATIVE JAVASCRIPT WAY
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/* ## HIDE PRELOADER
--------------------------------------------- */
// HIDE PRELOADER
window.onload = setTimeout(function() {
    var loader = document.getElementById("atf-preloader");
    loader.style.transition = '0.5s';
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
}, 500);




/* ## Show Current Year
--------------------------------------------- */
document.getElementById("year").innerHTML = new Date().getFullYear();
