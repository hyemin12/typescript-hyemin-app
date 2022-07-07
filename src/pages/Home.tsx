import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import { dbService } from "../fbase";

import "../components/Home.css";
import Header from "../components/Header";
import AddPlan from "../components/AddPlan";
import { Plans } from "../type";
import PlanList from "../components/PlanList";

function Home() {
  const [plans, setPlans] = useState<Plans>([]);
  useEffect(() => {
    // 데이터 가져오기
    dbService.collection("plan").onSnapshot((snapshot) => {
      const planArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(planArr);
      setPlans(planArr);
    });
  }, []);
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
        <AddPlan />
        <div className="main">
          <ul>
            {plans &&
              plans.map((plan) => <PlanList key={plan.title} {...plan} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
