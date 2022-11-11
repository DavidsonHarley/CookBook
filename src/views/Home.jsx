const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser, receptHome, newUserID}) {
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
              {newUser ? (<button id={el.id} type="button" className="btn">В избранное</button>) : (null)}
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
