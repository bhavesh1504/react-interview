import React from "react";

function Radio() {
  const optionGames = ["cricket", "hockey", "football"];
  const days = ["weekdays", "weekends"];
const holidays=['ganpati','diwali','christmas']
  return (
    <div>
      {optionGames.map((curr) => {
        return (
          <>
            <input type="radio" id="curr" name="optionGames" />

            <label htmlFor="curr">{curr}</label>
          </>
        );
      })}

      <br />
      {days.map((curr) => {
        return (
          <>
            <input type="radio" id="curr" name="days" />
            <label htmlFor="curr">{curr}</label>
          </>
        );
      })}
      <br />
      {holidays.map((curr) => {
        return (
          <>
            <input type="radio" name="holidays" id="curr" />
            <label htmlFor="curr">{curr}</label>
          </>
        )
      })}
    </div>
  );
}

export default Radio;
