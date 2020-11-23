import React, {Component} from 'react';
import './addCalendar.css';

class AddCalendar extends Component {
    constructor(props){
        super(props);
        this.elem = [];
        this.date = props.date;
        
    }
    
    addNumberOfDate() {
        if (this.date) {
            for (let i = 0; i < this.date; i++) {
                this.elem.push({i});
                
            }
        }
    }
    render() {
        this.addNumberOfDate();
        this.listItems = this.elem.map((item,id) => 
        <div key={item.toString()} className = 'elem'>{id + 1}</div>
        );
        console.log(this.elem);
        return(
            <div className='addCalendar'>
                {this.listItems}
            </div>
        )
    }
}

export default AddCalendar;