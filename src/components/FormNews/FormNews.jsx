import React, { Component } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

class FormNews extends Component {
  constructor(props) {
    super(props);

    this.title = React.createRef();
    this.url = React.createRef();
    this.plot = React.createRef();

  }

  addNews = (event) => {
    event.preventDefault();

    const title = this.title.current.value;
    const url = this.url.current.value;
    const plot = this.plot.current.value;

    if (title && url && plot) {
      const report = { title, url, plot };
      this.props.addReport(report);
    }
  };

  render() {
    return (
      <section className="form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            <FloatingLabel controlId="floatingInput2" label="Img Url">
              <Form.Control type="url" placeholder="url" ref={this.url} />
            </FloatingLabel>
            <Form.Label>Plot</Form.Label>
            <Form.Control as="textarea" rows={8} ref={this.plot} />
          </Form.Group>
          <Button variant="secondary" onClick={this.addNews}>
            Add report
          </Button>
        </Form>
      </section>
    );
  }
}

export default FormNews;
