import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Data from './data/data';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <Box className="App">
      <h1 className="title">Fake Persons</h1>
      <TextField
        id="filled-full-width"
        placeholder="Search by name"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <Button variant="outlined">Default</Button>
      <Grid
        container
        className="developer_block-time_feature time_feature_block"
      >
        <Grid
          container
          className="table_title"
        >
          <Grid item xs={3}>
            <Box className="table_elem">Name</Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="table_elem">Email</Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="table_elem">Bio</Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="table_elem">Address</Box>
          </Grid>
        </Grid>
        {Data.map((elem,index) =>
          <Grid
            container
            key={elem.id}
            className="table_row"
          >
            <Grid item xs={3}>
              <Box className="table_elem">{elem.name}</Box>
            </Grid>
            <Grid item xs={3}>
              <Box className="table_elem">{elem.email}</Box>
            </Grid>
            <Grid item xs={3}>
              <Box className="table_elem">{elem.bio}</Box>
            </Grid>
            <Grid item xs={3}>
              <Box className="table_elem">{elem.address}</Box>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default App;
