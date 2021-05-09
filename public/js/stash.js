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
    if (event.target.hasAttribute('data-stash-id')) {
      const id = event.target.getAttribute('data-stash-id');
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


// remove from stash 
document.querySelector('.removeBtn').addEventListener('click', deleteStash);