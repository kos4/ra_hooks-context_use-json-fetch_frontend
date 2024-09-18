import './App.css';
import {useJsonFetch} from "./hooks/useJsonFetch";

export default function App() {
  const DataComp = () => {
    const hook = useJsonFetch('http://localhost:7070/data');
    return (
      <div>
        <b>Status get data:</b> {hook.data && JSON.stringify(hook.data)}
      </div>
    )
  }

  const ErrorComp = () => {
    const hook = useJsonFetch('http://localhost:7070/error');
    return (
      <div>
        <b>Error status:</b> {hook.error && JSON.stringify(hook.error)}
      </div>
    )
  }

  const LoadingComp = () => {
    const hook = useJsonFetch('http://localhost:7070/loading');
    return (
      <div>
        <b>Loading status:</b> {hook.loading && <>Loading...</>}
      </div>
    )
  }
  return (
    <div className="App">
      <DataComp/>
      <ErrorComp/>
      <LoadingComp/>
    </div>
  );
}
