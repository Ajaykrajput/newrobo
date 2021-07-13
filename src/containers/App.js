import React, { Component } from "react";
import CardList from "../component/Cardlist";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
    // console.log('constructor');
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // console.log("componentDidMount")
  }

  onSearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const {robots, searchfield} = this.state;
    const filterdRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    // console.log("render")
    return !robots.length ?
      <h1> Loading ...</h1>:
    (
        <div className="tc">
          <h1 className="f1"> RoboFriends</h1>
          <SearchBox searchChange={this.onSearchchange} />
          <Scroll>
            <CardList robots={filterdRobots} />
          </Scroll>
        </div>
      );
  }
}
export default App;
