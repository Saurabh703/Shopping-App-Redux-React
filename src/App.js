import React from "react";
import Header from "./containers/Header";
import './App.css';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Route, Switch, Router } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" component={ProductDetail}/>
          <Route> 404 Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
