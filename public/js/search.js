//create async event
//need actual fetch
const searchSubmitBtn = document.querySelector('#search-submit');
const keywordInput = document.querySelector('#keyword-input');
const genreSelect = document.querySelector('#genre-select');



const searchHandler = (event) => {
  event.preventDefault();

  const keyword = keywordInput.value.trim();
  const genres = genreSelect.value.trim();

  if (!keyword) {
    alert('Must enter valid keyword!');
  } else {
  localStorage.setItem('keyword', JSON.stringify(keyword));
  localStorage.setItem('genres', JSON.stringify(genres));
  location.replace('/results');
  keywordInput.value = '';
  }
}

searchSubmitBtn.addEventListener('click', searchHandler);
