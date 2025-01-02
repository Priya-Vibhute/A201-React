import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Counter from './components/Counter';
import ChangeName from './components/ChangeName';
import LoggedIn from './components/LoggedIn';
import PositiveNegative from './components/PositiveNegative';
import AreaOfRectangle from './components/AreaOfRectangle';
import TimeoutComponent from './components/TimeoutComponent';
import {createBrowserRouter,RouterProvider} from "react-router-dom"


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<LoggedIn/>
    },{
      path:"/counter",
      element:<Counter/>
    },{}
  ]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <TimeoutComponent/>
      <PositiveNegative/>
      {true && <AreaOfRectangle/>}
        <h1>Hello</h1>
        <LoggedIn/>
        <Header/>
        <Footer id={345} name="Manju"/>
        <Student name="Nisha" age={18}/>
        <Student name="Amit" age={19}/>
        <Student name="AMruta" age={18}/>
        <Counter/>
        <ChangeName/> */}

    </div>
  );
}

export default App;
