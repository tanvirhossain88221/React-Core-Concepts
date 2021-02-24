import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const nayoks = ['razzak', 'jasim', 'alomgir', 'salman', 'bappi', 'shuvo']
  const products = [
    {name:'Photoshop', price: '$90.99'},
    {name:'Illustrator', price: '$60.99'},
    {name:'PDF Reader', price: '$6.99'}
  ]
  // const productNames = products.map(product => product.name)
  // var name= "RoBIn";
  // var person = {
  //   Name: "tanvir",
  //   job: "Web Developer"
  // };

  // //css add
  // //react a class likte hole className diye likte hoy.
  // var style = {
  //   color: 'red',
  //   // - dewa jabe na camel case use korte hobe like backgound-color> backgroundColor
  //   backgroundColor: 'skyblue'
  // }
  return (
    <div className="App">
      <header className="App-header">

        <p>I'am a React Person</p>

        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
          {products.map(product=> <li>{product.name}</li>)}
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        <Person name="Tanvir" job="web-Hero"></Person>
        <Person name="Robin" food="Biriani"></Person>
        <Person name="Tony Stark" food="Alcohol" job="CEO"></Person>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>My Heading: {(2+5)*25+65}</h1>
        <h1> Dynamic Name: {name}</h1> */}

        {/* css add
        <h3 className="" style= {style}> info: {person.Name +' '+ person.job}</h3> */}

        {/* in line css in react */}
        {/* <p style={{color:"yellow", backgroundColor: "violet"}}>my first react paragraph</p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  const personStyle ={
    border: '2px solid red',
    margin: '10px',
    width: '400px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Job: {props.job}</h3>
      <p>Food: {props.food}</p>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick= {() => setCount(count + 1)}>Increase</button>
      <button onClick= {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState ([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
