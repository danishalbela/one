
  import React, { useState } from 'react'
  import One from './One'
  import Quiz from './Quiz';

  function App()
  {
    let [fruit, setfruit] = useState('jimmy-Shergil')
    console.log(fruit, typeof fruit);
    console.log(setfruit, typeof setfruit);

    let one =()=>
    {
      if(fruit === 'jimmy-Shergil')
      {
        setfruit('Frank-Estein')
      }  
      else{
        setfruit('jimmy-Shergil')
      }
    }
    return (
      <div>App
        <h2>State has {fruit} </h2>
        <button onClick={one}>CHANGE STATE</button>
            
            <hr/>
            <hr/> <hr/> <hr/>

            <One/>
            {/* <Quiz/> */}
      </div>
    )
  }
  export default App

 

  // rfce command line
