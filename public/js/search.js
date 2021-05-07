//create async event
//need actual fetch
const searchSubmitBtn = document.querySelector('#search-submit');
const keywordInput = document.querySelector('#keyword-input');
const genreSelect = document.querySelector('#genre-select');

// const searchHandler = (event) => {
//   event.preventDefault();

//   const keyword = keywordInput.value.trim();
//   const genres = genreSelect.value.trim();

//   if (!keyword) {
//     alert('Must enter valid keyword!');
//   } else {
//   localStorage.setItem('keyword', JSON.stringify(keyword));
//   localStorage.setItem('genres', JSON.stringify(genres));
//   location.replace('/results');
//   keywordInput.value = '';
//   }
// }

const searchHandler = async (event) => {
  event.preventDefault();

  const keyWord = keywordInput.value.trim();

  if (keyWord) {
    const response = await fetch(`/results/${keyWord}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log(response);
      document.location.replace(`/results/${keyWord}`)
    } else {
      alert('Invalid search!');
    }
  }
};

searchSubmitBtn.addEventListener('click', searchHandler);
