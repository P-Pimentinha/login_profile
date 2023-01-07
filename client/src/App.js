import { Landing, Error, Register } from './pages/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  WelcomePage,
  Profile,
  SharedLayout,
  ProtectedRoute,
} from './pages/dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<WelcomePage />}></Route>
            <Route path='profile' element={<Profile />}></Route>
          </Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
