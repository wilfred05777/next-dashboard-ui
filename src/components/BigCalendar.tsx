"use client"
// resources 
// https://github.com/jquense/react-big-calendar?tab=readme-ov-file#custom-styling

import { Calendar, momentLocalizer, Views, View } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const BigCalendar = () => {

    const [view, setView] = useState<View>(Views.WORK_WEEK)

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    }
    
    return(
        <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week","day"]}
        view={view}
        //view="work_week"
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(2025, 1, 0, 8, 0, 0)}    
        max={new Date(2025, 1, 0, 17, 0, 0)}    
        />
    )
}

export  default BigCalendar