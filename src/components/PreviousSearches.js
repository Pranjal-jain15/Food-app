import React, { useEffect, useState } from 'react';

function PreviousSearches() {
    const [searches, setSearches] = useState([]);

    useEffect(() => {
        fetch('/api/searches')
            .then(response => response.json())
            .then(data => setSearches(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Previous Searches</h2>
            <ul>
                {searches.map((search, index) => (
                    <li key={index}>{search.term}</li>
                ))}
            </ul>
        </div>
    );
}

export default PreviousSearches;
