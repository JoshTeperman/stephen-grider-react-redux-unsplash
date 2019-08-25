const axios = require('axios')

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fa86802486e5bb5543195a47c12630627a3401c4b17b13a92b4fcbeadeccc3d4'
  }
})