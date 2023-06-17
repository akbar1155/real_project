import React, { useState } from "react";

function NestedDropdown() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const handleFirstChange = (event) => {
    setFirstValue(event.target.value);
    setSecondValue(""); // Reset the second value when the first value changes
  };

  const handleSecondChange = (event) => {
    setSecondValue(event.target.value);
  };

  return (
    <div>
      <select value={firstValue} onChange={handleFirstChange}>
        <option value="">Select First Value</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {firstValue && (
        <select value={secondValue} onChange={handleSecondChange}>
          <option value="">Select Second Value</option>
          {firstValue === "option1" && (
            <>
              <option value="suboption1">Suboption 1</option>
              <option value="suboption2">Suboption 2</option>
            </>
          )}
          {firstValue === "option2" && (
            <>
              <option value="suboption3">Suboption 3</option>
              <option value="suboption4">Suboption 4</option>
            </>
          )}
        </select>
      )}
    </div>
  );
}

export default NestedDropdown;
