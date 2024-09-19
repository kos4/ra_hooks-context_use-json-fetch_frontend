import {useJsonFetch} from "../hooks/useJsonFetch";

export const DataComp = () => {
  const hook = useJsonFetch('http://localhost:7070/data');
  return (
    <div>
      <b>Status get data:</b> {hook.data && JSON.stringify(hook.data)}
    </div>
  )
}