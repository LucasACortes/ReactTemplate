import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/privateRoute';
import Another from './another';
import './App.css';
import Login from './login';
import Private from './private';
import * as service from '../utils/serviceManager';

function App() {
  const [ imageUrl, setImageUrl ] = useState('');

  useEffect(() => {
    const getImageUrl = async () => {
      const response = await service.getExample();
      setImageUrl(response);
    }
    
    getImageUrl();
  });

  return (
    <div>
      {process.env.REACT_APP_ENVIRONMENT}
      <img src={imageUrl}/>
    </div>
    // <Router>
    //   <Switch>
    //     <Route path="/login" component={Login}/>
    //     <PrivateRoute path="/private" component={Private} authenticated={false}/>
    //     <PrivateRoute path="/another" component={Another} authenticated={false}/>
    //     <PrivateRoute path="/"/>
    //   </Switch>
    // </Router>
  );
}

export default App;
