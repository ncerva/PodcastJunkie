const deleteButtons = document.querySelectorAll('.removeBtn');

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

const addDeleteListeners = (array) => {
  for (i=0; i<array.length; i++) {
    array[i].addEventListener('click', deleteStash);
  }
} 

addDeleteListeners(deleteButtons);