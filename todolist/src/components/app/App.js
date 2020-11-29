import React from 'react';
import LeftContainer from '../LeftContainer/LeftContainerMain/LeftContainer';
import RightContainer from '../RightContainer/RightContainerMain/RightContainer';
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

    </div>
  )
}


export default App;
