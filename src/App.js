import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer position='top-center'/>
      <Routes>    
          <Route path="/*" element={<PublicRoute/>}/>
      </Routes>  
  </BrowserRouter>
  );
}

export default App;


