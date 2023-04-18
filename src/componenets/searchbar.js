import React, { useState } from 'react';
import './style/searchbar.css'

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query) {
            alert(`You searched for: ${query}`);
        } else {
            alert('Please enter a search query');
        }
    };

    return (
        <div className="SearchBar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
