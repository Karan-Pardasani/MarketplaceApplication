import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

function App() {

  return (
    <div>
      {useRoutes(routes)}      
    </div>
  );
}

export default App;
