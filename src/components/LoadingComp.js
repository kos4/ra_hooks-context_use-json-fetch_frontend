import {useJsonFetch} from "../hooks/useJsonFetch";

export const LoadingComp = () => {
  const hook = useJsonFetch('http://localhost:7070/loading');
  return (
    <div>
      <b>Loading status:</b> {hook.loading && <>Loading...</>}
    </div>
  )
}