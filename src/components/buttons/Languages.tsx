import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Flag from 'react-world-flags'


export const Languages = () => {
  return (
     <select className='languages-select'>
        <option value={'en'}><Flag code="US" style={{ width: '20px', height: '15px' }} /> English</option>
        <option value={'es'}><Flag code="ES" style={{ width: '20px', height: '15px' }} /> Español</option>
        <option value={'fr'}><Flag code="FR" style={{ width: '20px', height: '15px' }} /> Français</option>
     </select>
  )
}
