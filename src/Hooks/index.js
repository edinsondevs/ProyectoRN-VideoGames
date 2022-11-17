import axios from 'axios';
import { useEffect, useState } from 'react';
// import { API } from '../API/index';
import API from './../API/index';

const base_url = "https://rickandmortyapi.com/api/character/";

export const useGet = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (endpoint) => {
    try {
      const res = await axios.get(base_url);
      setData(res)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.log('salgo por aquíiii');
      setError(true)
    }
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint])
  return [data, isLoading, error]
}