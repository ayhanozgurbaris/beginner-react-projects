import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

var name = "barış"
var isloggedIn = false;


function hello() {
  
  return (
    <div>
      <Header age = "20"/>
      <h1>Hello {name}</h1>
      <h1>{`backtick ${name}`}</h1>
      <h1>{isloggedIn ? "logged in" : "not logged in"}</h1>

    </div>
  );
}


export default hello;
