import React, { Component } from "react";
import Card from "../Card";

class ListNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.setState({
      news: this.props.info,
    });
  }

  paintNews = () => {
    return this.state.news.map((report, index) => (
      <Card
        info={report}
        key={index}
        remove={() => this.removeOneReport(index)}
      />
    ));
  };

  removeOneReport = (index) => {
    const remainNews = this.state.news.filter(
      (current, currentIndex) => currentIndex !== index
    );
    this.setState({ news: remainNews });
  };
  render() {
    return <>{this.paintNews()}</>;
  }
}

export default ListNews;
