import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const ListNews = () => {
  const [isLoading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (isLoading) {
      (async () => {
        try {
          const resp = await axios.get(
            "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=tJTlgHe561KfAsr8b86nOD9IQ1Lg8ajc"
          );
          const results = resp.data.results.filter(
            (current, index) => index < 5
          );
          console.log(results);
          setNews(results);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="test">
      <Button
        variant="secondary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Click to load"}
      </Button>
    </div>
  );
};

export default ListNews;
