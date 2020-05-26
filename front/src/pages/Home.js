import React from 'react';
import styled from 'styled-components';

import { Map, Menu } from '../components';

const Page = styled.main`
  margin: 0 auto;
  max-width: 1920px;
  position: relative;
`;

export default function Home() {
  return (
    <Page>
      <Map />
      <Menu />
    </Page>
  );
}
