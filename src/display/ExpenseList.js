import React, { Component } from 'react';
import { BudgetConsumer } from '../store';

class ExpenseList extends Component {
    render() {
        return (
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr className='bg-primary'>
                            <th>Categorie </th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <BudgetConsumer>
                        {value => {
                            const expensesList = value.expenses.length > 0 ? (
                                value.expenses.map((expense,index) =>{
                                    return (
                                        <tr key={index} className=" text-white table-info">
                                            <td>{expense.title}</td>
                                            <td>{expense.amount}</td>
                                            <td>{expense.date}</td>
                                        </tr>
                                    )
                                })
                            ):(
                                <tr></tr>
                            )
                            return <tbody>{expensesList}</tbody>
                        }}
                    </BudgetConsumer>
                <tbody></tbody>     
                </table>
            </div>
        )
    }
}

export default ExpenseList
