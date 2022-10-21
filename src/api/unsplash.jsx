import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID caT9VZmGaGc8IxhblssQTw-eZGdaz5faA4SXwcFIkWE'
    }
});