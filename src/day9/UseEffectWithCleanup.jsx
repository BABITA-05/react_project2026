import React, { useEffect, useState } from 'react'

const UseEffectWithCleanup = () => {
    const [count, setCount]=useState(0)
    useEffect(
        ()=>{

            let timer = setTimeout(
                ()=>{
                    setCount(count+1)

                },
                1000
            )
            //cleanup function to clear the timer
            return ()=>{
                clearTimeout(timer);
            }
        },
        [count]
    )
  return (
    <div>
        <h3>useEffect with cleanup Example</h3>
        <p>This component rendered this {count} many times</p>

    </div>
  )
}

export default UseEffectWithCleanup