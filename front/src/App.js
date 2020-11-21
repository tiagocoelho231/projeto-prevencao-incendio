import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { endpoint } from './config';
import { Home, Login } from './pages';
import Notification from './pages/Notification';
import SideBar from './components/SideBar';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(endpoint, { transports: ['websocket'] });
    socket.on('new-data', clima => {
      dispatch.clima.setClima(clima);
    });

    return () => socket.disconnect();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/notificacao" component={Notification} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
