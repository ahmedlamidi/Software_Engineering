import './App.css'
import Login from './Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home/Home';
import Signup from './Login/Signup';
import DataTable from './Components/DataTable';


function App() {
  return (
    <div className='App'>
      <Router>
          <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='signup' element={<Signup/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/data' element={<DataTable/>}></Route>
              {/* Route... */}
          </Routes>
      </Router>

    </div>




  
  )
}

export default App