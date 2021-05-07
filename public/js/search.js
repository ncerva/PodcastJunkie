//create async event

//need actual fetch
const searchSubmitBtn = document.querySelector('#search-submit');
const keywordInput = document.querySelector('#keyword-input');
const genreSelect = document.querySelector('#genre-select');


const searchHandler = async (event) => {
  event.preventDefault();

  const keyWord = keywordInput.value.trim();
  const genre = genreSelect.value.trim();
  if (keyWord && genre){
    const response = await fetch(`/results/${genre}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log(response);
      location.replace(`/results/${keyWord}/${genre}`);
    } else {
      alert(response.statusText);
    }
  } else if (keyWord) {
    const response = await fetch(`/results/${keyWord}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log(response);
      document.location.replace(`/results/${keyWord}`);
    } else {
      alert(response.statusText);
    }
  } else {
    alert ('Search requires a keyword')
  }
};

searchSubmitBtn.addEventListener('click', searchHandler);
