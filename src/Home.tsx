import { Container, Typography } from "@material-ui/core";
import React from "react";


function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Hello!
      </Typography>
      <Typography variant="body1" paragraph>
        I'm Andrew, and I'm interested in the intersection between maps, data, and web applications.
      </Typography>
    </Container>
  )
}
  
export default Home