import './App.css';
import Home from './Home';
import { Login } from './Login';
import { Protected } from './Protected';
import { SignUp } from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>

        </header>
      <Routes>
            <Route element={<Protected/>}>
              <Route path='/home' element={<Home/>} />
              {/* <Route path='/users' element={<Users />} /> */}
            </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
