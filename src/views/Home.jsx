const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser, receptHome}) {
  console.log(receptHome);
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
        {receptHome &&  receptHome.map(({title, img, Compounds}) => 
          <>
          <div className='containerRecept'>
         <div className="card" style={{width: '18rem'}}>
            <div>
              <a className='app' href="/">🖤</a> 
              </div>
              <a href="/">
              <img src={img} class="card-img-top" alt="img"/>
              </a>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <div >
              <p className="card-text">
                Количество ингредиентов: {Compounds.length}
                </p> 
              </div>
            </div>
          </div>
         </div>
          </>
        )}
        </div>
      
    </Layout>
  );
};
