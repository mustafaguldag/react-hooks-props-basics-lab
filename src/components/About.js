import React from "react";
import user from "../data/user";
import Links from "./Links"
function About(props) {
  if (!props.bio || props.bio === "") return null;
  return (
    <div id="about">
      <h2>About Me</h2>
      <p style={{display : "block"}}>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={user.links}/>
    </div>
  );
}
export default About;
