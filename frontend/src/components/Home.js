import { Link } from 'react-router-dom';


/**here is fetch using */
import { useState, useEffect } from 'react';

const Home = () => {
/**here is fetch using */
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const abortCont = new AbortController();

      fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })

  
      // abort the fetch
      return () => abortCont.abort();
    }, [url])
  
    return { data, isPending, error };
  }
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  /**ends here */

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      <div className="blog-list">
        {blogs && blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Home;
