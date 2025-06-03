import React from 'react'

export const Cta  = () => {

    const [isActive, setIsActive] = React.useState(false);

    function handleClick() {

        setIsActive((prev) => !prev);
        console.log(`Clicked!, ${ isActive}`);
    }


  return (
<div className="container">
      <button onClick={handleClick} className="cta">
        Add task
        <div className="cta__state">{isActive ? "-" : "+"}</div>
      </button>
    </div>  )
}
