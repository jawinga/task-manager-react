import React from 'react'


interface SortDropdownProps {

    sort: string;
    setSort: (sort: string) => void;

}


   const SortSvg = () => (

    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7L2 7" stroke="#706E6E" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M19 12L5 12" stroke="#706E6E" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M16 17H8" stroke="#706E6E" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    
    
   );

const SortDropdown = ({sort, setSort}:SortDropdownProps) => {

         return(<div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      borderRadius: '16px',
      backgroundColor: '#c7c7c7', 
      padding: '0.5rem 1rem',
      width: 'fit-content',
      cursor: 'pointer',
    }}
  >
    <SortSvg />
    <select
      onChange={(e) => setSort(e.target.value)}
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        fontSize: '1rem',
        color:'#706E6E'
      }}
    >
      <option value="any">Sort by</option>
      <option value="due-date">Due date</option>
      <option value="urgency">Urgency</option>
    </select>
  </div>
  )
}

export default SortDropdown