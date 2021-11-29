import React, { Component } from 'react'
import CurrenciesList from './CurrenciesList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { currencyConverter } from '../actions/index'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            source: '',
            currencies: '',
            amount: 0
        }

        this.onValueChange = this.onValueChange.bind(this)
        this.onValueSelectFrom = this.onValueSelectFrom.bind(this)
        this.onValueSelectTo = this.onValueSelectTo.bind(this)
        this.send = this.send.bind(this)
    }

    onValueChange(e) {
        let amount=e.target.value
        this.setState({
            amount
        })
        this.props.amount(amount)
    }

    onValueSelectFrom(e) {
        console.log(e.target.value)
        this.setState({
            source: e.target.value
        })
    }

    onValueSelectTo(e) {
        console.log(e.target.value)
        this.setState({
            currencies: e.target.value
        })
    }

    send() {
        const data = {
            source: this.state.source,
            currencies: this.state.currencies,
            amount: this.state.amount
        }

        this.props.currencyConverter(data)
    }

    render() {
        return (
            <form>
                <div className='row justify-content-md-center'>
                    <div className='input-group input-group-lg'>
                        <input onChange={(e) => this.onValueChange(e)} type='number' className='form-control' />
                    </div>
                </div>
                <div className='row form-group'>
                    <div className='col-md-6'>
                        <label htmlFor='formSelectFROM'>De:</label>
                        <select name='from' onClick={(e) => this.onValueSelectFrom(e)} className='form-control'>
                            <option value='USD' title='United States Dollar'>USD</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='formSelectTO'>Para:</label>
                        <CurrenciesList origin='to' onValueChange={this.onValueSelectTo} />
                    </div>
                </div>
                <div className='row'>
                    <button onClick={this.send} type="button" className="btn btn-primary btn-lg btn-block">Converter</button>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ currencyConverter }, dispatch)
}

export default connect(null, mapDispatchToProps)(Form)