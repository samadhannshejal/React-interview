import { useState } from "react";
const useGeratePassword = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const genratePassword = (checkBox, range) => {
    const seclectdOption = checkBox.filter((item) => item.isSelected);
    if(!seclectdOption.length){
        setErrorMessage('Please select atleast one option')
        setPassword('')
        return
    }
    let charaterSet = "";
    let finalPassword = "";

    seclectdOption.forEach((item) => {
      switch (item.value) {
        case "Include upperCase":
          charaterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include lowerCase":
          charaterSet += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include numbers":
          charaterSet += "1234567890";
          break;

        case "Include symbols":
          charaterSet += "@#$%&";
          break;

        default:
          break;
      }
    });
    
    for (let i = 0; i < range; i++) {
      let randomNumber = Math.floor(Math.random() * charaterSet.length);
      finalPassword += charaterSet.charAt(randomNumber);
    }
    setPassword(finalPassword);
    setErrorMessage('')
  };
  return { password, errorMessage, genratePassword };
};
export default useGeratePassword;
