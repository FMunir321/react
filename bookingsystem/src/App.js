import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './component/Home';
import Alltours from "./component/Alltours";
// import Test from "./component/Test";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Alltours />
  }
])

export default App;
