import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";

class Card extends Component {
  render() {
    const info = this.props.info;

    return (
      <section className="card">
        <div className="card-title">
          <a href={info.url} target="_blank" rel="noopener noreferrer">
            {info.title}
          </a>
        </div>
        <div className="card-report">
          <div className="card-report-plot">{info.abstract}</div>
          <div className="card-report-img">
            <img
              src={info.media[0]["media-metadata"][1].url}
              alt={info.media[0].caption}
            />
            <Button variant="secondary" onClick={this.props.remove}>
              <BsTrashFill />
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
