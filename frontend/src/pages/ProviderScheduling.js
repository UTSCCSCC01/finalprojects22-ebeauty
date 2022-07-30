import React, { useState, useEffect, useRef } from 'react'
import ProviderCalendar from '../components/ProviderCalendar';
import {
  Card,
} from "reactstrap";
import { Dropdown } from 'react-dropdown-now';

import 'react-dropdown-now/style.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { TextField } from '@mui/material'
import useAuth from '../Authentication/useAuth';
import moment from 'moment';
import '../css/ProviderScheduling.css';
import '../css/providerRegister.css'

// TODO have bug of drag create schedule and delete would not refresh the calendar of removing
const ProviderScheduling = () => {

  const { auth } = useAuth();
  let providerId = auth?._id;
  const [addedEvent, setAddedEvent] = useState("");
  const [clickStartTime, setClickStartTime] = useState("");
  const ref = useRef(null);

  // add event
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [duration, setDuration] = useState("1 Hr");
  async function postTimeslot() {
    let detail = moment(date).format('DD-MMM-YYYY') + " " + moment(hour).format('HH:mm');
    var start = moment(detail).toDate();
    var end = moment(detail).add(parseInt(duration.charAt(0)), 'hours').toDate();

    // store in db
    let event = {
      providerId: providerId, title: "Available", startTime: start,
      endTime: end
    }

    await fetch("/api/calendars", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        alert(`Server Error`);
      } else {
        setAddedEvent(start);
        alert('Successfully scheduled available times');
      }
    })
  }


  async function deleteTimeslot() {
    await fetch(`/api/calendars/timeslot/${providerId}/${clickStartTime}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(async (res) => {
        if (res._id) {
          await fetch("/api/calendars/timeslot", {
            method: "DELETE",
            body: JSON.stringify(res),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (!res.ok) {
              alert(`Server Error`);
            } else {
              alert('Successfully deleted timeslot');
              let calendarApi = ref.current.getApi();
              console.log(providerId + clickStartTime)
              calendarApi.getEventById(providerId + clickStartTime).remove();
              setClickStartTime("");
            }
          })
        } else {
          alert(`Server Error`);
        }
      })
  }

  // helper of useeffect below
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  async function getCustomer(customerId) {
    await fetch(`/api/customers/${customerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then((res) => {
        setFirstName(res.firstName)
        setLastName(res.lastName)
        setEmail(res.email)
      })
  }

  // usage: show customer info
  useEffect(() => {
    const handleGetInfo = async (e) => {
      await fetch(`/api/calendars/timeslot/${providerId}/${clickStartTime}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
      .then((res) => {
        getCustomer(res.customerId);
      })
    }
    handleGetInfo();
  }, [clickStartTime])

  return (
    <div className={'provider-scheduling center'}>
      <div className='provider-scheduling-left'>
        {/* providerid for calendar to know who, addedEvent to refresh event when adding
            and refer to get api of event and delete when decided to do so. */}
        <ProviderCalendar providerId={providerId} addedEvent={addedEvent} ref={ref} setClickStartTime={setClickStartTime} />
      </div>
      <div className='provider-scheduling-right'>
        <Card className={'scheduleCard all-width'}>

          <h1 >Set Available Time</h1>
          <h5 className='no-margin'>note1: you can directly click and hold cursor to set available time</h5>
          <h5 className='no-margin'>note2: one timeslot - one customer to reserve</h5>
          <div className='fixed-width'>

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
            <div className={'provider-scheduling center'}>

              <h2 className='no-margin'> For : </h2>
              <Dropdown
                className='no-margin'
                placeholder="1 Hr"
                options={["1 Hr", "2 Hrs", "3 Hrs", "4 Hrs", "5 Hrs", "6 Hrs", "7 Hrs", "8 Hrs", "9 Hrs", "10 Hrs", "11 Hrs", "12 Hrs"]}
                value={duration}
                onChange={(option) => setDuration(option.value)}
              />
            </div>

            <div className='center'>
              <button className='Button' onClick={postTimeslot}>add</button>
            </div>
          </div>


          {clickStartTime ? (
            <div className='to-left'>
              {firstName ? (
                <>
                  <h1>Reservation Info:</h1>
                  <h2>{"customer: " + firstName + " " + lastName}</h2>
                  <h2>{"email: " + email}</h2>
                </>
              ) : (
                <h1>available</h1>
              )}
              <button className='Button' onClick={deleteTimeslot}>cancel this one?</button>
            </div>
          ) : <div></div>
          }
        </Card>

      </div>
    </div>

  )



};


export default ProviderScheduling;