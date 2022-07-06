import { Link } from "react-router-dom";
import TypeIt from "typeit-react";

import Header from "../components/Header";
import "../components/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="greeting">
        <div className="greeting_bg"></div>
        <div className="text_group">
          <div className="typeit">
            <TypeIt
              options={{
                strings: ["안녕하세요.", "새로운 일정을 작성하세요! :)"],
                speed: 100,
                waitUntilVisible: true,
                startDelay: 100,
              }}
            />
          </div>
          <div className="btn_white">새로운 프로젝트 생성 +</div>
        </div>
        <div className="main">
          <ul>
            <Link to="/">
              <li className="home_item">
                <span className="icon">여행</span>
                <h4>부산</h4>
                <p>2022-00-00 ~ 2022-00-00</p>
              </li>
            </Link>
            <Link to="/">
              <li className="home_item">
                <span className="icon">여행</span>
                <h4>부산</h4>
                <p>2022-00-00 ~ 2022-00-00</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
