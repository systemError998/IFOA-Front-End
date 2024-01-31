import React, { Component } from 'react'

export default class EventComponent extends Component {
    
    /* creo un riferimento ad un nodo html , queryselector(input) */
    input1 = React.createRef();

    state = {
        txt: '',
        toggle: false //
    }

    firstClick = () => {
        this.setState( prevState => ({toggle: !prevState.toggle}))    
    }

    /* secClick () {
        this.setState( prevState => ({toggle: !prevState.toggle}))    
    } */

    handleText = (event) => {
        this.setState({ txt: event.target.value })
    }


    render() {
        return (
            <div>

                <form action="">
                    <input 
                        type="text"
                        onChange={this.handleText} 
                        ref= {this.input1}/>
                </form>
                

                <br />

                <button onClick={this.firstClick}> Arrow Function  </button> 
                {this.state.toggle && <p> Ciao </p>}      
                {/*  //Faccio visualizzare un valore solo se toggle è true */} 
                {/*  Avendo inizializzato lo stato con false inizialemnte non vedrò nulla */} 

                {/* <button onClick={this.clickButton2.bind(this)}> Function & Bind  </button> */}

                <div>
                    <span> {this.state.txt} </span>
                </div>
                

            </div>
        )
    }
}
