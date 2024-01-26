import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import BusRoute from './routes/BusRoute';
import AdminRoute from './routes/AdminRoute';
import Index from './views/Index';
import TaxiRoute from './routes/TaxiRoute';

function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer position='top-center'/>
      <Routes>    
          <Route path="/*" element={<Index/>}/>
          <Route path="/bus/*" element={<BusRoute/>}/>
          <Route path="/taxi/*" element={<TaxiRoute/>}/>
          <Route path="/admin/*" element={<AdminRoute/>}/>
      </Routes>  
  </BrowserRouter>
  );
}

export default App;


