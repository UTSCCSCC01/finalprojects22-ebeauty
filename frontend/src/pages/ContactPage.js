import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import '../css/ContactPage.css'

export default function ContactUs() {
  

  return (
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <div className="mb-5">
            <h2 className="color_sec">Get In Touch With Us</h2>
            <strong>Email: eBeautyeBeauty@gmail.com </strong>{" "}
            <br />
            <br />
            <strong>Phone: +164378197483 </strong>{" "}
            <br />
            <br />
            <strong>Location: Toronto, Ontario </strong>{" "}
          </div>
          <Col lg="7" className="d-flex">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control-textarea"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button class="btn-primary" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}