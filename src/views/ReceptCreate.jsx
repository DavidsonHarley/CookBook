const React = require('react');
const Layout = require('./Layout');

module.exports = function ReceptCreate({newUser}) {
 
  return (
    <Layout newUser={newUser}>
            <form method='Post' action="/receptCreate">
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Название Рецепта</label>
            <input type="text" name='title' className="form-control" id="exampleFormControlInput1" placeholder="Название Рецепта"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Время приготовления</label>
            <input type="text" name='time' className="form-control" id="exampleFormControlInput1" placeholder="Время приготовления"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Инструкция</label>
            <textarea type='text' name='instruction' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Картинка</label>
            <input type="text" name='img' className="form-control" id="exampleFormControlInput1" placeholder="Ссылка на картинку"/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Название Ингредиетов</label>
            <textarea type='text' name='name' className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ингредиент перечисляите через запятую"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Создать</button>
             
          

            </form>
    </Layout>
  );
};