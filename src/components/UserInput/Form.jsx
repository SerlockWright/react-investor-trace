import React from 'react';
import styles from './Form.module.css';

const INITIAL_USERINPUT = {
    'current-savings': 1000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}

// eslint-disable-next-line react/prop-types
function Form({ onCalculate }) {
    const [userInput, setUserInput] = React.useState(INITIAL_USERINPUT);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onCalculate(userInput)
    }

    const handleResetForm = () => {
        setUserInput(INITIAL_USERINPUT);
    }

    const handleChangeFormInvestment = (input, value) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [input]: +value
            }
        })
    }

    return (
        <form onSubmit={handleSubmitForm} className={styles.form}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) => handleChangeFormInvestment('current-savings', event.target.value)}
                        type="number"
                        value={userInput['current-savings']}
                        id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) => handleChangeFormInvestment('yearly-contribution', event.target.value)}
                        type="number"
                        value={userInput['yearly-contribution']}
                        id="yearly-contribution" />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) => handleChangeFormInvestment('expected-return', event.target.value)}
                        type="number"
                        value={userInput['expected-return']}
                        id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) => handleChangeFormInvestment('duration', event.target.value)}
                        type="number"
                        value={userInput['duration']}
                        id="duration" />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={handleResetForm}>
                    Reset
                </button>
                <button type="submit" className={styles.buttonAlt}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form