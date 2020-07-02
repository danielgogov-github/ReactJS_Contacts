import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Path from './classes/Path';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation home={"Home"} create={"Create"} />
        <Switch>
          <Route path={Path.path + "/"} exact component={Home} />
          <Route path={Path.path + "/create"} exact component={Create} />
          <Route path={Path.path + "/edit/:firstName/:lastName/:number"} component={Edit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
