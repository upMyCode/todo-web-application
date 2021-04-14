import React from 'react';
import '../container/UserInterface.css'
import AddUserInfo from '../UserInfo/component/UserInfo'
import AddList from '../List/component/List'
import AddToDoTickets from '../ToDoTickets/component/ToDoTickets'

/*****Add interface for TODO messages*****/
export default function AddUserInterface({userText, ticketsList, defaultDate, defaultMonth, hours, minutes, setTicketsList}) {
    return (
        <div className='container__UserInterface'>
            <div className='userInterface__UserInfo'>
                <AddUserInfo/>
            </div>
            <div className='userInterface__List'>
                <AddList/>
            </div>
            <div className='userInterface__ToDoTickets'>
                <AddToDoTickets 
                    userText={userText}
                    ticketsList={ticketsList}
                    defaultDate={defaultDate}
                    defaultMonth={defaultMonth}
                    setTicketsList={setTicketsList}
                    hours={hours} 
                    minutes={minutes} 
                />
            </div>
        </div>
    )
}