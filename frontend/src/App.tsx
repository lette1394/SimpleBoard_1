import React from 'react';
import './App.css';
import { AntTest } from './test/AntTest';
import styled from 'styled-components';

const Test = styled.button`
  color: red;
  background-color: black;
  height: 500px;
`;

const App: React.FC = () => {
  return (
    <>
      <Test>helelo world!!!!</Test>
      <AntTest />
    </>
  );
};

export default App;
