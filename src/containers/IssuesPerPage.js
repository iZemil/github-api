import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeIssuesPerPage } from '../actions';
import { Button, ButtonGroup } from 'reactstrap';

class IssuesPerPage extends Component {

  render() {
    const { changeIssuesPerPage, perPage } = this.props;

    return (
      <div style={{textAlign: 'right'}}>
        <span style={{paddingRight: '10px'}}>Отобразить на странице:</span>
        <ButtonGroup>
          <Button outline color="secondary" onClick={() => changeIssuesPerPage(10)} active={perPage === 10}>10</Button>
          <Button outline color="secondary" onClick={() => changeIssuesPerPage(20)} active={perPage === 20}>20</Button>
          <Button outline color="secondary" onClick={() => changeIssuesPerPage(30)} active={perPage === 30}>30</Button>
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    perPage: state.issues.perPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeIssuesPerPage: (num) => { dispatch(changeIssuesPerPage(num)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPerPage)
