import React from 'react';
import './App.css';
import { UserContextProvider } from './contexts/userContext';
import RoutesApp from './Routes';

const App = () => (
  <UserContextProvider>
    <RoutesApp />
  </UserContextProvider>
);

export default App;
