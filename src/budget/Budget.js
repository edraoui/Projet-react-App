import React from 'react';
import InputBudget from './InputBudget';
import InputExpenses from './InputExpenses';
import DisplayBudget from '../display/DisplayBudget';
import Graphe from '../Graphe/Graphe';
const Budget = () => {
    return (
        <div className="row align-items-center justify-content-start">
            <div className="col-lg-3">
                <InputBudget />
                <InputExpenses />
            </div>
            <div className="col-lg-6">
                <DisplayBudget />
            </div>
            <div className="col-lg-3">
                <DisplayBudget />
            </div>
        </div>
       
    )
}

export default Budget