import logo from './logo.svg'
import './App.css'
import { useCallback, useState } from 'react'

function App() {
  const [suggestions, setSuggestions] = useState('')

  const debounce = (func) => {
    let timer
    return function (...args) {
      const context = this
      if (timer) clearTimeout(timer)
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
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          style={{ width: 400, height: 30, padding: 10 }}
          placeholder='search here'
          onKeyDown={(e) => optimizedFn(e.target.value)}
        />

        {suggestions.length > 0 &&
          suggestions.map((item, i) => (
            <div key={i} style={styles.results}>
              {item.name}
            </div>
          ))}
      </header>
    </div>
  )
}

export default App

const styles = {
  results: {
    height: 40,
    width: 423,
    background: 'white',
    color: 'black',
    marginTop: 1,
  },
}
