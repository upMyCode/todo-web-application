import React,{useState, useContext, useEffect} from 'react'
import '../container/InputMenu.css'
import button from '../container/button.png'
import {Context} from '../../App/container/context'


export default function AddInputMenu() {

const {value, setValue, ticketsList, setTicketsList} = useContext(Context)

function getValue(e) {
    setValue(e.target.value)
}

function addValue(e) {
    e.preventDefault();
    setTicketsList((prev) => {
        return (
            [
                ...prev ,
                {
                    text: value,
                    classNameTicket: 'Ticket',
                    classNameText: 'elem'
                } 
            ]
        )        
    })
} 

    return (
            <form className='container__InputMenu' onSubmit={addValue}>
                <div className='container__InputMenu-button'>
                    <a  
                        className='addForm' 
                        onClick={addValue}>
                        <img 
                            src={button}
                            alt='plus'
                        />
                    </a>
                </div>
                <div className='container__InputMenu-form'>
                    <input 
                        type='text' 
                        placeholder='Type the simple text here' 
                        onChange={getValue}
                    />
                </div>
            </form>
    )
}