import DateInfo from '../../DateInfo/component/DateInfo';
import React,{useState, useEffect} from 'react';
import {culculateDate, getValueDays}  from '../../DateInfo/Date/container/DateComponentLogic'
import AddBackgroundImg from '../../BackgroundImg/component/BackgroundImg'
import AddUserInterface from '../../UserInterface/component/UserInterface'
import '../container/App.css'

function App()  {
    /**Get several data from DateComponentLogic**/
    const [dataInfo, setDate] = useState(() => culculateDate());
    
    useEffect(()=> {
        setInterval(()=> {
           const data = culculateDate()
           setDate(data)
        },60000)
    },[dataInfo])
    const days = getValueDays();
    const {hours, minutes, date, year, month} = dataInfo;

    return (
        <div className = 'UI'>
            <div className = 'UI__LeftSide'>
                <DateInfo hours={hours} minutes={minutes} year={year} date={date} month={month} days={days}/>
                <AddBackgroundImg/>
            </div>
            <div className = 'UI__RightSide'>
                <AddUserInterface/>
            </div>
            <div className = 'UI__Bottom'>

            </div>
        </div>
    ) 
}
export default App;