import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./table.css";
import { connect } from "react-redux";
import actions from "../../actions";
import PropTypes from "prop-types";
import sort from "./sort";
import { FixedSizeList } from 'react-window';

function handleSticky() {
  const header = document.getElementById("table_title");
  const sticky = header.offsetTop;
  console.log(window.pageYOffset, sticky);
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function TitleColumn(data) {
  return (
    <Grid item xs={1}>
      <Box className="title_elem">
        <h3
          className="table_title-text"
          onClick={sort.bind(null, `${data.title.toLowerCase()}`, data.props)}
        >
          {data.title}
        </h3>
        {data.props.fourthData.data === `${data.title.toLowerCase()}` ? (
          <p>{data.props.fifthData.data}</p>
        ) : null}
      </Box>
    </Grid>
  );
}


class Table extends Component {
  componentDidMount() {
      window.addEventListener('scroll', handleSticky);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', handleSticky);
  }

  render() {
    const data = this.props.info;

    const Row = ({ index, style}) => {
      return (
        <Grid container className="table_row" style={style}>
          <Grid item xs={1}>
            <Box className="table_elem name_elem">{data[index].name}</Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="table_elem job_elem">{data[index].job}</Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="table_elem city_elem">{data[index].city}</Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="table_elem country_elem">{data[index].country}</Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="table_elem latitude_elem">{data[index].latitude}</Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="table_elem longitude_elem">{data[index].longitude}</Box>
          </Grid>
          <Grid item xs={1}>
            <Box className="table_elem date_elem">
              {`${data[index].date.toLocaleString("en", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}`}
            </Box>
          </Grid>
        </Grid>
      )
    };

    const DrawRow = () => {
      if (this.props.sixthData.data) {
        return (
          data.map((elem, index) =>
          <Grid container className="table_row" key={index}>
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
              <Box className="table_elem date_elem">
                {`${elem.date.toLocaleString("en", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}`}
              </Box>
            </Grid>
          </Grid>
        )
        )
      } else {
        return (
          <FixedSizeList
            height={500}
            itemSize={60}
            itemCount={data.length}
            className="list-container"
          >
            {Row}
          </FixedSizeList>
        )
      }
    }

    return (
        <Grid
          container
          className="developer_block-time_feature time_feature_block"
        >
          <Grid
            container
            className="table_title"
            id="table_title"
          >
            <TitleColumn props={this.props} title="Name" />
            <TitleColumn props={this.props} title="Job" />
            <TitleColumn props={this.props} title="City" />
            <TitleColumn props={this.props} title="Country" />
            <TitleColumn props={this.props} title="Latitude" />
            <TitleColumn props={this.props} title="Longitude" />
            <TitleColumn props={this.props} title="Date" />
          </Grid>
          <DrawRow />
        </Grid>
    );
  }
}

Table.propTypes = {
  fourthData: PropTypes.object.isRequired,
  fifthData: PropTypes.object.isRequired,
  sixthData: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    firstData: store.firstData,
    secondData: store.secondData,
    thirdData: store.thirdData,
    fourthData: store.fourthData,
    fifthData: store.fifthData,
    sixthData: store.sixthData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch(actions.setData(data)),
    changeSearchData: searchData =>
      dispatch(actions.changeSearchData(searchData)),
    changeSort: sort => dispatch(actions.changeSort(sort)),
    setSortTitle: sortField => dispatch(actions.setSortTitle(sortField)),
    changeArrow: arrow => dispatch(actions.changeArrow(arrow)),
    changeVirtualization: virt => dispatch(actions.changeArrow(virt))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
