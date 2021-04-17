import Home from './templates/home'
import Login from './templates/login'
import Register from './templates/register'
import Calendars from './templates/calendars'
import GlobalStyles from './styles/GlobalStyles'
import { DarkModeProvider } from './context/DarkModeCtx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <DarkModeProvider>
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

          <Route path="/calendars">
            <Calendars />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
