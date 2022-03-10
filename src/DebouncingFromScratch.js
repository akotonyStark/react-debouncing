import React from 'react'
import { useCallback, useState } from 'react'
const DebouncingFromScratch = () => {
  const [suggestions, setSuggestions] = useState([])

  const debounce = (func) => {
    let timer
    return function (...args) {
      const context = this
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, 500)
    }
  }

  const handleChange = (value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items))
  }

  const optimizedFn = useCallback(debounce(handleChange), [])

  return (
    <>
      <input
        type='text'
        style={{ width: 400, height: 30, padding: 10 }}
        placeholder='search here'
        onKeyDown={(e) => optimizedFn(e.target.value)}
      />

      <div>
        {suggestions.map((item, index) => (
          <ul key={index}>{item.name}</ul>
        ))}
      </div>
    </>
  )
}

export default DebouncingFromScratch
