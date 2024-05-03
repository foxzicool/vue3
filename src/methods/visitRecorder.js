// src/methods/visitRecorder.js
import axios from 'axios';

const visitRecorder = {
  recordVisit(pageName) {
    axios.post('/api/visit', {
      pageName: pageName,
      count: 1
    }).then(response => {
      console.log('Visit recorded:', response.data);
    }).catch(error => {
      console.error('Error recording visit:', error);
    });
  }
}

export default visitRecorder;
