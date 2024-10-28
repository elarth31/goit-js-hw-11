import { fetchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

loader.style.display = 'none';
formSearch.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    listImages.innerHTML = '';
    loader.style.display = 'block';

    const inputValue = event.target.elements.search.value.trim();

    if (!inputValue) {
        loader.style.display = 'none';
        displayError('Please enter a search term!'); // Изменено имя функции
        return;
    }

    fetchImages(inputValue)
        .then(data => {
            loader.style.display = 'none';

            if (!data.length) {
                displayError('Sorry, there are no images matching your search query. Please try again!');
                return;
            }

            listImages.innerHTML = createMarkup(data);
            lightbox.refresh(); 
            formSearch.reset();
        })
        .catch(err => {
            loader.style.display = 'none';
            console.error(err);
            displayError('An error occurred. Please try again later.');
        });
}

// Функция для отображения ошибок с использованием iziToast
function displayError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
    });
}
