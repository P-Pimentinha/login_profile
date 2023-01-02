import { Landing } from './pages/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Dashboard</div>}></Route>
          <Route path='/register' element={<div>Register</div>}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='*' element={<div>error</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
