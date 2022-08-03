import FullCalendar from '@fullcalendar/react'
import React, { useEffect, forwardRef } from 'react'
import '../css/Calendar.css'
import moment from 'moment';

//plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// TODO: not it fetches all the events in db, it should not work that way.
// suggestion:
// https://stackoverflow.com/questions/43863997/loading-events-to-fullcalendar
// https://fullcalendar.io/docs/events-json-feed

// calendar for provider to view
const ProviderCalendar = forwardRef(({ providerId, addedEvent, setClickStartTime }, ref) => {

  // one thing is update event when provider adding it, 
  // so I encode event id to be providerid + starttime then check if it's inside
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
            let title = res[i].title;
            let startTime = res[i].startTime;
            let endTime = res[i].endTime;
            let calendarApi = ref.current.getApi();
            if (calendarApi.getEventById(providerId + startTime) == null) {
              calendarApi.addEvent({
                id: providerId + startTime,
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
  }, [addedEvent])

  const handleDateSelect = async (e) => {
    let title = prompt('Please enter a title for your booking: ')

    let calendarApi = e.view.calendar
    calendarApi.unselect() // clear date selection
    if (title) {
      calendarApi.addEvent({
        title,
        start: e.startStr,
        end: e.endStr,
        allDay: e.allDay,
        color: '#ff6b6b',
        editable: false,            //set to false (difficult to handle dragging)
      })
      // store in db
      let event = {
        providerId: providerId, title: title, startTime: moment(e.startStr).toDate().toISOString(),
        endTime: e.endStr
      }
      console.log(providerId + event.startTime);

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
          alert('Successfully scheduled available times');
        }
      })
    }
  }

  // if no toISOString, it would not match the data retrieve from mongodb, which cause search event by id failed.
  function click(e) {
    setClickStartTime(moment(e.event.startStr).toDate().toISOString());
  }
  return (
    <div className={"providerSchedule"}>
      <FullCalendar
        ref={ref}
        aspectRatio={2}
        plugins={[timeGridPlugin, interactionPlugin]}
        allDaySlot={false}
        initialView="timeGridWeek"
        eventClick={click}
        selectable={true}
        contentHeight="auto"
        timeZone={false}
        select={handleDateSelect}
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: true
        }}
        eventOverlap={false}
      />
    </div>

  )



});


export default ProviderCalendar;