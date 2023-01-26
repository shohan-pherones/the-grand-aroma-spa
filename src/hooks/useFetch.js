import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
};
