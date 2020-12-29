import React, { useState, useEffect } from "react";

function App() {
  const [numero, setNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const somar = () => {
    const numeroInt = parseInt(numero);
    const segnumeroInt = parseInt(segundoNumero);

    setResultado(numeroInt + segnumeroInt);
  };

  useEffect(() => {
    console.log("Variavel numero:", numero);
  });

  return (
    <div>
      Numero 1: <br />
      <input
        type="text"
        value={numero}
        onChange={e => setNumero(e.target.value)}
      />{" "}
      <br />
      Numero 2: <br />
      <input
        type="text"
        value={segundoNumero}
        onChange={e => setSegundoNumero(e.target.value)}
      />
      <br />
      <button onClick={somar}>Somar</button> <br />
      Resultado: <br />
      <input type="text" value={resultado} /> <br />
    </div>
  );
}

export default App;
