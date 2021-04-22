import React,{useContext, useEffect, useState} from 'react'
import '../container/ToDoTickets.css'
import {getMonthName} from '../../../DateInfo/Date/container/DateComponentLogic'
import  pancel from '../container/pancel.png'
import {Context} from '../../../App/container/context'


export default function AddToDoTickets({userText, ticketsList, defaultDate, defaultMonth, minutes, hours, setTicketsList}) {
    
        const [ticketColor, setTicketColor] = useState(false);
        const [idElem, setIdElem] = useState(0)
        
         
        useEffect(() => {
            if (ticketsList.length > 4) {
                setTicketsList((prev) => {
                    const a = prev;
                    a.splice(4, a.length - 4);
                    return [...a]
                });
            }
        },[ticketsList])

        let month = getMonthName()

        function removeTickets(e) {   
            setTicketsList(prev => {
                const a = prev;
                a.splice(e.target.id, 1);
                return [...a]
            })
        }

        function addStatus(e) {

            if (e.target.className == 'CheckPoint__unimportent') {
                e.target.className = 'CheckPoint__importent';
                setTicketColor(true);
                setIdElem(e.target.id);
                ticketsList[e.target.id].classNameTicket = 'Ticket__importent';
                ticketsList[e.target.id].classNameText = 'elem__importent';
                
            } else {
                e.target.className = 'CheckPoint__unimportent';
                ticketsList[e.target.id].classNameTicket = 'Ticket';
                ticketsList[e.target.id].classNameText = 'elem';
                setTicketColor(false);
            }
        }
        console.log(ticketsList)
        return (

            <div className='container__ToDoTickets'>
                
            {                
                ticketsList.map((elem, id) => {
                    return (
                        <div 
                             key={id} 
                             className='ToDoTickets__Ticket'>
                            <div className='ToDoTickets__CheckPoint'id={id}>
                                <a className='CheckPoint__unimportent' onClick={addStatus} id={id}>

                                </a>
                            </div>
                            <div className={elem.classNameTicket} id={id}>
                                <div className='Ticket__item-1'>
                                    <>
                                        <p className={elem.classNameText} id={elem.id}>{elem.text}</p>
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
      
}