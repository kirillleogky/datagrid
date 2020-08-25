import React, { Component } from "react";
import "./App.css";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Search from "./components/search/search";
import Table from "./components/table/table";
import actions from "./actions";
import Data from "./data/data";

class App extends Component {
  getFilteredData(datum = this.props.thirdData.data) {
    const search = this.props.firstData.data;
    const data = datum;
    if (!search) {
      return data;
    }
    let result = data.filter(item => {
      return (
        item["name"].toLowerCase().includes(search.toLowerCase()) ||
        item["job"].toLowerCase().includes(search.toLowerCase()) ||
        item["country"].toLowerCase().includes(search.toLowerCase()) ||
        item["city"].toLowerCase().includes(search.toLowerCase()) ||
        item["latitude"].includes(search) ||
        item["longitude"].includes(search) ||
        item["date"]
          .toLocaleString("en", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = this.props.thirdData.data;
    }
    return result;
  }

  render() {
    if (!this.props.thirdData.data.length) {
      this.props.setData(this.getFilteredData(Data));
    }
    return (
      <Box className="App">
        <h1 className="title">Fake Persons</h1>
        <h3 className="title-info">
          The search will show any matching values. If there is no match, then
          all the data.
        </h3>
        <h3 className="title-info">To sort, click on the title.</h3>
        <h3 className="title-info">
          When you click on a line, data on a current line is saved to the
          clipboard.
        </h3>
        <Search />
        <Button
          variant="outlined"
          className="virtualization_btn"
          onClick={event => {
            if (
              event.currentTarget.classList.contains(
                "virtualization_btn-active"
              )
            ) {
              event.currentTarget.classList.remove("virtualization_btn-active");
              this.props.changeVirtualization(false);
            } else {
              event.currentTarget.classList.add("virtualization_btn-active");
              this.props.changeVirtualization(true);
            }
          }}
        >
          Do not use virtualization
        </Button>
        <Table info={this.getFilteredData()} />
      </Box>
    );
  }
}

App.propTypes = {
  firstData: PropTypes.object.isRequired,
  secondData: PropTypes.object.isRequired,
  thirdData: PropTypes.object.isRequired,
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
    changeVirtualization: virt => dispatch(actions.changeVirtualization(virt))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
