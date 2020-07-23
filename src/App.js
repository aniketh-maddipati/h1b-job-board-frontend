import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

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
      <div className="container-fluid">
        <Navbar />
        <SearchBar />
      </div>
    );
  }
}

export default App;
