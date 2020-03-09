import React from 'react'
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './table.css';

// function activeSort() {
//   console.log(this.state.date.isShow);
// }

// class TableTitle extends React.Component {
//   constructor(props) {
//   super(props)
//   this.state = {
//
//    }
//   }
//   render () {
//     return (
//     )
//   }
// }

export default function Table(props) {
  const data = props.info;
  return (
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
            <h3 className="table_title-text" onClick={props.onSort.bind(null, "name")}>Name</h3>
            {props.sortField === "name" ? <p>{props.arrow}</p> : null}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box className="title_elem">
            <h3 className="table_title-text" onClick={props.onSort.bind(null, "job")}>Job</h3>
            {props.sortField === "job" ? <p>{props.arrow}</p> : null}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box className="title_elem">
            <h3 className="table_title-text" onClick={props.onSort.bind(null, "city")}>City</h3>
            {props.sortField === "city" ? <p>{props.arrow}</p> : null}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box className="title_elem">
            <h3 className="table_title-text" onClick={props.onSort.bind(null, "country")}>Country</h3>
            {props.sortField === "country" ? <p>{props.arrow}</p> : null}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box className="title_elem">
            <h3 className="table_title-text" onClick={props.onSort.bind(null, "latitude")}>Latitude</h3>
            {props.sortField === "latitude" ? <p>{props.arrow}</p> : null}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box className="title_elem">
            <h3 className="table_title-text" onClick={props.onSort.bind(null, "longitude")}>Longitude</h3>
            {props.sortField === "longitude" ? <p>{props.arrow}</p> : null}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box className="title_elem">
            <h3 className="table_title-text" onClick={props.onSort.bind(null, "date")}>Date</h3>
            {props.sortField === "date" ? <p>{props.arrow}</p> : null}
          </Box>
        </Grid>
      </Grid>
      {data.map((elem,index) =>
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
            {console.log(elem.date === data[0].date)}
            <Box className="table_elem date_elem">
              {`${elem.date.toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric'})}`}
            </Box>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
