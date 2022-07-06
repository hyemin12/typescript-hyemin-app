import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1 className="logo logo_font">hyemin planner</h1>
      </Link>

      <div className="btn_group">
        <span>로그인</span>
        <span>지도</span>
        <span>검색</span>
      </div>
    </header>
  );
}

export default Header;
