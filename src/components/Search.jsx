<<<<<<< HEAD
import React from 'react'
=======
import React from "react";
>>>>>>> b6c7eb5bcc9226133a83f588a7c22372bbd0cf57

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
<<<<<<< HEAD
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
=======
        <img src="./search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search for movies..."
>>>>>>> b6c7eb5bcc9226133a83f588a7c22372bbd0cf57
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
<<<<<<< HEAD
  )
}
export default Search
=======
  );
};

export default Search;
>>>>>>> b6c7eb5bcc9226133a83f588a7c22372bbd0cf57
