import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

interface RouterProps {
  isLoggin: boolean;
}
function AppRouters({ isLoggin }: RouterProps) {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default AppRouters;
