import React from "react";
import Header from "./components/header/Header";
import Form from "./components/UserInput/Form";
import TableList from "./components/ResultTable/TableList";


function App() {
  const [data, setData] = React.useState(null);
  const calculateHandler = (data) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    setData(data);
  }

  const yearlyData = []; // per-year results

  if (data) {
    let currentSavings = data["current-savings"];
    const yearlyContribution = data["yearly-contribution"];
    const expectedReturn = data["expected-return"] / 100;
    const duration = data["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <React.Fragment>
      <Header />
      <Form onCalculate={calculateHandler} />
      {!data && <p style={{ textAlign: 'center' }}>No investment calculated yet!</p>}
      {data && <TableList dataSaving={yearlyData} initialInvestment={data['current-savings']} />}
    </React.Fragment>
  )
}

export default App
