
const cardContainer = document.querySelector('.containerCards');
const postsContainer = document.querySelector('.postsContainer');
const containerRecept = document.querySelector('.containerRecept')
const card = document.querySelector('.card')

cardContainer?.addEventListener('click', async (e) => {
  try {
    if(e.target.tagName === 'BUTTON' && e.target.innerHTML === 'В избранное') {
      const { id:receptID } = e.target
      const response = await fetch('/favoriteAdd', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ receptID })
      })
      const results = await response.json()
    }
      if (e.target.tagName ==='BUTTON' && e.target.innerHTML === 'Удалить'){
      const { id } = e.target;
      const cardContainer = e.target.parentElement.parentElement.parentElement
      const response = await fetch('/', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id })
      })
      
      if (response.status === 200) {
        // card.removeChild(e.target.parentNode);
        cardContainer.remove()
      }
    }
  } catch (error) {
    console.log('Error', error);
  }
})

postsContainer.addEventListener('click', async (e) => {
  try {
    if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Удалить') {
      const { id } = e.target;
      console.log(e.target.id);
      const response = await fetch('/favorites', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (response.status === 200) {
        postsContainer.removeChild(e.target.parentNode);
      }
    }
  } catch (error) {
    console.log('error ', error);
  }
});


