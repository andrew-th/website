import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';
import Home from './Home';
import Projects from './Projects';
import Links from './Links';
import Playground from './Playground';

const theme = createTheme({
  palette: {
    primary: {
      main: '#336600', // Green color
    },
    secondary: {
      main: '#f5f5dc', // Beige color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Link to="home" style={{ fontSize: '50px', color: 'green', marginRight: '20px', textDecoration: 'none' }}>
              Andrew Heare
            </Link>
            <Link to="projects" style={{ color: 'green', marginRight: '20px', textDecoration: 'none' }}>
              Projects
            </Link>
            <Link to="links" style={{ color: 'green', marginRight: '20px', textDecoration: 'none' }}>
              Links
            </Link>
            <Link to="playground" style={{ color: 'green', marginRight: '20px', textDecoration: 'none' }}>
              Playground
            </Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="links" element={<Links />} />
          <Route path="playground" element={<Playground />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App
