import { useState } from 'react'
import './App.css'

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [disableButton, setDisableButton] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClick = () => {
    setButtonColor(newButtonColor)
  }
  return (
    <div className="App">
     <button style={{backgroundColor: disableButton ? 'grey' : buttonColor}} onClick={handleClick} disabled={disableButton}>Change to {newButtonColor}</button><br />
     <input type="checkbox" id="disable-button-checkbox" defaultChecked={disableButton} aria-checked={disableButton} onChange={(e) => setDisableButton(e.target.checked)} />
     <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
