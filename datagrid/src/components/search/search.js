import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./search.css";
import { connect } from "react-redux";
import actions from "../../actions";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    let searchInput = "";
    return (
      <React.Fragment>
        <TextField
          id="filled-full-width"
          placeholder="Search by name, job, city, country, latitude, longitude, date"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
          onChange={event => {
            searchInput = `${event.target.value}`;
          }}
        />
        <Button
          variant="outlined"
          onClick={() => this.props.changeSearchData(searchInput)}
        >
          Search
        </Button>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  changeSearchData: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchData: searchData =>
      dispatch(actions.changeSearchData(searchData))
  };
};

export default connect(null, mapDispatchToProps)(Search);
