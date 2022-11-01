import React from "react";
import BalanceDisplay from './BalanceDisplay';
import ExpenseList from './ExpenseList';

const DisplayBudget = () => {
    return (
        <div className="card card-body border border-primary card-body mb-3 rounded">
            <h3 className="text-center">Budget Info</h3>
            <BalanceDisplay />
            <ExpenseList />
        </div>
    )
}

export default DisplayBudget