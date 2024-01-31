import React, { Component } from 'react'

export default class StateComponent extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.users !== prevState.users) {
            /* Fai qualcosa solo se lo stato è cambiato */
        }
    }

    render() {
        return (
        <div>StateComponent</div>
        )
    }
}
