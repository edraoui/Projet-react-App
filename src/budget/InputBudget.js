import React, { Component } from 'react';
import { BudgetConsumer } from '../store';

class InputBudget extends Component {
    state = {
        budget: ''
    }
    handleInput = (e) =>{
        this.setState({budget: e.target.value})
    }
    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_BUDGET",
            budget: this.state.budget
        })
    }
    render() {
        return(
            <BudgetConsumer>
            {value =>{
                const { dispatch }= value
                return (
                    <div className="border border-primary card-body mb-3 rounded">
                        <label className='text-center'>Your Budget</label>
                        <form className="form-inline">
                            <input 
                                onChange={this.handleInput}
                                value={this.state.budget}
                                className="form-control mr-2 border border-primary"
                                type="number"
                            />
                            <button onClick={this.handleSubmit.bind(this, dispatch)} className="btn btn-primary btn-block mt-3">Submit</button>
                        </form>
                    </div>
                )
            }
            }
        </BudgetConsumer>
    )
    }
}

export default InputBudget