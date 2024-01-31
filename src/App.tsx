import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Playground from './Playground';
import Projects from './Projects';
import Links from './Links';

const theme = createTheme();

const Home: React.FC = () => (
  <Container>
    <Typography variant="h4" component="h2" gutterBottom>
      Welcome to my website!
    </Typography>
    <Typography variant="body1" paragraph>
      This is a basic Material-UI and TypeScript template with routing for your website.
    </Typography>
  </Container>
);

const About: React.FC = () => (
  <Container>
    <Typography variant="h4" component="h2" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      Learn more about our website and team.
    </Typography>
  </Container>
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Material-UI TypeScript Template</Typography>
            <div style={{ flexGrow: 1 }}></div>
            <AccountCircle />
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="home" element={ <Home/> } />
          <Route path="projects" element={ <Projects/> } />
          <Route path="links" element={ <Links/> } />
          <Route path="playground" element={ <Playground/> } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;