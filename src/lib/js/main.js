import './_navigation';

// Generate Gallery Content
import galleryData from './gallery.json';
import generateContent from './generateContent';
generateContent(galleryData, 'homegallery');

/* ## Show Current Year
--------------------------------------------- */
document.getElementById('year').innerHTML = new Date().getFullYear();
