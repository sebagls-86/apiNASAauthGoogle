const axios = require('axios');

 
 function getImage() {
   return axios
      .get("https://api.nasa.gov/planetary/apod?api_key=QViRwGQN1ZYqcGMLhLyQ4ktlw8CW5EzN6gsNnIac")
      
     
      
 }
   

 
module.exports = {getImage};