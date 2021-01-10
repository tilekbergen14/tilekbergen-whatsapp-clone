import './App.css';
import Sidebar from "./components/Sidebar"
import Chatbox from "./components/Chatbox"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Homepage from "./components/Home"
import React, {useState} from "react"
import Login from "./components/Login"

function App() {
  const [user, setUser] = useState(null) 
  return (
    <BrowserRouter>
        <div className="app">
        <div className="app__box">
          {!user  ? (<Login />) : (
            <div>
              <Sidebar />
              <Switch>
                <Route path="/" exact component={Homepage}/>
                  <Route path="/:id" component={Chatbox}/>
              </Switch>
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
