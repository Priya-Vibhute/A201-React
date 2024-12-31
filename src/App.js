import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Counter from './components/Counter';
import ChangeName from './components/ChangeName';

function App() {
  return (
    <div className="App">
        <h1>Hello</h1>
        <Header/>
        <Footer id={345} name="Manju"/>
        <Student name="Nisha" age={18}/>
        <Student name="Amit" age={19}/>
        <Student name="AMruta" age={18}/>
        <Counter/>
        <ChangeName/>

    </div>
  );
}

export default App;
