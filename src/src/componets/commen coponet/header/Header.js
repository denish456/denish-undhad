import "./Header.css";
import Logo from "../../images/Logo.png";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const navbar = [
  {
    names: "Home",
    url: "/",
  },
  {
    names: "About",
    url: "/about",
  },
  {
    names: "Pages",
    icon: <FaAngleDown />,
    submenu: [
      {
        names: "Service_single",
        url: "/service_single",
      },
      {
        names: "Service",
        url: "/service",
      },
      {
        names: "Our Team",
        url: "/team",
      },
      {
        names: "Blog_news",
        url: "/blog_news",
      },
      {
        names: "Project",
        url: "/project",
      },

      {
        names: "Licenses",
        url: "/licenses",
      },
      {
        names: "Changelog",
        url: "/changelog",
      },
      {
        names: "Password",
        url: "/password",
      },
      
      
      {
        names: "Total",
        url: "/total",
      },
    ],
  },
  {
    names: "Shop",
    url: "/shop",
  },

  {
    names: "Contact",
    url: "/contact",
  },
];

function Header() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  
  

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            <span className="Organick">Organick</span>
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
              {navbar.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link ${
                      activeMenuItem === index ? "active" : ""
                    }`}
                    to={item.url}
                    onClick={() => handleMenuItemClick(index)}
                  >
                    {item.names} {item.icon}
                    {item?.submenu?.length > 0 && (
                      <ul className="submenu p-0 text-center">
                        {item.submenu.map((submenuItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={submenuItem.url} className="header_link">
                              {submenuItem.names}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex position-relative" role="search">
              <input
                className="form-control search me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="icon2">
                <CiSearch />
              </div>
              <div className="cart_main relative">
                <div className="cart_icon">
                  <AiOutlineShoppingCart />
                </div>
                <span className="cart_text">
                  Cart ({localStorage.getItem("cart_item1") || 0})
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
