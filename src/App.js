import React from 'react'
import Header from './component/Header'
import MyButton from './component/Button';
import './style.css'
import ResetButton from './component/ResetButton';

function App() {
  return (
    <div className='div-container'>
   <Header />
   <MyButton/>
 <ResetButton/>
   </div>
  );
}

export default App;
