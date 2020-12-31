import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainerMain/LeftContainer';
import RightContainer from '../RightContainer/RightContainerMain/RightContainer';
import AddPost from '../AddForm/';
import './App.css';



class App  extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.date = 0;
    this.posts = [];
    this.elems = [];
    this.state = {
      elem: this.posts,
      time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
      elemOfData: this.elems
    }
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
            elemOfData: this.elems
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
    
  addPost = (value) => {
    this.posts.push({
      data: 'data',
      elem: value,
      important: false,
      id: 0
    })

    this.setState({
      elem: this.posts
    })
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

  render(){
    this.counter++
    if(this.counter <= 2){
      console.log(this.counter)
      this.addNumberOfDate()
    };
    console.log(this.counter);
    Date.prototype.dayS = function () {
      return 32 - new Date(this.getFullYear(),this.getMonth(),32).getDate();
    } 
     this.date = new Date().dayS();

    return (
      <div className='main_container'>
        <div className='left__container'>
            <LeftContainer
              time={this.state.time}
              elems={this.elems}
              elemOfData={this.state.elemOfData}
              getId={this.getId}

              />
        </div>
        <div className='right__container'>
            <RightContainer 
              elem={this.state.elem} 
              />
        </div>
        <div className='addFormContainer'>
          <AddPost addPost={this.addPost}/>
        </div>

      </div>
    )
  }
}

export default App;
