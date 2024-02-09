import './App.scss';
import Dashboard from './Pages/Dashboard/Dashboard';
import Departement from './Pages/Departement/Departement';
import Employee from './Pages/Employee/Employee';
import Recruitment from './Pages/Recruitment/Recruitment';
import Settings from './Pages/Settings/Settings';
import Shedule from './Pages/Shedule/Shedule';
import Support from './Pages/Support/Support';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <div className='comp-div'>
            <Sidebar/>
            <Navbar  className="comp-nav"/>
          </div>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/recruitemnt' element={<Recruitment/>} />
          <Route path='/shedule' element={<Shedule/>} />
          <Route path='/employee' element={<Employee/>} />
          <Route path='/departement' element={<Departement/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
