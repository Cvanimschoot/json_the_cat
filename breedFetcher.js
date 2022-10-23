const catType = process.argv[2];
const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + catType;
console.log(url);

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
});