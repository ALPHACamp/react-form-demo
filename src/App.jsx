import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <h1>My First React Form</h1>
      <form className="form">
        <div className="input-fields">
          <label className="input-label">Name:</label>
          <input
            className="input"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="input-label">Email:</label>
          <input
            className="input"
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className="submit-button" type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
