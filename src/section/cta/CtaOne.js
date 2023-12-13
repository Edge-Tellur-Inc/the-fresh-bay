import React, { useState } from "react";
import { Section, SectionHead } from "../../layout/section/Section";
import { Container, Row, Col, Card, Form, Input } from "reactstrap";
import { Button } from "../../components/button/Button";
import axios from "axios";

const CtaOne = (props) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (phone.length < 10 || phone.length > 10) {
      setError(true);
      return;
    }
    const url = `${process.env.REACT_APP_SERVER_URL}waitlist`;
    await axios.post(url, {
      email,
      username: name,
      phoneNumber: phone,
    });
  };
  return (
    <Section
      className={props.className && props.className}
      id={props.id && props.id}
    >
      <Container>
        <Row className="justify-content-center ">
          <Col md="10" className=" ">
            <Card className="card-shadow round-xl  mt-n4">
              <div className="card-inner card-inner-lg">
                <div className="form-block">
                  <SectionHead className="section-head-sm">
                    <h4 className="title pb-0">Join our waitlist</h4>
                    <p>
                      Subscribe to our waitlist and get more information about
                      our app and when it will be available. You will also be
                      the first to know when we launch in your area and get
                      exclusive offers and discounts on your first order. Hoping
                      to see you soon!
                    </p>
                  </SectionHead>
                  <Form className="form-submit" onSubmit={(e) => onSubmit(e)}>
                    <Row className="g-4">
                      <Col xs="12">
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">
                            Your Name
                          </label>
                          <div className="form-control-wrap">
                            <Input
                              type="text"
                              className="form-control form-control-lg"
                              id="name"
                              placeholder="Your Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">
                            Enter Your Email
                          </label>
                          <div className="form-control-wrap">
                            <Input
                              type="email"
                              className="form-control form-control-lg"
                              id="email"
                              placeholder="Enter Your Email"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xs="12">
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">
                            Your Phone Number
                          </label>
                          <div className="form-control-wrap">
                            <Input
                              type="tel"
                              className="form-control form-control-lg"
                              id="phone"
                              placeholder="eg: 0500000000"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          {error && (
                            <p className="text-sm font-normal">
                              Should not be less or more than 10 letters
                            </p>
                          )}
                        </div>
                      </Col>

                      <Col xs="12">
                        <Button className="btn btn-primary text-white">
                          Join Waitlist
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default CtaOne;
