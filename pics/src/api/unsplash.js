import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID y4m6B3uo-xPFIK72rptSqpq3MNNIgq29XA-_HI8c2MQ'
  }
});
