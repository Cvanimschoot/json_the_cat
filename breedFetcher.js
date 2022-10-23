const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName; // Creates the proper query URL based on the users breed input
  request(url, (error, response, body) => {
    if (error) { // check for an error and feed the error into the callback if there is one.
      callback(error, null);
    } else { // if no error is found then we can continue
      const data = JSON.parse(body); // Must parse data first to check if any data is stored within the object
      if (data.length < 1) { // Check if there is any data. No data = Cat not found.
        callback(null, 'Breed not found. Please check spelling and try again.'); // Makes the description of the callback a string informing the user the breed can not be found.
      } else { // Otherwise if data is found print out the description.
        let description = data[0].description; // store the description into a variable for ease of reading.
        callback(null, description); // feed the description into the callback and give it a null error.
      }
    }
  });
};

module.exports = { fetchBreedDescription };