import React from "react";
import {Container, Grid} from "@mantine/core";

const AboutPage = () => {
  return (
    <>
      <Container size="xl">
        <Grid
          mb={26}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid.Col span={12} md={6}>
            <img
              src="http://localhost:3000/images/about-us.png"
              alt=""
              style={{
                width: "650px",
                marginTop: "50px",
              }}
            />
          </Grid.Col>
          <Grid.Col span={12} md={6} mt={100}>
            <h2
              style={{
                textAlign: "center",
                textDecoration: "underline",
                color: "#7950F2",
              }}
            >
              Welcome to Trip-Ticket
            </h2>
            <h3>
              your one-stop destination for hassle-free and convenient bus
              ticket bookings. We are also available on online based ticket
              booking platform that aims to redefine how you travel by providing
              booked bus tickets and exceptional customer service.
            </h3>
            <h3>
              Our Mission is to revolutionize how you book bus tickets and make
              your travel experience smooth, enjoyable, and affordable.
            </h3>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default AboutPage;
