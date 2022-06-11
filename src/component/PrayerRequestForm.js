import { React, useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { send } from "emailjs-com";

const PrayerRequestForm = () => {
  const [toSend, setToSend] = useState({
    name: "",
    phonenumber: "",
    message: "",
  });

  const formRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();

    send("service_jy0xusr", "template_642f501", toSend, "3wE9EN3QTZL42_rLY")
      .then((response) => {
        formRef.current.submit(); //RESETS THE INPUTS AFTER SUBMIT
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        backgroundImage: "url('/images/blob-scatter-haikei (2).svg')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "0px solid #697dac",
      }}
    >
      <Container>
        <Form id="prayerform" onSubmit={onSubmit} ref={formRef}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={toSend.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="mobile"
              placeholder="Enter Your Phone number"
              name="phonenumber"
              value={toSend.phonenumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Prayer Request/Intention</Form.Label>
            <Form.Control
              as="textarea"
              row="10"
              placeholder="Add your Messages and Prayer Requests"
              name="message"
              value={toSend.message}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="bg-dark text-white"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default PrayerRequestForm;
