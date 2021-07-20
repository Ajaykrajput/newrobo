import React, { useState, useEffect } from "react";
import CardList from "../component/Cardlist";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
    console.log(count);
  }, [count]); ///   only run if count changes
  const onSearchchange = (event) => {
    setSearchfield(event.target.value);
  };
  console.log(robots, searchfield);
  const filterdRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // console.log("render")
  return !robots.length ? (
    <h1> Loading ...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1"> RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me !!</button>
      <SearchBox searchChange={onSearchchange} />
      <Scroll>
        <CardList robots={filterdRobots} />
      </Scroll>
    </div>
  );
}

export default App;

/////////////// This is the same code for class Component

// import React, { Component } from "react";
// import CardList from "../component/Cardlist";
// import SearchBox from "../component/SearchBox";
// import Scroll from "../component/Scroll";
// import ErrorBoundry from "../component/ErrorBoundry";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchfield: "",
//     };
//     // console.log('constructor');
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ robots: users }));
//     // console.log("componentDidMount")
//   }

//   onSearchchange = (event) => {
//     this.setState({ searchfield: event.target.value });
//   };
//   render() {
//     const { robots, searchfield } = this.state;
//     const filterdRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//     });
//     // console.log("render")
//     return !robots.length ? (
//       <h1> Loading ...</h1>
//     ) : (
//       <div className="tc">
//         <h1 className="f1"> RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchchange} />
//         <Scroll>
//           <ErrorBoundry>
//             <CardList robots={filterdRobots} />
//           </ErrorBoundry>
//         </Scroll>
//       </div>
//     );
//   }
// }
// export default App;
