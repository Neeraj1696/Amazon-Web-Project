import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useStateValue } from "./StateProvider";
import { SportsBasketball } from "@mui/icons-material";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.seekpng.com/png/full/18-181177_amazon-logo-png-magnetic-rinse-cup-with-toothbrush.png"
          alt="logo-Img"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineone">Hello Guest</span>
          <span className="header_optionline2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Return</span>
          <span className="header_optionline2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionline2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartCheckoutIcon />
            <span className="header-optionline2-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
