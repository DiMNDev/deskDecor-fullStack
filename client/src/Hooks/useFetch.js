import { useEffect, useState } from "react";
import { makeRequest } from "./makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("FETCH:", url);
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        console.log("RES:", res);
        setData(res.data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
