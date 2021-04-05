import {getMonthName} from '../container/DateComponentLogic'
import '../container/Date.css'

 export default function AddDate({year, date, hours,minutes}) {
        let month = getMonthName()
        return (
            <div className = 'containerDefaultDate'>
                <div className= 'containerDefaultDate__Date'>
                    <div className = 'containerDefaultDate__Day'>
                        <p className ='currentDate'>{date}</p>
                    </div>
                    <div className = 'containerDefaultDate__Month'>
                        <p className ='currentDate'>{month}</p>
                    </div>
                    <div className = 'containerDefaultDate__Year'>
                        <p className ='currentDate'>{year}</p>
                    </div> 
                </div>
                <div className ='containerDefaultDate__Time'>
                    <div className = 'containerDefaultDate__Hours'>
                        <p className = 'currentTime'>{`${hours} : ${minutes}`}</p>
                    </div>
                </div>
            </div>
        )
    }


