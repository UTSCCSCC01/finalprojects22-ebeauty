import FullCalendar from '@fullcalendar/react'
import React, { useState, useEffect, useRef } from 'react'
import RequireAuth from '../Authentication/RequireAuth';
import useAuth from '../Authentication/useAuth';
import '../css/ProviderSchedule.css'

//plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// TODO: not it fetches all the events in db, it should not work that way.
// suggestion:
// https://stackoverflow.com/questions/43863997/loading-events-to-fullcalendar
// https://fullcalendar.io/docs/events-json-feed
const CustomerCalendar = ({ providerId }) => {
  if (isNaN(providerId)) {
    //hardcoded providerId for now, is used when directly view the page for development purpose.
    providerId = "62cfba412377caca02c6d2ec";
  }
  const { auth } = useAuth();
  let customerId = auth._id;
  console.log(customerId)
  const inputEl = useRef(null);

  useEffect(() => {
    async function fetchCalendar() {
      await fetch("/api/calendars/calendar/" + providerId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(res => {
          for (var i = 0; i < res.length; i++) {
            // only add events that no customer reserved
            if ((res[i].customerId) != undefined) {
              let title = res[i].title;
              let startTime = res[i].startTime;
              let endTime = res[i].endTime;
              let calendarApi = inputEl.current.getApi();
              calendarApi.addEvent({
                title: title,
                start: startTime,
                end: endTime,
                color: '#ff6b6b'
              });
            }
          }
        })
    }
    fetchCalendar()
  }, [])


  const handleBook = async (e) => {
    if (window.confirm("Do you want to reserve this booking?")) {
      //get event ObjectId (mongoDB id)
      const start = e.event.startStr;
      const end = e.event.endStr;
      // get eventId from DB
      await fetch(`/api/calendars/timeslot/${providerId}/${start}/${end}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (!res.ok) {
          alert(`Server Error`);
        } else {
          const eventId = JSON.parse(await res.text())
          const customerJson = { "customerId": customerId }
          console.log(customerJson);
          console.log(eventId._id);
          await fetch(`/api/calendars/timeslot/${eventId._id}`, {
            method: "PATCH",
            body: JSON.stringify(customerJson),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (!res.ok) {
              alert(`Server Error`);
            } else {
              alert('Successfully reserved appointment');
              e.event.remove();
            }
          })
        }
      })
    }
  }

  return (
    <div className={"customerCalendar"}>
      <FullCalendar
        ref={inputEl}
        aspectRatio={2}
        plugins={[timeGridPlugin, interactionPlugin]}
        allDaySlot={false}
        initialView="timeGridWeek"
        eventClick={handleBook}
        selectable={false}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: true
        }}
        eventOverlap={false}
      />
    </div>

  )



};


export default CustomerCalendar;