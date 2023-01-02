import { Landing, Error, Register, Dashboard } from './pages/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
