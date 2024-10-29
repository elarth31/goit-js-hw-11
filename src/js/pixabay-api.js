const API_ENDPOINT = 'https://pixabay.com/api/';
const ACCESS_KEY = '46767628-a1a0fbec2a5b02d371c47f484';

export async function fetchImages(searchTerm) {
    const searchParams = new URLSearchParams({
        key: ACCESS_KEY,
        q: searchTerm,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    try {
        const serverResponse = await fetch(`${API_ENDPOINT}?${searchParams}`);
        console.log(serverResponse);

        if (!serverResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await serverResponse.json();
        return responseData.hits; 
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
