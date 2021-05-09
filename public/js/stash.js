// const removeStash = async (event) => {
//     const response = await fetch('/stash', {
//         method: 'DELETE',
//         body: event.target.dataset.stashId,
//       });
//     if (response.ok) {
//         console.log(response);
//         alert('Removed from stash!');
//       } else {
//         console.log(response);
//         alert('Failed to remove');
//       }
// };


const deleteStash = async (event) => {
  event.preventDefault();
    if (event.target.hasAttribute('data-stashid')) {
      const id = event.target.getAttribute('data-stashid');
      const response = await fetch(`/api/stash/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        document.location.replace('/stash');
      } else {
        alert('Failed to delete project');
        console.log(id);
      }
    }
  };

const returnId = async (event) => {
  if (event.target.hasAttribute('data-stashid')) {
    const id = event.target.getAttribute('data-stashid');
    console.log(id);
  } else {
    console.log('not reading dataset');
  }
}
// remove from stash 
const deleteButtons = document.querySelectorAll('.removeBtn');

const addDeleteListeners = (array) => {
  for (i=0; i<array.length; i++) {
    array[i].addEventListener('click', deleteStash);
  }
} 

addDeleteListeners(deleteButtons);