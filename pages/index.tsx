import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { ChangeEvent, useState } from "react";

const Home: NextPage = () => {
  const [bill, setBill] = useState<any>(0);
  const [tip, setTip] = useState<number>(0);
  const [service, setService] = useState<string>("");
  const [people, setPeople] = useState<any>(1);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };

  const serviceOptionHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setService(event.target.value);
  };

  const peopleInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPeople(event.target.value);
  };
  const calculateEventHandler = () => {
    const terribleServiceTip = Math.floor((bill * 0.05) / people);
    const goodServiceTip = Math.floor((bill * 0.1) / people);
    const exelentServiceTip = Math.floor((bill * 0.15) / people);

    if (service === "terrible") {
      return setTip(terribleServiceTip);
    }
    if (service === "good") {
      return setTip(goodServiceTip);
    }
    return setTip(exelentServiceTip);
  };

  const resetInputsHandler = () => {
    setTip(0);
    setPeople(0);
    setBill(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calcContainer}>
        <h1>Tip Calculator</h1>
        <div className={styles.formContainer}>
          <label htmlFor="bill">How much was the bill?</label>
          <input
            type="number"
            id="bill"
            onChange={inputChangeHandler}
            value={bill}
            required
          />
          <label htmlFor="service">How good was the service?</label>
          <select
            id="service"
            className="inputSelect"
            onChange={serviceOptionHandler}
            required
          >
            <option value="terrible">Terrible</option>
            <option value="good">Good</option>
            <option value="exelent">Excelent</option>
          </select>
          <label htmlFor="people">
            How many people are splitting the bill?
          </label>
          <input
            type="number"
            id="people"
            value={people}
            onChange={peopleInputHandler}
            required
          />
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.buttonReset} onClick={resetInputsHandler}>
            Reset
          </button>
          <button className={styles.buttonCalc} onClick={calculateEventHandler}>
            Calculate
          </button>
        </div>
        <div className={styles.tipContainer}>
          <p>You should tip:</p>
          <h4>${tip}</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
