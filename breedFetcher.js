const catType = process.argv[2];
const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + catType;

request(url, (error, response, body) => {
  if (error) { // check for and print out the error if one occured.
    console.log('error:', error);
  } else { // if no error is found then we can continue
    const data = JSON.parse(body); // Must parse data first to check if any data is stored within the object
    if (data.length < 1) { // Check if there is any data. No data = Cat not found.
      console.log('Breed not found. Please check spelling and try again.');
    } else { // Otherwise if data is found print out the description.
      console.log(data[0].description);
    }
  }
});