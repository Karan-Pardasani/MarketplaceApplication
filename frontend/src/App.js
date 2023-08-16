import { ToastContainer } from "react-toastify";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import MessageComponent from "./components/messages/displayMessages"
function App() {

  return (
    <div>
      <MessageComponent/>
      {useRoutes(routes)}
        <ToastContainer/>
    </div>
  );
}

export default App;
