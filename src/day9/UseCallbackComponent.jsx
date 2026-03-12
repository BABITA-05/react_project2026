import React, { memo, useCallback, useState } from 'react'


const CustomButton = memo(({onClick, title}) => {
    console.log("CustomButton rendered:", title);
  return (
    <button onClick={onClick}>{title}</button>
    
  )
})



const UseCallbackComponent = () => {
    console.log("UseCallbackComponent rendered")
    const [count, setCount]=useState(0)
    const handleHelpMe = useCallback (()=>{
    console.log("Help Me button Clicked");
    setCount(count+1)
  },
 [count]
)
  const [toggle, setToggle]=useState(false)
  const handleToggle = useCallback(
    ()=>{
        console.log("Toggle button clicked");
        setToggle(!toggle)
    },
    [toggle]
  )
    
  return (
    <div>
        <h1>Use callback hook example</h1>
        <p>Count:{count}</p>
        {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
        <CustomButton onClick ={handleHelpMe} title={"Increment"} />
        <CustomButton onClick={handleToggle} title="Toggle" />
    </div>
  )
}

export default UseCallbackComponent