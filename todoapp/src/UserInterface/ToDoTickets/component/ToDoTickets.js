import React from 'react'
import '../container/ToDoTickets.css'
export default function AddToDoTickets({userText,ticketsList}) {

    return (
        <div className='container__ToDoTickets'>
        {                
            ticketsList.map((elem)=> {
                return (
                     <div className='ToDoTickets__Ticket'>{elem}</div>
                )
            })
         }
        </div>
    )
}