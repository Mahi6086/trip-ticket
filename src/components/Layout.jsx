import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {AuthContext} from "../contexts/AuthContext";
import {BusContext} from "../contexts/BusContext";
import {Outlet} from "react-router-dom";
import axios from "axios";

function Layout() {
  const {setBuses} = React.useContext(BusContext);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/bus")
      .then((res) => {
        setBuses(res.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [setBuses]);

  return (
    <main>
      <div style={{minHeight: "100%", marginBottom: -318.49}}>
        <Header />
        <Outlet />
        <div style={{height: 318.49}}></div>
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
