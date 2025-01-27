import HomePage from './pages/HomePage'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
   return (
    <>
     <BrowserRouter basename="/future_tech">
       <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
