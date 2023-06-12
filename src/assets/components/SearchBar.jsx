import React from 'react'

export const SearchBar = ({searchQuery, setSearchQuery}) => {
  return (
    <form action="/" method="get" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
        <label htmlFor="header-search">
           <h3>
            <span className="visually-hidden">Search Your PDF</span>
           </h3>  
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="PDF Name"
            name="s" 
            className='input-query'
        />
        <button type="submit">Search</button>
    </form>
  )
}
