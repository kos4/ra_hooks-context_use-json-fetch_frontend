import './App.css';
import {DataComp} from "./components/DataComp";
import {ErrorComp} from "./components/ErrorComp";
import {LoadingComp} from "./components/LoadingComp";

export default function App() {
  return (
    <div className="App">
      <DataComp/>
      <ErrorComp/>
      <LoadingComp/>
    </div>
  );
}
