import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
function App() {

  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<Home/>} />   

      </Routes>
    </div>
  )
}

export default App
