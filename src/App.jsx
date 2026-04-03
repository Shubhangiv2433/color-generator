import { useState } from 'react';
import "./App.css";
import "./Responsive.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [color, setColor] = useState('#fff');
  const [copied , setCopied] = useState(false);

  const changeColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);

    setColor(randomColor);
  };

  const copyColor = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);

    setTimeout(() =>{
      setCopied(false);
      } , 1000);
  };

  return (
    <div
      style={{ backgroundColor: color, height: "100vh" }}
      className="bgColor"
    >
      <div className="wrap-box">
        <div className="copy-wrap"><h2 className="colorName">{color}</h2>

          <button onClick={copyColor} className='btnCopy'>
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
          </button>
        </div>

        <button onClick={changeColor} className="btnColor">
          Change bgColor
        </button>
      </div>
    </div>
  );
}

export default App;