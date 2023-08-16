import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './component/Home';
import Test from "./component/Test";

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
    element: <Test />
  }
])

export default App;
