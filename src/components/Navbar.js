import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MeroKam
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/create-profile"
              >
                {login && !isProfile ? "Add Profile" : ""}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`/profile/${userData.id}/edit`}
              >
                {login && isProfile ? "Edit Profile" : ""}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/likelist">
                {login ? "Favourite List" : ""}
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link active" to="/student">
                Student
              </Link>
            </li>  */}

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/account"
              >
                {login ? "Account" : ""}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/register">
                {login ? "" : "Register"}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={login ? handleClick : null}
                className="nav-link active"
                to={login ? "/dashboard" : "/login"}
              >
                {login ? "Logout" : "Login"}
              </Link>
            </li>

            {/*
              <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={loggedIn ? "/logout" : "/login"}
                  >
                    {loggedIn ? "Logout" : "Login"}
                  </Link>
                </li>
              </ul>
            </li>


              <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">
                Disabled
              </Link>
            </li>
               */}
          </ul>
          {/* 
           <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
