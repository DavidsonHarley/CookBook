const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ newUser,newRecept}) {
  console.log('123123', newRecept);
  return (
    <Layout newUser={newUser}>
     <div className='containerCards'>

{newRecept &&  newRecept.map((el) => 
  <>
  <div key={el.Recept.id} className='containerRecept'>
 <div className="card" style={{width: '18rem'}}>
    <img src={el.Recept.img} className="card-img-top" alt="img"/>
    <div className="card-body">
      <a href={`/recept/${el.Recept.id}`}><h5 className="card-title">{el.Recept.title}</h5></a> 
        {/* <p className="card-text">
        Количество ингредиентов: {el.Compounds.length}
        </p>  */}
    </div>
  </div>
 </div>
  </>
)}
</div>
    </Layout>
  );
};