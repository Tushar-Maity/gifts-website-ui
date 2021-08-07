import React from 'react';
import styled from 'styled-components';
import ContentContainer from './components/ContentContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <AppContainer>
      <NavBar />
      <ContentContainer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin: 80px auto 0 auto;
  flex-direction: column;
`;

export default App;
