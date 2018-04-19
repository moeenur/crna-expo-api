import React from "react";
import Packages from "./src/bootstrap/Packages";

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <Packages />;
  }
}
export default App;
