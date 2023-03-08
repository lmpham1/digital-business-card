import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login';
import { useState } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);
  const handleUserLogin = (e) => {
    e.preventDefault();
    setUser(testUser[0]);
  }
  const handleUserLogout = (e) => {
    setUser(null);
  }
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={user ? <Home user={user} handleUserLogout={handleUserLogout} /> : <Navigate to="/login" />}></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login user={user} handleUserLogin={handleUserLogin} />}></Route>
        <Route path="/profile/:id" element={<Profile user={testUser[0]} />}></Route>
      </Routes>
    </div>
  );
}


const testUser = [
  {
    "id": "aeRiez9cheiJuph2e",
    "name": "Minh Pham",
    "title": "Developer II",
    "department": "UTS Data Systems & Integration Services",
    "location": "Charles E. Burke Science Building (BSB), 235",
    "email": "phaml15@mcmaster.ca",
    "phone": "(905) 525-9140 x 20865",
    "address": "1280 Main St. W., Hamilton, Ontario, L8S 4K1",
    "pronounce": "He/Him"
  },
  {
    "id": "hu7yoo2AisieF3vai",
    "name": "Tshenolo Mosimaneotsile",
    "title": "Lead Integration Developer",
    "department": "UTS Data Systems & Integration Services",
    "location": "Charles E. Burke Science Building (BSB), 235",
    "email": "mosimat@mcmaster.ca",
    "phone": "(905) 525-9140 x 27229",
    "address": "1280 Main St. W., Hamilton, Ontario, L8S 4K1"
  },
  {
    "id": "Ulai1uw0aeX4kooy7",
    "name": "David Arnold",
    "title": "Lead Architect",
    "department": "UTS Data Systems & Integration Services",
    "location": "Charles E. Burke Science Building (BSB), 235",
    "email": "arnoldd@mcmaster.ca",
    "phone": "(905) 525-9140 x 23843",
    "address": "1280 Main St. W., Hamilton, Ontario, L8S 4K1"
  }
]

export default App;
