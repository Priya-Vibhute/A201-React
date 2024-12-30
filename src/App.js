import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';


function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        <Header/>
        <Footer/>
        <Student name="Nisha" age={18}/>
        <Student name="Amit" age={19}/>
        <Student name="AMruta" age={18}/>

    </div>
  );
}

export default App;
