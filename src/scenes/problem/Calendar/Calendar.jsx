import { useState } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import Header from '../../../components/Header';
import { tokens } from '../../../theme';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = selected => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        time: selected.time,
      });
    }
  };
  let todayStr = new Date().toISOString().replace(/T.*$/, '');

  const handleEventClick = selected => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`,
      )
    ) {
      selected.event.remove();
    }
  };

  const time = new Date()(formatDate(time));
  const calendarData = [
    {
      id: '1',
      title: 'Equipment failure C-BEV',
      date: `2022-11-29`,
      start: todayStr + 'T06:30:00',
      end: todayStr + 'T12:00:00',
      color: colors.redAccent[500],
    },
    {
      id: '2',
      title: 'Pęknięcie Q4 M41 LH',
      date: `2022-11-27`,
      start: todayStr + 'T01:00:00',
      end: todayStr + 'T04:00:00',
      color: colors.redAccent[500],
    },
    {
      id: '3',
      title: 'Pęknięcie Q3 M5 RH',
      date: '2022-11-28',
      start: todayStr + 'T14:50:00',
      end: todayStr + 'T15:30:00',
      color: colors.redAccent[500],
    },
    {
      id: '4',
      title: 'Pęknięcie Q3 M1 RH',
      date: '2022-11-27',
      start: todayStr + 'T19:00:00',
      end: todayStr + 'T22:00:00',
      color: colors.redAccent[500],
    },
  ];

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map(event => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={events => setCurrentEvents(events)}
            initialEvents={calendarData}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
