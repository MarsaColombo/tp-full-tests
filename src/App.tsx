import { ChangeEvent, useCallback, useState } from "react";
import "./App.css";
import { DialValue, getHour } from "./modules/coordonisteTime";

function App() {
  const [lune, setLune] = useState<DialValue>(1);
  const [terre, setTerre] = useState<DialValue>(1);
  const [soleil, setSoleil] = useState<DialValue>(1);
  const [showResult, setShowResult] = useState(false);

  const handleChangeValue = (
    type: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    console.log(type, e.target.value);

    let value = parseInt(e.target.value);

    if (value !== 1 && value !== 2) {
      value = Math.abs(value - 1) < Math.abs(value - 2) ? 1 : 2;
    }

    if (type === "lune") {
      setLune(value as DialValue);
    } else if (type === "terre") {
      setTerre(value as DialValue);
    } else if (type === "soleil") {
      setSoleil(value as DialValue);
    }
  };

  const handleShowResult = useCallback(() => {
    setShowResult(true);
  }, []);

  return (
    <div className="app">
      <div className="heure-form">
        <input
          type="number"
          id="lune"
          value={lune}
          onChange={(e) => handleChangeValue("lune", e)} 
          />
        <input
          type="number"
          id="terre"
          value={terre}
          onChange={(e) => handleChangeValue("terre", e)}
        />
        <input
          type="number"
          id="soleil"
          value={soleil}
          onChange={(e) => handleChangeValue("soleil", e)}
        />
      </div>

      <button id="btn-show" onClick={handleShowResult}>
        Afficher
      </button>
      <div className="heure">
        {showResult && (
          <div className="heure-value">{getHour(lune, terre, soleil)}</div>
        )}
      </div>
    </div>
  );
}

export default App;
