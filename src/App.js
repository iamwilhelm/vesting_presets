import React, { useState } from "react";

import DatePicker from "react-datepicker";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  let [vestingStartDate, setVestingStartDate] = useState(new Date());

  let onSubmit = evt => {
    evt.preventDefault();
    console.log("submitting");
    axios.post("http://localhost:3010/securities", {
      vesting_start_date: vestingStartDate
    });
  };

  return (
    <div className="App container">
      <div className="row justify-content-start">
        <div className="col-4">
          <h1>Create Security</h1>
          <p>Create a security below.</p>

          <form method="POST" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="vesting-start-date">Vesting Start Date</label>
              <DatePicker
                name="vesting-start-date"
                className="form-control"
                selected={vestingStartDate}
                onChange={date => setVestingStartDate(date)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="vesting-duration">Vesting Duration</label>
              <input
                type="number"
                className="form-control"
                name="vesting-duration"
              />
            </div>

            <input type="submit" className="btn btn-primary" value="Create" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
