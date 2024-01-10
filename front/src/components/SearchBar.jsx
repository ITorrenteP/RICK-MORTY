import React, { useState } from "react";

function SearchBar({onSearch}) {
  const [id, setId] = useState('')

  const handleChange = (event) => {
    setId(event.target.value)
  }
   
  const search = () => {
    onSearch(id)
    setId('')
  }

  return (
      <div>
        <input
          type="search"
          onChange={handleChange}
        />
        <button onClick={search}>Agregar</button>
      </div>
    );
  }

export default SearchBar;