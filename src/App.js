import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="Apple" price="5000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Google" price="0"></MyComponent>
      <MyComponent></MyComponent>

    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User> )
      } 
    </div>
  )
}
function User(props) {
  return (
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>Call me baby!!! {props.phone}</p>
    </div>
  )
}

function MyComponent(props) {
  const [points,setPoints] = useState(1);
  console.log(props);
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    borderRadius:'10px',
    margin: '20px',
    padding: '10px',

  }


  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1>
        Yo yo mama!!! {props.brand}!!!!
      </h1>
      <h4>Asking Money, {props.price}, I have Points:{points} </h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: 'magenta', fontWeight: 'bold' }}>I can right my own Component</p>
    </div>
  )
}
export default App;
