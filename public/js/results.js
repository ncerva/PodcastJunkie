//will need a query selector to add results to stash-- on a button

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

const testBtn = (event) => {
  if (event.target.dataset.stashItem) {
    const stash = event.target.dataset.stashItem;
    console.log('this has a mystery stash');
  } else {
    console.log('no stash bro');
  }
};


// document.querySelector('#addBtn').addEventListener('click', createStash);

document.querySelector('#addBtn').addEventListener('click', testBtn);
