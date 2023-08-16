/* eslint-disable react/prop-types */
import React from 'react';
import { formatNumber } from '../../utils/formatNumber';
import styles from './TableList.module.css';

const InvestorTableRow = [
    "Year",
    "Total Savings",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital"
]

function TableList({ dataSaving, initialInvestment }) {
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    {InvestorTableRow.map(item => (
                        <th key={item}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSaving.map(yearData => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatNumber.format(yearData.savingsEndOfYear)}</td>
                        <td>{formatNumber.format(yearData.yearlyInterest)}</td>
                        <td>{formatNumber.format(yearData.savingsEndOfYear - initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                        <td>{formatNumber.format(initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableList