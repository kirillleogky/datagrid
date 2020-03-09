import React, { Component } from 'react'
import './App.css';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './components/search/search';
import Table from './components/table/table';
import _ from 'lodash';

class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      data: props.thirdData.data,
      search: '',
      sort: 'asc',  // 'desc'
      sortField: '',
      arrow: '↓'
     }
    }
    onSort = sortField => {
      const cloneData = this.state.data.concat();
      const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
      const arrow = this.state.arrow === '↓' ? '↑' : '↓';
      const data = _.orderBy(cloneData, sortField, sort);
      this.setState({ data, sort, sortField, arrow })
    }
  render() {
    const { firstData, secondData } = this.props;
    // console.log(_.orderBy(thirdData.data, this.state.sortField, this.state.sort),this.state.data);
    return (
    <Box className="App">
      <h1 className="title">{firstData.data} {secondData.data}</h1>
      <h3 className="title-info">The search will show any matching values. If there is no match, then all the data.</h3>
      <h3 className="title-info">To sort, click on the title.</h3>
      <Search />
      <Table
        info={this.state.data}
        onSort={this.onSort}
        sortField={this.state.sortField}
        arrow={this.state.arrow}
      />
    </Box>
  )
 };
}

App.propTypes = {
  firstData: PropTypes.object.isRequired,
  secondData: PropTypes.object.isRequired,
  thirdData: PropTypes.object.isRequired,
}


const mapStateToProps = store => {
  return {
    firstData: store.firstData,
    secondData: store.secondData,
    thirdData: store.thirdData,
  }
}

export default connect(mapStateToProps)(App)
