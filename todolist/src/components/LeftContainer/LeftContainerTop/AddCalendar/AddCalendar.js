import React, {Component} from 'react';
import './addCalendar.css';

class AddCalendar extends Component {
    constructor(props){
        super(props);
    }
    
    
      render(){
        return (
            <div className='addCalendar'>
                {   
                    this.props.elems.map((item, index) => 
                    <div key={this.props.elemOfData[index].id} className={this.props.elemOfData[index].className || 'elem'} important={this.props.elemOfData[index].important.toString()}  id={this.props.elemOfData[index].id} onClick={this.props.getId} >
                         <a className='elem__number' id={this.props.elemOfData[index].id} >{this.props.elemOfData[index].id +1}</a>
                     </div>
                    )
                } 
            </div>
        )
    }
    
}


export default AddCalendar;