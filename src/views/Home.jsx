const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ newUser, receptHome}) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="styles/main.css" />
      Hello user!
      {' '}
      { newUser }
      <div >
        <div className='mainImg'>
          <img className='img' src="img/1539535829172342793.jpg" alt="edaMain" />
        </div>
        {receptHome &&  receptHome.map(({title, img, id }) => 
          <>
          <div key={id} className='containerRecept'>
            <div className="card" style={{width: '18rem'}}>
              <img src={img} className="card-img-top" alt="img"/>
              <div className="card-body">
                <a href={`/recept/${id}`}><h5 className="card-title">{title}</h5></a> 
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </Layout>
  );
};
