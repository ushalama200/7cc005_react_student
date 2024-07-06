import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Student
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
                Add Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Edit Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/likelist">
                Favourite List
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/student">
                Student
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/account"
              >
                Account
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/register">
                Register
              </Link>
            </li>
          </ul>

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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;