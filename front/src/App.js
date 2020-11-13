import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { endpoint } from './config';
import { Home, Login } from './pages';

export default function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(endpoint, { transports: ['websocket'] });
    console.log('socket', socket);
    socket.on('new-data', data => {
      console.log('data', data);
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
