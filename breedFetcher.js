const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //if error in communication exists call callback function with only error as argument
    if (error) {
      callback(error);
    } else {
      const breed = JSON.parse(body)[0];
      //if breed doesnt exist or isn't entered calls callback function only with "string" as error
      if (!breed) {
        callback('Breed not found');
      } else {
        //if everything is fine error us null adn enter description as second argument
        callback(null, breed.description);
      }
    }
  });
};



module.exports = { fetchBreedDescription };
