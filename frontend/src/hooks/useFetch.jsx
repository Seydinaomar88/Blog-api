import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

const useFetch = (url, refreshKey) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [url, refreshKey]);

  return { data, loading, error };
};

export default useFetch;
