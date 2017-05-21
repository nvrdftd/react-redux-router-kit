import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGreetings } from '../actions/actionCreators'

class Home extends Component {
  componentDidMount() {
    const { dispatch, greetings } = this.props
    dispatch(fetchGreetings());
  }

  render() {
    const { isFetching, greetings } = this.props
    if (isFetching) {
      return <h2>Loading</h2>
    } else {
      return <h2>{greetings}</h2>
    }
  }
}

const mapStateToProps = state => {
  return { isFetching, greetings } = state
}

export default connect(mapStateToProps)(Home)
