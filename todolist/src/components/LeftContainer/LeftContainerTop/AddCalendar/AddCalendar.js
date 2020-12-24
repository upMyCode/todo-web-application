import React, {Component} from 'react';
import './addCalendar.css';

class AddCalendar extends Component {
    constructor(props){
        super(props);
        this.counter = 0;
        this.elems = [];
        this.state = {
            elem: this.elems
        }
        this.date = props.date;  
    }
    
    addNumberOfDate = () => {
        if (this.date) {
            for (let i = 0; i < this.date; i++) {
                    this.elems.push({number: i, id: i, important: false});
                } 
            }
        }
    

    getId = (e) => {
      let idElem = Number(e.target.id); 
      if (this.elems[idElem].important === false) { 
          this.elems[idElem].className = 'blue__elem';
          this.elems[idElem].important = true;
          this.setState({
            elem: this.elems
          })
        }
      else {
            this.elems[idElem].className = 'elem'
            this.elems[idElem].important = false;
            this.setState({
            elem: this.elems
          })
        }

    }
    
    render(){
        this.counter++
        if(this.counter <= 1) {
            this.addNumberOfDate()
        };

      
        return (
            <div className='addCalendar'>
                {   
                    this.elems.map((item, index) => 
                    <div key={this.state.elem[index].id} className={this.state.elem[index].className || 'elem'} important={this.state.elem[index].important.toString()}  id={this.state.elem[index].id} onClick={this.getId} >
                         <a className='elem__number' id={this.state.elem[index].id} >{this.state.elem[index].id +1}</a>
                     </div>
                    )
                } 
            </div>
        )
    }
}


export default AddCalendar;