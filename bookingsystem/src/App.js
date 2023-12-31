import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './component/Home';
import Alltours from "./component/Alltours";
import TourDetails from "./component/TourDetails";
import Confirmbooking from "./component/Confirmbooking";
import Test from "./component/Test";
import Mytours from "./component/Mytours";
import Update from "./component/Update";

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
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <TourDetails />
  },
  {
    path: '/confirmbooking',
    element: <Confirmbooking />
  },
  {
    path: '/mytours',
    element: <Mytours />
  },
  {
    path: '/update',
    element: <Update />
  },
  {
    path: '/test',
    element: <Test />
  }
])

export default App;
