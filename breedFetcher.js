const request = require('request');
const arg = process.argv.slice(2);
const breed = arg[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error !== undefined && error !== null) return console.log('error: ', error);

  const data = JSON.parse(body)[0];
  if (!data) {
    return console.log('Breed not found');
  } else {
    console.log(data.description);
  }
});
