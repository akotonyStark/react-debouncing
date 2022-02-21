import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          style={{ width: 400, height: 30, padding: 10 }}
          placeholder='search here'
        />

        <div style={styles.results}>Res</div>
      </header>
    </div>
  )
}

export default App

const styles = {
  results: {
    height: 400,
    width: 400,
    background: 'white',
    marginTop: 50,
  },
}
