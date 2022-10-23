const { fetchBreedDescription } = require('./breedFetcher');

const catType = process.argv[2];

fetchBreedDescription(catType, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});