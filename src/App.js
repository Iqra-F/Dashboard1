

import {Route, Routes, useNavigate} from "react-router-dom"
import {useEffect} from 'react'
import AdminDashboard  from './pages/admin-dashboard/adminDashboard'
function App() {

  return (
    
    <div className="h-screen w-full" >
    <AdminDashboard/>
    </div>

  );
}

export default App;
