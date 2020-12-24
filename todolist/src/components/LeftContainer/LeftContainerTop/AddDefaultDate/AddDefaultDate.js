import React from 'react';
import './addDefaultDate.css'

class AddDefaultDate extends React.Component {
    constructor(props){
        super(props);
        this.date = props.date;
        this.month = '';
        this.getTime = `${this.date.getHours()} : ${this.date.getMinutes()}`;
        this.state = {
            time: `${this.date.getHours()} : ${this.date.getMinutes()}`
        }
    }
    
    
    render() {
        if(this.date.getMonth()) {
            switch (this.date.getMonth()) {
                case 0 :  
                    this.month ='Января';
                    break;
                case 1 :  
                    this.month ='Февраля';
                    break;
                case 2 :  
                    this.month ='Марта';
                    break;
                case 3 :  
                    this.month ='Апреля';
                    break;
                case 4 :  
                    this.month ='Мая';
                    break;
                case 5 :  
                    this.month ='Июня';
                    break;
                case 6 :  
                    this.month ='Июля';
                    break;
                case 7 :  
                    this.month ='Августа';
                    break;
                case 8 :  
                    this.month ='Сентября';
                    break;
                case 9 :  
                    this.month ='Октября';
                    break;
                case 10 :  
                    this.month ='Ноября';
                    break;
                case 11 :  
                    this.month ='Декабря';
                    break;
    
            }
        }
        return (
            <div className = 'addDefaultDate'>
                <div className = 'currentDate'>
                    <p>{`${this.date.getDate()} ${this.month} ${this.date.getFullYear()}`}</p>
                </div>
                <div className = 'currentTime'>
                    <p>{this.state.time}</p>
                </div>
            </div>
        )
    }
}

export default AddDefaultDate;