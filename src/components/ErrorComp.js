import {useJsonFetch} from "../hooks/useJsonFetch";

export const ErrorComp = () => {
  const hook = useJsonFetch('http://localhost:7070/error');
  return (
    <div>
      <b>Error status:</b> {hook.error && JSON.stringify(hook.error)}
    </div>
  )
}