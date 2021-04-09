import React from 'react';
import '../container/UserInterface.css'
import AddUserInfo from '../UserInfo/component/UserInfo'
import AddList from '../List/component/List'
import AddToDoTickets from '../ToDoTickets/component/ToDoTickets'

/*****Add interface for TODO messages*****/
export default function AddUserInterface({userText}) {
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
                />
            </div>
        </div>
    )
}