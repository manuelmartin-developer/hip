import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FloatingLabel, Form, Button } from "react-bootstrap";

class FormNews extends Component {
  constructor(props) {
    super(props);

    this.title = React.createRef();
    this.url = React.createRef();
    this.img = React.createRef();
    this.plot = React.createRef();
  }

  addNews = (event) => {
    event.preventDefault();

    const title = this.title.current.value;
    const url = this.url.current.value;
    const img = this.img.current.value;
    const plot = this.plot.current.value;

    if (title && url && img && plot) {
      const report = { title, url, img, plot };
      this.props.addReport(report);
    }
  };

  render() {
    return (
      <section className="form">
        <Form autoComplete="on">
          <Form.Group className="mb-3" controlId="reportForm.ControlInput1">
            <FloatingLabel
              controlId="floatingInput1"
              label="Report title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Report title"
                ref={this.title}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput3" label="Report Url">
              <Form.Control
                type="url"
                placeholder="report url"
                ref={this.url}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput2" label="Img Url">
              <Form.Control type="url" placeholder="img url" ref={this.img} />
            </FloatingLabel>
            <Form.Label>Plot</Form.Label>
            <Form.Control as="textarea" rows={7} ref={this.plot} />
          </Form.Group>
          <Button variant="secondary" onClick={this.addNews}>
            <Link to="/list">Add Report</Link>
          </Button>
        </Form>
      </section>
    );
  }
}

export default FormNews;
