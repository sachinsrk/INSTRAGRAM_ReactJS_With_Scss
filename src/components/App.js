

import '../css/App.scss';
// import Home from './components/Home';
import Login from './Login';
import Signup from './Signup';
// import { Button, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ThoughtState from '../context/thought/ThoughtState';
import Navbar from './Navbar';
// import Cards from './Cards';
// import Sidebar from './Sidebar';
import Home from './Home';
import ProfilePage from './ProfilePage';



function App() {
  return (
    <div className='App'>
      <ThoughtState>


        <Router>
          <Navbar />



          <Routes>
            <Route exact path="/" element={ <Home/>} />
              
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/singup" element={<Signup />} />
            <Route exact path="/profile" element={<ProfilePage/>} />

          </Routes>

        </Router>

      </ThoughtState>
    </div>
  );
}

export default App;

