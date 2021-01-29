import axios from 'axios';

const fetchHitsImages = ({searchQuery = '', currentPage = 1}) => {
  return axios.get(`https://pixabay.com/api/?key=19054407-f71c417dea239df63beb23abd&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
}

const fetchApi = { fetchHitsImages }
export default  fetchApi;