import React, {Component} from 'react';
import './addCalendar.css';

class AddCalendar extends Component {
    constructor(props){
        super(props);
        this.elem = [];
        this.date = props.date;
        this.state = {
            elems: this.listOfElems
        };
        this.getId = this.getId.bind(this);
        this.addNumberOfDate = this.addNumberOfDate.bind(this);
    }
    
    addNumberOfDate() {
        if (this.date) {
            for (let i = 0; i < this.date; i++) {
                this.elem.push({i});
                
            }
        }
    }

    getId(e){
      let idElem = e.target;
      if(idElem.id >= 0) {
      this.setState(({elems}) => {
          idElem.className = 'blue__elem';
          this.listOfElems.push(idElem);
          return {
              elems : this.listOfElems
          }
        })
      console.log(this.state.elems);
    }
    //   if(idElem === 'elem') {
    //      idElem = 'blue__elem'
    //      this.setState({cl: 'blue__elem'})
    //   }
    //   console.log(e.target.className);

    }

    render() {
        this.addNumberOfDate();
        this.listOfElems = this.elem.map((item,id) => 
        <div key={id} className='elem' onClick={this.getId} >
            <a className='elem__number'>{id + 1}</a>
        </div>
         )
        

        return (
            <div className='addCalendar'>
                {   
                    this.elem.map((item,id) => 
                    <div key={id} className='elem' onClick={this.getId} >
                        <a className='elem__number' id={id} >{id + 1}</a>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default AddCalendar;