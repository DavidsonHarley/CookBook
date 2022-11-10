const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ newUser,newRecept, newUserID}) {
//  console.log(newRecept.map((el)=> el.userID));
  return (
    <Layout newUser={newUser}>
      

  <div className='postsContainer'>
{newRecept &&  newRecept.map((el) => 
  <div key={el.Recept.id} className='card' style={{width: '18rem'}} >
    <img src={el.Recept.img} className="card-img-top" alt="img"/>
      <a href={`/recept/${el.Recept.id}`}><h5 className="card-title">{el.Recept.title}</h5></a> 
      <button id={el.id} type="button" className="btn btn-danger">Удалить</button>
  </div>
)}
</div>
    </Layout>
  );
};