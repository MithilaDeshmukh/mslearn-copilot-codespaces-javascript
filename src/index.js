/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App></App>, document.getElementById("app"));

const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};
