import React,{useState, useContext, useEffect} from 'react'
import './InputMenu.css'
import button from './button.png'
import {Context} from '../App/context'


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
                    <button  
                        onClick={addValue}>
                        <img 
                            src={button}
                            alt='plus'
                        />
                    </button>
                    <input 
                        type='text' 
                        placeholder='Type the simple text here' 
                        onChange={getValue}
                    />
            </form>
    )
}