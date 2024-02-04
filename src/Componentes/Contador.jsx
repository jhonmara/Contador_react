import React from "react";
import '../ComponenteEstilos/Contador.css'


function Contador({ numClic }) {
  return (
    <div className="Contador">
      {numClic}
    </div>
  );
}

export default Contador;




