import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';

function FlightBooker() {
  const options = [
    'one-way flight', 'return flight'
  ];
  const defaultOption = options[0];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
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
      <Button>Book</Button>
    </div>
  );
}

export default FlightBooker;
