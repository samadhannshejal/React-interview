import React, { useState } from "react";
import "../../Styles/GenratePassword.css";
import useGeratePassword from "./hooks/useGenratePassword";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import PasswordStrangth from "./components/PasswordStrangth";
const GenratePassword = () => {
  const [range, setRange] = useState(4);
  const [checkBoxType, setCheckBoxType] = useState([
    { value: "Include upperCase", isSelected: false },
    { value: "Include lowerCase", isSelected: false },
    { value: "Include numbers", isSelected: false },
    { value: "Include symbols", isSelected: false },
  ]);
  const [copy, setCopy] = useState(false);
  const { password, errorMessage, genratePassword } = useGeratePassword();
  const handlePasswordRange = (e) => {
    setRange(e.target.value);
  };

  const handleCheck = (index) => {
    const copiedArray = [...checkBoxType];
    copiedArray[index].isSelected = !copiedArray[index].isSelected;
    setCheckBoxType(copiedArray);
  };

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  };

  
  return (
    <div className="genrate-password-container">
      <div className="genrate-password">
        <div className="genrate-password-header">
          <div>{password}</div>
          <Button onClick={handleCopy} children={copy ? "copied" : "copy"} />
        </div>
        <div className="genrate-password-range">
          <div>
            <span>Select the password range</span>
            <label>{range}</label>
          </div>
          <input
            type="range"
            min={4}
            max={20}
            onChange={(e) => handlePasswordRange(e)}
          />
        </div>
        <div className="genrate-password-checkbox-container">
          {checkBoxType.map((item, index) => (
            <div key={item.value}>
              <Checkbox item={item} index={index} onChange={()=>handleCheck(index)}/>
            </div>
          ))}
        </div>
        <div className="password-genrater-error-message">
          <span>{errorMessage}</span>
        </div>
        <div className="genrate-password-btn">
          <Button
            onClick={() => genratePassword(checkBoxType, range)}
            children={"Genrate Password"}
          />
        </div>
      </div>
    </div>
  );
};

export default GenratePassword;
