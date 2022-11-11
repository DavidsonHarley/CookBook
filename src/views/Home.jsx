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
              {newUser ? (<button id={el.id} type="button" className="btn btn-secondary btnFavorite">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
</svg>
              </button>)  : (null)}
                {newUserID === el.userID ? (<button id={el.id} type="button" className="btn">Удалить</button>) : null}
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
