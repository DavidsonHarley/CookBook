const React = require('react');

module.exports = function Layout({ children, newUser, receptHome }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />

        <title>Cook Book</title>

        <script defer src="js/favoriteAdd.js"/>


      </head>
      <body>
               
                              <header>
                            <nav class="navbar bg-light fixed-top">
                      <div class="container-fluid">
                        <a class="navbar-brand" href="/">Кулинарная Книга</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                          <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                          </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>
                          {newUser ? (
                          <div class="offcanvas-body">
                          
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                              
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/favorites">Избранное</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/receptCreate">Добавить рецепт</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/logout">Выйти!</a>
                              </li>
                            </ul>
                            </div>
                             ) : ( 
                            <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                              <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Главная</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/registration">Регистрация</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/login">Вход</a>
                              </li>
                            </ul>
                            </div>
                             )}
                          </div>
                        </div>
                    </nav>
                    </header>

       
        { children }
      </body>
    </html>
  );
};
