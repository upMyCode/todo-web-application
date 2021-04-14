import React,{useContext} from 'react'
import '../container/ToDoTickets.css'
import {getMonthName} from '../../../DateInfo/Date/container/DateComponentLogic'
import  pancel from '../container/pancel.png'
import {Context} from '../../../App/container/context'


export default function AddToDoTickets({userText,ticketsList, defaultDate, defaultMonth, minutes, hours, setTicketsList}) {

    if(ticketsList.length > 0 && ticketsList.length < 5) {
        let month = getMonthName()
        function removeTickets(e) {   
            setTicketsList(prev => {
                const a = prev;
                a.splice(e.target.id, 1);
                return [...a]
            })
        }

        console.log(ticketsList)
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
                                <div className='Ticket__item-1'>
                                    <>
                                        <p className='elem'>{elem}</p>
                                    </>
                                    <>
                                        <span className = 'defaultDate'>{`${defaultDate} ${month}    ${hours} : ${minutes}`}</span>
                                    </>
                                </div>
                                <div className='Ticket__item-2'>
                                    <div 
                                        className='item-2'
                                        id={id} 
                                        onClick={removeTickets}>
                                    </div>
                                    <div className='Ticket__item-2-img'>
                                        <img width='20' height='20' src={pancel} alt='pancel'/>
                                    </div>
                                </div>
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