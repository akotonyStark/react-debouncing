import React from 'react'
import { debounce } from 'lodash'

const DebouncingWithLodash = () => {
  const [suggestions, setSuggestions] = React.useState([])

  const handleChange = debounce((value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items))
  }, 300)
  return (
    <div>
      <input
        type='text'
        placeholder='search here'
        style={{ width: 400, height: 30, padding: 10 }}
        onChange={(e) => handleChange(e.target.value)}
      />

      <div>
        {suggestions.map((item, index) => (
          <ul key={index}>{item.name}</ul>
        ))}
      </div>
    </div>
  )
}

export default DebouncingWithLodash
