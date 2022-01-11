import './App.css';
import axios from 'axios';

const App = () => {

  axios.get('https://my-habits-2022-api.herokuapp.com/')
      .then(res => {
        console.log(res.data)
      })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to habits app 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
