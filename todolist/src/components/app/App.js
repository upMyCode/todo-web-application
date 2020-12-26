import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainerMain/LeftContainer';
import RightContainer from '../RightContainer/RightContainerMain/RightContainer';
import AddPost from '../AddForm/';
import './App.css';



class App  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  addPost = (value) => {
    this.setState({
      value: value
    })
    console.log(value)
  }


  render(){
    return (
      <div className='main_container'>
        <div className='left__container'>
            <LeftContainer/>
        </div>
        <div className='right__container'>
            <RightContainer value={this.state.value}/>
        </div>
        <div className='addFormContainer'>
          <AddPost addPost={this.addPost}/>
        </div>

      </div>
    )
  }
}


export default App;
