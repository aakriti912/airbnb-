import React from "react";
import logo from "../images/airbnblogo.jpg";
import Grid from "./Grid";
import Card from "./Card";
import data from "../data";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="logo" className="logo"></img>
      </div>

      <Grid />

      {data.map((items) => {
        console.log(items);
        return (
          <Card
          key={items.id}
           items={items}
          />
        );
      })}
    </div>
  );
};

export default Navbar;
