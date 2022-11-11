const React = require('react');
const Layout = require('./Layout');

module.exports = function ReceptInfo({ receptInfo, ingredients, newUser }) {
    return(
			<Layout newUser={newUser}>
				
				<div className='containerInfo'>
				<img src={receptInfo.img} className="cardRecept" alt="imgRecept"/>
				
				<div className='titleText'>
					{receptInfo.title}
				</div>
				<div className='info'>
				<div className='containerIngredient'>
					<h4>ИНГРЕДИЕНТЫ</h4>
					{ingredients && ingredients.map(({Ingredient}) => 
						<div>{Ingredient.name}</div>
					)}
				</div>
				<div className='timeInfo'>
					<h4>ВРЕМЯ ПРИГОТОВЛЕНИЯ:</h4> {receptInfo.time} мин.
				</div>
				</div>
				

				<div className='instructionRecept'>
				 <h4>ПОШАГОВЫЙ РЕЦЕПТ ПРИГОТОВЛЕНИЯ</h4>	
					{receptInfo.instruction}
				</div>
				
				
				</div>
			</Layout>
		)
}