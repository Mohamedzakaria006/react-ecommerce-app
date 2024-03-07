import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.header} d-flex align-items-center`}
    >
      <div className={`container`}>
        <div>
          <Link className="navbar-brand" to={""}>
            BuyMe
          </Link>
        </div>
        <div class="input-group">
          <input
            type="search"
            class="form-control"
            placeholder="Search For Product ...."
          />
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={`navbar-nav ms-auto ${styles.links}`}>
            <li>
              <Link className="nav-link active" aria-current="page" to={""}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"products"}>
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"cart"}>
                Cart
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"register"}>
                Register
              </Link>
            </li>
            <li>
              <Link className="nav-link " to={"login"}>
                Login
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
