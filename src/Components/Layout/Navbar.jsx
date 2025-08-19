import { FaCartArrowDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../features/products/productsSlice";
import { getAllCategories } from "../../api/productsApi";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.products);

  useEffect(() => {
    async function fetchData() {
      const categories = await getAllCategories();
      dispatch(setCategories(categories));
    }
    fetchData();
  }, [dispatch]);

  console.log(categories.categories, ":categories")
  const handleNavClick = (path) => {
    // Close offcanvas manually
    const offcanvasEl = document.querySelector(".offcanvas.show");
    if (offcanvasEl) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      bsOffcanvas.hide();
    }
    navigate(path);
  };
const handleCategories = (item) => {
  navigate(`/categories?category=${item}`);
};
  return (
    <div className={`container-fluid ${style.navbarWrapper}`}>
      <nav className={`navbar navbar-expand-sm ${style.customNavbar}`}>
        <div className="container">
          <Link className={`navbar-brand ${style.logo}`} to="/">
            K-S <span>SHOP</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className={`navbar-nav ms-sm-auto mb-2 ${style.navMenu}`}>
                <li className="nav-item">
                  <button
                    className={`nav-link ${style.navLink}`}
                    onClick={() => handleNavClick("/")}
                  >
                    Home
                  </button>
                </li>

                <li className="nav-item dropdown">
                  <button
                    className={`nav-link dropdown-toggle ${style.navLink}`}
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                  >
                    Category
                  </button>
                  <ul className={`dropdown-menu ${style.dropdownMenu}`}>
                    {categories?.categories?.map((item) => (
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleCategories(item)}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${style.navLink}`}
                    onClick={() => handleNavClick("/all-products")}
                  >
                    Shop
                  </button>
                </li>

                <li className={`nav-item ${style.cartWrapper}`}>
                  <button
                    className={`nav-link ${style.cartLink}`}
                    onClick={() => handleNavClick("/cart")}
                  >
                    <FaCartArrowDown className={style.cartIcon} />
                    <span className={style.cartBadge}>3</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
