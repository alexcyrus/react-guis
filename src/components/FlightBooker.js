import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function FlightBooker() {
  const options = [
    'one-way flight', 'return flight'
  ];
  const defaultOption = options[0];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <h2>Flight Booker</h2>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
      <DatePicker
        selected = {startDate}
        onChange = {date => setStartDate(date)}
        minDate = {new Date()}
      />
      <DatePicker
        selected = {endDate}
        onChange = {date => setEndDate(date)}
        minDate = {new Date()}
      />
      <button>Book</button>
    </div>
  );
}

export default FlightBooker;
