import React, { Component } from 'react';
import { BudgetConsumer } from '../store';

class InputExpenses extends Component {
    state = {
        expenses: [],
        expenseTitle: '',
        amount: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_EXPENSES",
            expenses: this.state.expenses
        })
    }
    addExpenses = () =>{
        this.setState({
            expenses: [
                ...this.state.expenses,
                {title: this.state.expenseTitle, amount: this.state.amount ,date: this.state.date}
            ]
        }

        )
    }
    render() {
        return (
            <BudgetConsumer>
                {value => {
                    const { dispatch } = value
                    return(
                        <div className="border border-primary card-body mb-3 rounded">
                        <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                            <label className='text-center'>Categorie</label>
                            <input 
                                onChange={this.handleInput}
                                value={this.state.expenseTitle}
                                className="form-control mr-2 border border-primary"
                                name="expenseTitle"
                            />
                            <label>Amount</label>
                            <input 
                                onChange={this.handleInput}
                                value={this.state.amount}
                                className="form-control mr-2 border border-primary"
                                name="amount"
                            />
                            <label>Date</label>
                            <input 
                                onChange={this.handleInput}
                                value={this.state.date}
                                className="form-control mr-2 border border-primary"
                                name="date"
                                type="date"
                            />
                            <button onClick={this.addExpenses} className="btn btn-primary btn-block mt-3">Submit</button>
                        </form>
                    </div>
                    )
                }}
            </BudgetConsumer>


        )
    }
}

export default InputExpenses