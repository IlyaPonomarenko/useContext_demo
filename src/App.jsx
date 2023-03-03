import CompA from "./CompA";
import "./App.css";
import { GlobalContextProvider } from "./GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <>
        <div className="App-header">
          <CompA />
        </div>
      </>
    </GlobalContextProvider>
  );
}

export default App;
