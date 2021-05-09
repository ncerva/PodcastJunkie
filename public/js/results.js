//will need a query selector to add results to stash-- on a button
// const addBtn = document.querySelector('.addBtn')
// const createStash = async (event) => {
//     const stash = addBtn.dataset.stashItem
//     console.log(event.target)
//     console.log(event.target.dataset.stashItem)
//     const response = await fetch('/api/stash', {
//       method: 'POST',
//       body: event.target.dataset.stashItem,
//       headers: {
//         'Content-type' : 'application/json',
//       }
//     });
//     if (response.ok) {
//       console.log(response);
//       alert('Add to stash!');
//     } else {
//       console.log(response);
//       alert('Failed to add to stash');
//     }
// };

const addButtons = document.querySelectorAll('.addBtn');

const createStash = async (event) => {
    const stash = event.target.dataset.stashItem
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

const addStashListeners = (array) => {
  for (i = 0; i < array.length; i++) {
    array[i].addEventListener('click', createStash);
  }
}

//  document.querySelector('.addBtn').addEventListener('click', createStash);
addStashListeners(addButtons);