import FullCalendar from '@fullcalendar/react'

//plugins
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const ProviderSchedule = () => {


    const handleDateSelect = (e) => {
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
                editable: true
            })
        }
    }

    const handleEventDelete = (e) => {
       if (window.confirm("Do you want to delete this booking?")) {
           e.event.remove();
       }
    }

    return (
        <div className={"providerSchedule"}       style={{
            display: 'block',
            width: '65%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '30pt',
            paddingBottom: '30pt',
        }}>
            <FullCalendar
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
            />
        </div>

    )



};


export default ProviderSchedule;