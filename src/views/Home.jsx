const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser, receptHome}) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="styles/main.css" />
      Hello user!
      {' '}
      { newUser }

        <div className='mainImg'>
          <img className='img' src="img/1539535829172342793.jpg" alt="edaMain" />
        </div>
          
        <div className='containerCards'>
        {receptHome &&  receptHome.sort((a, b) => b.Compounds.length - a.Compounds.length).map((el) => 
          <>
          <div key={el.id} className='containerRecept'>
            <div className="card" style={{width: '18rem'}}>
              <img src={el.img} className="card-img-top" alt="img"/>
              <div className="card-body">
              <a href={`/recept/${el.id}`}><h5 className="card-title">{el.title}</h5></a> 
              <p className="card-text">
                Количество ингредиентов: {el.Compounds.length}
              </p> 
              <p>Время приготовления: {el.time} мин.</p>
              {newUser ? (<button id={el.id} type="button" className="btn btn-outline-info btnBucket">В избранное</button>) : (null)}
              
              </div>
            </div>
          </div>
          </>
        )}
        </div>
    </Layout>
  );
};
