import { axios } from 'axios';

const API_KEY = '36583851-0d66a94b45f6f3ead45c78ba8';

let count = 1;

export default async function fetchData(data) {
  try {
    const getImg = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${count}`
    );
    const response = await getImg.json();
    count += 1;
    return response;
  } catch (error) {
    console.log(error);
  }
}
