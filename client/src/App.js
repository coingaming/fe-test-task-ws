
import LeaderBoard from './components/LeaderBoard';
import Navbar from './components/Navbar';
import Limit from './components/Limit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3050");

function App() {
  const [selectValue, setSelectValue]= useState(10);
  const effectRan = useRef(false);
  const [theArray, setTheArray] = useState([]);
  const [userid, setuserid] = useState();
  const fetchData = async () => {
    socket.on("userData", (data) => {
        setTheArray(oldArray => [...oldArray, data]);
        setuserid(data.userId);
    });
  }
  useEffect(() => {
      if (effectRan.current === false) {
          fetchData();
          return () => {
              effectRan.current = true;
          }
      }
  }, [])
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route 
              path="/" 
              element={
                    <LeaderBoard 
                      userid={userid} 
                      theArray={theArray}
                      setTheArray={setTheArray} 
                      selectValue={selectValue}/>} 
              exact/>
            <Route 
              path="/Limit" 
              element={
                    <Limit 
                      setSelectValue={setSelectValue}
                      selectValue={selectValue}
                    />} 
              exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
