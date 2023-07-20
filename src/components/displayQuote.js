import React, { useEffect, useState } from 'react';

const DisplayQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=business',
          {
            headers: { 'X-Api-Key': '6pI/tRSmyf4gWyIYogO0Qg==kcannN9LlJwA7rC3' },
          },
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data && data.length > 0) {
          setQuote(data[0].quote);
        } else {
          throw new Error('No quotes available');
        }

        setLoading(false);
        setError(null);
      } catch (error) {
        setError('Something went wrong, please try again');
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return <h1 className="Random Business Quote">Loading ...</h1>;
  }

  if (error || !quote) {
    return <h1 className="Random Business Quote">{error}</h1>;
  }

  return (
    <section className="Random Business Quote">
      <h1 className="Random Business Quote">{quote}</h1>
    </section>
  );
};

export default DisplayQuote;
