import React from "react";

export default function Nav(props){
  return(
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="#!" className="navbar-brand">{props.brand}</a>
        </div>
      </nav>
    </div>
  );
}