import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Contact } from './Pages/Contact';
import { Provider } from 'react-redux';
import { store } from './Store';
import './App.css';


import { Signup } from './Pages/Signup';
import { Tables } from './Components/Tables';
import { Countries } from './Pages/Countries';
import { LoginCopy } from './Pages/LoginCopy';

// import { useSelector } from "react-redux";


function App() {

  // const user_name = useSelector((state: any) => state.user.value.username);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <Provider store={store}>
        <Router>
          <div className='bg-pink-200'>
            <nav className="flex items-center justify-center  gap-8">
            <Link to="/home" className='hover:underline'>Home</Link>
            <Link to="/contact" className='hover:underline'>Contact</Link>
            <Link to="/country" className='hover:underline'>Country</Link>
            <Link to="/tables/" className='hover:underline'>Accounts</Link>
            <Link to="/login" className='hover:underline'>Login</Link>
            <Link to="/logincopy" className='hover:underline'>Login2</Link>
            {/* {
              user_name === '' ? <Link to="/login" className='hover:underline'>Login</Link>
              :
              <Link to="/" className='hover:underline hidden'>Logout</Link>
            } */}
            
           
            </nav>
          </div>
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/country" element={<Countries />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/tables" element={<Tables/>}/>
            <Route path="/tables/:id" element={<Tables/>}/>
            <Route path="/logincopy" element={<LoginCopy/>}/>
            <Route path="*" element={<h1>Page not found.</h1>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
