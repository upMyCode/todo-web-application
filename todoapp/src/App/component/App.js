import DateInfo from '../../DateInfo/component/DateInfo';
import React,{useState, useEffect, useContext} from 'react';
import {culculateDate, getValueDays}  from '../../DateInfo/Date/container/DateComponentLogic'
import AddBackgroundImg from '../../BackgroundImg/component/BackgroundImg'
import AddUserInterface from '../../UserInterface/component/UserInterface'
import AddInputMenu from '../../inputMenu/component/InputMenu'
import {Context} from '../container/context'
import '../container/App.css'


export default function App()  {
    /**Get several data from DateComponentLogic**/
    const [dataInfo, setDate] = useState(() => culculateDate());
    const [value, setValue] = useState('')
    const [ticketsList, setTicketsList] = useState([])
    const days = getValueDays();
    const {hours, minutes, date, year, month} = dataInfo;

    useEffect(()=> {
        setInterval(()=> {
           const data = culculateDate()
           setDate(data)
        },60000)
    },[dataInfo])

    return (
        <Context.Provider value={{value, setValue, ticketsList, setTicketsList}}>
            <div className='UI__Main'>
                <div className = 'UI'>
                    <div className = 'UI__LeftSide'>
                        <DateInfo 
                            hours={hours} 
                            minutes={minutes} 
                            year={year} 
                            date={date} 
                            month={month} 
                            days={days}
                        />
                        <AddBackgroundImg/>
                    </div>
                    <div className = 'UI__RightSide'>
                        <AddUserInterface
                            userText={value}
                            ticketsList={ticketsList}
                            setTicketsList={setTicketsList}
                            defaultDate={date}
                            defaultMonth={month}
                            hours={hours} 
                            minutes={minutes} 
                        />
                    </div>
                </div>
                <div className='UI__Main-Bottom'>
                        <AddInputMenu/>
                </div>   
            </div>
        </Context.Provider>   
    ) 
}