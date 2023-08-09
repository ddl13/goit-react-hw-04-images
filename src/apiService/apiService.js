import axios from 'axios';

const apiKey = '38351935-5b71d90fe0a8f8cd4edf16851';

export async function getImages(search, page) {
  const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const request = await axios.get(url);
    const response = JSON.parse(request.request.response);
    const totalHits = response.totalHits;
    const images = response.hits.map(hit => {
      return {
        id: hit.id,
        src: hit.webformatURL,
        srcLarge: hit.largeImageURL,
        alt: hit.tags,
      };
    });
    return { images, totalHits };
  } catch (error) {
    console.log(error.message);
  }
}
