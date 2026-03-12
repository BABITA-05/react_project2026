import React, { memo } from 'react'

const CustomButton = memo(({onClick, title}) => {
    console.log("CustomButton rendered:", title);
  return (
    <button onClick={onClick}>{title}</button>
    
  )
})

export default memo(CustomButton)