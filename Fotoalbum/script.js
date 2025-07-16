const images = [
  "./Bilder/Baum.png",
  "./Bilder/Eis.png",
  "./Bilder/fluss.png",
  "./Bilder/naturwasser.png",
  "./Bilder/Eisbären.png",
  "./Bilder/Schwan.png",
  "./Bilder/Vögel.png",
  "./Bilder/Strand.png",
  "./Bilder/Flamingo.png",
  "./Bilder/brazil.png",
  "./Bilder/Papagei.png",
   "./Bilder/fuku.png",
   "./Bilder/polar.png",
  "./Bilder/kamel.png",
  "./Bilder/indien.png",
  "./Bilder/tokyo.png",
  "./Bilder/türkei.png",
  "./Bilder/amazon.png",
  
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const counter = document.getElementById('counter');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');



let currentIndex = 0;

function renderGallery() {
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.addEventListener('click', () => openLightbox(index));
    gallery.appendChild(img);
  });
}

function openLightbox(index) {
  currentIndex = index;
  lightbox.classList.remove('hidden');
  updateLightbox();
}


function closeLightbox() {
  lightbox.classList.add('hidden');
}
console.log("updateCounter() called", currentIndex, images.length);

function updateLightbox() {
  lightboxImg.src = images[currentIndex];
  lightboxImg.alt = `Foto ${currentIndex + 1}`;
  counter.textContent = `${currentIndex + 1} / ${images.length}`;
}
console.log("updateCounter() called", currentIndex, images.length);


function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}



closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

renderGallery();
