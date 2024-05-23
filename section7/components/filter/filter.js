import { useState } from "react";
import classes from "./filter.module.css";

export default function Filter(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDate = (e) => {
    if (e.target.id === "start-date") {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    props.onSubmit(startDate, endDate);
  };

  return (
    <form className={classes["filter-wrap"]} onSubmit={handleSumbit}>
      <label htmlFor="start-date">Start Date</label>
      <input type="date" id="start-date" onChange={handleDate} />
      <label htmlFor="end-date">End Date</label>
      <input type="date" id="end-date" onChange={handleDate} />
      <button>Search</button>
    </form>
  );
}
