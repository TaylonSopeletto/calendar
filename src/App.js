import Home from './templates/home'
import Login from './templates/login'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/calendar/:id">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
