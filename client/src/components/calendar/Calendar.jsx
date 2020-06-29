import React from "react";
import "./style.css";

const Calendar = () => {
  return (
    <iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%237986CB&amp;ctz=America%2FDenver&amp;src=MmRzNWZibXQzOWlkNTlpbTA1bnFkb2RjaThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showNav=1&amp;showDate=1&amp;showTitle=0" title="Nite-tinerary" style={{border:"solid 1px rgb(240, 222, 222)"}} width="500" height="500" frameborder="0" scrolling="no"></iframe>
  )
}

export default Calendar;