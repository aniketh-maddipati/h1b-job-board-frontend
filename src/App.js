import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";

// function App() {
//   return (
//     <div class="container-fluid">
//       <Navbar />
//       <searchBar />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Title />
        <SearchBar />
      </div>
    );
  }
}

export default App;
