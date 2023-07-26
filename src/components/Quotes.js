import { useEffect, useState } from 'react';
import '../styles/quotes.css';
import Header from './Header';

const Quotes = () => {
  const [quoteData, setQuote] = useState({});
  const [error, setError] = useState('');
  const header = new Headers();
  header.append('x-api-key', 'OVLcX2/3XpWrpr1fR1+FqA==HqgZvSKqav5X8B74');
  const URL = 'https://api.api-ninjas.com/v1/quotes?category=';
  const handlefetchApi = () => {
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
      })
      .catch((e) => {
        setError(`error message ${e}`);
      });
    return () => {
      setError('');
      controller.abort();
    };
  };
  useEffect(() => handlefetchApi(), []);

  return (
    <>
      <Header />
      <div>
        <div className="pDiv">
          <p>
            {quoteData?.quote}
          </p>
        </div>
        <h4 style={{ color: 'white', display: 'none' }}>{error}</h4>
      </div>
    </>
  );
};
export default Quotes;
