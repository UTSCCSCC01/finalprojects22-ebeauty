import React, { useState, useEffect, useRef } from 'react'
import ProviderSchedule from './ProviderSchedule';
import { Dropdown } from 'react-dropdown-now';

import 'react-dropdown-now/style.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material'

const ProviderScheduling = () => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  function postTimeslot(){
    console.log("as")
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      a provider schedule page.
      <div style={{ width: "50%" }}>
        <ProviderSchedule />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{margin:0}}>set available times</h1>
        <h5 style={{margin:0}}>note: one timeslot only one customer can do reservation</h5>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
          <TimePicker
            value={hour}
            onChange={(newValue) => {
              setHour(newValue);
            }}
            renderInput={(params) => <TextField size="small"{...params} />}
          />
        </LocalizationProvider>
        <Dropdown
          placeholder="Hairdress"
          options={['1 Hr', '2 Hr', '3 Hr']}
          value="1 Hr"
          onChange={(option) => setHour(option)}
        />
        <button onClick={postTimeslot}>add</button>
      </div>
    </div>

  )



};


export default ProviderScheduling;