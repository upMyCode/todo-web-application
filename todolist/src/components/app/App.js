import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainerMain/LeftContainer';
import RightContainer from '../RightContainer/RightContainerMain/RightContainer';
import AddPost from '../AddForm/';
import './App.css';



const App = () => {
  return (
    <div className='main_container'>
      <div className='left__container'>
          <LeftContainer/>
      </div>
      <div className='right__container'>
        <RightContainer/>
      </div>
      <div className='addFormContainer'>
        <AddPost/>
      </div>

    </div>
  )
}


export default App;
