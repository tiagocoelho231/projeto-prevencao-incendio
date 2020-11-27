import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { endpoint } from './config';
import { Home, Login, Clima } from './pages';
import SideBar from './components/SideBar';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  /* height: 100vh; */
  width: 100%;
`;

const ScrollableWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;

export default function App() {
  const dispatch = useDispatch();
  const scrollableWrapperRef = useRef();

  useEffect(() => {
    const socket = socketIOClient(endpoint, { transports: ['websocket'] });
    socket.on('new-data', clima => {
      dispatch.clima.setClima(clima);
    });

    return () => socket.disconnect();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <PageWrapper>
        {/* <SideBar /> 
          <ScrollToTop elementRef={scrollableWrapperRef} />
          <ScrollableWrapper ref={scrollableWrapperRef}> */}
          <Switch>
            <Route path="/Clima" component={Clima} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        {/* </ScrollableWrapper> */}
      </PageWrapper>
    </Router>
  );
}

function ScrollToTop({ elementRef }) {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      elementRef.current.scrollTop = 0;
    });
    return () => {
      unlisten();
    };
  }, [history, elementRef]);

  return null;
}
