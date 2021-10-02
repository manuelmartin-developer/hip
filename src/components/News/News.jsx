import React, { Component } from "react";
import axios from "axios";
import ListNews from "../ListNews";
import { Spinner } from "react-bootstrap";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }


  getNews = async () => {
    const resp = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=tJTlgHe561KfAsr8b86nOD9IQ1Lg8ajc"
    );
    const result = await resp.data.results.filter(
      (current, index) => index < 5
    );

    this.setState({
      news: result
    });
  };
  componentDidMount(){

    this.getNews()
  }

  render() {
    const news = this.state.news;
    const report = this.props.report;
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
