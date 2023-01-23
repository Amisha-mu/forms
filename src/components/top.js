import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from "@mui/icons-material/Payment";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TaskIcon from "@mui/icons-material/Task";
import ArticleIcon from "@mui/icons-material/Article";
import "./top.css";

function Top() {
  return (
    <>
      <Container>
        <Row className="main">
          <Col>
            <a href="myprofile"><PersonIcon />My Profile</a>
          </Col>
          <Col>
            <a href="/"><PaymentIcon />My Finance</a>
          </Col>
          <Col>
            <a href="assets"><InsertPhotoIcon />Assets</a>
          </Col>
          <Col>
            <a href="attendence"><PersonAddAlt1Icon />Attendence</a>
          </Col>
          <Col>
            <a href="approves"><TaskIcon />Approves</a>
          </Col>
          <Col>
            <a href="claim"><ArticleIcon />Claim</a>
          </Col>
        </Row>
      </Container>
      <div className="bottomline">
        <br></br>
      </div>
      <Container>
        <Row>
          <Col className="main2">
            <a href="accountdetails">Account Details</a>
          </Col>

          <Col className="main2">
            <a href="paysilps">Pay Slips</a>
          </Col>
          <Col className="main2">
            <a href="taxform">Tax Form</a>
          </Col>
        </Row>
      </Container>

      
    </>
  );
}

export default Top;