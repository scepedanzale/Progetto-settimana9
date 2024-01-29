import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function SideBarComponent() {

  const navigate = useNavigate()

  return (
    <>
      <Col xs={4} lg={3} xl={2} id="sidebar" className="d-none d-sm-block p-0">
        <Container id="sidebar-container">
          {/* menu */}
          <Row id="menu" className="bg-dark">
            <Col className="p-3 d-flex flex-column justify-content-center">
              <Link
                to="/"
                className="nav-link p-0 mb-2 d-flex align-items-center"
              >
                <i className="bi bi-house-fill fs-4 me-3"></i>Home
              </Link>
              <Link
                to="/search"
                className="nav-link p-0 d-flex align-items-center"
              >
                <i className="bi bi-search fs-4 me-3"></i>Search
              </Link>
            </Col>
          </Row>

          {/* library */}
          <Row id="library" className="bg-dark p-0">
            {/* libreria */}
            <Container fluid id="library-container">
              <Row id="library-row">
                <Col xs={12} id="library-menu" className="sticky-top p-3">
                  <Link
                    to="#"
                    className="nav-link p-0 d-flex align-items-center"
                  >
                    <i className="bi bi-book fs-4 me-2"></i> Your Library
                  </Link>
                </Col>
                <Col id="playlists" className="scroll-bar">
                  <Button 
                    variant="" 
                    className="p-0 mb-2 fw-bold"
                    onClick={()=> navigate('/favourites')}
                  >
                    Brani che ti piacciono <i className="bi bi-heart-fill text-light"></i>
                    </Button>
                  <ul className="list-unstyled">
                    <li>This is HIM</li>
                    <li>Soft</li>
                    <li>mountain</li>
                    <li>on the road 🛤️🛻</li>
                    <li>lofi hip hop ☕</li>
                    <li>Vintage</li>
                    <li>sea sounds 🌊</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Col>
    </>
  );
}