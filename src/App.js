import './App.css'

import DebouncingFromScratch from './DebouncingFromScratch'
import DebouncingWithDebounceInput from './DebouncingWithDebounceInput'
import DebouncingWithLodash from './DebouncingWithLodash'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <DebouncingFromScratch />
        <DebouncingWithLodash />
        <DebouncingWithDebounceInput />
      </header>
    </div>
  )
}

export default App
