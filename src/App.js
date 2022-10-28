import Box from '@mui/material/Box'
import { CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './components/Header'
import NewThisWeek from './components/NewThisWeek'
import Filters from './components/Filters'
import TopSellers from './components/TopSellers';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
      }}>
        <Box>
          <Header />
          <NewThisWeek />
          <Filters />
          <TopSellers />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
