import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import navBackground from '../assets/background-images/nav_background.png';
import { SearchBar } from './small-elements/SearchBar';
import { Cta } from './buttons/Cta';
import { Languages } from './buttons/Languages';
import Select from 'react-dropdown-select';


export const Navbar = () => {


  const [isScrolled, setIsScrolled] = React.useState(false);

  const [selectedOption, setSelectedOption] = React.useState<{ label: string, value: string }[]>([]);

  const dropdownOptions = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
    { label: 'Deutsch', value: 'de' }
  ];

  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  


  return (
      <nav
        className='nav'
        style={{
          padding: "1rem",
          position: "fixed",
          backgroundImage: isScrolled ? `url(${navBackground})` : "transparent",
          backgroundSize: "100% auto",
          backgroundPosition: "top"
        }}
      >
      <Link to="/" style={{ marginRight: "1rem" }} className='nav__element'>Home</Link>

        <div className='nav__item'>

            <Link to="/tasks" style={{ marginRight: "1rem" }} className='nav__element'>Tasks</Link>
            <div className='nav__hover'>

                  <div>New Project</div>
                   <div>All Projects</div>

            </div>



        </div>
        <div className='nav__item'>

      <Link to="/projects" style={{ marginRight: "1rem" }} className='nav__element'>Projects</Link>
            <div className='nav__hover'>

                  <div>New Project</div>
                   <div>All Projects</div>

            </div>



        </div>
        <div className='nav__item'>

      <Link to="/goals" style={{ marginRight: "1rem" }} className='nav__element'>Goals</Link>
            <div className='nav__hover'>

                  <div>New Project</div>
                   <div>All Projects</div>

            </div>



        </div>
        <div className='nav__item'>

      <Link to="/profile" className='nav__element'>Profile</Link>
            <div className='nav__hover'>

                  <div>New Project</div>
                   <div>All Projects</div>

            </div>



        </div>

      <SearchBar />
      <Cta></Cta>
      <Languages></Languages>
      

    </nav>
  )
}
