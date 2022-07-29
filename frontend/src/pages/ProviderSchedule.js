import FullCalendar from '@fullcalendar/react'
import React, { useState, useEffect, useRef } from 'react'
import '../css/ProviderSchedule.css'

//plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// TODO: not it fetches all the events in db, it should not work that way.
// suggestion:
// https://stackoverflow.com/questions/43863997/loading-events-to-fullcalendar
// https://fullcalendar.io/docs/events-json-feed
const ProviderSchedule = () => {
  const inputEl = useRef(null);

  useEffect(() => {
    async function fetchCalendar() {
      await fetch("/api/calendars/calendar/" + "62cfba412377caca02c6d2ec", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
      .then(res => {
        for(var i = 0; i < res.length; i++){
          let title = res[i].title;
          let startTime = res[i].startTime;
          let endTime = res[i].endTime;
          let calendarApi = inputEl.current.getApi();
          calendarApi.addEvent({
            title: title,
            start: startTime,
            end: endTime
          });
        }
      })
    }
    fetchCalendar()
  }, [])


    const handleDateSelect = async (e) => {
        let title = prompt('Please enter a title for your booking: ')
        let rest = window.confirm("Do you plan to include rest during this booking?")
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
                rest: rest
            })
        }
        // store in db
        //hardcoded providerId for now
        let event = { providerId: "62cfba412377caca02c6d2ec", title: title, startTime: e.startStr,
            endTime: e.endStr, rest: rest}

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



  const handleEventDelete = (e) => {
    if (window.confirm("Do you want to delete this booking?")) {
      e.event.remove();
    }
  }

    // const handleConfirm = async (e) => {
    //     let calendarApi = inputEl.current.getApi()
    //     const events = calendarApi.getEvents();
    //     events.forEach(elem => console.log(elem.extendedProps));
    //
    //     await fetch("/api/calendars", {
    //         method: "POST",
    //         body: JSON.stringify(events),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //
    //         }

    //     )

    //     alert("Schedule has been confirmed.")
    // }


    return (
        <div className={"providerSchedule"}>
            <FullCalendar
                ref={inputEl}
                aspectRatio={2}
                plugins={[ timeGridPlugin, interactionPlugin]}
                allDaySlot={false}
                initialView="timeGridWeek"
                eventClick={handleEventDelete}
                selectable={true}
                select={handleDateSelect}
                eventTimeFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: true
                }}
                eventOverlap={false}
                // customButtons={{confirmButton: {text: 'Confirm', click: handleConfirm}}}
                // headerToolbar={{left: 'prev,next today', center: 'title', right: 'confirmButton'}}






            />
        </div>

    )



};


export default ProviderSchedule;