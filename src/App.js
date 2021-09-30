import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/portfolio' component={ HomePage } />
        <Route exact path='/myprojects' component={ MyProjects } />
      </Switch>
    </div>
  );
}

export default App;
