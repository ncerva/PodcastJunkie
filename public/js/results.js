//will need a query selector to add results to stash-- on a button

const createStash = async (event) => {
    const button = document.querySelector('.addBtn')
    const stash = button.dataset.stashItem
    //const title_original = stash.title_original
    debugger
    console.log(event.target)
console.log(event.target.dataset.stashItem)
    const response = await fetch('/api/stash', {
      method: 'POST',
      body: event.target.dataset.stashItem,
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
};

 document.querySelector('.addBtn').addEventListener('click', createStash);
