import {useEffect, useState} from "react";

export const useJsonFetch = (url, opt = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(url, opt);

        if (!res.ok) setError(res.statusText);

        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return {data, loading, error};
};