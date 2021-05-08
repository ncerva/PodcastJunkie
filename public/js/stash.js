// const removeStash = async (event) => {
//     const response = await fetch('/stash', {
//         method: 'DELETE',
//         body: event.target.dataset.stashItem,
//         headers: {
//           'Content-type' : 'application/json',
//         }
//       });
//     if (response.ok) {
//         console.log(response);
//         alert('Removed from stash!');
//       } else {
//         console.log(response);
//         alert('Failed to remove');
//       }
// };


// // remove from stash 
// document.querySelector('.removeBtn').addEventListener('click', removeStash);