import React from 'react'
import '../container/ToDoTickets.css'
export default function AddToDoTickets({userText,ticketsList}) {

    if(ticketsList.length > 0 && ticketsList.length < 5) {
        return (
            <div className='container__ToDoTickets'>
                
            {                
                ticketsList.map((elem, id)=> {
                    return (
                        <div 
                             key={id} 
                             className='ToDoTickets__Ticket'>
                            <div className='ToDoTickets__CheckPoint'>
                                <div className='CheckPoint'>
                            
                                </div>
                            </div>
                            <div className='Ticket'>
                                <p className='elem'>{elem}</p>
                            </div>
                        </div>
                    )
                })
             }
            </div>
        )
    } else {
        return (
            <div className='container__ToDoTickets'></div>
        )
    }
    
}