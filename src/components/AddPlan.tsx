// import { dbService } from "fbase";
import React, { useState } from "react";

function AddPlan() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setTitle(value);
    } else if (name === "startD") {
      setStartDate(value);
    } else if (name === "endD") {
      setEndDate(value);
    }
  }
  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value);
  }
  return (
    <div>
      <form>
        <select name="category" value={category} onChange={handleSelect}>
          <option value="meet_up ">약속</option>
          <option value="travel">여행</option>
          <option value="ect">기타</option>
        </select>
        <input
          name="title"
          type="text"
          value={title}
          maxLength={12}
          onChange={handleInput}
        />
        <input
          name="startD"
          type="date"
          value={startDate}
          onChange={handleInput}
        />
        <input name="endD" type="date" value={endDate} onChange={handleInput} />
      </form>
    </div>
  );
}

export default AddPlan;
