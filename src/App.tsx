import { useState } from "react";
import { stringCalculator } from "./stringCalculator";
import "./styles/styles.css";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const sum = stringCalculator(input);
    setResult(sum);
  };

  const handleNumberInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCalculate();
  };

  return (
    <main className="main-container">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          height={400}
          alt="a piece of string on a table"
          aria-hidden="true"
          className="string-image"
        />
      </figure>

      <h1 className="main-heading">String Calculator</h1>

      <form aria-label="String Calculator Form" onSubmit={handleFormSubmit}>
        <label htmlFor="number-input" className="form-label">
          Enter numbers
        </label>

        <textarea
          placeholder="Enter numbers"
          name="number-input"
          id="number-input"
          value={input}
          onChange={handleNumberInputChange}
          className="number-input"
          aria-describedby="input-help"
        />

        <button className={"calculate-button"} type="submit">
          Calculate
        </button>

        {result !== null && (
          <p className="result-text" role="status" aria-live="polite">
            Result: {result}
          </p>
        )}

        <div>
          <p id="input-help">
            Please enter numbers seperated by comma or new lines.
          </p>
        </div>
      </form>
    </main>
  );
};

export default App;
