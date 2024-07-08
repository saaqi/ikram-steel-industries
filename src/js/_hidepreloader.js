/* ## HIDE PRELOADER
--------------------------------------------- */
// HIDE PRELOADER
window.onload = setTimeout(function () {
  var loader = document.getElementById("atf-preloader");
  loader.style.transition = '0.5s';
  loader.style.visibility = 'hidden';
  loader.style.opacity = '0';
}, 500);