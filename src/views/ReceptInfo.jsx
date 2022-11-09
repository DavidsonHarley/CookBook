const React = require('react');
const Layout = require('./Layout');

module.exports = function ReceptInfo({ receptInfo, ingredients  }) {
	console.log('ИНГРЕДИЕНТЫ====>',ingredients )
	console.log('РЕЦЕПТ====>',receptInfo)
    return(
			<Layout>
				<img src={receptInfo.img} className="cardRecept" alt="imgRecept"/>
				<h1>{receptInfo.title}</h1>
				<h4>{receptInfo.time}</h4>
				<h4>{receptInfo.instruction}</h4>
			</Layout>
		)
}