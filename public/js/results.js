//will need a query selector to add results to stash-- on a button


//const { Client } = require ('podcast-api');

const createStash = async (event) => {
  if (event.target.hasAttribute('data-stashItem')) {
    const stash = event.target.getAttribute('data-stashItem');
    const title_original = stash.title_original
    //add all other attribute

    const response = await fetch('/api/stash/', {
      method: 'POST',
      body: JSON.string({
        title_original, link, thumbnail, publisher_original, total_episodes, description_original
      }),
      headers: {
        'Content-type' : 'application/json',
      }
    });
    if (response.ok) {
      console.log(response);
      alert('Add to stash!');
    } else {
      console.log(response);
      alert('Failed to add to stash');
    }
  }
};
document.querySelector('#addBtn').addEventListener('click', createStash);


//const client = Client({
  //apiKey: process.env.
//})