import React, { useState } from 'react';
import moment from 'moment';
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

  const [status, setStatus] = useState("one-way flight")

  const handleSetStatus = (values) => {
    setStatus(values.value)
  }

  const handleAlert = () => {
   const formattedStartDate =  moment(startDate).format('MMMM Do YYYY');
   const formattedEndDate =  moment(endDate).format('MMMM Do YYYY');
    if (status === "one-way flight"){
      alert(`You have booked a one-way flight on ${formattedStartDate}.`)
    }
    else {
      alert(`You have booked a round-trip flight from ${formattedStartDate} to ${formattedEndDate}.`)
    }
  }

  return (
    <div className="flightContainer">
      <div className="flightOptions">
        <Dropdown
          options={options}
          value={defaultOption}
          placeholder="Select an option"
          onChange={(values) => {handleSetStatus(values)}}
        />
        <DatePicker
          selected = {startDate}
          onChange = {date => setStartDate(date)}
          minDate = {new Date()}
        />
        {status === "return flight" ? <DatePicker
          selected = {endDate}
          onChange = {date => setEndDate(date)}
          minDate = {new Date()}
        /> : "" }
      </div>
      <div className="bookButton">
        <Button onClick={() => {handleAlert()}}>Book</Button>
      </div>
    </div>
  );
}

export default FlightBooker;
