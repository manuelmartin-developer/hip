import React, { useRef, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { nameContext } from "../../contexts/nameContext";

const Home = () => {
  
  const { setName } = useContext(nameContext);

  const input = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleName = () => {
    setName(input.current.value)
  };

  return (
    <section className="home"> 
        <Form className="home-form" onSubmit={handleSubmit} autoComplete="off">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" ref={input} />
            <Form.Text className="text-muted home-form">Please input your name</Form.Text>
          </Form.Group>
            <Button variant="secondary" onClick={handleName} >
              Submit
            </Button>
        </Form>
    </section>
  );
};

export default Home;
