import '../scss/_bs-static.scss';
import '../scss/main.scss';
import 'boxicons/css/boxicons.min.css'
// import 'boxicons';



import "./_navigation"
import "./_hidepreloader"


// Generate Gallery Content
import galleryData from "./gallery.json"
import generateContent from "./generateContent"
generateContent(galleryData, 'homegallery')




/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    document.querySelector('body').classList.add('dark');
  } else {
    document.querySelector('body').classList.remove('dark');
  }
});


/* ## Show Current Year
--------------------------------------------- */
document.getElementById("year").innerHTML = new Date().getFullYear();
