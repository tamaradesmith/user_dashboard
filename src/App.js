import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserDashboard } from './components/UserDashborder';
import { UserDetails } from './components/UserDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserDashboard} />
          <Route path="/users" exact component={UserDashboard} />
          <Route path='/users/:id' component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
