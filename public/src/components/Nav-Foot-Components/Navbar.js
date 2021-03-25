import React from "react";
import Logo from "./cover.png";
import styles from "./Navbar.module.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={styles.drawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={styles.listContainer}>
        {["HOME", "ABOUT", "PROJECTS","SKILLS", "CONTACT", "RESUME"].map((text) => {
          let linkValue = "/";
          if (text === "ABOUT") {
            linkValue = "/#about";
          } else if (text === "CONTACT") {
            linkValue = "/#contact";
          } else if (text === "SKILLS") {
          linkValue = "/#skills";
          }else if (text === "HOME") {
            linkValue = "/";
          }else if (text === "PROJECTS") {
            linkValue = "/#work";
          }
          else if (text === "RESUME") {
            linkValue = "https://drive.google.com/file/d/1b3HlIExpVEpplZkWVECYYhPSb8_sJsHw/view?usp=sharing";
          }
          return (
            <ListItem className={styles.list} button key={text}>
              <a
                href={`${linkValue}`}
              >
                <ListItemText className={styles.text} primary={text} />
              </a>
            </ListItem>
          );
        })}
      </List>
      <footer className={styles.footer}>
        <div className={styles.bottom}>
          <ul className={styles.socials}>
            <li>
              <a href="mailto:hussainquetta53@gmail.com"><i className="fa fa-envelope"></i></a>
            </li>
            <li>
              <a href="tel:+923236501386"><i className="fa fa-phone"></i></a>
            </li>
            <li>
            <a href="https://wa.me/923236501386"><i className="fa fa-whatsapp"></i></a>
          </li>
            <li>
              <a href="https://www.linkedin.com/in/hussain-saifuddin786/"><i className="fa fa-linkedin-square"></i></a>
            </li>
          </ul>
            <p>copyright &copy;2020 Hussain Saifuddin.</p>
        </div>
      </footer>
    </div>
  );
  return (
    <div>
      <AppBar
        className={styles.mainContainer}
      >
        <Toolbar
          className={styles.container}
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <Box component="div" className={styles.toggleContainer}>
            <Link to="/">
              {/* <img src={Logo} alt={"portfolio Logo"} className={styles.logo} /> */}
            </Link>
            <div className={styles.toggle}>
              <React.Fragment>
                <Button onClick={toggleDrawer("left", true)}>
                  <MenuIcon className={styles.toggler} />
                </Button>
                <Drawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  {list("left")}
                </Drawer>
              </React.Fragment>
            </div>
          </Box>
          <Box
            component="div"
            className={styles.navLinkContainer}
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <Typography className={styles.navLinks} variant="h6">
              <Link to="/">HOME</Link>
            </Typography>
            <Typography className={styles.navLinks} variant="h6">
              <a href={'#about'} >ABOUT</a>
            </Typography>
            <Typography className={styles.navLinks} variant="h6">
              <a href="#skills">SKILLS</a>
            </Typography>
            <Typography className={styles.navLinks} variant="h6">
              <a href={'#work'} >PROJECTS</a>
            </Typography>
            <Typography className={styles.navLinks} variant="h6">
              <a href="#contact">CONTACT</a>
            </Typography>
            <Typography className={styles.navLinks} variant="h6">
              <Link to="/contact">HELP</Link>
            </Typography>
            <Typography className={styles.projectLink} variant="h6">
              <a href="https://drive.google.com/file/d/1b3HlIExpVEpplZkWVECYYhPSb8_sJsHw/view?usp=sharing">Resume</a>
            </Typography>
          </Box>
        </Toolbar>
          
      </AppBar>
    </div>
  );
};

export default Navbar;
