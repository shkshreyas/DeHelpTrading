import "./App.css";
import RoutesComponent from "./routes";
import { Helmet } from "react-helmet";
import favicon from "./assets/img/tokens/dhelp.png";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Dhelp Screener</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <RoutesComponent />
    </div>
  );
}

export default App;
