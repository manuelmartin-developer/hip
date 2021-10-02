import React, { Component } from "react";
import axios from "axios";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  getNews = async () => {
    const resp = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=xhNAM3sdzh7EXslAAwxQMDY3K1T8NG6H"
    );
    const result = await resp.data.results;
    this.setState({
      news: result[Math.floor(Math.random() * 25)],
    });
  };

  componentDidMount() {
    this.getNews();
  }
  render() {
    const report = this.state.news;
    return (
      <footer className="footer">
        <span className="footer-scroll">
          <strong>{report.section}</strong>{" "}
          <span>
            <a href={report.url} target="_blank" rel="noopener noreferrer">
              {report.title}
            </a>
          </span>
        </span>
      </footer>
    );
  }
}

export default Footer;
