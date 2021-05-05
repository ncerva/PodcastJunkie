const router = require('express').Router();
const { Client } = require('podcast-api');

const client = Client({
  apikey: /*process.env.API_KEY ||*/ null,
});





// client.search({
//   q: req.keyword,
// }).then((response) => {
//   console.log(response.data);
// }).catch((error) => {
//   if (error.response) {
//     switch (error.response.status) {
//       case 404:
//         console.log(error.response.status)
//         // Endpoint not exist or podcast / episode not exist
//         break;
//       case 401:
//         console.log(error.response.status)
//         // Wrong API key, or your account is suspended
//         break;
//       case 400:
//         console.log(error.response.status)
//         // Invalid parameters
//         break;
//       case 500:
//         console.log(error.response.status)
//         // Server-side error
//         break;
//       default:
//         console.log(error.response.status)
//         // Unknown errors
//         break;
//     }
//   } else {
//     // Failed to connect to Listen API servers
//   }
//   console.log(error);
// });


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