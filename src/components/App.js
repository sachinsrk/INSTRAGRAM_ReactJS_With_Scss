

import '../css/App.scss';
// import Home from './components/Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import { Button, Row, Col } from 'react-bootstrap';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import ThoughtState from '../context/thought/ThoughtState';
import Navbar from './Navbar';
import Cards from './Cards';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className='App'>
      <ThoughtState>
    
  
        {/* <Router> */}
        <Navbar/>
    
          <main>
       
                <div className="container">
                <Cards/>
                 <Sidebar/>
                </div>
          </main>

          {/* <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/singup" element={<Signup />} />
            </Routes>
          </div> */}
        {/* </Router> */}

      </ThoughtState>
     </div>
  );
}

export default App;

