import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greet from './components/Greet';
import Welcome from './components/Welcom';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragementDemo from './components/FragementDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FragementDemo />}>
          <Route index element={<FragementDemo />} />
          <Route path="blogs" element={<FragementDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>

    //  <div className="App">
    //   <ParentComp />
    //   {/* <Table /> */}
    //   {/* <FragementDemo /> */}
    //   {/* <LifecycleA /> */}
    //   {/* <Form /> */}
    //   {/* <StyleSheet /> */}
    //   {/* < NameList /> */}
    //   {/* <UserGreeting /> */}
    //   {/* <ParentComponent /> */}
    //   {/* <EventBind /> */}
    //   {/* <FunctionClick /> */}
    //   {/* <Counter /> */}
    //   {/* < Greet /> */}
    //   {/* <Welcome />  */}
       
      
    // </div>
  );
}

export default App;
