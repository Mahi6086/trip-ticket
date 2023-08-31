import React from "react";
import {Container, Grid} from "@mantine/core";

const ContactUsPage = () => {
  return (
    <Container size="xl">
      <Grid mt={26} mb={26} v>
        <Grid.Col span={12} md={6}>
          <img
            src="http://localhost:3000/images/contact-us.png"
            alt=""
            style={{
              width: "450px",
            }}
          />
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <h2
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "#7950F2",
            }}
          >
            CONTACT US
          </h2>
          <div style={{textAlign: "center"}}>
            <h3>
              Thank you for choosing Trip-Ticket for your bus ticketing needs.
              We value your trust and are committed to providing exceptional
              customer service. If you have any questions, or concerns, or need
              assistance, our friendly and knowledgeable support team is here to
              help you.
            </h3>
            <h4>Phone: 01835859540</h4>
            <h4>Email: support@tripticket.com</h4>
            <h3>
              Our customer support team is available 24/7 to address any
              inquiries or issues you may encounter. Whether you need help
              booking a ticket, have questions about our services, or require
              assistance during your journey, don't hesitate to contact us. we
              are passionate about providing you with the best travel
              experience.
            </h3>
            <h3>
              Your satisfaction is our priority, and we are dedicated to
              assisting you at every step of your journey. Feel free to contact
              us anytime, and let us make your bus travel as smooth and
              enjoyable as possible. Thank you for choosing Trip-Ticket Safe
              travels, Trip-Ticket Team.
            </h3>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default ContactUsPage;
