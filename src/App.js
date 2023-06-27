import React, { useState } from 'react';
import './App.css';

function App() {

  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to format the phone number
  const formatPhoneNumber = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    let formattedNumber = '';
    formattedNumber = `${inputValue.substr(0, 3)}`;

    if (inputValue.length > 3) {
      // Format the phone number
      formattedNumber = `(${inputValue.substr(0, 3)}) ${inputValue.substr(3, 3)}`;
      if (inputValue.length > 6) {
        formattedNumber += `-${inputValue.substr(6, 4)}`;
      }
    }
    setPhoneNumber(formattedNumber);
  };
  
  return (  
    <div className="container text-center">
      <input
        type="tel"
        id="phone"
        maxLength="16"
        placeholder="mobile number"
        autoComplete="off"
        value={phoneNumber}
        onChange={formatPhoneNumber}
      />
    </div>
  );
}

export default App;
