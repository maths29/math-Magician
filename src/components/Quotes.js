import {
  useEffect, useState, useCallback, useMemo,
} from 'react';
import '../styles/quotes.css';

const Quotes = () => {
  const [quoteData, setQuote] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const header = useMemo(() => {
    const headers = new Headers();
    headers.append('x-api-key', 'OVLcX2/3XpWrpr1fR1+FqA==HqgZvSKqav5X8B74');
    return headers;
  }, []);
  const URL = 'https://api.api-ninjas.com/v1/quotes?category=';
  const handlefetchApi = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();
    const { signal } = controller;
    fetch(URL, {
      signal,
      method: 'GET',
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch((e) => {
        setError(`error message ${e}`);
        setLoading(false);
      });
    return () => {
      setError('');
      controller.abort();
    };
  }, [header]);
  useEffect(() => {
    handlefetchApi();
  }, [handlefetchApi]);
  return (
    <>
      <div>
        {loading ? (
          <div className="pDiv load">Loading...</div>
        ) : (
          <>
            <div className="pDiv">
              <p>{quoteData?.quote}</p>
            </div>
            <h4 style={{ color: 'white', display: 'none' }}>{error}</h4>
          </>
        )}
      </div>
    </>
  );
};
export default Quotes;
