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
      let idElem = e.target.id;
      if(this.elems[idElem].important === false) { 
          e.target.className = 'blue__elem';
          this.elems[idElem].important = true;
          this.setState({
            elem: this.elems
          })
          console.log(this.state.elem)
        }
        else {
            e.target.className = 'elem'
            this.elems[idElem].important = false;
            this.setState({
            elem: this.elems
          })
        }

    }
    render(){
        this.addNumberOfDate()
        this.listOfElems =  this.elems.map((item) => 
        <div key={item.id} className='elem' important={item.important.toString()} id={item.id} onClick={this.getId} >
            <a className='elem__number' id={item.id} >{item.number}</a>
        </div>
        )
        
    
        return (
            <div className='addCalendar'>
                {   
                    this.elems.map((item) => 
                    <div key={item.id} className='elem' important={item.important.toString()}  id={item.id} onClick={this.getId} >
                         <a className='elem__number' id={item.id} >{item.number}</a>
                     </div>
                    )
                } 
            </div>
        )
    }
}


export default AddCalendar;