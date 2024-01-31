import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const ProjectCard = ({ title, description }) => {
  return (
    <Paper>
      <Typography variant="h6">{title}</Typography>
      <Typography>{description}</Typography>
    </Paper>
  );
};

const GridExample = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    // Add more projects as needed
  ];

  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProjectCard title={project.title} description={project.description} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridExample;
