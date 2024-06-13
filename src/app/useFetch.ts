import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setDate] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDate(data);
      } catch (error) {
        if (error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  });

  return { data, loading, error };
}

export default useFetch;
