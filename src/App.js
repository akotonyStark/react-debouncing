import './App.css'

import DebouncingFromScratch from './DebouncingFromScratch'
import DebouncingWithLodash from './DebouncingWithLodash'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <DebouncingFromScratch />
        <DebouncingWithLodash />
      </header>
    </div>
  )
}

export default App
