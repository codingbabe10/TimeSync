import React from 'react';

function DayCalendar() {
  // Dummy data for events (replace this with your actual data)
  const events = [
    { id: 1, title: 'Meeting with Client', start: '10:00 AM', end: '11:00 AM' },
    { id: 2, title: 'Lunch Break', start: '12:00 PM', end: '1:00 PM' },
    { id: 3, title: 'Team Standup', start: '3:00 PM', end: '4:00 PM' }
  ];

  return (
    <div className="day-calendar">
      <h2>Day Calendar</h2>
      <div className="events">
        {events.map(event => (
          <div key={event.id} className="event">
            <div className="time">{event.start} - {event.end}</div>
            <div className="title">{event.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayCalendar;
