import FullCalendar from '@fullcalendar/react'
import React, { useEffect, useRef } from 'react'
import useAuth from '../Authentication/useAuth';
import '../css/Calendar.css'

//plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// TODO: not it fetches all the events in db, it should not work that way.
// suggestion:
// https://stackoverflow.com/questions/43863997/loading-events-to-fullcalendar
// https://fullcalendar.io/docs/events-json-feed


// calendar of provider for customer to view
const CustomerCalendar = ({ providerId }) => {
  const { auth } = useAuth();
  let customerId = auth?._id;
  console.log(providerId)
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
          console.log(res[i].customerId != undefined);
          // only add events that no customer reserved
          if (res[i].customerId == undefined) {
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
  }, [providerId])


  const handleBook = async (e) => {
    if (window.confirm("Do you want to reserve this booking?")) {
      //get event ObjectId (mongoDB id)
      const start = e.event.startStr;
      const end = e.event.endStr;
      // get eventId from DB
      await fetch(`/api/calendars/timeslot/${providerId}/${start}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
      .then(async (res) => {
        if (res._id) {
          const eventId = res._id
          const customerJson = { "customerId": customerId }
          await fetch(`/api/calendars/timeslot/${eventId}`, {
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
        } else {
          alert(`Server Error`);
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