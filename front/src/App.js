import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { endpoint } from './config';
import { Home, Login } from './pages';

export default function App() {
  const [response, setResponse] = useState(null);

  console.log('response', response);

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    console.log('socket', socket);
    socket.on('new-data', data => {
      setResponse(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
