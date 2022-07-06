// import { dbService } from "fbase";
import { useState } from "react";

function AddPlan() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  return (
    <div>
      <form>
        <select value={category}>
          <option value="meet_up ">약속</option>
          <option value="travel">여행</option>
          <option value="ect">기타</option>
        </select>
        <input type="text" value={title} />
      </form>
    </div>
  );
}

export default AddPlan;
