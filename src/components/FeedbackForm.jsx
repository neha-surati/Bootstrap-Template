import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Table } from "react-bootstrap";
import {
  BsEmojiAngryFill,
  BsEmojiFrownFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsEmojiLaughingFill,
} from "react-icons/bs";

const FeedbackForm = () => {
  let [user, setUser] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  let [newcolor, setNewColor] = useState(0);
  let [newcolor2, setNewColor2] = useState(0);

  const emojiMap = {
    1: <BsEmojiAngryFill color="red" fontSize="25px" />,
    2: <BsEmojiFrownFill color="orange" fontSize="25px" />,
    3: <BsEmojiNeutralFill color="yellow" fontSize="25px" />,
    4: <BsEmojiSmileFill color="lightgreen" fontSize="25px" />,
    5: <BsEmojiLaughingFill color="green" fontSize="25px" />,
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, user]);
    setUser({});
    setNewColor(0);
    setNewColor2(0);
  };

  let emoji = (val) => {
    setNewColor(val);
    setUser({ ...user, registrationEmoji: val }); 
  };

  let emoji2 = (val) => {
    setNewColor2(val);
    setUser({ ...user, navigationEmoji: val }); 
  };

  return (
    <Container>
      <h2>User Registration Feedback</h2>
      <p>We would love to hear your thoughts about your registration experience.</p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={3}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={user.firstName || ""}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={user.lastName || ""}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email || ""}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={user.phone || ""}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group controlId="formHowHeard">
          <Form.Label>How did you hear about us?</Form.Label>
          <Form.Control
            as="select"
            name="heardAbout"
            value={user.heardAbout || ""}
            onChange={(e) => handleInput(e)}
          >
            <option>Select an option</option>
            <option>Social Media</option>
            <option>Friends/Family</option>
            <option>Advertisement</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <h4>Rate your experience</h4>

        <Form.Group>
          <Form.Label>Registration Process</Form.Label>
          <div className="d-flex justify-content-between mb-3">
            <BsEmojiAngryFill
              onMouseOver={() => emoji(1)}
              color={newcolor === 1 ? "red" : ""}
              fontSize={"35px"}
            />
            <BsEmojiFrownFill
              onMouseOver={() => emoji(2)}
              color={newcolor === 2 ? "orange" : ""}
              fontSize={"35px"}
            />
            <BsEmojiNeutralFill
              onMouseOver={() => emoji(3)}
              color={newcolor === 3 ? "yellow" : ""}
              fontSize={"35px"}
            />
            <BsEmojiSmileFill
              onMouseOver={() => emoji(4)}
              color={newcolor === 4 ? "lightgreen" : ""}
              fontSize={"35px"}
            />
            <BsEmojiLaughingFill
              onMouseOver={() => emoji(5)}
              color={newcolor === 5 ? "green" : ""}
              fontSize={"35px"}
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Website Navigation</Form.Label>
          <div className="d-flex justify-content-between mb-3">
            <BsEmojiAngryFill
              onMouseOver={() => emoji2(1)}
              color={newcolor2 === 1 ? "red" : ""}
              fontSize={"35px"}
            />
            <BsEmojiFrownFill
              onMouseOver={() => emoji2(2)}
              color={newcolor2 === 2 ? "orange" : ""}
              fontSize={"35px"}
            />
            <BsEmojiNeutralFill
              onMouseOver={() => emoji2(3)}
              color={newcolor2 === 3 ? "yellow" : ""}
              fontSize={"35px"}
            />
            <BsEmojiSmileFill
              onMouseOver={() => emoji2(4)}
              color={newcolor2 === 4 ? "lightgreen" : ""}
              fontSize={"35px"}
            />
            <BsEmojiLaughingFill
              onMouseOver={() => emoji2(5)}
              color={newcolor2 === 5 ? "green" : ""}
              fontSize={"35px"}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formFeedback">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please provide any feedback you have about your experience"
            name="feedback"
            value={user.feedback || ""}
            onChange={(e) => handleInput(e)}
          />
        </Form.Group>

        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="I agree to the Terms and Conditions and acknowledge the Privacy Policy."
            className="mb-3"
          />
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            type="submit"
            className="btn-block"
            style={{
              backgroundColor: "#007bff",
              borderColor: "#007bff",
              width: "200px",
            }}
          >
            Submit Feedback
          </Button>
        </div>
      </Form>
      <br />
      <br />

      <h4 style={{ textAlign: "center" }}>Submitted Feedback</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Heard About</th>
            <th>Registration Rating</th>
            <th>Navigation Rating</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td>{val.heardAbout}</td>
              <td>{emojiMap[val.registrationEmoji]}</td>
              <td>{emojiMap[val.navigationEmoji]}</td>
              <td>{val.feedback}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FeedbackForm;
