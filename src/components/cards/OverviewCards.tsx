import React from 'react'

const OverviewCards = () => {
  return (
    <div className='overview-card'>

        <div className='overview-card__title'>
            <h2>Tasks</h2>
        </div>
    
        <div className='overview-card__stats'>
            {/* Placeholder for stats */}
            <p>Total Tasks: 10</p>
            <p>Completed Projects: 5</p>
            <p>Active Goals: 3</p>
        </div>

    </div>
  )
}

export default OverviewCards