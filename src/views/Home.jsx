const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser, receptHome, newUserID, receptFavorite}) {
  console.log('receptFavorite', receptFavorite)
  console.log('newUserID', newUserID)
  return (
    <Layout newUser={newUser}>

          <div className='Titellogo'>
            <h1 >Кулинарная Книга </h1> 
          </div>
      <div className='containerMain'>
        <div className='mainImg'>
          <img className='img' src="img/1539535829172342793.jpg" alt="edaMain" />
        </div>
          <div className='textTitlenadImg'>
             Выбери Лучший Рецепт
          </div>
        <div className='containerCards'>
        {receptHome &&  receptHome.sort((a, b) => b.Compounds.length - a.Compounds.length).map((el) => 
          <>
          <div key={el.id} className='containerRecept'>
            <div className="card" style={{width: '18rem'}}>
              <img src={el.img} className="imgRecept" alt="img"/>
              <div className="cardTitleTextt">

              <a className='aTitle' href={`/recept/${el.id}`}>
                <h5 className="cardTitle">{el.title}</h5>
                </a> 
                <div className = 'containerBtn'>
              {newUser ? (<button id={el.id} type="button" className="btn btn-secondary btnFavorite">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
</svg>
              </button>)  : (null)}
              
                {newUserID === el.userID ? (<button id={el.id} type="button" className="btn btn-secondary btnDelete">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"></path>
</svg>
              </button>) : null}
              </div>
                <div className='elTime'>
                  <p className="sizeTime">
                  🥗- {el.Compounds.length} ел.
                  </p> 
                  <p className='sizeTime'>⌚- {el.time} мин.</p>    
                </div>
                

              </div>
            </div>
          </div>
          </>
        )}
        </div>
        </div>
    </Layout>
  );
};
