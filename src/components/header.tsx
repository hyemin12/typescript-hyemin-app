import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="logo logo_font">hyemin planner</h1>
      </Link>

      <div className="btn_group">
        <span>
          <AccountCircleIcon />
        </span>
        <span>
          <MapIcon />
        </span>
        <span>
          <SearchIcon />
        </span>
      </div>
    </header>
  );
}

export default Header;
