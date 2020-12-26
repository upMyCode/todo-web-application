import React from 'react';
import './addDefaultDate.css'

class AddDefaultDate extends React.Component {
    constructor(props){
        super(props);
        this.month = '';
        this.state = {
            time: `${new Date().getHours()} : ${new Date().getMinutes()}`
        }
    }

    setMonth = () => {
        if(new Date().getMonth()) {
            switch (new Date().getMonth()) {
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
    }


    setTime = () => {
        this.setState({
            time: `${new Date().getHours()} : ${new Date().getMinutes()}`
        })
    } 

    componentDidMount() {
            this.timer = setInterval(
                () => this.setTime(),
                1000
             );    
    }

    componentWillMount() {
        clearInterval(this.timer)
    }
    
    

    render() {
       this.setMonth()

        return (
            <div className = 'addDefaultDate'>
                <div className = 'currentDate'>
                    <p>{`${new Date().getDate()} ${this.month} ${new Date().getFullYear()}`}</p>
                </div>
                <div className = 'currentTime'>
                    <p>{this.state.time}</p>
                </div>
            </div>
        )
    }
}

export default AddDefaultDate;