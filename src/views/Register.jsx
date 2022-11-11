const React = require('react');
const Layout = require('./Layout');

module.exports = function Registr() {
  return (
    <Layout>
      <link rel="stylesheet" href="styles/authLogin.css" />
     
        <form className="regForm" action="/registration" method="POST">
        <div className="register-form-container">
      <h1 className="form-title">
        Регистрация
      </h1>
      <div className="form-fields">
        <div className="form-field">
          <input name="login" type="text" placeholder="Имя" />
        </div>
        <div className="form-field">
          <input name="email" type="email" placeholder="Почта" />
        </div>
        <div className="form-field">
          <input name="password" type="password" placeholder="Пароль" />
        </div>
      </div>
      <div className="form-buttons">
        <button className="button">Регистрация</button>
      </div>
        <a className="aDiv" href='/login'>Если уже зарегестрирован</a>
    </div>
        </form>
    </Layout>
  );
};
