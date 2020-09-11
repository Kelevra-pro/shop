import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AlertState } from './context/alert/AlertState';
import { ProductsState } from './context/products/ProductsState';

function App() {
  return (
    <ProductsState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert alert={{ text: 'Test alert111' }}/>
            <Switch>
              <Route path="/" exact component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </ProductsState>
  );
}

export default App;
