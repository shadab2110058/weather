import React from 'react'
import Front from './Components/Front'
import LoadingBar from 'react-top-loading-bar';
import "./App.css"
import { useState } from 'react';

const App = () => {

  const [progress,setProgress] = useState(0);

  return (
    <div>
      <LoadingBar 
      color='#e11e50'
      height={10}
      progress={progress}
      />
      <Front setProgress={setProgress}/>
    </div>

  )
}

export default App
