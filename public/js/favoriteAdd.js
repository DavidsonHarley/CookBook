const cardContainer = document.querySelector('.containerCards');
console.log(cardContainer);

cardContainer?.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    if(e.target.tagName === 'BUTTON' && e.target.innerHTML === 'В избранное') {
      const { id:receptID } = e.target
      const response = await fetch('/favoriteAdd', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ receptID })
      })
     const result = await response.json()
     console.log(result);
    }
  } catch (error) {
    console.log('Error', error);
  }
})
