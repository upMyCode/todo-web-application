import React,{useState,useContext} from 'react'
import '../container/InputMenu.css'
import button from '../container/button.png'
import {Context} from '../../App/container/context'


export default function AddInputMenu() {

const {value, setValue, ticketsList, setTicketsList} = useContext(Context)

function getValue(e) {
    setValue(e.target.value)
}

function addValue() {
    ticketsList.push(value)
    setTicketsList(ticketsList)
}
    return (
            <div className='container__InputMenu'>
                <div className='container__InputMenu-button'>
                    <a className='addForm' onClick={addValue}>
                        <img 
                            src={button}
                            alt='plus'
                        />
                    </a>
                </div>
                <div className='container__InputMenu-button-form'>
                    <input 
                        type='text' 
                        placeholder='Type the simple text here' 
                        onChange={getValue}
                    />
                </div>
            </div>
    )
}