import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="border-8 border-yellow-700">
      <h1>Raman SIngh</h1>
      <div className="bg-green-400 text-gray-950">
        <p className="text-xs">Raman</p>
        <p className="truncate ...">
         
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          obcaecati itaque soluta asperiores tempore. Dolores nesciunt,
          perspiciatis iusto magnam omnis obcaecati tempore exercitationem totam
          voluptate ullam alias! Aliquid, soluta eaque.
        </p>
        <p className="text-clip overflow-hidden ...">
         
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          obcaecati itaque soluta asperiores tempore. Dolores nesciunt,
          perspiciatis iusto magnam omnis obcaecati tempore exercitationem totam
          voluptate ullam alias! Aliquid, soluta eaque.
        </p>
      </div>
    </div>
  );
}

export default App;
