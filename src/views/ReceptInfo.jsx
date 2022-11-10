const React = require('react');
const Layout = require('./Layout');

module.exports = function ReceptInfo({ receptInfo, ingredients, newUser }) {
    return(
			<Layout newUser={newUser}>
				<img src={receptInfo.img} className="cardRecept" alt="imgRecept"/>
				<h1>{receptInfo.title}</h1>
				<h4>{receptInfo.time} мин.</h4>
				<h4>{receptInfo.instruction}</h4>
				<div className='containerIngredient'>
					{ingredients && ingredients.map(({Ingredient}) => 
						<h1>{Ingredient.name}</h1>
					)}

				</div>
			</Layout>
		)
}