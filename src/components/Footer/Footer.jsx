import {Text, Container, ActionIcon, Group} from "@mantine/core";
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
        <div className={classes.logo}>
          <h1 style={{color: "#fff"}}>E-Ticket</h1>
          {/* <img
            src={"/logo.png"}
            alt="E-Ticket Logo"
            className={classes.footerImage}
          /> */}
          <Text size="xs" color="dimmed" className={classes.description}>
            E-Ticket, an online ticket booking platform. E-ticket makes ticketing easy and hassel free
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="white" size="sm">
          © {new Date().getFullYear()} E-Ticket. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BsYoutube size={20} color="coral" />
          </ActionIcon>
          <ActionIcon size="lg">
            <BsInstagram size={20} color="coral" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
