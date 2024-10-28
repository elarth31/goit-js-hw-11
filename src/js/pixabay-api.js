const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46767628-a1a0fbec2a5b02d371c47f484';

export async function fetchImages(query) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const response = await fetch(`${BASE_URL}?${searchParams}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.hits; 
}
