const React = require('react');

module.exports = function Layout({ children, newUser, receptHome }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"></link>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Pacifico&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="stylesheet" href="/styles/infoRecept.css" />
        <link rel="stylesheet" href="/styles/favorites.css" />
        <link rel="stylesheet" href="/styles/receptCreate.css" />
        <title>Cook Book</title>
        <script defer src="js/favoriteAdd.js"/>
      </head>
      <body>
               
                            <nav className="navbar bg-light fixed-top navBack" >
                      <div className="container-fluid">
                        <div className='logoNav'>
                        <a className="navbar-brand" href="/">
                         <img className='imgLogo' src="/img/photo_2022-11-11_11-46-32.jpg" alt="imgLogo" />  Кулинарная Книга
                          </a>
                        </div>
                        <div className='buttonNav'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                          <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> 
                          {' '}
                          { newUser }
                          </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>
                          {newUser ? (
                          <div className="offcanvas-body">
                          
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                              
                              <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/favorites">Избранное</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/receptCreate">Добавить рецепт</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/logout">Выйти</a>
                              </li>
                            </ul>
                            </div>
                             ) : ( 
                            <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                              <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Главная</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/registration">Регистрация</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/login">Вход</a>
                              </li>
                            </ul>
                            </div>
                             )}
                          </div>
                        </div>
                    </nav>
                   
                    

       
        { children }

<footer>
  <div className='footer'></div>
</footer>
      </body>
    </html>
  );
};
