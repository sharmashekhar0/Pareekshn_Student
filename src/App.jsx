import { Outlet } from "react-router";
import LoginScreen from "./pages/LoginScreens/LoginScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <Outlet /> */}
      <ToastContainer />
    </>
  );
}

export default App;
