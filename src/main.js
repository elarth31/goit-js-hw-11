import { fetchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const searchFormElement = document.querySelector('.js-search');
const imagesGalleryElement = document.querySelector('.gallery');
const loadingSpinnerElement = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

loadingSpinnerElement.style.display = 'none';
searchFormElement.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    imagesGalleryElement.innerHTML = '';
    loadingSpinnerElement.style.display = 'block';

    const inputValue = event.target.elements.search.value.trim();

    if (!inputValue) {
        loadingSpinnerElement.style.display = 'none';
        displayError('Please enter a search term!'); 
        return;
    }

    fetchImages(inputValue)
        .then(data => {
            loadingSpinnerElement.style.display = 'none';

            if (!data.length) {
                displayError('Sorry, there are no images matching your search query. Please try again!');
                return;
            }

            imagesGalleryElement.innerHTML = createMarkup(data);
            lightbox.refresh(); 
            searchFormElement.reset();
        })
        .catch(err => {
            loadingSpinnerElement.style.display = 'none';
            console.error(err);
            displayError('An error occurred. Please try again later.');
        });
}


function displayError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
    });
}
