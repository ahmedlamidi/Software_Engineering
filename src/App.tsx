import './App.css'
import Login from './Login/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import HomeStudent from './Home_student/Home';
import HomeTeacher from './Home_Teacher/Home';
import Signup from './Login/Signup';

import HomeAdvisor from './Home_Advisor/Home';
import HomeAdmin from './Home_Admin/Home';
import DataTable from './Components/DataTable';
import AddCourse from './Add_course/Home';


function App() {
  return (
    <div className='App'>
      <Router>
          <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='signup' element={<Signup/>}></Route>
              <Route path='/student' element={<HomeStudent/>}></Route>
              <Route path='/teacher' element={<HomeTeacher/>}></Route>
              <Route path='/advisor' element={<HomeAdvisor/>}></Route>
              <Route path='/admin' element={<HomeAdmin/>}></Route>
              <Route path='/table' element={<DataTable/>}></Route>
              <Route path='/add_course' element = {<AddCourse/>}></Route>
              {/* Route... */}
          </Routes>
      </Router>

    </div>




  
  )
}

export default App