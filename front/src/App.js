import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { endpoint } from './config';
import { Home, Login } from './pages';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(endpoint, { transports: ['websocket'] });
    socket.on('new-data', data => {
      dispatch.clima.setData(data);
    });

    return () => socket.disconnect();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
