import React from 'react'

const InvestorForm = [
    "Year",
    "Total Savings",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital"
]

function TableList() {

    return (
        <table className='result'>
            <thead>
                <tr>
                    {InvestorForm.map(item => (
                        <th key={item}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    )
}

export default TableList