import React, { useState } from "react";
import AppRouters from "./components/Routers";

function App() {
  const [isLoggin, setLoggin] = useState(false);
  return (
    <div className="App">
      <AppRouters isLoggin={isLoggin} />
    </div>
  );
}

export default App;
