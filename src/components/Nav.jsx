export default function Nav(){
    return(
        <nav className="nav hidden sm:grid">
          <div className="nav__logo-container"></div>
          <div className="nav__list-container">
            <ul className="nav__list">
              <li className="nav__list-item">Inicio</li>
              <li className="nav__list-item">Destinos</li>
              <li className="nav__list-item">Servicios</li>
              <li className="nav__list-item">Galería</li>
            </ul>
          </div>
          <div className="nav__button-container">
            <button className="button__black">
              contactarse
              <img
                className="button__black-icon"
                src="./icons/arrow-black.svg"
                alt="Arrow black"
              />
            </button>
          </div>
        </nav>
    )
}