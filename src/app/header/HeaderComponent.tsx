
const HeaderComponent = (): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg bgLigth">
      <div className="container">
        <a className="navbar-brand" >
          <img src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/perfil.jpg?alt=media&token=42a2a5d7-f5b6-4b9b-b511-8b04b699354d" alt="foto" />
          <h1>REVELACIONESDECARO</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page">
                Blog</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page">
                Sobre mi</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#">
                Contacto
              </a>
            </li>
          {/*   <li className="nav-item">
              <a
                className="nav-link"
                href="#">Control</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link border-itemNav">
                Salir
              </a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-moon-filled"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              name="searchTerm"
            />
            <button
              type="submit"
              className="btn"
            >
              Buscar
            </button>
          </form>
          <form
            className="d-flex bloque"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              name="searchTerm"
            />
            <button type="submit" className="btn">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

  );
};
export default HeaderComponent;
