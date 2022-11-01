import React from 'react';
import { BudgetConsumer } from '../store';

const BalanceDisplay = () => {
    return (
        <BudgetConsumer>
            {value => {
                        const totalExpense = value.expenses.length> 0 ? (
                            value.expenses.reduce((acc, curr) => {
                                acc += curr.amount
                                return acc
                            }, 0)) : 0;
                            return (
                                <div className="row">
                                <div className="col-lg-4">
                                    <div className="card border-primary rounded">
                                        <div className="card-header text-center text-white bg-primary">Budget</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title">{value.budget}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card border-primary rounded">
                                        <div className="card-header text-center text-white bg-primary">Expenses</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title">{totalExpense}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card border-primary rounded">
                                        <div className="card-header text-center text-white bg-primary">Balance</div>
                                        <div className="card-body">
                                            <h5 className="text-center card-title">{value.budget - totalExpense}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
            }}
        </BudgetConsumer>
    )
}

export default BalanceDisplay
