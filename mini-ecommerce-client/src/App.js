import './App.css';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
