import React, { useState } from "react";

function Excel() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [grid, setGrid] = useState(createGrid(2, 2));

  //   function createGrid(rows, cols) {
  //     const data = [];
  //     for (let i = 0; i < rows; i++) {
  //       const rows = [];
  //       for (let j = 0; j < cols; j++) {
  //         rows.push("");
  //       }
  //       data.push(rows);
  //     }
  //     return data;
  //   }

  function createGrid(rows, cols) {
    const data = new Array(rows)
      .fill(" ")
      .map((_) => new Array(cols).fill(" "));
    console.log(data);
    return data;
  }
  console.log(grid);
  function handleChnage(rowIndex, columnIndex, value) {
    const data = [...grid];
    data[rowIndex][columnIndex] = value;
    setGrid(data);
  }

  const addCols = () => {
    setCols(cols + 1);
    setGrid(
      (prevGrid) => prevGrid.map((row) => [...row, ""]) // Add an empty string to each row
    );
  };

  const addRow = () => {
    setRows(rows + 1);
    setGrid((prevGrid) => [...prevGrid, new Array(cols).fill("")]); // Add a new row with empty strings
  };

  const calculateFormula = (formula) => {
    const numbers = formula
      .substring(1)
      .split("+")
      .map((num) => parseFloat(num.trim()) || 0);
    return numbers.reduce((acc, cur) => acc + cur, 0);
  };
  return (
    <div>
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleChnage(rowIndex, cellIndex, e.target.value)
                    }
                    onBlur={(e) => {
                      if (e.target.value.startsWith("=")) {
                        const result = calculateFormula(e.target.value);
                        handleChnage(rowIndex, cellIndex, result);
                      }
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add row</button>
      <button onClick={addCols}>Add Columns</button>
    </div>
  );
}

export default Excel;
