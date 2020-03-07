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
          <Grid item xs={1}>
            <Box className="title_elem">
              Name
              <Button className="table_btn">↓</Button>
              <Button className="table_btn">↑</Button>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="title_elem">
              Job
              <Button className="table_btn">↓</Button>
              <Button className="table_btn">↑</Button>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="title_elem">
              City
              <Button className="table_btn">↓</Button>
              <Button className="table_btn">↑</Button>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="title_elem">
              Country
              <Button className="table_btn">↓</Button>
              <Button className="table_btn">↑</Button>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="title_elem">
              Latitude
              <Button className="table_btn">↓</Button>
              <Button className="table_btn">↑</Button>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="title_elem">
              Longitude
              <Button className="table_btn">↓</Button>
              <Button className="table_btn">↑</Button>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="title_elem">
              Date
              <Button className="table_btn">↓</Button>
              <Button className="table_btn">↑</Button>
            </Box>
          </Grid>
        </Grid>
        {Data.map((elem,index) =>
          <Grid
            container
            key={elem.id}
            className="table_row"
          >
            <Grid item xs={1}>
              <Box className="table_elem name_elem">{elem.name}</Box>
            </Grid>
            <Grid item xs={1}>
              <Box className="table_elem job_elem">{elem.job}</Box>
            </Grid>
            <Grid item xs={1}>
              <Box className="table_elem city_elem">{elem.city}</Box>
            </Grid>
            <Grid item xs={1}>
              <Box className="table_elem country_elem">{elem.country}</Box>
            </Grid>
            <Grid item xs={1}>
              <Box className="table_elem latitude_elem">{elem.latitude}</Box>
            </Grid>
            <Grid item xs={1}>
              <Box className="table_elem longitude_elem">{elem.longitude}</Box>
            </Grid>
            <Grid item xs={1}>
              {console.log(elem.date === Data[0].date)}
              <Box className="table_elem date_elem">
                {`${elem.date.toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric'})}`}
              </Box>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default App;
