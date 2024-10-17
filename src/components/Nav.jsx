export default function Nav(){
    return(
        <nav className="nav hidden sm:grid">
          <div className="nav__logo-container">
          <a className="text-2xl nav__logo" href="/" aria-label="Logo de la pagina">Seaway</a>
          </div>
          <div className="nav__list-container">
            <ul className="nav__list">
              <li className="nav__list-item">
                <a href="#inicio">Inicio</a></li>
              <li className="nav__list-item">
                <a href="#yates">Yates</a></li>
                <li className="nav__list-item">
                <a href="#galeria">Galería</a></li>
              <li className="nav__list-item">
                <a href="#beneficios">Beneficios</a></li>
             
            </ul>
          </div>
          <div className="nav__button-container">
            <a target="_BLANK" href="https://www.linkedin.com/in/maximiliano-cejas/" className="button__black nav__button" aria-label="Boton de contacto">
              contactarse
              <img
                className="button__black-icon"
                src="./icons/arrow-black.svg"
                alt="Flecha negra"
                aria-label="Boton de contacto"
              />
            </a>
          </div>
        </nav>
    )
}