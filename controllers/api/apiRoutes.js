const router = require('express').Router();
const { Client } = require('podcast-api');


//search by key word
// router.get('/search/:id', (req, res) => {
//   const client = Client({ apiKey: process.env.API_KEY });
//   client.search({
//     q: req.params.id,
//     sort_by_date: 0,
//     type: 'podcast',
//     offset: 0,
//     published_after: 0,
//     language: 'English',
//     safe_mode: 0,
//   }).then((response) => {
//     // Get response json data here
//     console.log(response.data);
//   }).catch((error) => {
//     console.log(error)
//   });
// });


// If apiKey is null, then we will connect to a mock server
// that returns fake data for testing purposes.

// const client = Client({ apiKey: process.env.API_KEY });
// client.search({
//   q: 'murder',
//   sort_by_date: 0,
//   type: 'podcast',
//   offset: 0,
//   published_after: 0,
//   language: 'English',
//   safe_mode: 0,
// }).then((response) => {
//   // Get response json data here
//   console.log(response.data);
// }).catch((error) => {
//   console.log(error)
// });

//search by genre




module.exports = router;