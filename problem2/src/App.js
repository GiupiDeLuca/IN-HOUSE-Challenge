import React, { useState } from "react";
import Box from "./Box";

function App() {
  const [select, setSelect] = useState();
  const [boxes, setBoxes] = useState([]);

  function createBoxes(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push({ id: i });
    }
    return result;
  }

  const styles = {
    formStyle: {
      padding: "50px 80px",
    },
    flexContainer: {
      display: "flex",
      height: "100vh",
      justifyContent: "space-around",
      alignItems: "center",
      alignContent: "space-between",
      flexWrap: "wrap",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 100px)",
      gridGap: "30px 20px",
      padding: "30px",
    },
  };

  const handleChange = ({ target }) => {
    setSelect(null);
    setBoxes(createBoxes(target.value));
  };

  return (
    <div>
      <form style={styles.formStyle}>
        <label htmlFor="create">
          <h1>How many boxes?</h1>
          <input
            id="create"
            name="create"
            onChange={handleChange}
            placeholder={"Enter a number"}
          />
        </label>
        <br />
      </form>
      <div style={styles.flexContainer}>
        <div style={styles.gridContainer}>
          {boxes.map((box) => (
            <Box
              box={box}
              onClick={(select) => setSelect(select)}
              selectedBox={select}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
