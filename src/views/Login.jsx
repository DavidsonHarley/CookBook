const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <link rel="stylesheet" href="styles/authLogin.css" />
     
     <form className="regForm" action="/login" method="POST">
     <div className="register-form-container">
   <h1 className="form-title">
     Авторизация
   </h1>
   <div className="form-fields">
     <div className="form-field">
       <input name="login" type="text" placeholder="Имя" />
     </div>
     <div className="form-field">
       <input name="password" type="password" placeholder="Пароль" />
     </div>
   </div>
   <div className="form-buttons">
     <button className="button">Войти</button>
   </div>
 </div>
     </form>
    </Layout>
  );
};