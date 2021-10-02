import React, { Component } from "react";
import { nameContext } from "../../contexts/nameContext";
import { Button, Form } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <section className="home">
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" ref={this.name} />
            <Form.Text className="text-muted">Please input your name</Form.Text>
          </Form.Group>
          <nameContext.Consumer>
            {({ newName }) => (
              <Button
                variant="secondary"
                onClick={() => {
                  newName(this.name.current.value);
                }}
              >
                Submit
              </Button>
            )}
          </nameContext.Consumer>
        </Form>
      </section>
    );
  }
}

export default Home;
