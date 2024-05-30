import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import { TextRevealCardPreview } from './pages/test'
function App() {

  return (
    <div className='w-full'>
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="/test" element={<TextRevealCardPreview/>} />   

      </Routes>
    </div>
  )
}

export default App
