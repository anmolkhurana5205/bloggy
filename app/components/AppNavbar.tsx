"use client";

import React from "react";
import Link from "next/link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const AppNavbar: React.FC = () => {
  return (
    <Navbar
      // bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      collapseOnSelect
      style={{
        background: "rgba(9, 9, 9, 0.5)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold">
          Bloggy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fw-bold" as={Link} href="/">
              <Button variant="outline-warning">Home</Button>
            </Nav.Link>
            <Nav.Link className="fw-bold" as={Link} href="/Createblog">
              <Button variant="outline-warning">Create new Blog</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
