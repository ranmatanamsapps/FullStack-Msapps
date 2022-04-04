import { useEffect, useState } from "react";
import axios from "axios";

/**
 * @param  {string} url
 * return useFetch function
 */

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  const refetch = () => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return { data, loading, error, refetch }
}

export default useFetch;

/*
    const App = () => {
    const { data, loading, error, refetch } = useFetch('https://v2.jokeapi.dev/joke/Any')
    if(loading) return <h1>LOADING...</h1>
    if(error) console.log(error)

    return (
        <>
        <div>
            <h2>{data?.setup}</h2>   Joke ?
            <p>{data?.delivery}</p>  Answer
        </div>
        
        <button onClick={refetch}>Refetch</button>
        </>
    )}
*/
