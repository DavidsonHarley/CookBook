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
        {receptHome &&  receptHome.map(({title, img, instruction}) => 
          <>
          <div></div>
          <div>
            <h1>{title}</h1>
            </div>
            <div >
              <img className='img' src={img} alt="img" />
            </div>
            <div>
              {instruction}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
