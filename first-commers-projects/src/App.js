import { useSelector } from "react-redux";
import "./App.css";
import AllRoute from "./route/AllRoute";

function App() {
  const auth = useSelector((user)=>user.user.user.isAutentificated)
  const routes = AllRoute(auth);
  return <div>{routes}</div>;
}

export default App;
