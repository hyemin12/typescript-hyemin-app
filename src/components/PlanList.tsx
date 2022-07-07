import { Link } from "react-router-dom";
import { PlanProps } from "../type";

function PlanList({ plan }: PlanProps) {
  console.log(plan);
  return (
    <li key={plan.id} className="home_item">
      <Link to="/">
        <span className="icon">{plan.category}</span>
        <h4>{plan.title}</h4>
        {plan.startDate === plan.endDate ? (
          <p>{plan.startDate}</p>
        ) : (
          <p>
            {plan.startDate} ~ {plan.endDate}
          </p>
        )}
      </Link>
    </li>
  );
}

export default PlanList;
