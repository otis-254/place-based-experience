let currentIndex = 0;
const qrCodes = [
  {
    src: 'Location1.png',
    title: 'The 1St Location',
    description: 'Description is hidden untill you Scan the Code',
    image: 'image1.jpg',
    audio: 'audio1.mp3'
  },
  {
    src: 'Location 2.png',
    title: 'The 2nd Location',
    description: 'Description is hidden untill you Scan the Code',
    image: 'image2.jpg',
    audio: 'audio2.mp3'
  },
  {
    src: 'Location 3.png',
    title: 'The 3rd Location',
    description: 'Description is hidden untill you Scan the Code',
    image: 'image3.jpg',
    audio: 'audio3.mp3'
  },
  {
    src: 'Location 4.png',
    title: 'The 4th Location',
    description: 'Description is hidden untill you Scan the Code',
    image: 'image4.jpg',
    audio: 'audio4.mp3'
  }
];

const qrCodeImages = document.querySelectorAll('#qrcode-container img');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const imageElement = document.getElementById('image');
const audioElement = document.getElementById('audio');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function updateContent() {
  const currentQRCode = qrCodes[currentIndex];
  for (let i = 0; i < qrCodeImages.length; i++) {
    qrCodeImages[i].style.display = 'none';
  }
  document.querySelector(`#qrcode-container img[src="${currentQRCode.src}"]`).style.display = 'block';
  titleElement.textContent = currentQRCode.title;
  descriptionElement.textContent = currentQRCode.description;
  imageElement.src = currentQRCode.image;
  audioElement.src = currentQRCode.audio;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateContent();
  }
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = false;
});

nextButton.addEventListener('click', () => {
  if (currentIndex < qrCodes.length - 1) {
    currentIndex++;
    updateContent();
  }
  prevButton.disabled = false;
  nextButton.disabled = currentIndex === qrCodes.length - 1;
});

updateContent();