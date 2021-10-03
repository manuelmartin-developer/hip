import React, { Component } from "react";
import axios from "axios";
import ListNews from "../ListNews";
import { Spinner } from "react-bootstrap";
require('dotenv').config();

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  getNews = async () => {
    const resp = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await resp.data.results.filter(
      (current, index) => index < 5
    );

    this.setState({
      news: [...result, ...this.props.report],
    });
  };
  componentDidMount() {
    this.getNews();
  }

  render() {
    const news = this.state.news;
    const report = this.props.report;
    console.log("report", report);
    console.log(news);
    if (news.length === 0) {
      return (
        <section className="news-spinner">
          <Spinner animation="grow" variant="secondary" />
        </section>
      );
    } else {
      return (
        <section className="news">
          <ListNews info={news} />
        </section>
      );
    }
  }
}

export default News;
