import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="px-4 py-5">
      <Outlet />
    </div>
  );
}

export default App;