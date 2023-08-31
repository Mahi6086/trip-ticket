import {Text, Container, ActionIcon, Group, Grid} from "@mantine/core";
import {BsTwitter, BsYoutube, BsInstagram} from "react-icons/bs";
import {useStyles} from "./style";
import {footerData} from "../../data/data";

const Footer = () => {
  const {classes} = useStyles();

  const groups = footerData.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="xl">
        <Grid>
          <Grid.Col span={4}>
            <div
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              <a
                class=""
                href="/home"
                style={{
                  textDecoration: "none",
                }}
              >
                <h2
                  style={{
                    color: "#fff",
                  }}
                >
                  Trip-Ticket
                </h2>
              </a>
            </div>
            <small
              style={{
                color: "#828894",
                display: "block",
                marginTop: "1rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  color: "#7950F2",
                }}
              >
                trip-ticket, Inc.
              </span>{" "}
              provide facilities to the bus booking system to short time and
              also Bus companies to provide better service with a very
              interactive content management system to easily access the
              information etc!
            </small>
            <small style={{color: "#828894"}}>
              Copyright © 2022.{" "}
              <span
                style={{
                  color: "#fff",
                }}
              >
                Mahi Hasan , Ali Azhar Uddin &amp; Siam Hossain
              </span>
            </small>
            <div>
              <a
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/desclaimer"
              >
                <small>Desclaimer.</small>
              </a>
              <a
                class="px-2 text-gray-400 hover:text-yellow-500"
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/tnc"
              >
                <small>Terms &amp; Conditions.</small>
              </a>{" "}
              <a
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/privacy"
              >
                <small>Privacy Policy.</small>
              </a>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  color: "#7950F2",
                  marginBottom: "1rem",
                  fontWeight: "500",
                }}
              >
                <span
                  class="border-b-2"
                  style={{
                    borderColor: "#fff",
                    borderBottom: "2px solid #fff",
                  }}
                >
                  Quick L
                </span>
                inks
              </h3>
              <a
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/info"
              >
                FAQ
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/feedback"
              >
                Feedback
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/career"
              >
                Career
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/payment"
              >
                Payment Options
              </a>
              <a
                style={{
                  textDecoration: "none",
                  color: "#828894",
                }}
                href="/return"
              >
                Return Policy
              </a>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  color: "#7950F2",
                  marginBottom: "1rem",
                  fontWeight: "500",
                }}
              >
                <span
                  class="border-b-2"
                  style={{
                    borderColor: "#fff",
                    borderBottom: "2px solid #fff",
                  }}
                >
                  Connect Wi
                </span>
                th Us
              </h3>
              <div
                style={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <small
                  style={{
                    paddingRight: "0.5rem",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 384 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </small>
                <small>Dhanmondi, Bangladesh</small>
              </div>
              <div
                style={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <small
                  style={{
                    paddingRight: "0.5rem",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"></path>
                  </svg>
                </small>
                <small>+880123, +8801710023333</small>
              </div>
              <h3
                style={{
                  color: "#7950F2",
                  marginBottom: "1rem",
                  fontWeight: "500",
                }}
              >
                <span
                  class="border-b-2"
                  style={{
                    borderColor: "#fff",
                    borderBottom: "2px solid #fff",
                  }}
                >
                  Follow U
                </span>
                s On
              </h3>
              <div
                class="my-2 flex"
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <a
                  href="/social"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    marginRight: "0.5rem",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 320 512"
                    class="mr-3 hover:text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  href="/social"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    marginRight: "0.5rem",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="mr-3 hover:text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a
                  href="/social"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    marginRight: "0.5rem",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="mr-3 hover:text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                  </svg>
                </a>
                <a
                  href="/social"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    marginRight: "0.5rem",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 480 512"
                    class="mr-3 hover:text-yellow-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
