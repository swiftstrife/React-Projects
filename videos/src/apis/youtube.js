import axios from 'axios';

const KEY = 'AIzaSyCV5zYM4-4755vcz61ipKIraIdjt2Nmoiw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});
