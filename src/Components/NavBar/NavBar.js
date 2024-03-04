import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import AddMovie from "../AddMovie/AddMovie";
import { NavLink } from "react-bootstrap";

const NavBar = ({
  ratingchange,
  setRetingchange,
  setSearchInput,
  newMovies,
  setNewMovies,
  handelesave,
}) => {
  const ratingChanged = (rating) => {
    setRetingchange(rating);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movie-details">Movie-details</NavLink>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <ReactStars
            value={ratingchange}
            count={5}
            size={24}
            activeColor="#ffd700"
            onChange={ratingChanged}
          />
          <br />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-secondary">Search</Button> <br />
            <Button
              variant="outline-secondary"
              style={{
                height: "40px",
                width: "250px",
              }}
              onClick={handleShow}
            >
              Add New Movie
            </Button>
          </Form>
        </Container>
      </Navbar>
      <AddMovie
        handleClose={handleClose}
        show={show}
        newMovies={newMovies}
        setNewMovies={setNewMovies}
        handelesave={handelesave}
      />
    </>
  );
};

export default NavBar;
