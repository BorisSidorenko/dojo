import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App
