import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";

class Card extends Component {
  render() {
    const info = this.props.info;

    return (
      <section className="card">
        <div className="card-title">
          <a
            href={info.url ? info.url : ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.title}
          </a>
        </div>
        <div className="card-report">
          <div className="card-report-plot">
            {info.abstract ? info.abstract : info.plot}
          </div>
          <div className="card-report-img">
            <img
              src={
                !info.abstract
                  ? info.img
                  : info.media.length > 0
                  ? info.media[0]["media-metadata"][1].url
                  : "https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_960_720.png"
              }
              alt={
                !info.abstract
                  ? info.title
                  : info.media.length > 0
                  ? info.media[0].caption
                  : "no-image"
              }
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
