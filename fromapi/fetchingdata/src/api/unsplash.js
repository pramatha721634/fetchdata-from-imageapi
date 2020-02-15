import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 413727822494a7acce6c5d68c06c3cacbbe7df2398114f2c0f57c65cdba78aae'
      }
});