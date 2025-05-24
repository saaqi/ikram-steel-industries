// Function to create content.

import fallBackImg from '/src/assets/images/isi_logo.webp'

const generateData = (data) => {

  const {
    thumb = '',
    image = '',
  } = data;

  const productPics = import.meta.glob('/src/assets/images/**/*', { eager: true })
  const coverImage = productPics[`/src/assets/images/${image}`]?.default || fallBackImg;
  const thumbImage = productPics[`/src/assets/images/${thumb}`]?.default || fallBackImg;

  // Generate HTML output
  const output =
  `<a class="col-6 col-lg-3" href="${coverImage}" data-fslightbox="gallery">
    <img class="img-fluid rounded shadow-sm border border-primary-subtle" src="${thumbImage}" draggable="false" loading="lazy" alt="Ikram Steel Photo Gallery" width="450" height="253">
  </a>`
  return output;

}

const generateContent = (list, selector) => {
  const parentElement = document.getElementById(selector);
  if (parentElement) {
    const dataHtml = list.map(generateData).join("");
    parentElement.innerHTML = dataHtml;
  };
}

export default generateContent