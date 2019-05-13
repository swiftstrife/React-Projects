import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7e1e6861e17c6c0ac2d80e605c930e58b8c76a03bb308fd372ad1925e60db342'
    }
});