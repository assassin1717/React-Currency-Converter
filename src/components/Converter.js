import React, { Component } from 'react'
import Form from './Form'
import {connect} from 'react-redux'

class Converter extends Component{
    constructor(props){
        super(props)

        this.state={
            amount: 0
        }

        this.amountValue=this.amountValue.bind(this)
    }

    amountValue(amount){
        this.setState({
            amount
        })
    }
    
    render(){
        return(
            <div className='content'>
                <div className='row justify-content-md-center'>
                    <div className='card text-center w-50'>
                        <div className='card-header bg-info'>
                            Conversor de Dolares
                        </div>
                        <div className='card-body'>
                            <Form amount={this.amountValue} />
                        </div>
                        <div className='card-footer text-light bg-dark'>
                            {this.props.converter.quotes && this.props.converter.quotes[Object.keys(this.props.converter.quotes)]*this.state.amount}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        converter: state.converter
    }
}

export default connect(mapStateToProps)(Converter)