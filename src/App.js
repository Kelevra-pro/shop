import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';

const App = () => {
  return (
    <div>
      <Navbar/>

      <div className="container pt-4">
        <Alert/>

        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
