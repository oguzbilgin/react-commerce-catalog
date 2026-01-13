import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch<T>(url:string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();

    axios
      .get<T>(url, {signal: controller.signal})
      .then(res => setData(res.data))
      .catch(err => {
        if(axios.isCancel(err)) return;
        if(axios.isAxiosError(err)) {
          if(err.response) {
            setError(err.response.data.message || `Request failed with status: ${err.response.status}`)
          }
          if(err.request) {
            setError('No response from server');
          }
          setError(err.message);
        }
        setError("Unexpected error occured");
      })
      .then(() => {
        if(!controller.signal.aborted) {
          setLoading(false);
        }
      })
  }, [url]);

  return {data, loading, error};
};