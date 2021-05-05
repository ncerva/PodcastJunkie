//create async event
//need actual fetch
const searchSubmitBtn = document.querySelector('#search-submit');
const keywordInput = document.querySelector('#keyword-input');
const genreSelect = document.querySelector('#genre-select');



const searchHandler = (event) => {
  event.preventDefault();
  


}


/* keyword only
curl -X GET --include 'https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=podcast&offset=0&only_in=title%2Cdescription&language=English&safe_mode=0' \
  -H 'X-ListenAPI-Key: 109740b10f2444e08896a2ac78ddd11d'*/