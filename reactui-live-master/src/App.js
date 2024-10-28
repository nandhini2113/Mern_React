import './App.css';
import { Navigation } from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Protected } from './Protexted';
import { NotFound } from './Notfound';
import { Login } from './Login';
import { SignUp } from './Singup';
import Home1 from './Home1';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Contact from './Contact';

function App() {

  return (
    <BrowserRouter>
      <div>
        <header>
          <Navigation />
        </header>
        <main className='main'>
          <Routes>
            <Route element={<Protected />}>
              <Route path='/home' element={<Home1/>} />
              <Route path='/watches' element={<Products/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/contactus' element={<Contact/>}/>
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            {/* <Route path='*' element={<NotFound />}/> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
