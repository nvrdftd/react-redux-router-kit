import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGreetings } from '../actions/actionCreators'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchGreetings())
  }

  render() {
    const { isFetching, msg } = this.props
    if (isFetching) {
      return <h2>Loading...</h2>
    } else {
      return <div>
        <h2>{msg}</h2>
      </div>
    }
  }
}

const mapStateToProps = ({ greetings }) => {
  const { isFetching, msg } = greetings
  return {
    isFetching,
    msg
  }
}

export default connect(mapStateToProps)(Home)
