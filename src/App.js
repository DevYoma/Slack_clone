import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import { useStateValue } from './Context/StateProvider';


function App() {

  // const [user, setUser] = useState(null);
  // pulling the user from the context
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome to the "/" route</h1>
                </Route>
              
              </Switch>
    
              {/* React Router ==> chat screen */}
    
    
            </div>
          </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
