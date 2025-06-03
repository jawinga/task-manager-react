import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const navigate = useNavigate();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'Projects', path: '/projects' },
    { name: 'Goals', path: '/goals' },
    { name: 'Profile', path: '/profile' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredPages = pages.filter((page) =>
      page.name.toLowerCase().includes(query)
    );
    filteredPages.forEach((page) => {
      console.log(`Page: ${page.name}, Path: ${page.path}`);
    });
  };

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const match = pages.find((page) =>
        page.name.toLowerCase().includes(searchQuery)
      );
      if (match) {
        navigate(match.path);
      }
    }
  };

  return (
    <div className='search-bar'>
    <div style={{ position: 'relative', display: 'inline-block' }} className='search-bar__container'>
      <input
        type='text'
        className='search-bar__input'
        onChange={handleSearch}
        onKeyDown={handleKeyEnter}
        placeholder='Search....'
        name='search'
        style={{ paddingLeft: '2rem'}}
      />
      <span
        className="bi bi-search"
        style={{
        position: 'absolute',
        left: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        }}
      />
    </div>
    </div>
  )
}