import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserList } from './components/UserList';
import { UserDetails } from './components/UserDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/users" exact component={UserList} />
          <Route path='/users/:id' component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
